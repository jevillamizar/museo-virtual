import PropTypes from 'prop-types';
import Breadcrumb from './Breadcrumb';

/**
 * Encabezado visual para páginas secundarias con imagen de fondo y overlay
 * @param {Object} props
 * @param {string} props.titulo - Nombre del área cultural
 * @param {string} [props.imagen] - Ruta de imagen de fondo
 * @param {Array}  props.breadcrumbItems - Ítems para el componente Breadcrumb
 * @returns {JSX.Element} Header con imagen/degradado, overlay y título
 */
const PageHeader = ({ titulo, imagen = null, breadcrumbItems }) => {
  return (
    <section
      className="relative w-full h-64 md:h-80 flex flex-col justify-center overflow-hidden"
      aria-label={`Encabezado — ${titulo}`}
    >
      {imagen ? (
        <img
          src={imagen}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div
          className="absolute inset-0 bg-gradient-to-r from-green-900 to-green-700"
          aria-hidden="true"
        />
      )}

      <div className="absolute inset-0 bg-green-900/65" aria-hidden="true" />

      <div className="relative z-10 w-full max-w-screen-lg mx-auto px-6 flex flex-col gap-3">
        <Breadcrumb items={breadcrumbItems} dark />
        <h1 className="font-poppins font-bold text-4xl md:text-5xl text-white text-center drop-shadow-lg">
          {titulo}
        </h1>
      </div>
    </section>
  );
};

PageHeader.propTypes = {
  titulo: PropTypes.string.isRequired,
  imagen: PropTypes.string,
  breadcrumbItems: PropTypes.array.isRequired,
};

export default PageHeader;
