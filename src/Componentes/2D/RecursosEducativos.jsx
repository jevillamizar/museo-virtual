import { Link } from 'react-router-dom';
import { AiOutlineEye, AiOutlineBarChart, AiOutlineCamera } from 'react-icons/ai';
import { GiYarn } from 'react-icons/gi';

const VERDE = 'text-unicauca-verde';
const BADGE_VERDE = 'bg-unicauca-verde text-white';
const BADGE_DORADO = 'bg-unicauca-amarillo text-unicauca-grisOscuro';

const recursos = [
  {
    Icono: AiOutlineEye,
    titulo: 'Guía de Observación de Piezas',
    descripcion:
      'Actividad para explorar los modelos 3D en el aula. Incluye preguntas guía para analizar forma, decoración y función de cada volante de huso.',
    etiqueta: 'Educación básica y media',
    badgeClass: BADGE_VERDE,
  },
  {
    Icono: GiYarn,
    titulo: 'Taller de Hilado Artesanal',
    descripcion:
      'Guía paso a paso para replicar la técnica de hilado con huso en el aula o taller comunitario usando materiales accesibles.',
    etiqueta: 'Todas las edades',
    badgeClass: BADGE_DORADO,
  },
  {
    Icono: AiOutlineBarChart,
    titulo: 'Comparación entre Culturas',
    descripcion:
      'Actividad de análisis comparativo de volantes de huso de diferentes culturas. Desarrolla pensamiento crítico e identidad cultural.',
    etiqueta: 'Educación media y superior',
    badgeClass: BADGE_VERDE,
  },
  {
    Icono: AiOutlineCamera,
    titulo: 'Patrimonio Vivo en tu Comunidad',
    descripcion:
      'Proyecto de documentación fotográfica de prácticas textiles actuales en la comunidad. Conecta el museo con el entorno local.',
    etiqueta: 'Comunidades y talleres',
    badgeClass: BADGE_DORADO,
  },
];

const RecursosEducativos = () => {
  return (
    <section
      aria-label="Recursos para docentes y facilitadores"
      className="w-full bg-unicauca-blancoRoto py-16 px-4"
    >
      <div className="max-w-screen-lg mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {recursos.map(({ Icono, titulo, descripcion, etiqueta, badgeClass }) => (
            <div
              key={titulo}
              className="bg-white rounded-xl shadow-md hover:shadow-lg hover:border-unicauca-verde border border-transparent transition-all duration-300 p-6 flex flex-col gap-3"
            >
              <Icono className={`text-4xl ${VERDE}`} aria-hidden="true" />
              <h3 className="text-base font-semibold text-unicauca-grisOscuro">{titulo}</h3>
              <p className="text-sm text-unicauca-grisMedio leading-relaxed flex-1">{descripcion}</p>
              <span className={`self-start text-xs font-semibold px-3 py-1 rounded-full ${badgeClass}`}>
                {etiqueta}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-unicauca-grisMedio">
          Para solicitar materiales completos o coordinar una visita educativa al museo, usa el formulario de contacto.{' '}
          <Link to="/Contact" className="text-unicauca-verde font-semibold hover:underline">
            Ir a contacto
          </Link>
        </p>
      </div>
    </section>
  );
};

export default RecursosEducativos;
