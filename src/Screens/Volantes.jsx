import { useMeta } from '../hooks/useMeta';
import { useAnalytics } from '../hooks/useAnalytics';
import Breadcrumb from "../Componentes/UI/Breadcrumb";
import Contenedor3D from "../Componentes/3D/Contenedor3D";
import Recuadro3D from "../Componentes/3D/Recuadro3D";
import { Link } from 'react-router-dom';

const Volantes = () => {
  useAnalytics('Colección de Volantes de Huso');
  useMeta({
    titulo: 'Colección de Volantes de Huso',
    descripcion: 'Explora la colección de volantes de huso prehispánicos del Museo de Historia Natural de la Universidad del Cauca',
  });

  return (
    <div className='min-h-screen flex flex-wrap items-center justify-center text-center bg-unicauca-blancoRoto'>
      <main className='min-h-600 flex flex-wrap items-center justify-center w-full'>

        <div className="w-full px-4 pt-4">
          <Breadcrumb items={[
            { label: 'Inicio', path: '/' },
            { label: 'Colección de Volantes de Huso', path: '/Volantes' },
          ]} />
        </div>

        {/* Encabezado */}
        <section className="w-full max-w-screen-md px-6 pt-10 pb-4 text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-unicauca-grisOscuro mb-3">
            La Colección de Volantes de Huso
          </h1>
          <p className="text-base text-unicauca-grisMedio leading-relaxed">
            El Museo de Historia Natural de la Universidad del Cauca conserva una colección de volantes de
            huso provenientes de diversas culturas del suroccidente colombiano. Estas pequeñas piezas de
            cerámica, piedra o hueso fueron utilizadas para hilar fibras y representan un valioso registro
            de las técnicas textiles prehispánicas de la región. Cada pieza es única y refleja las
            tradiciones artesanales de su cultura de origen.
          </p>
        </section>

        {/* Modelo 3D interactivo */}
        <section aria-label="Modelo 3D de volante de huso" className="w-full flex justify-center">
          <Recuadro3D
            titulo='Volante de Huso — Vista 3D'
            subtitulo='Interactúa con el modelo'
            parrafo='Arrastra para rotar el modelo y usa la rueda del ratón para acercar o alejar. Cada volante de huso tiene características únicas que reflejan la tradición cultural de su lugar de origen.'
            link='Popayan'
          />
        </section>

        {/* Explorar por cultura */}
        <section className="w-full max-w-screen-lg px-6 py-10">
          <h2 className="text-2xl font-bold text-unicauca-verde mb-2 text-center">
            Explora por Área Arqueológica
          </h2>
          <p className="text-sm text-unicauca-grisMedio text-center mb-8">
            Selecciona una de las ocho zonas para ver las piezas de esa cultura.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { nombre: 'Popayán',     ruta: '/Popayan' },
              { nombre: 'Calima',      ruta: '/Calima' },
              { nombre: 'Corinto',     ruta: '/Corinto' },
              { nombre: 'Nariño',      ruta: '/Nariño' },
              { nombre: 'Patía',       ruta: '/Patia' },
              { nombre: 'Tumaco',      ruta: '/Tumaco' },
              { nombre: 'Tierradentro',ruta: '/TierraAdentro' },
              { nombre: 'Quimbaya',    ruta: '/Quimbaya' },
            ].map(({ nombre, ruta }) => (
              <Link
                key={nombre}
                to={ruta}
                className="block bg-white border-2 border-gray-200 hover:border-unicauca-verde rounded-lg py-4 px-3 text-sm font-semibold text-unicauca-grisOscuro hover:text-unicauca-verde transition-colors text-center shadow-sm"
              >
                {nombre}
              </Link>
            ))}
          </div>
        </section>

        {/* Vista de colección 3D general */}
        <section aria-label="Visor 3D de la colección" className="w-full flex justify-center pb-10">
          <Contenedor3D
            titulo='Explorador de la Colección'
            subtitulo='Modelos interactivos'
            parrafo='Navega por los modelos tridimensionales de nuestra colección y descubre los detalles de cada pieza: su forma, decoración y origen cultural.'
          />
        </section>

      </main>
    </div>
  );
};

export default Volantes;
