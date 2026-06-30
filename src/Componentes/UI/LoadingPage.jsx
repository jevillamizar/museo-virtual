import PropTypes from 'prop-types';

function LoadingPage({ mensaje = 'Cargando...' }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-unicauca-blancoRoto gap-4">
      <div className="w-12 h-12 border-4 border-unicauca-verde border-t-transparent rounded-full animate-spin" />
      <p className="text-unicauca-grisMedio text-base font-lato">{mensaje}</p>
    </div>
  );
}

LoadingPage.propTypes = {
  mensaje: PropTypes.string,
};

export default LoadingPage;
