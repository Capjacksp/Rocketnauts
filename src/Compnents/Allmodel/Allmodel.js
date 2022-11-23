import React, {useRef, useEffect } from 'react';
import {Canvas} from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from "../Model/Model";
import './Allmodel.css';
export default function Allmodel() {
    
  return (
    <div className='3dmodel'>
    <Canvas>
      <ambientLight intensity={0.5}/>
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1}/>
      <pointLight position={[-10, -10, -10]}/>
      <Model position={[-1.2, 0, 0]}/>
      <Model position={[1.2, 0, 0]}/>
      <OrbitControls enableZoom = {true}/> 
    </Canvas>
    
    </div>
  )
}
