import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

const handleExplorar = () => {
  const el = document.getElementById('coleccion');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const HeroBanner = () => {
  const navigate = useNavigate();

  return (
    <section
      aria-label="Presentación principal — Museo de Historia Natural Unicauca"
      className="relative min-h-screen w-full flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-unicauca-azul via-green-900 to-unicauca-verde"
    >
      {/* Overlay de profundidad */}
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      {/* Contenido */}
      <div className="relative z-10 px-6 max-w-4xl mx-auto flex flex-col items-center gap-6">

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="text-unicauca-amarillo uppercase tracking-widest text-sm font-semibold"
        >
          Museo de Historia Natural — Universidad del Cauca
        </motion.p>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.4}
          className="font-poppins font-bold text-5xl md:text-7xl text-white leading-tight"
        >
          Volantes de Huso
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.6}
          className="text-white/80 text-xl md:text-2xl max-w-2xl mx-auto"
        >
          Patrimonio Textil Prehispánico del Suroccidente Colombiano
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.8}
          className="flex flex-col sm:flex-row gap-4 mt-2"
        >
          <button
            onClick={handleExplorar}
            className="px-8 py-3 rounded-lg font-semibold text-unicauca-grisOscuro bg-[#C9A84C] hover:bg-[#b8943d] transition-colors duration-200"
          >
            Explorar Colección
          </button>

          <button
            onClick={() => navigate('/About')}
            className="px-8 py-3 rounded-lg font-semibold text-white border-2 border-white hover:bg-white/10 transition-colors duration-200"
          >
            Sobre el Museo
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroBanner;
