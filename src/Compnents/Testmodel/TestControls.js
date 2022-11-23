import React,{useRef, useState} from 'react';
import {useFrame} from '@react-three/fiber';

function Model(props){
  const ref = useRef();
  
  return (
    <mesh
    {...props}
        ref={ref}
        scale={1}>
        <boxGeometry args={[30,1,20]} />
        <meshStandardMaterial color={'#EC6257'}/>    
    </mesh>
  )
}
export default Model;

