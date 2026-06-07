import { useMeta } from '../hooks/useMeta';
import Recuadro from "../Componentes/2D/Recuadro";
import Recuadro360 from "../Componentes/3D/Recuadro360";
import HojaLibro from "../Componentes/2D/HojaLibro";
import Texto from "../Componentes/Text/Texto";
import Card from "../Componentes/2D/Card";
import SeccionEducativa from "../Componentes/2D/SeccionEducativa";

// Librerias Mapa
import MapI from "../Componentes/Map/MapI";

// Librerias del carrusel
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Principal = () => {
  useMeta({
    titulo: 'Inicio',
    descripcion: 'Explora los volantes de huso prehispánicos del suroccidente colombiano en el Museo de Historia Natural Unicauca',
  });

  const cards = [
    { imagen: 'popayan', link: 'Popayan', titulo: 'POPAYÁN', parrafo: 'Centro histórico y cultural del Cauca. Sus volantes de huso reflejan la rica tradición cerámica de la región andina caucana.' },
    { imagen: 'calima', link: 'Calima', titulo: 'CALIMA', parrafo: 'Cultura del valle del río Calima en el Valle del Cauca. Reconocida por su extraordinaria orfebrería y cerámica finamente decorada.' },
    { imagen: 'volantefron', link: 'Corinto', titulo: 'CORINTO', parrafo: 'Asentamientos del norte del Cauca. Sus piezas evidencian intercambios culturales entre grupos de la cordillera y el valle del río Cauca.' },
    { imagen: 'volantefron', link: 'Nariño', titulo: 'NARIÑO', parrafo: 'Culturas del altiplano nariñense. Sus volantes muestran influencias de las tradiciones andinas del sur y conexiones con culturas de Ecuador.' },
    { imagen: 'patia', link: 'Patia', titulo: 'PATÍA', parrafo: 'Valle del río Patía en el Cauca. Sus piezas reflejan las tradiciones de los pueblos que habitaron esta región interandina.' },
    { imagen: 'calima', link: 'Tumaco', titulo: 'TUMACO', parrafo: 'Costa Pacífica nariñense. La cultura Tumaco-La Tolita produjo cerámica de notable calidad con representaciones humanas únicas en la arqueología colombiana.' },
    { imagen: 'popayan', link: 'TierraAdentro', titulo: 'TIERRADENTRO', parrafo: 'Famosa por sus hipogeos y estatuaria. Sus volantes de huso son testimonio de una sociedad con profunda vida espiritual y sofisticadas prácticas funerarias.' },
    { imagen: 'volantetra', link: 'Quimbaya', titulo: 'QUIMBAYA', parrafo: 'Conocida por su maestría en orfebrería. Sus volantes muestran la habilidad técnica y estética de uno de los pueblos más refinados del occidente colombiano.' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1280, 
        settings: {
          slidesToShow: 2, 
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className='min-h-screen flex flex-wrap items-center justify-center text-center bg-unicauca-blancoRoto'>
      <main className='min-h-600 flex flex-wrap items-center justify-center w-full'>

        <section aria-label="Presentación de la Ceramoteca" className="mt-14 lg:mt-16 flex justify-center items-center w-full">
          <Recuadro360
            imagen='PanoramaInterior'
            titulo='CERAMOTECA'
            subtitulo='UNIVERSIDAD DEL CAUCA'
            parrafo='La Ceramoteca del Museo de Historia Natural de la Universidad del Cauca alberga una de las colecciones más importantes de cerámica prehispánica del suroccidente colombiano. Este espacio de investigación y conservación custodia piezas que dan cuenta de la diversidad cultural y tecnológica de los pueblos que habitaron esta región durante miles de años.'
            link='Ceramoteca'
          />
        </section>

        <section aria-label="Colecciones del museo" className='flex flex-col sm:flex-row justify-center items-stretch w-full'>
          <HojaLibro
            imagen='ceramoteca'
            titulo='Textiles en la Arqueología del Suroccidente Colombiano'
            parrafo='El tejido fue una de las prácticas culturales más importantes de las sociedades prehispánicas del suroccidente colombiano. A través de fibras vegetales y animales, estas comunidades no solo cubrían sus cuerpos, sino que expresaban su identidad, su espiritualidad y su organización social. Los objetos relacionados con la producción textil, como los volantes de huso, son hoy testimonios materiales de esa riqueza cultural.'
            link='Textiles'
          />
          <HojaLibro
            imagen='coleccion'
            titulo='La Colección de Volantes de Huso'
            parrafo='El Museo de Historia Natural de la Universidad del Cauca conserva una colección de volantes de huso provenientes de diversas culturas del suroccidente colombiano. Estas pequeñas piezas de cerámica, piedra o hueso fueron utilizadas para hilar fibras y representan un valioso registro de las técnicas textiles prehispánicas de la región. Cada pieza es única y refleja las tradiciones artesanales de su cultura de origen.'
            link='Volantes'
          />
        </section>

        <section aria-label="Áreas arqueológicas de Colombia" className='flex flex-col sm:flex-row justify-center items-center w-full'>
          <MapI />
          <Texto
            titulo='Áreas Arqueológicas del Suroccidente Colombiano'
            parrafo='Las piezas de nuestra colección provienen de ocho zonas arqueológicas del suroccidente colombiano: Popayán, Calima, Corinto, Nariño, Patía, Tumaco, Tierradentro y Quimbaya. Cada zona tiene características únicas que se reflejan en la forma, decoración y materiales de sus volantes de huso.'
          />
        </section>

        <section aria-label="Culturas arqueológicas" className='w-full max-w-xs sm:max-w-screen-xs md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg px-4'>
          <Slider {...settings}>
            {cards.map((card, index) => (
              <div key={index}>
                <Card imagen={card.imagen} titulo={card.titulo} parrafo={card.parrafo} link={card.link}/>
              </div>
            ))}
          </Slider>
        </section>

        <SeccionEducativa />

      </main>
    </div>
  );
}

export default Principal;

