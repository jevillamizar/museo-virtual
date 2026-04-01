import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function HojaLibro(props) {
  const imagenPath = `/imagenes/${props.imagen}.png`;

  return (
    <div className='w-3/4 sm:w-1/3 lg:w-1/4 mx-5 md:mx-10 my-10 md:my-50 max-w-screen-lg 
    bg-white shadow-lg overflow-hidden rounded-lg border-2 border-gray-300'>
      <div className='w-full object-cover'>
        <div className='text-center p-5 md:p-5 font-lato font-normal leading-6'>
          <p className='text-2xl font-semibold pt-2 pb-3 md:pb-5'>{props.titulo}</p>

          <div className='w-full flex justify-center items-center pb-2 lg:pb-0' style={{ height: '200px' }}>
            <img
              className='w-full h-full'
              src={imagenPath}
              alt='Imagen recuadro'
            />
          </div>

          <div className='w-full flex justify-center items-center mt-2 md:mt-0 pb-4 md:pb-0' style={{ height: '150px' }}>
            <p className='text-base text-justify'>{props.parrafo}</p>
          </div>

          {props.link && (
            <Link
              className='text-white text-left bg-green-600 border-gray-500 border-2 rounded-lg p-2'
              to={props.link}
            >
              Conoce más
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

HojaLibro.propTypes = {
  imagen: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  parrafo: PropTypes.string.isRequired,
  link: PropTypes.string
};

export default HojaLibro;
