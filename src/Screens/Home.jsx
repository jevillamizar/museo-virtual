import { useMeta } from '../hooks/useMeta';
import Contenedor from "../Componentes/2D/Contenedor";
import ContenedorInvert from "../Componentes/2D/ContenedorInvert";
import Informacion from "../Componentes/2D/Informacion";
import Card3D from "../Componentes/3D/Card3D";
import Texto from "../Componentes/Text/Texto";
import Map from "../Componentes/Map/Map";
import LineaTiempo from "../Componentes/2D/LineaTiempo";
import RecursosEducativos from "../Componentes/2D/RecursosEducativos";
import { GiWool, GiVillage } from 'react-icons/gi';
import { AiOutlineHeart } from 'react-icons/ai';

//Librerias Mapa
import MapI from "../Componentes/Map/MapI";

const Home = () => {
  useMeta({
    titulo: 'Acerca del Museo',
    descripcion: 'Conoce la historia y colección del Museo de Historia Natural de la Universidad del Cauca',
  });

  const cards = [
    { imagen: 'Volante', link: 'Popayan', titulo: 'Popayán', parrafo: 'Centro histórico y cultural del Cauca. Sus volantes de huso reflejan la rica tradición cerámica de la región andina caucana.' },
    { imagen: 'Volante2', link: 'Calima', titulo: 'Calima', parrafo: 'Reconocida por su extraordinaria orfebrería y cerámica finamente decorada con motivos geométricos.' },
    { imagen: 'Volante3', link: 'Tumaco', titulo: 'Tumaco', parrafo: 'Costa Pacífica nariñense. Produjo cerámica de notable calidad con representaciones humanas únicas.' },
  ];

  const datosDestacados = [
    { Icono: GiWool,        titulo: 'Técnica milenaria',   texto: 'El hilado con huso se practica en el suroccidente colombiano desde hace más de 3.000 años sin interrupción.' },
    { Icono: GiVillage,     titulo: 'Comunidades activas', texto: 'Pueblos Nasa, Misak y comunidades campesinas del Cauca mantienen viva la tradición del tejido artesanal.' },
    { Icono: AiOutlineHeart, titulo: 'Patrimonio compartido', texto: 'Cada volante de huso en nuestra colección es testimonio de una práctica que sigue transformando fibras en identidad.' },
  ];
  
  return (
    <>
    <div className='min-h-screen flex flex-wrap items-center justify-center text-center'>
      <div className='min-h-600 flex flex-wrap items-center justify-center'>
        <h1 className='max-w-940 text-5xl font-bold leading-tight my-10 '>
          Museo de Historia Natural — Universidad del Cauca
        </h1>

        <Contenedor
          imagen='ceramoteca'
          titulo='El Museo de Historia Natural'
          subtitulo='Universidad del Cauca'
          parrafo='El Museo de Historia Natural de la Universidad del Cauca es uno de los repositorios más importantes del patrimonio arqueológico y natural del suroccidente colombiano. Su colección de volantes de huso prehispánicos es única en el país por su representatividad cultural y diversidad regional.'
        />

        <Informacion
          imagen='ceramoteca'
          titulo='Una colección con historia'
          parrafo='Los volantes de huso son pequeñas piezas de cerámica, piedra o hueso que se usaban para hilar fibras vegetales y animales. En el Museo de Historia Natural de la Universidad del Cauca se conservan ejemplares provenientes de ocho zonas arqueológicas del suroccidente colombiano: Popayán, Calima, Corinto, Nariño, Patía, Tumaco, Tierradentro y Quimbaya. Cada pieza es un testimonio de la vida cotidiana, la espiritualidad y la organización social de los pueblos que habitaron esta región durante miles de años.'
        />

        <ContenedorInvert
          imagen='ceramoteca'
          titulo='La Ceramoteca'
          subtitulo='Conservación e investigación'
          parrafo='La Ceramoteca alberga una de las colecciones más importantes de cerámica prehispánica del suroccidente colombiano. Este espacio de investigación y conservación custodia piezas que dan cuenta de la diversidad cultural y tecnológica de los pueblos que habitaron esta región durante miles de años.'
        />

        <div className='max-w-screen-lg mx-auto card-container'>
          {cards.map((card, index) => (
            <div key={index} className='w-1/3 p-1'>
              <Card3D
                titulo={card.titulo}
                parrafo={card.parrafo}
                link={card.link}
                imagen={card.imagen}
              />
            </div>
          ))}
        </div>

        <div className='flex justify-center w-full'>
          <Map />
          <Texto
            titulo='Áreas Arqueológicas del Suroccidente Colombiano'
            parrafo='Las piezas de nuestra colección provienen de ocho zonas arqueológicas del suroccidente colombiano: Popayán, Calima, Corinto, Nariño, Patía, Tumaco, Tierradentro y Quimbaya. Cada zona tiene características únicas que se reflejan en la forma, decoración y materiales de sus volantes de huso.'
          />
        </div>

        <MapI />

      </div>
    </div>

    {/* Tarea 3.4 — Línea de tiempo */}
    <LineaTiempo />

    {/* Tarea 3.5 — Tradición viva */}
    <section
      aria-label="El hilo que nos une — tradición viva del suroccidente colombiano"
      className="w-full bg-unicauca-verde py-16 px-4"
    >
      <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div className="flex flex-col gap-5">
          <h2 className="text-3xl font-bold text-white">El Hilo que Nos Une</h2>
          <p className="text-white/80 text-sm font-medium">
            Tradición viva del suroccidente colombiano
          </p>
          <p className="text-white text-sm leading-relaxed">
            Las técnicas de hilado con huso y volante no desaparecieron con el paso del tiempo.
            Hoy, comunidades indígenas Nasa, Misak, Eperara Siapidara y campesinas del Cauca y
            Nariño siguen practicando el hilado artesanal como parte de su identidad cultural y
            su sustento económico.
          </p>
          <p className="text-white text-sm leading-relaxed">
            Esta plataforma es un puente entre el pasado arqueológico y el presente vivo.
            Las piezas del museo son el eco de manos que siguen hilando. Si eres artesano,
            tejedora o guardián de estas tradiciones, este espacio también es tuyo.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {datosDestacados.map(({ Icono, titulo, texto }) => (
            <div
              key={titulo}
              className="flex gap-4 bg-green-950 rounded-xl p-5 items-start"
            >
              <Icono className="text-3xl text-unicauca-amarillo shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <h3 className="text-white font-semibold text-sm mb-1">{titulo}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{texto}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Tarea 3.6 — Recursos educativos */}
    <RecursosEducativos />
    </>
  );
}

export default Home;
