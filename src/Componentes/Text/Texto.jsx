import PropTypes from 'prop-types';

function Texto(props) {

    return (
        <div className='items-center justify-center w-3/4 md:w-2/3 lg:w-1/4 mx-10 my-2 md:my-50 mt-10 lg:mt-0 max-w-screen-lg flex flex-col md:flex-row overflow-hidden'>
            <div className='w-full object-cover'>
                  <div className='text-center font-lato font-normal leading-6'>
                        <p className='text-2xl font-semibold pb-3 md:pb-5'>{props.titulo}</p>
                        <p className='text-base text-justify mt-1 pb-2 md:pb-4'>{props.parrafo}</p>
                  </div>
            </div>
        </div>
    );
}

Texto.propTypes = {
    titulo: PropTypes.string.isRequired,
    parrafo: PropTypes.string.isRequired,
};

export default Texto;