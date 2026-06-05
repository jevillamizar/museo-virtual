import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

const FILE_SIZE_WARNING_MB = 100;

function VisorSplat({ url, nombre, onLoad, onError }) {
  const containerRef = useRef(null);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showSizeWarning, setShowSizeWarning] = useState(false);
  const [fileSizeMB, setFileSizeMB] = useState(null);
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    if (!url) return;

    const checkFileSize = async () => {
      try {
        const response = await fetch(url, { method: 'HEAD' });
        const contentLength = response.headers.get('content-length');
        if (contentLength) {
          const sizeMB = Math.round(parseInt(contentLength) / (1024 * 1024));
          setFileSizeMB(sizeMB);
          if (sizeMB > FILE_SIZE_WARNING_MB) {
            setShowSizeWarning(true);
            return;
          }
        }
        loadModel();
      } catch {
        loadModel();
      }
    };

    checkFileSize();
  }, [url]);

  useEffect(() => {
    if (confirmed) loadModel();
  }, [confirmed]);

  const loadModel = async () => {
    if (!url) return;
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Error ${response.status}: no se pudo cargar el modelo`);

      const contentLength = response.headers.get('content-length');
      const total = contentLength ? parseInt(contentLength) : 0;
      const reader = response.body.getReader();
      const chunks = [];
      let received = 0;

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        chunks.push(value);
        received += value.length;
        if (total > 0) {
          setLoadingProgress(Math.round((received / total) * 100));
        }
      }

      setIsLoading(false);
      if (onLoad) onLoad();
    } catch (err) {
      setIsLoading(false);
      setError(err.message || 'Error al cargar el modelo 3D');
      if (onError) onError(err);
    }
  };

  if (!url) {
    return (
      <div className="flex items-center justify-center h-64 bg-gray-100 rounded-lg">
        <p className="text-gray-500 text-sm">Modelo 3D no disponible</p>
      </div>
    );
  }

  if (showSizeWarning && !confirmed) {
    return (
      <div className="flex flex-col items-center justify-center h-64 bg-yellow-50 border border-yellow-300 rounded-lg p-6 gap-4">
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

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-64 bg-red-50 border border-red-200 rounded-lg p-6 gap-2">
        <p className="text-red-700 font-semibold">No se pudo cargar el modelo</p>
        <p className="text-red-500 text-sm">{error}</p>
        <button
          className="mt-2 px-4 py-1.5 bg-red-500 hover:bg-red-600 text-white rounded text-sm transition-colors"
          onClick={() => { setError(null); loadModel(); }}
        >
          Reintentar
        </button>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-64 bg-gray-50 rounded-lg gap-4 p-6">
        <p className="text-gray-600 text-sm font-medium">Cargando {nombre || 'modelo 3D'}...</p>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-green-600 h-3 rounded-full transition-all duration-300"
            style={{ width: `${loadingProgress}%` }}
          />
        </div>
        <p className="text-gray-400 text-xs">{loadingProgress}%</p>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center">
      <p className="text-gray-500 text-sm">Visor .ply — integración Three.js pendiente</p>
    </div>
  );
}

VisorSplat.propTypes = {
  url: PropTypes.string,
  nombre: PropTypes.string,
  onLoad: PropTypes.func,
  onError: PropTypes.func,
};

export default VisorSplat;
