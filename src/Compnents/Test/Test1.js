import React, { Suspense, useRef,useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";
import GltfModel from "./Test";
import GltfModel1 from "./Testcopy";
import GltfModel2 from "./Testcopy2";
const ModelViewer = ({scale = 0.1, position = [0,-500, 0], position1 = [150,-500, 0], position2 = [300, -500, 0] }) => {
  var camera = new THREE.PerspectiveCamera( 750, 1, 0.1, 10 );

  return (
    <div >
    <Canvas camera={{
          position: [0, 0, 150]
        }} style={{width:'100%', height:'100vh', backgroundColor:'red'}}  >
      <Suspense fallback={null}>
      <ambientLight intensity={0.6} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
        <GltfModel2 scale={scale} position={position1}  />
        <OrbitControls  />
      </Suspense>
      <Suspense fallback={null}>
      <ambientLight intensity={0.6} />
      <spotLight position={[50, 50, 10]} angle={0.25} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
        <GltfModel1 image  = {'/Electron1.glb'} scale={scale} position={position2} />
        <OrbitControls  />
      </Suspense> 
      <Suspense fallback={null}>
      <ambientLight intensity={0.6} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
        <GltfModel scale={scale} position={position} />
        <OrbitControls />
      </Suspense>
    </Canvas>
    </div>
    
  );
};

export default ModelViewer;