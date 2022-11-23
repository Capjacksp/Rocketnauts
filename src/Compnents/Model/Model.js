import React,{useRef, useState,useEffect} from 'react';
import {useFrame, useLoader,useThree} from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
function Model(props){
  const ref = useRef();
  const colorMap = useLoader(TextureLoader, '/product.png');
  
  return (
    <mesh
    {...props}
        scale={1}>
        <boxGeometry args={[90,1,15]} />
        <meshStandardMaterial map={colorMap} metalness={1} />
    </mesh>
  )
}
export default Model;

