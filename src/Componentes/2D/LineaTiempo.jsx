import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { GiBrokenPottery, GiAncientColumns, GiGoldBar, GiTempleGate, GiCrystalBall } from 'react-icons/gi';
import { AiOutlineGlobal } from 'react-icons/ai';

const VERDE = '#249337';
const DORADO = '#C9A84C';
const OSCURO = '#2C2C2C';

const eventos = [
  {
    fecha: '3000 – 1000 a.C.',
    titulo: 'Períodos Formativos',
    texto:
      'Primeras comunidades agrícolas y alfareras del suroccidente colombiano. Aparecen los primeros indicios de producción textil y uso de instrumentos de hilado.',
    Icono: GiBrokenPottery,
    color: VERDE,
  },
  {
    fecha: '1000 a.C. – 100 d.C.',
    titulo: 'Cultura Tumaco-La Tolita',
    texto:
      'Florecimiento en la costa Pacífica. Producción cerámica de alta calidad con figurinas antropomorfas y volantes de huso finamente elaborados.',
    Icono: GiAncientColumns,
    color: DORADO,
  },
  {
    fecha: '100 – 1200 d.C.',
    titulo: 'Cultura Calima',
    texto:
      'Apogeo de la orfebrería y cerámica Calima. Los volantes de huso de este período muestran gran variedad de formas y decoraciones geométricas.',
    Icono: GiGoldBar,
    color: VERDE,
  },
  {
    fecha: '900 – 1500 d.C.',
    titulo: 'Nariño y Tierradentro',
    texto:
      'Período de gran desarrollo en el altiplano nariñense y el macizo colombiano. Los hipogeos de Tierradentro y la cerámica nariñense alcanzan su máxima expresión.',
    Icono: GiTempleGate,
    color: DORADO,
  },
  {
    fecha: '1000 – 1500 d.C.',
    titulo: 'Quimbaya Tardío',
    texto:
      'Último gran período de la orfebrería Quimbaya. Sus artesanos combinaban técnicas de metalurgia y textilería en elaboradas producciones rituales.',
    Icono: GiCrystalBall,
    color: VERDE,
  },
  {
    fecha: 'Siglo XVI',
    titulo: 'Contacto y Cambio Cultural',
    texto:
      'La llegada europea transforma radicalmente las sociedades del suroccidente colombiano. Sin embargo, muchas tradiciones textiles sobreviven y se fusionan con nuevas técnicas, perviviendo hasta hoy en comunidades indígenas y campesinas.',
    Icono: AiOutlineGlobal,
    color: OSCURO,
  },
];

const LineaTiempo = () => {
  return (
    <section
      aria-label="Cronología cultural del suroccidente colombiano"
      className="w-full py-16 px-4 bg-white"
    >
      <VerticalTimeline lineColor={VERDE}>
        {eventos.map(({ fecha, titulo, texto, Icono, color }) => (
          <VerticalTimelineElement
            key={titulo}
            date={fecha}
            iconStyle={{ background: color, color: '#fff' }}
            icon={<Icono />}
            contentStyle={{ background: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', borderTop: `4px solid ${color}` }}
            contentArrowStyle={{ borderRight: `7px solid ${color}` }}
          >
            <h3 className="text-base font-bold text-unicauca-grisOscuro">{titulo}</h3>
            <p className="text-sm text-unicauca-grisMedio leading-relaxed mt-1">{texto}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default LineaTiempo;
