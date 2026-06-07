import { useMeta } from '../hooks/useMeta';
import Recuadro from "../Componentes/2D/Recuadro";
import Recuadro360 from "../Componentes/3D/Recuadro360";
import HojaLibro from "../Componentes/2D/HojaLibro";
import Texto from "../Componentes/Text/Texto";
import Card from "../Componentes/2D/Card";

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
    { imagen: 'calima', link: 'Calima', titulo: 'CALIMA', parrafo: 'Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos,' },
    { imagen: 'patia', link: 'Patia', titulo: 'PATÍA', parrafo: 'Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos,' },
    { imagen: 'popayan', link: 'TierraAdentro', titulo: 'TIERRADENTRO', parrafo: 'Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos,' },
    { imagen: 'volantetra', link: 'Quimbaya', titulo: 'QUIMBAYA', parrafo: 'Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos,' },
    { imagen: 'calima', link: 'Tumaco', titulo: 'TUMACO', parrafo: 'Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos,' },
    { imagen: 'volantefron', link: 'Corinto', titulo: 'CORINTO', parrafo: 'Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos,' },
    { imagen: 'popayan', link: 'Popayan', titulo: 'POPAYÁN', parrafo: 'Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos,' },
    { imagen: 'volantefron', link: 'Nariño', titulo: 'NARIÑO', parrafo: 'Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos,' },
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
            parrafo='Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos Curiosidades sobre los pingüinos Curiosidades sobre los pingüinos'
            link='Page'
          />
        </section>

        <section aria-label="Sobre la Ceramoteca" className="mt-14 lg:mt-16 flex justify-center items-center w-full">
          <Recuadro
            imagen='ceramoteca'
            titulo='CERAMOTECA'
            subtitulo='UNIVERSIDAD DEL CAUCA'
            parrafo='Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos Curiosidades sobre los pingüinos Curiosidades sobre los pingüinos'
            link='Page'
          />
        </section>

        <section aria-label="Colecciones del museo" className='flex flex-col sm:flex-row justify-center items-center w-full'>
          <HojaLibro
            imagen='ceramoteca'
            titulo='TEXTILES EN LA ARQUEOLOGÍA'
            parrafo='Curiosidades sobre los pingüinos, los Curiosidades sobre los pingüinos Curiosidades sobre los pingüinos, los Curiosidades sobre los pingüinos'
            link='Page'
          />
          <HojaLibro
            imagen='coleccion'
            titulo='LA COLECCIÓN DE VOLANTES DE HUSO'
            parrafo='Curiosidades sobre los pingüinos, los Curiosidades sobre los pingüinos Curiosidades sobre los pingüinos, los Curiosidades sobre los pingüinos'
            link='Popayan'
          />
        </section>

        <section aria-label="Áreas arqueológicas de Colombia" className='flex flex-col sm:flex-row justify-center items-center w-full'>
          <MapI />
          <Texto
            titulo='AREAS ARQUEOLOGICAS DE COLOMBIA'
            parrafo='Curiosidades sobre los pingüinos, los Curiosidades sobre los pingüinos 
            Curiosidades sobre los pingüinos, los Curiosidades sobre los pingüinos Curiosidades 
            sobre los pingüinos, los Curiosidades sobre los pingüinos
            Curiosidades sobre los pingüinos, los Curiosidades sobre los pingüinos Curiosidades 
            sobre los pingüinos, los Curiosidades sobre los pingüinos
            Curiosidades sobre los pingüinos, los Curiosidades sobre los pingüinos Curiosidades 
            sobre los pingüinos, los Curiosidades sobre los pingüinos'
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

      </main>
    </div>
  );
}

export default Principal;

