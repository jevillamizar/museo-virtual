import { useMeta } from '../hooks/useMeta';
import { useAnalytics } from '../hooks/useAnalytics';
import Breadcrumb from "../Componentes/UI/Breadcrumb";
import { Link } from 'react-router-dom';
import { GiSpinningTop, GiWool, GiYarn } from 'react-icons/gi';
import { AiOutlineHeart } from 'react-icons/ai';

const etapas = [
  {
    Icono: GiWool,
    titulo: 'Recolección de fibras',
    texto:
      'Las comunidades prehispánicas obtenían fibras de plantas como el algodón y la cabuya, así como de animales. La calidad del hilo dependía del tipo de fibra y del proceso de preparación antes del hilado.',
  },
  {
    Icono: GiSpinningTop,
    titulo: 'El hilado con volante de huso',
    texto:
      'El huso era un palo delgado al que se insertaba el volante como contrapeso. Al girar, el huso torcía las fibras y las convertía en hilo. El peso y tamaño del volante determinaba el grosor del hilo obtenido.',
  },
  {
    Icono: GiYarn,
    titulo: 'El tejido',
    texto:
      'Con el hilo obtenido se confeccionaban textiles en telares verticales u horizontales. Los tejidos podían ser simples o llevar decoraciones geométricas y figurativas de gran complejidad técnica y simbólica.',
  },
  {
    Icono: AiOutlineHeart,
    titulo: 'Significado cultural',
    texto:
      'Los textiles eran mucho más que ropa. Expresaban jerarquía social, identidad cultural y relaciones con lo sagrado. Ser una buena tejedora o tejedor era una habilidad altamente valorada en estas sociedades.',
  },
];

const Textiles = () => {
  useAnalytics('Textiles en la Arqueología');
  useMeta({
    titulo: 'Textiles en la Arqueología del Suroccidente Colombiano',
    descripcion: 'Descubre la historia de los textiles prehispánicos del suroccidente colombiano y su conexión con los volantes de huso del museo',
  });

  return (
    <div className='min-h-screen flex flex-wrap items-center justify-center text-center bg-unicauca-blancoRoto'>
      <main className='flex flex-wrap items-center justify-center w-full'>

        <div className="w-full px-4 pt-4">
          <Breadcrumb items={[
            { label: 'Inicio', path: '/' },
            { label: 'Textiles en la Arqueología', path: '/Textiles' },
          ]} />
        </div>

        {/* Encabezado */}
        <section className="w-full max-w-screen-md px-6 pt-10 pb-6 text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-unicauca-grisOscuro mb-4 font-poppins">
            Textiles en la Arqueología del Suroccidente Colombiano
          </h1>
          <p className="text-base text-unicauca-grisOscuro leading-relaxed mb-3">
            El tejido fue una de las prácticas culturales más importantes de las sociedades
            prehispánicas del suroccidente colombiano. A través de fibras vegetales y animales,
            estas comunidades no solo cubrían sus cuerpos, sino que expresaban su identidad, su
            espiritualidad y su organización social.
          </p>
          <p className="text-base text-unicauca-grisOscuro leading-relaxed">
            Los objetos relacionados con la producción textil, como los <strong>volantes de huso</strong>,
            son hoy testimonios materiales de esa riqueza cultural. Aunque los tejidos orgánicos
            rara vez sobreviven en el registro arqueológico, los volantes de huso de cerámica, piedra
            y hueso nos permiten reconstruir cómo se producían estos textiles y qué papel jugaban
            en la vida cotidiana y ceremonial de estas sociedades.
          </p>
        </section>

        {/* Imagen de portada */}
        <section className="w-full flex justify-center px-6 pb-8">
          <div className="w-full max-w-screen-md h-56 md:h-72 rounded-xl overflow-hidden shadow-md">
            <img
              src="/imagenes/ceramoteca.png"
              alt="Colección arqueológica textil"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* El proceso textil */}
        <section
          aria-label="El proceso de producción textil prehispánico"
          className="w-full max-w-screen-lg px-6 pb-12"
        >
          <h2 className="text-2xl font-bold text-unicauca-verde text-center mb-2 font-poppins">
            Del Campo al Tejido
          </h2>
          <p className="text-sm text-unicauca-grisMedio text-center mb-8 max-w-xl mx-auto">
            El proceso textil prehispánico era una cadena de saberes transmitidos de generación en generación.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {etapas.map(({ Icono, titulo, texto }) => (
              <div
                key={titulo}
                className="bg-white rounded-xl shadow-md p-6 flex gap-4 items-start text-left"
              >
                <Icono className="text-4xl text-unicauca-verde shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <h3 className="text-base font-semibold text-unicauca-grisOscuro mb-1">{titulo}</h3>
                  <p className="text-sm text-unicauca-grisMedio leading-relaxed">{texto}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tradición viva */}
        <section className="w-full max-w-screen-md px-6 pb-10 text-left">
          <div className="bg-unicauca-verde rounded-xl p-6 text-white">
            <h2 className="text-xl font-bold mb-3">Una tradición que sigue viva</h2>
            <p className="text-sm leading-relaxed text-white/90">
              Las técnicas de hilado con huso y volante no desaparecieron con el tiempo. Hoy,
              comunidades indígenas Nasa, Misak y campesinas del Cauca y Nariño siguen practicando
              el hilado artesanal como parte de su identidad y sustento. Esta plataforma es un
              puente entre el pasado arqueológico y ese presente vivo.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full pb-16 flex flex-col items-center gap-3">
          <p className="text-sm text-unicauca-grisMedio">
            Explora los volantes de huso de nuestra colección
          </p>
          <Link
            to="/Volantes"
            className="px-6 py-2.5 bg-unicauca-verde hover:bg-green-800 text-white font-semibold rounded-md transition-colors text-sm"
          >
            Ver colección de volantes de huso
          </Link>
        </section>

      </main>
    </div>
  );
};

export default Textiles;
