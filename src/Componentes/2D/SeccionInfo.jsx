import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { useRevealOnScroll, revealFromLeft, revealFromRight } from '../../hooks/useRevealOnScroll';

/**
 * Layout asimétrico imagen/texto para páginas secundarias
 * @param {Object}   props
 * @param {string}   props.imagen    - Ruta de la imagen
 * @param {string}   props.titulo    - Título de la sección
 * @param {string[]} props.parrafos  - Array de párrafos descriptivos
 * @param {boolean}  [props.invertido] - Si true, imagen a la derecha
 * @returns {JSX.Element} Sección con dos columnas desktop / una columna móvil
 */
const SeccionInfo = ({ imagen, titulo, parrafos, invertido }) => {
  const { ref, isInView } = useRevealOnScroll();

  const varImg  = invertido ? revealFromRight : revealFromLeft;
  const varText = invertido ? revealFromLeft  : revealFromRight;

  const columnaImagen = (
    <motion.div
      variants={varImg}
      className="w-full md:w-5/12"
    >
      <img
        src={imagen}
        alt={titulo}
        className={`rounded-xl shadow-lg w-full object-cover h-80 md:h-96 ${invertido ? 'md:-translate-y-6' : 'md:translate-y-6'}`}
      />
    </motion.div>
  );

  const columnaTexto = (
    <motion.div
      variants={varText}
      className="w-full md:w-7/12 flex flex-col justify-center px-2 md:px-6 text-left"
    >
      <h2 className="font-poppins font-bold text-2xl md:text-3xl text-green-800 mb-4">
        {titulo}
      </h2>
      <div className="h-1 w-12 bg-yellow-600 mb-6" aria-hidden="true" />
      {parrafos.map((parrafo, index) => (
        <p key={index} className="text-gray-600 leading-relaxed mb-4 text-sm">
          {parrafo}
        </p>
      ))}
    </motion.div>
  );

  return (
    <div className="w-full max-w-screen-lg mx-auto px-6 py-10">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="flex flex-col md:flex-row gap-8 items-center"
      >
        {invertido ? (
          <>
            {columnaTexto}
            {columnaImagen}
          </>
        ) : (
          <>
            {columnaImagen}
            {columnaTexto}
          </>
        )}
      </motion.div>
    </div>
  );
};

SeccionInfo.propTypes = {
  imagen: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  parrafos: PropTypes.arrayOf(PropTypes.string).isRequired,
  invertido: PropTypes.bool,
};

SeccionInfo.defaultProps = {
  invertido: false,
};

export default SeccionInfo;
