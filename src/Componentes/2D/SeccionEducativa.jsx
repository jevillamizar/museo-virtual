import { motion } from 'framer-motion';
import { GiSpinningTop, GiYarn } from 'react-icons/gi';
import { AiOutlineHeart } from 'react-icons/ai';
import { useRevealOnScroll, staggerContainer, revealVariants } from '../../hooks/useRevealOnScroll';

const bloques = [
  {
    Icono: GiSpinningTop,
    titulo: '¿Qué es un volante de huso?',
    texto:
      'Un volante de huso es una pequeña pieza circular con un orificio central que se insertaba en un palo delgado llamado huso. Al girar, actuaba como un peso que mantenía el movimiento de rotación necesario para torcer las fibras y convertirlas en hilo. Es uno de los instrumentos de hilado más antiguos del mundo.',
  },
  {
    Icono: GiYarn,
    titulo: 'Su función en el hilado',
    texto:
      'El hilado con huso y volante era una actividad cotidiana en las sociedades prehispánicas. Las fibras de algodón, cabuya y otras plantas eran transformadas en hilos de distintos grosores según el peso y tamaño del volante. Esta técnica sigue viva hoy en comunidades indígenas y campesinas del suroccidente colombiano.',
  },
  {
    Icono: AiOutlineHeart,
    titulo: 'Su importancia cultural',
    texto:
      'Los volantes de huso no eran simples herramientas. Muchos estaban decorados con motivos geométricos, figuras humanas o animales que expresaban la identidad y cosmovisión de cada cultura. Su presencia en contextos funerarios indica que eran objetos de profundo significado simbólico para estas sociedades.',
  },
];

const SeccionEducativa = () => {
  const { ref, isInView } = useRevealOnScroll();

  return (
    <section
      aria-label="Sección educativa sobre volantes de huso"
      className="w-full bg-unicauca-blancoRoto py-16 px-4"
    >
      <div className="max-w-screen-lg mx-auto">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {bloques.map(({ Icono, titulo, texto }) => (
            <motion.div
              key={titulo}
              variants={revealVariants}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col items-center text-center gap-4"
            >
              <Icono className="text-5xl text-unicauca-verde" aria-hidden="true" />
              <h3 className="text-lg font-semibold text-unicauca-verde">{titulo}</h3>
              <p className="text-sm text-unicauca-grisOscuro leading-relaxed">{texto}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SeccionEducativa;
