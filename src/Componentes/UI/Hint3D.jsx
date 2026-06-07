import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineMobile, AiOutlineLaptop } from 'react-icons/ai';

function Hint3D({ onFirstInteraction }) {
  const [visible, setVisible] = useState(true);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleInteraction = () => {
    setVisible(false);
    if (onFirstInteraction) onFirstInteraction();
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.3 }}
          onPointerDown={handleInteraction}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 text-white text-sm select-none pointer-events-auto"
          aria-live="polite"
          aria-label="Instrucciones de interacción con el modelo 3D"
        >
          {isMobile ? (
            <>
              <AiOutlineMobile className="text-base shrink-0" />
              <span>Desliza para rotar · Pellizca para acercar</span>
            </>
          ) : (
            <>
              <AiOutlineLaptop className="text-base shrink-0" />
              <span>Arrastra para rotar · Rueda para acercar</span>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

Hint3D.propTypes = {
  onFirstInteraction: PropTypes.func,
};

export default Hint3D;
