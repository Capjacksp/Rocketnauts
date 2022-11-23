import React, { Suspense, useRef, useState } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import {FBXLoader} from "three/examples/jsm/loaders/FBXLoader"
const GltfModel = ({ scale = 1, position = [0, 0, 0], position1=[10,0,0] }) => {
  const ref = useRef();
  const gltf = useLoader(FBXLoader, '/falcon-9.fbx');
  const gltfbx = useLoader(GLTFLoader, '/Electron1.glb');
  const [hovered, hover] = useState(false);
  useFrame((state, delta) => (ref.current.rotation.y += 0.03));
  return (
    <Suspense fallback={null}>
      
      <primitive
        ref={ref}
        object={gltf}
        position={position}
        scale={hovered ? scale * 2 : scale}
        onClick={() => hover(!hovered)}
      />
    </Suspense>
  );
};

export default GltfModel;