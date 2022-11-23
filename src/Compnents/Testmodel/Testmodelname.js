import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Testmodelname({...props}) {
  const g= useRef();
  const { nodes, materials } = useGLTF("/Project Name.glb");
  return (
    <group ref={g} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["3D_Text_-_F"].geometry}
        material={materials["Coastal Breeze 1"]}
        position= {props.position}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.05}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["3D_Text_-_a"].geometry}
        material={materials["Coastal Breeze 1"]}
        position={[11, 100, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.05}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["3D_Text_-_l"].geometry}
        material={materials["Coastal Breeze 1"]}
        position={[12, 100, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.05}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["3D_Text_-_c"].geometry}
        material={materials["Coastal Breeze 1"]}
        position={[13, 100, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.05}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["3D_Text_-_o"].geometry}
        material={materials["Coastal Breeze 1"]}
        position={[14, 100, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.05}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["3D_Text_-_n"].geometry}
        material={materials["Coastal Breeze 1"]}
        position={[15, 100, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.05}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["3D_Text_-_9"].geometry}
        material={materials["Coastal Breeze 1"]}
        position={[16, 100, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.05}
      />
    </group>
  );
}
