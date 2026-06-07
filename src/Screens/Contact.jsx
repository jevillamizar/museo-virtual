import { useMeta } from '../hooks/useMeta';
import Recuadro360 from '../Componentes/3D/Recuadro360';
import Breadcrumb from '../Componentes/UI/Breadcrumb';

const Contact = () => {
  useMeta({
    titulo: 'Contacto',
    descripcion: 'Contáctanos — Museo de Historia Natural Unicauca',
  });
    return (
      <div>
       <div className="w-full px-4 pt-4">
         <Breadcrumb items={[
           { label: 'Inicio', path: '/' },
           { label: 'Contacto', path: '/Contact' },
         ]} />
       </div>
       <Recuadro360
         imagen='PanoramaInterior'
         titulo='CERAMOTECA'
         subtitulo='UNIVERSIDAD DEL CAUCA'
         parrafo='Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos Curiosidades sobre los pingüinos Curiosidades sobre los pingüinos'
         link='Page'
       />
       
      </div>
    )
  }
  
  export default Contact