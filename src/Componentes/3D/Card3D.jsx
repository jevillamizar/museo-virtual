import PropTypes from 'prop-types';
import VolanteCanvas from "../canvas/Volante";
import Volante2Canvas from "../canvas/Volante2";
import Volante3Canvas from "../canvas/Volante3";

function Card3D(props) {
  const linkPath = `http://localhost:5173/${props.link}`;
  
  const canvasComponents = {
    Volante: VolanteCanvas,
    Volante2: Volante2Canvas,
    Volante3: Volante3Canvas,
  };

  const CanvasComponent = canvasComponents[props.imagen];

  return (
    <div className='w-3/4 mx-10 my-10 md:my-50 max-w-screen-lg flex flex-col md:flex-row bg-slate-400 shadow-lg overflow-hidden'>
      <div className='w-full'>
        <div className='text-center p-5 md:p-5 font-lato font-normal leading-6'>
          <p className='text-2xl font-semibold pb-3 md:pb-1'>{props.titulo}</p>
          <div className='w-full h-auto'>
            {CanvasComponent ? <CanvasComponent /> : <div>Error: Component not found</div>}
          </div>
          <p className='text-base text-justify mt-4 pb-2 md:pb-4'>{props.parrafo}</p>
          {props.link && <a className='text-blue-500 text-left' href={linkPath}>Leer más</a>}
        </div>
      </div>
    </div>
  );
}

Card3D.propTypes = {
  imagen: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  parrafo: PropTypes.string.isRequired,
  link: PropTypes.string
};

export default Card3D;
