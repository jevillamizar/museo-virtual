import { useEffect, useRef, useState } from 'react';
import { trackEvent } from '../../analytics/ga4';
import PropTypes from 'prop-types';

const FILE_SIZE_WARNING_MB = 100;

function computeCameraFromJson(cameras) {
  if (!cameras || cameras.length === 0) return null;

  // Build A = Σ(I - d_i*d_i^T), b = Σ(I - d_i*d_i^T)*o_i
  // to find least-squares intersection of all camera rays (scene center)
  const A = [[0,0,0],[0,0,0],[0,0,0]];
  const b = [0, 0, 0];

  for (const cam of cameras) {
    const o = cam.position;
    const r = cam.rotation;
    // Camera forward in world space = R^T * [0,0,1] = R[2] (third row)
    const raw = [r[2][0], r[2][1], r[2][2]];
    const len = Math.sqrt(raw[0] ** 2 + raw[1] ** 2 + raw[2] ** 2);
    const d = raw.map(v => v / len);

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        A[i][j] += (i === j ? 1 : 0) - d[i] * d[j];
      }
      for (let j = 0; j < 3; j++) {
        b[i] += ((i === j ? 1 : 0) - d[i] * d[j]) * o[j];
      }
    }
  }

  const det = (m) =>
    m[0][0] * (m[1][1] * m[2][2] - m[1][2] * m[2][1]) -
    m[0][1] * (m[1][0] * m[2][2] - m[1][2] * m[2][0]) +
    m[0][2] * (m[1][0] * m[2][1] - m[1][1] * m[2][0]);

  const detA = det(A);
  let center = [0, 0, 0];
  if (Math.abs(detA) > 1e-10) {
    const rep = (i) => A.map((row, ri) => row.map((val, ci) => (ci === i ? b[ri] : val)));
    center = [det(rep(0)) / detA, det(rep(1)) / detA, det(rep(2)) / detA];
  }

  // Compute average camera distance from scene center
  let totalDist = 0;
  for (const cam of cameras) {
    const p = cam.position;
    totalDist += Math.sqrt(
      (p[0] - center[0]) ** 2 +
      (p[1] - center[1]) ** 2 +
      (p[2] - center[2]) ** 2
    );
  }
  const avgDist = totalDist / cameras.length;

  // Acercar cámara: factor pequeño sobre avgDist para ver el objeto grande
  const initPos = [
    center[0],
    center[1] - avgDist * 3.8,
    center[2] + avgDist * 0.002,
  ];
  return {
    initialCameraPosition: initPos,
    initialCameraLookAt: center,
    cameraUp: [0, -1, 0],
  };
}

