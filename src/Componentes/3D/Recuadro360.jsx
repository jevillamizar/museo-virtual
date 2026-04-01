import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function Recuadro360(props) {
  const imagenPath = `/imagenes360/${props.imagen}.png`;

  return (
    <div className='w-full sm:w-3/4 md:w-full mx-10 my-5 md:my-50 max-w-screen-lg flex flex-col 
        md:flex-row bg-white shadow-lg overflow-hidden rounded-lg border-2 border-gray-300'>
      
      <div className='w-full md:w-4/7'>
        <div className='text-center p-10 md:p-10 font-lato font-normal leading-6'>
          <p className='text-3xl font-semibold'>{props.titulo}</p>
          <p className='text-lg mt-2.5 pb-7'>{props.subtitulo}</p>
          <p className='text-base text-justify pb-6 md:pb-4'>{props.parrafo}</p>
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
      
      <div className='w-full md:w-3/7 flex items-center justify-center'>
        <div className='w-full h-full object-contain md:p-5'>
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <mesh>
              <sphereGeometry args={[500, 60, 40]} />
              <meshBasicMaterial map={new THREE.TextureLoader().load(imagenPath)} side={THREE.BackSide} />
            </mesh>
          </Canvas>
        </div>
      </div>
    </div>
  );
}

Recuadro360.propTypes = {
  imagen: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  subtitulo: PropTypes.string.isRequired,
  parrafo: PropTypes.string.isRequired,
  link: PropTypes.string,
};

export default Recuadro360;
