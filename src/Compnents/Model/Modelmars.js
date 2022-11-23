import React,{useRef, useState} from 'react';
import {useFrame, useLoader} from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import {Sphere} from '@react-three/drei'
function Modelmars(props){
  const ref = useRef();
  const colorMap = useLoader(TextureLoader, '/mars1.jpg');
  useFrame((state, delta)=>(ref.current.rotation.y+=0.0008));
  return (
    <mesh
    {...props}
        ref={ref} rotateX={0.03}>
        <sphereGeometry args={[100,1000,1000]} scale={2}/>
        <meshStandardMaterial map={colorMap} metalness={1} />
    </mesh>
  )
}
export default Modelmars;

