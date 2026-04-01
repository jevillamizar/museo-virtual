import Contenedor from "../Componentes/2D/Contenedor";
import ContenedorInvert from "../Componentes/2D/ContenedorInvert";
import Informacion from "../Componentes/2D/Informacion";
import Card3D from "../Componentes/3D/Card3D";
import Texto from "../Componentes/Text/Texto";
import Map from "../Componentes/Map/Map";

//Librerias Mapa
import MapI from "../Componentes/Map/MapI";

const Home = () => {

  const cards = [
    { imagen: 'Volante', link: 'Popayan', titulo: 'Popayán', parrafo: 'Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos,' },
    { imagen: 'Volante2', link: 'Suarez', titulo: 'Suarez', parrafo: 'Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos,' },
    { imagen: 'Volante3', link: 'Timbiqui', titulo: 'Timbiqui', parrafo: 'Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos,' },
  ];
  
  return (
    <div className='min-h-screen flex flex-wrap items-center justify-center text-center'>
      <div className='min-h-600 flex flex-wrap items-center justify-center'>
        <h1 className='max-w-940 text-5xl font-bold leading-tight my-10 '>
          Curiosidades sobre los pingüinos
        </h1>

        <Contenedor
          imagen='ceramoteca'
          titulo='Curiosidades sobre los pingüinos'
          subtitulo='Curiosidades pingüinos'
          parrafo='Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos Curiosidades sobre los pingüinos Curiosidades sobre los pingüinos'
        />

        <Informacion
          imagen='ceramoteca'
          titulo='Curiosidades sobre los pingüinos'
          parrafo='Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos,Curiosidades sobre los pingüinos,Curiosidades sobre los pingüinos,Curiosidades sobre los pingüinos Curiosidades sobre los pingüinos Curiosidades sobre los pingüinos'
        />

        <ContenedorInvert
          imagen='ceramoteca'
          titulo='Curiosidades sobre los pingüinos'
          subtitulo='Curiosidades pingüinos'
          parrafo='Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos Curiosidades sobre los pingüinos Curiosidades sobre los pingüinos'
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
            titulo='AREAS ARQUEOLOGICAS DE COLOMBIA'
            parrafo='Curiosidades sobre los pingüinos, los Curiosidades sobre los pingüinos 
            Curiosidades sobre los pingüinos, los Curiosidades sobre los pingüinos Curiosidades 
            sobre los pingüinos, los Curiosidades sobre los pingüinos
            Curiosidades sobre los pingüinos, los Curiosidades sobre los pingüinos Curiosidades 
            sobre los pingüinos, los Curiosidades sobre los pingüinos
            Curiosidades sobre los pingüinos, los Curiosidades sobre los pingüinos Curiosidades 
            sobre los pingüinos, los Curiosidades sobre los pingüinos'
          />
        </div>

        <MapI />

     

      </div>
    </div>
  );
}

export default Home;
