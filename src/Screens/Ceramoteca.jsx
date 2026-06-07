import { useMeta } from '../hooks/useMeta';
import { useAnalytics } from '../hooks/useAnalytics';
import Breadcrumb from "../Componentes/UI/Breadcrumb";
import Recuadro360 from "../Componentes/3D/Recuadro360";
import { Link } from 'react-router-dom';
import { AiOutlineEye, AiOutlineBank, AiOutlineTeam } from 'react-icons/ai';

const datos = [
  {
    Icono: AiOutlineBank,
    titulo: 'Colección institucional',
    texto:
      'La Ceramoteca forma parte del Museo de Historia Natural de la Universidad del Cauca, una institución con décadas de trabajo en la conservación del patrimonio arqueológico y natural del suroccidente colombiano.',
  },
  {
    Icono: AiOutlineEye,
    titulo: 'Investigación y conservación',
    texto:
      'Las piezas de la Ceramoteca son objeto de estudio por parte de investigadores de arqueología, antropología e historia. Su conservación sigue protocolos museográficos que garantizan su preservación para las futuras generaciones.',
  },
  {
    Icono: AiOutlineTeam,
    titulo: 'Abierta a la comunidad',
    texto:
      'La Ceramoteca recibe visitas de estudiantes, docentes, comunidades indígenas y público en general. Su misión es democratizar el acceso al patrimonio y fortalecer la identidad cultural del suroccidente colombiano.',
  },
];

const Ceramoteca = () => {
  useAnalytics('Ceramoteca');
  useMeta({
    titulo: 'Ceramoteca — Museo de Historia Natural',
    descripcion: 'Conoce la Ceramoteca del Museo de Historia Natural de la Universidad del Cauca y su colección de cerámica prehispánica',
  });

  return (
    <div className='min-h-screen flex flex-wrap items-center justify-center text-center bg-unicauca-blancoRoto'>
      <main className='flex flex-wrap items-center justify-center w-full'>

        <div className="w-full px-4 pt-4">
          <Breadcrumb items={[
            { label: 'Inicio', path: '/' },
            { label: 'Ceramoteca', path: '/Ceramoteca' },
          ]} />
        </div>

        {/* Panorama 360 */}
        <section aria-label="Vista 360 de la Ceramoteca" className="mt-10 flex justify-center items-center w-full">
          <Recuadro360
            imagen='PanoramaInterior'
            titulo='CERAMOTECA'
            subtitulo='UNIVERSIDAD DEL CAUCA'
            parrafo='La Ceramoteca del Museo de Historia Natural de la Universidad del Cauca alberga una de las colecciones más importantes de cerámica prehispánica del suroccidente colombiano. Este espacio de investigación y conservación custodia piezas que dan cuenta de la diversidad cultural y tecnológica de los pueblos que habitaron esta región durante miles de años.'
            link='Volantes'
          />
        </section>

        {/* Descripción ampliada */}
        <section className="w-full max-w-screen-md px-6 py-10 text-left">
          <h2 className="text-2xl font-bold text-unicauca-verde mb-4 font-poppins">
            Un espacio para el patrimonio
          </h2>
          <p className="text-base text-unicauca-grisOscuro leading-relaxed mb-4">
            La Ceramoteca custodia piezas arqueológicas provenientes de ocho zonas culturales del
            suroccidente colombiano: Popayán, Calima, Corinto, Nariño, Patía, Tumaco, Tierradentro
            y Quimbaya. Cada objeto es testimonio de las tradiciones, técnicas y cosmovisiones de
            los pueblos que habitaron esta región durante miles de años.
          </p>
          <p className="text-base text-unicauca-grisOscuro leading-relaxed">
            Entre sus piezas más representativas se encuentran los <strong>volantes de huso</strong>,
            pequeños instrumentos de hilado que conectan la vida cotidiana prehispánica con las
            tradiciones artesanales que perviven hoy en comunidades indígenas y campesinas del Cauca
            y Nariño.
          </p>
        </section>

        {/* Tres bloques informativos */}
        <section
          aria-label="Información sobre la Ceramoteca"
          className="w-full max-w-screen-lg px-6 pb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {datos.map(({ Icono, titulo, texto }) => (
              <div
                key={titulo}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center gap-3"
              >
                <Icono className="text-4xl text-unicauca-verde" aria-hidden="true" />
                <h3 className="text-base font-semibold text-unicauca-grisOscuro">{titulo}</h3>
                <p className="text-sm text-unicauca-grisMedio leading-relaxed">{texto}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="w-full pb-16 flex flex-col items-center gap-3">
          <p className="text-sm text-unicauca-grisMedio">
            ¿Quieres explorar las piezas de la colección?
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

export default Ceramoteca;