function VisorSplat({ url, nombre, cameraUrl, initialPosition, initialLookAt, onLoad, onError }) {
  const containerRef = useRef(null);
  const viewerRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [fileSizeMB, setFileSizeMB] = useState(null);
  const [showSizeWarning, setShowSizeWarning] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [phase, setPhase] = useState('checking'); // checking | loading | rendering | ready | error
  const [error, setError] = useState(null);
  const abortRef = useRef(null);
  const debugIntervalRef = useRef(null);
  const rotacionTrackedRef = useRef(false);

  useEffect(() => {
    return () => {
      if (abortRef.current) abortRef.current.abort();
      destroyViewer();
    };
  }, []);

  const destroyViewer = () => {
    if (debugIntervalRef.current) { clearInterval(debugIntervalRef.current); debugIntervalRef.current = null; }
    if (viewerRef.current) {
      try {
        const canvas = viewerRef.current.renderer?.domElement;
        if (canvas && canvas.parentNode) canvas.parentNode.removeChild(canvas);
        viewerRef.current.dispose();
      } catch { /* ignorar */ }
      viewerRef.current = null;
    }
    // gaussian-splats-3d inyecta un div residual en body — limpiarlo
    document.querySelectorAll('body > div[style*="position: absolute"][style*="width: 100%"][style*="height: 100%"]')
      .forEach(el => el.remove());
  };

  useEffect(() => {
    if (!url) return;
    destroyViewer();
    setPhase('checking');
    setError(null);
    setConfirmed(false);
    setShowSizeWarning(false);
    setProgress(0);

    const checkSize = async () => {
      try {
        const res = await fetch(url, { method: 'HEAD' });
        const cl = res.headers.get('content-length');
        if (cl) {
          const mb = Math.round(parseInt(cl) / (1024 * 1024));
          setFileSizeMB(mb);
          if (mb > FILE_SIZE_WARNING_MB) {
            setShowSizeWarning(true);
            return;
          }
        }
      } catch { /* continuar */ }
      startLoad();
    };
    checkSize();
  }, [url]);

  useEffect(() => {
    if (confirmed) startLoad();
  }, [confirmed]);

  const startLoad = () => {
    setPhase('loading');
    setProgress(0);
    downloadAndRender();
  };

  const downloadAndRender = async () => {
    if (!url) return;
    if (abortRef.current) abortRef.current.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const res = await fetch(url, { signal: controller.signal });
      if (!res.ok) throw new Error(`Error ${res.status}: no se pudo descargar el modelo`);

      const contentLength = res.headers.get('content-length');
      const total = contentLength ? parseInt(contentLength) : 0;
      const reader = res.body.getReader();
      const chunks = [];
      let received = 0;

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        chunks.push(value);
        received += value.length;
        if (total > 0) setProgress(Math.round((received / total) * 100));
      }

      const blob = new Blob(chunks, { type: 'application/octet-stream' });
      const blobUrl = URL.createObjectURL(blob);
      setPhase('rendering');
      await mountViewer(blobUrl);
      URL.revokeObjectURL(blobUrl);
    } catch (err) {
      if (err.name === 'AbortError') return;
      const msg = err.message || 'Error al descargar el modelo 3D';
      setError(msg);
      setPhase('error');
      trackEvent('Modelo3D', 'error_carga', nombre || 'sin_nombre');
      if (onError) onError(err);
    }
  };

  const mountViewer = async (blobUrl) => {
    if (!containerRef.current) return;
    destroyViewer();

    await new Promise(resolve => requestAnimationFrame(resolve));
    if (!containerRef.current) return;

    const w = containerRef.current.offsetWidth  || 800;
    const h = containerRef.current.offsetHeight || 450;

    let camParams = {
      cameraUp: [0, -1, 0],
      initialCameraPosition: [0, -1, 5],
      initialCameraLookAt: [0, 0, 0],
    };

    if (initialPosition && Array.isArray(initialPosition) && initialPosition.length === 3) {
      camParams.initialCameraPosition = initialPosition;
      if (initialLookAt && Array.isArray(initialLookAt) && initialLookAt.length === 3) {
        camParams.initialCameraLookAt = initialLookAt;
      }
    } else if (cameraUrl) {
      try {
        const res = await fetch(cameraUrl);
        if (res.ok) {
          const cameras = await res.json();
          const parsed = computeCameraFromJson(cameras);
          if (parsed) camParams = parsed;
        }
      } catch { /* usar defaults */ }
    }

    try {
      const GaussianSplats3D = await import('@mkkellogg/gaussian-splats-3d');

      const viewer = new GaussianSplats3D.Viewer({
        el: containerRef.current,
        cameraUp: camParams.cameraUp,
        initialCameraPosition: camParams.initialCameraPosition,
        initialCameraLookAt: camParams.initialCameraLookAt,
        selfDrivenMode: true,
        useBuiltInControls: true,
        dynamicScene: false,
        sharedMemoryForWorkers: false,
        renderWidth: w,
        renderHeight: h,
      });

      viewerRef.current = viewer;

      await viewer.addSplatScene(blobUrl, {
        splatAlphaRemovalThreshold: 5,
        showLoadingUI: false,
        format: GaussianSplats3D.SceneFormat.Splat,
      });

      const canvas = viewer.renderer?.domElement;
      if (canvas && containerRef.current) {
        if (canvas.parentNode !== containerRef.current) {
          containerRef.current.appendChild(canvas);
        }
        Object.assign(canvas.style, {
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          display: 'block',
        });
        if (viewer.renderer) {
          viewer.renderer.setSize(
            containerRef.current.offsetWidth,
            containerRef.current.offsetHeight
          );
        }
      }

      viewer.start();
      setPhase('ready');
      trackEvent('Modelo3D', 'carga_completa', nombre || 'sin_nombre');
      if (onLoad) onLoad();
    } catch (err) {
      const msg = err?.message || 'Error al inicializar el visor 3D';
      setError(msg);
      setPhase('error');
      trackEvent('Modelo3D', 'error_carga', nombre || 'sin_nombre');
      if (onError) onError(err);
    }
  };

  const handleRetry = () => {
    setError(null);
    setPhase('loading');
    downloadAndRender();
  };

  if (!url) {
    return (
      <div className="flex items-center justify-center h-72 bg-unicauca-grisClaro rounded-lg">
        <p className="text-unicauca-grisMedio text-sm">Modelo 3D no disponible</p>
      </div>
    );
  }

  if (showSizeWarning && !confirmed) {
    return (
      <div className="flex flex-col items-center justify-center h-72 bg-yellow-50 border border-yellow-300 rounded-lg p-6 gap-4">
        <p className="text-yellow-800 font-semibold text-center">
          Este modelo pesa aproximadamente {fileSizeMB} MB.
        </p>
        <p className="text-yellow-700 text-sm text-center">
          La descarga puede tardar varios minutos dependiendo de tu conexión.
        </p>
        <button
          className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-medium transition-colors"
          onClick={() => { setShowSizeWarning(false); setConfirmed(true); }}
        >
          Cargar de todas formas
        </button>
      </div>
    );
  }

  if (phase === 'error') {
    return (
      <div className="flex flex-col items-center justify-center h-72 bg-red-50 border border-red-200 rounded-lg p-6 gap-2">
        <p className="text-red-700 font-semibold">No se pudo cargar el modelo</p>
        <p className="text-red-500 text-sm">{error}</p>
        <button
          className="mt-2 px-4 py-1.5 bg-unicauca-rojo hover:bg-unicauca-rojohover text-white rounded text-sm transition-colors"
          onClick={handleRetry}
        >
          Reintentar
        </button>
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={`Modelo 3D interactivo del volante de huso ${nombre || ''}`}
      className="relative w-full max-w-2xl mx-auto rounded-lg overflow-hidden bg-gray-900"
      style={{ aspectRatio: '16/9' }}
      onPointerDown={() => {
        if (!rotacionTrackedRef.current) {
          rotacionTrackedRef.current = true;
          trackEvent('Modelo3D', 'primera_rotacion', nombre || 'sin_nombre');
        }
      }}
    >
      {(phase === 'loading' || phase === 'checking') && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-gray-900 gap-4 p-6">
          <p className="text-gray-300 text-sm font-medium">
            Cargando {nombre || 'modelo 3D'}...
            {fileSizeMB && fileSizeMB > 20 && (
              <span className="text-gray-500 ml-1">(archivo grande)</span>
            )}
          </p>
          <div className="w-full bg-gray-700 rounded-full h-2.5">
            <div
              className="bg-unicauca-azul h-2.5 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-gray-500 text-xs">{progress}%</p>
        </div>
      )}
      {phase === 'rendering' && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-gray-900 gap-2">
          <div className="w-8 h-8 border-4 border-unicauca-azul border-t-transparent rounded-full animate-spin" />
          <p className="text-gray-500 text-xs">Preparando visor...</p>
        </div>
      )}
      <div
        ref={containerRef}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}

VisorSplat.propTypes = {
  url: PropTypes.string,
  nombre: PropTypes.string,
  cameraUrl: PropTypes.string,
  initialPosition: PropTypes.arrayOf(PropTypes.number),
  initialLookAt: PropTypes.arrayOf(PropTypes.number),
  onLoad: PropTypes.func,
  onError: PropTypes.func,
};

export default VisorSplat;
