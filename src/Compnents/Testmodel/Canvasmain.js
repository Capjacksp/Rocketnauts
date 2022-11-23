import React, { useEffect, useRef, useState } from "react";
import Showmodel from "./Showmodel";
import data from "./Data.json";
import {
  Canvas,
  useFrame,
  useThree,
  extend,
  useLoader,
} from "@react-three/fiber";

export const Canvasmain = () => {
    const sizeref = useRef();
    const [dimensions, setDimensions] = useState({ width:0, height:0});
    useEffect(()=>{
        if(sizeref.current){
            setDimensions({
                width: sizeref.current.offsetWidth,
                height: sizeref.current.offsetHeight
            });
        }
    },[]);
    const x ='modelmod';
  return (
    <div
    id={x}
    style={{
        width: "100%",
        height: "100vh",
        zIndex: "10",
        position: "relative",
    }}
    >
      <Canvas 
        ref={sizeref}
      >
        <Showmodel props={data} prop={x} />
      </Canvas>
    </div>
  );
};
