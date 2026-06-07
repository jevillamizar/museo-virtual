import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineWarning } from 'react-icons/ai';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    const nombre = this.props.nombreComponente || 'Componente desconocido';
    console.error(`[ErrorBoundary] Error en ${nombre}:`, error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg border border-red-200 shadow-md max-w-md mx-auto text-center gap-4">
          <AiOutlineWarning className="text-unicauca-rojo" size={48} />
          <h3 className="text-lg font-bold text-unicauca-grisOscuro font-lato">
            Algo salió mal
          </h3>
          <p className="text-sm text-unicauca-grisMedio font-lato">
            No pudimos cargar este contenido. Intenta de nuevo.
          </p>
          <button
            onClick={() => this.setState({ hasError: false, error: null })}
            className="px-5 py-2 bg-unicauca-azul hover:bg-unicauca-azulhover text-white text-sm font-semibold rounded-md transition-colors"
          >
            Reintentar
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
  nombreComponente: PropTypes.string,
};

ErrorBoundary.defaultProps = {
  nombreComponente: '',
};

export default ErrorBoundary;
