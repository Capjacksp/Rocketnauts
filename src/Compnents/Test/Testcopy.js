import React, { useRef, useState } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const GltfModel1 = ({ image, scale = 1, position = [0, 0, 0] }) => {
  const ref = useRef();
  const gltf = useLoader(GLTFLoader, image);
  const [hovered, hover] = useState(false);
  useFrame((state, delta) => (ref.current.rotation.y += 0.03));
  return (
      <primitive
        ref={ref}
        object={gltf.scene}
        position={position}
        scale={hovered ? scale * 2 : scale}
        onClick={() => hover(!hovered)}
      />
  );
};

export default GltfModel1;