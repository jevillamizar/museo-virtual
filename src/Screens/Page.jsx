import Contenedor3D from "../Componentes/3D/Contenedor3D";
import Recuadro3D from "../Componentes/3D/Recuadro3D";
import Breadcrumb from "../Componentes/UI/Breadcrumb";

const Page = () => {
  return (
    <div className='min-h-screen flex flex-wrap items-center justify-center text-center'>
      <div className='min-h-600 flex flex-wrap items-center justify-center w-full'>
        <div className="w-full px-4 pt-4">
          <Breadcrumb items={[
            { label: 'Inicio', path: '/' },
            { label: 'Información', path: '/Page' },
          ]} />
        </div>
        <div>
           <Contenedor3D
              titulo='Curiosidades sobre los pingüinos'
              subtitulo='Curiosidades pingüinos'
              parrafo='Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos Curiosidades sobre los pingüinos Curiosidades sobre los pingüinos'
           />
        </div>

        <div>
           <Recuadro3D
              titulo='Curiosidades sobre los pingüinos'
              subtitulo='Curiosidades pingüinos'
              parrafo='Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos Curiosidades sobre los pingüinos Curiosidades sobre los pingüinos'
              link='Popayan'
           />
        </div>

      </div>
    </div>
  );
};

export default Page;