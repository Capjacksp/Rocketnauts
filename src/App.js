import React, { Suspense, useEffect, useRef, useState } from "react";
import data from "./Compnents/Testmodel/Data.json";
// import { Canvas } from '@react-three/fiber';
import Allmodel from "./Compnents/Allmodel/Allmodel";
import ModelViewer from "./Compnents/Test/Test1";
// import Testmodel from './Compnents/Testmodel/Testmodel';
import Showmodel from "./Compnents/Testmodel/Showmodel";
// import Newmodel from "./Compnents/Testmodel/Showmodel";
import {
  Canvas,
  useFrame,
  useThree,
  extend,
  useLoader,
} from "@react-three/fiber";
import { Html, Line, Text, useTexture } from "@react-three/drei";
import { useAspect } from "@react-three/drei";
import * as THREE from "three";
import { Canvasmain } from "./Compnents/Testmodel/Canvasmain";
import './App.css';
function App() {
  const Background = (props) => {
    const { gl } = useThree();
    const texture = useTexture("/m4.jpg", (tex) => {
      texture.image.width = window.innerWidth;
      texture.image.height = window.innerHeight;
      console.log(tex.image.width, tex.image.height);
    });

    const formatted = new THREE.WebGLCubeRenderTarget(
      texture.image.height
    ).fromEquirectangularTexture(gl, texture);
    return <primitive attach="background" object={formatted.texture} />;
  };
  let r = data.rockets.length;
  let ar = new Array(r);
  for(let i=0;i<r;i++){
    ar[i]=false;
  }
 
  const [fact,setFact] = useState(ar)
  const [ifClicked, setIfClicked] = useState(false);

  function changechecked(event,i){
    if(fact[i]==true){
      let x = [...fact];
      x[i]=false;
      setFact(x)
    }
    else{
      let x = [...fact];
      x[i]=true;
      setFact(x)
    }
  }
  function handelclick(){
    setIfClicked(!ifClicked);
    console.log(ifClicked);
  }

console.log(fact);
  const rocketson ={
    overflowY:"auto", 
    position:"absolute", 
    color:"white", 
    backgroundColor:"black",
    display:"block",
    marginTop:"20px"
  }
  const rockets = {
    display:"none"
  }
  return (
    <div style={{margin:"0px", width:"100%", height:"100vh"}}>
      
        <button className="add-rocket" onClick={()=>handelclick()} style={{ width:"100px", height:"20px", display:"block", color:"white",position:"absolute", backgroundColor:"black"}} >Add rocket</button>
        <div style={ifClicked==true?rocketson:rockets} >
          {data.rockets.map((x,idx)=>(
          <div key={idx} style={{display:"flex", justifyContent:"space-around", width:"auto", backgroundColor:"black" }}>
          <h2 >{x.name}</h2>
          <input
            checked={fact[idx]}
            value={x.name}
            onChange={(e) => changechecked(e,idx)}
            type="checkbox"
            className="inputcheck"
            style={{ width: "25px", height: "25px", color: "black" }}
          />
          </div>
          ))}
          <br/>
          
        </div> 
     
      <Canvas style={{width:'100%', height:'100vh',zIndex:'10', position:'realtive'}}>
        <Showmodel props={fact} len={r}/>
      </Canvas>

    </div>
  );
}

export default App;
