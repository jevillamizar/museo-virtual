import PropTypes from 'prop-types';

function Infotext(props) {

    return (
      <div className='w-full mx-10 my-2 md:my-50 max-w-screen-lg flex flex-col md:flex-row overflow-hidden'>
        
        <div className='w-full object-cover'>
          <div className='text-center p-5 md:p-5 font-lato font-normal leading-6'>
            <p className='text-5xl md:text-5xl font-semibold text-left pb-3 md:pb-5'>{props.titulo}</p>
            <p className='text-base text-justify mt-4 pb-2 md:pb-4'>{props.parrafo}</p>
          </div>
        </div>
      </div>
    );
}

Infotext.propTypes = {
  titulo: PropTypes.string.isRequired,
  parrafo: PropTypes.string.isRequired
};
  
export default Infotext;
