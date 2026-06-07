import React from 'react';
import PropTypes from 'prop-types';
import VolanteCanvas from "../canvas/Volante";
import Volante2Canvas from "../canvas/Volante2";
import Volante3Canvas from "../canvas/Volante3";
import VisorSplat from "../canvas/VisorSplat";

const NA = 'Información próximamente';

const CULTURA_COLORS = {
  'Popayán':     'bg-unicauca-azul text-white',
  'Calima':      'bg-unicauca-verde text-white',
  'Corinto':     'bg-unicauca-naranja text-white',
  'Nariño':      'bg-unicauca-morado text-white',
  'Patía':       'bg-unicauca-verdeAgua text-white',
  'Tumaco':      'bg-unicauca-cian text-white',
  'Tierradentro':'bg-unicauca-rojo text-white',
  'Quimbaya':    'bg-unicauca-amarillo text-unicauca-grisOscuro',
};

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center h-64 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-600 text-sm text-center px-4">
            No se pudo cargar el visor 3D. Intenta recargar la página.
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

function Visor3D({ pieza }) {
  const tipo = pieza?.modelo_3d_tipo;
  const url  = pieza?.modelo_3d_url;
  const nombre = pieza?.nombre;

  if (tipo === 'gaussian_splat' || tipo === 'ply') {
    return (
      <ErrorBoundary>
        <VisorSplat url={url} nombre={nombre} cameraUrl={pieza?.camera_url} initialPosition={pieza?.camera_initial_position} initialLookAt={pieza?.camera_look_at} />
      </ErrorBoundary>
    );
  }

  if (tipo === 'glb' || tipo === 'gltf') {
    const canvasComponents = {
      Volante:  VolanteCanvas,
      Volante2: Volante2Canvas,
      Volante3: Volante3Canvas,
    };
    const key = nombre && canvasComponents[nombre] ? nombre : 'Volante';
    const CanvasComponent = canvasComponents[key];
    return (
      <div className="w-full h-64 md:h-72">
        <CanvasComponent />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-64 bg-unicauca-grisClaro rounded-lg border border-gray-200">
      <p className="text-unicauca-grisMedio text-sm">Modelo 3D próximamente</p>
    </div>
  );
}

Visor3D.propTypes = {
  pieza: PropTypes.object,
};

function FichaField({ label, value }) {
  if (!value) return null;
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-xs font-semibold uppercase tracking-wide text-unicauca-grisMedio">
        {label}
      </span>
      <span className="text-sm text-unicauca-grisOscuro font-lato">{value}</span>
    </div>
  );
}

FichaField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
};

function Datos({ pieza }) {
  if (!pieza) return null;

  const culturaBadgeClass = CULTURA_COLORS[pieza.cultura] || 'bg-unicauca-azul text-white';

  return (
    <div className="w-full mt-6 flex flex-col gap-6">

      {/* Sección 3 — Visor 3D */}
      <div className="w-full">
        <Visor3D pieza={pieza} />
      </div>

      <div className="flex flex-col lg:flex-row gap-6 w-full">

        {/* Sección 1 — Ficha Arqueológica */}
        <div className="flex-1 bg-white rounded-lg shadow-lg border-t-4 border-unicauca-azul p-6">
          <div className="mb-4 flex flex-col gap-1">
            <h2 className="text-xl font-bold text-unicauca-grisOscuro font-lato">
              {pieza.nombre || NA}
            </h2>
            {pieza.numero_catalogo && (
              <span className="text-xs text-unicauca-grisMedio font-mono">
                #{pieza.numero_catalogo}
              </span>
            )}
            {pieza.cultura && (
              <span className={`inline-block self-start mt-1 px-3 py-0.5 rounded-full text-xs font-semibold ${culturaBadgeClass}`}>
                {pieza.cultura}
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FichaField label="Período histórico"  value={pieza.periodo_historico} />
            <FichaField label="Lugar de hallazgo"  value={pieza.lugar_hallazgo} />
            <FichaField label="Dimensiones"        value={pieza.dimensiones} />
            <FichaField label="Material"           value={pieza.material} />
          </div>
        </div>

        {/* Sección 2 — Contexto Cultural */}
        <div className="flex-1 bg-unicauca-blancoRoto rounded-lg shadow-lg border-t-4 border-unicauca-verdeAgua p-6 flex flex-col gap-4">
          <h3 className="text-lg font-bold text-unicauca-grisOscuro font-lato border-b border-gray-200 pb-2">
            Contexto Cultural
          </h3>

          {pieza.descripcion && (
            <p className="text-sm text-unicauca-grisOscuro font-lato leading-relaxed">
              {pieza.descripcion}
            </p>
          )}

          {pieza.descripcion_cultural && (
            <p className="text-sm text-unicauca-grisOscuro font-lato leading-relaxed">
              {pieza.descripcion_cultural}
            </p>
          )}

          {pieza.usos && (
            <div>
              <span className="text-xs font-semibold uppercase tracking-wide text-unicauca-grisMedio block mb-1">
                Usos
              </span>
              <p className="text-sm text-unicauca-grisOscuro font-lato leading-relaxed">
                {pieza.usos}
              </p>
            </div>
          )}

          {pieza.relevancia_educativa && (
            <div>
              <span className="text-xs font-semibold uppercase tracking-wide text-unicauca-grisMedio block mb-1">
                Relevancia educativa
              </span>
              <p className="text-sm text-unicauca-grisOscuro font-lato leading-relaxed">
                {pieza.relevancia_educativa}
              </p>
            </div>
          )}

          {!pieza.descripcion && !pieza.descripcion_cultural && !pieza.usos && !pieza.relevancia_educativa && (
            <p className="text-sm text-unicauca-grisMedio italic">{NA}</p>
          )}

          {pieza.dato_curioso && (
            <div className="mt-2 bg-unicauca-amarillo/20 border-l-4 border-unicauca-amarillo rounded-r-lg p-4">
              <p className="text-xs font-bold text-unicauca-grisOscuro uppercase tracking-wide mb-1">
                ¿Sabías que...?
              </p>
              <p className="text-sm text-unicauca-grisOscuro font-lato leading-relaxed">
                {pieza.dato_curioso}
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

Datos.propTypes = {
  pieza: PropTypes.shape({
    nombre:              PropTypes.string,
    numero_catalogo:     PropTypes.string,
    cultura:             PropTypes.string,
    periodo_historico:   PropTypes.string,
    lugar_hallazgo:      PropTypes.string,
    dimensiones:         PropTypes.string,
    material:            PropTypes.string,
    descripcion:         PropTypes.string,
    descripcion_cultural:PropTypes.string,
    usos:                PropTypes.string,
    relevancia_educativa:PropTypes.string,
    dato_curioso:        PropTypes.string,
    modelo_3d_url:       PropTypes.string,
    modelo_3d_tipo:      PropTypes.oneOf(['gaussian_splat', 'ply', 'glb', 'gltf']),
  }).isRequired,
};

export default Datos;
