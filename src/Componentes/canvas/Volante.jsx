import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../3D/Loader";

const Volante = () => {
  const volante = useGLTF("./3DObjects/Volante/scene.gltf");
  
  return (
    <mesh>
      <hemisphereLight intensity={0.35} groundColor="black" />
      <directionalLight position={[0, 10, 0]} intensity={1} />
      <ambientLight intensity={0.5} />
      <spotLight
        position={[0, 20, 10]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <primitive
        object={volante.scene}
        scale={0.28}
        position={[0.4, 0.5, 0]}
        rotation={[0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const VolanteCanvas = () => {
  return (
    <div role="img" aria-label="Modelo 3D interactivo del volante de huso Volante 1" className="w-full h-full">
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 10], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
         
        />
        <Volante />
      </Suspense>
      <Preload all />
    </Canvas>
    </div>
  );
};


export default VolanteCanvas;

