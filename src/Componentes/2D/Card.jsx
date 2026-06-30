import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Card({ imagen, titulo, parrafo, link, cultura = '', colorCultura = 'bg-gray-500 text-white' }) {
    const imagenPath = `/imagenes/${imagen}.png`;

    return (
        <div className='w-3/4 mx-10 md:mx-10 my-10 max-w-screen-lg flex flex-col md:flex-row 
        bg-white shadow-lg overflow-hidden rounded-lg border-2 border-gray-300'>

            <div className='w-full'>
                <div className='text-center p-5 md:p-5 font-lato font-normal leading-6'>
                    <p className='text-2xl font-semibold pt-2 pb-2 md:pb-3'>{titulo}</p>
                    <div className='relative w-full flex justify-center items-center' style={{ height: '200px' }}>
                        {cultura && (
                          <span className={`absolute top-3 left-3 z-10 text-xs font-semibold uppercase px-3 py-1 rounded-full ${colorCultura}`}>
                            {cultura}
                          </span>
                        )}
                        <img
                            className='w-full h-full'
                            src={imagenPath}
                            alt='Imagen recuadro'
                        />
                    </div>

                    <div className='w-full flex justify-center items-center' style={{ height: '150px' }}>
                        <p className='text-base text-justify mt-2 pb-2 md:pb-4'>{parrafo}</p>
                    </div>

                    {link && (
                      <Link
                        className='text-white text-left bg-unicauca-azul hover:bg-unicauca-azulhover border-unicauca-azul border-2 rounded-lg p-2 transition-colors duration-200'
                        to={link}
                      >
                        Conoce más
                      </Link>
                    )}

                </div>
            </div>
        </div>
    );
}

Card.propTypes = {
    imagen: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    parrafo: PropTypes.string.isRequired,
    link: PropTypes.string,
    cultura: PropTypes.string,
    colorCultura: PropTypes.string,
};

export default Card;

