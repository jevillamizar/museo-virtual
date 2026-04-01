import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../3D/Loader";

const Volante2 = () => {
  const volante2 = useGLTF("./3DObjects/Volante2/scene.gltf");
  
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
        object={volante2.scene}
        scale={0.25}
        position={[0, 0, 0]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const Volante2Canvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
        
        />
        <Volante2 />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};


export default Volante2Canvas;