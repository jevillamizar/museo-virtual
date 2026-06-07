import { useMeta } from '../hooks/useMeta';
import Recuadro360 from '../Componentes/3D/Recuadro360';

const Contact = () => {
  useMeta({
    titulo: 'Contacto',
    descripcion: 'Contáctanos — Museo de Historia Natural Unicauca',
  });
    return (
      <div>
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