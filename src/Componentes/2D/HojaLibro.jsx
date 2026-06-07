import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function HojaLibro(props) {
  const imagenPath = `/imagenes/${props.imagen}.png`;

  return (
    <div className='w-3/4 sm:w-1/3 lg:w-1/4 mx-5 md:mx-10 my-10 flex flex-col h-full
    bg-white shadow-lg overflow-hidden rounded-lg border-2 border-gray-300'>

      <div className='w-full h-44 sm:h-36 lg:h-44 flex-shrink-0 overflow-hidden'>
        <img
          className='w-full h-full object-cover'
          src={imagenPath}
          alt='Imagen recuadro'
        />
      </div>

      <div className='flex flex-col flex-1 p-5 font-lato font-normal leading-6 gap-3'>
        <p className='text-xl font-semibold text-center'>{props.titulo}</p>

        <p className='text-sm text-justify text-unicauca-grisOscuro
          line-clamp-4 sm:line-clamp-5 lg:line-clamp-6 flex-1'>
          {props.parrafo}
        </p>

        {props.link && (
          <div className='flex justify-center pt-1'>
            <Link
              className='text-white bg-unicauca-azul hover:bg-unicauca-azulhover border-unicauca-azul border-2 rounded-lg px-4 py-2 text-sm transition-colors duration-200'
              to={props.link}
            >
              Conoce más
            </Link>
          </div>
        )}
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
