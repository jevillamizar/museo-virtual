import VolanteCanvas from "../canvas/Volante";
import Volante2Canvas from "../canvas/Volante2";
import Volante3Canvas from "../canvas/Volante3";
import PropTypes from 'prop-types';

function Datos(props) {

    const canvasComponents = {
       Volante: VolanteCanvas,
       Volante2: Volante2Canvas,
       Volante3: Volante3Canvas,
    };
    
    const CanvasComponent = canvasComponents[props.nombre];

    return (
        <div className='w-3/4 md:w-full mt-3 md:mt-5 overflow-hidden flex flex-col md:flex-row items-center justify-center'>
            <div className='w-full md:w-1/3 lg:w-2/5 h-64 md:h-44 lg:h-72'>
                {CanvasComponent ? <CanvasComponent /> : <div>Error: Component not found</div>}
            </div>

            <div className='w-full sm:w-3/4 mt-5 md:mt-0 md:w-1/3 lg:w-1/4 bg-white shadow-lg 
            overflow-hidden rounded-lg border-8 border-green-600'>

                <div className='text-center p-10 md:p-10 font-lato font-normal leading-6'>
                    <p className='text-lg'> <strong>Nombre: </strong> {props.nombre}</p>
                    <p className='text-lg'> <strong>Obtención: </strong> {props.obtencion}</p>
                    <p className='text-lg'> <strong>Origen: </strong> {props.origen}</p>
                    <p className='text-lg'> <strong>Temporalidad: </strong> {props.temporalidad}</p>
                    <p className='text-lg'> <strong>Tipo: </strong> {props.tipo}</p>
                </div>
            </div>
        </div>
    );
}

Datos.propTypes = {
    nombre: PropTypes.string.isRequired,
    obtencion: PropTypes.string.isRequired,
    origen: PropTypes.string.isRequired,
    temporalidad: PropTypes.string.isRequired,
    tipo: PropTypes.string.isRequired
};

export default Datos;
