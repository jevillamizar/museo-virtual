import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { useRevealOnScroll, revealVariants } from '../../hooks/useRevealOnScroll';

const SectionTitle = ({ titulo, subtitulo, alineacion = 'center' }) => {
  const isCenter = alineacion === 'center';
  const { ref, isInView } = useRevealOnScroll();

  return (
    <motion.div
      ref={ref}
      variants={revealVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={isCenter ? 'text-center' : 'text-left'}
    >
      <h2 className="font-poppins font-bold text-3xl md:text-4xl text-unicauca-azul mb-3">
        {titulo}
      </h2>

      <div className={`h-1 w-16 bg-unicauca-amarillo mb-4 ${isCenter ? 'mx-auto' : ''}`} />

      {subtitulo && (
        <p className={`text-unicauca-rojo text-lg max-w-2xl ${isCenter ? 'mx-auto' : ''}`}>
          {subtitulo}
        </p>
      )}
    </motion.div>
  );
};

SectionTitle.propTypes = {
  titulo:    PropTypes.string.isRequired,
  subtitulo: PropTypes.string,
  alineacion: PropTypes.oneOf(['center', 'left']),
};

export default SectionTitle;
