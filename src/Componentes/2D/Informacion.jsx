import PropTypes from 'prop-types';

function Informacion(props) {

    const imagenPath = `/imagenes/${props.imagen}.png`;

    return (
      <div className='w-full mx-10 my-10 md:my-50 max-w-screen-lg flex flex-col md:flex-row bg-slate-400 rounded-lg shadow-lg overflow-hidden'>
        
        <div className='w-full object-cover'>
          <div className='text-center p-5 md:p-5 font-lato font-normal leading-6'>
            <p className='text-4xl font-semibold pt-4 pb-3 md:pb-5'>{props.titulo}</p>
            <p className='text-base text-justify mt-4 pb-2 md:pb-4'>{props.parrafo}</p>

            <div className='w-3/4 mx-auto'>
                <img
                    className='h-full w-full object-cover'
                    src={imagenPath} alt="Imagen" />
            </div>
           
          </div>
        </div>
      </div>
    );
}

Informacion.propTypes = {
  imagen: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  parrafo: PropTypes.string.isRequired
};
  
export default Informacion;