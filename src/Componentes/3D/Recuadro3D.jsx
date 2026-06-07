import { useState } from 'react';
import PropTypes from 'prop-types';
import Volante3Canvas from "../canvas/Volante3";
import Hint3D from "../UI/Hint3D";

function Recuadro3D(props) {
    const [hintVisible, setHintVisible] = useState(true);
    const linkPath = `/${props.link}`;

    return (
        <div className='w-full mx-10 my-10 md:my-50 max-w-screen-lg flex flex-col md:flex-row bg-white border border-unicauca-grisClaro rounded-lg shadow-lg overflow-hidden'>
            
            <div className='w-full md:w-4/7'>
                <div className='text-center p-10 md:p-10 font-lato font-normal leading-6'>
                    <p className='text-lg font-semibold'>{props.titulo}</p>
                    <p className='text-lg mt-2.5 pb-7'>{props.subtitulo}</p>
                    <p className='text-base text-justify'>{props.parrafo}</p>
                    {props.link && <a className='text-blue-500 text-left'  href={linkPath}>Leer más</a>}
                </div>
            </div>
            
            <div
                className='relative w-full md:w-3/7 flex items-center justify-center'
                onPointerDown={() => setHintVisible(false)}
            >
                <Volante3Canvas />
                {hintVisible && <Hint3D onFirstInteraction={() => setHintVisible(false)} />}
            </div>
            
        </div>
    );
}

Recuadro3D.propTypes = {
    titulo: PropTypes.string.isRequired,
    subtitulo: PropTypes.string.isRequired,
    parrafo: PropTypes.string.isRequired,
    link: PropTypes.string 
};

export default Recuadro3D;
