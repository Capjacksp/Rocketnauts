import React, { Suspense, useRef, useState, useEffect, Component } from "react";
import * as THREE from "three";
import { Canvas, useLoader, useFrame, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  Stars,
  Cloud,
  Text,
  PointMaterial,
  Points,
  PerspectiveCamera,
  Html
} from "@react-three/drei";
import Testmodel from "./Testmodel";
import Testmodelname from "./Testmodelname";
import Testline from "./TestLine";
import Model from "../Model/Model";
import Testmodel2 from "./Testmodel2";
import TestControls from "./TestControls";
import Controldiv from "./Controldiv";
import Modelmars from "../Model/Modelmars";
import { Camera, Clock, cloneUniformsGroups } from "three";
import { hasSelectionSupport } from "@testing-library/user-event/dist/utils";
import * as TWEEN from "@tweenjs/tween.js";
import data from './Data.json';
function Showmodel({props,len}) {
  console.warn(props);
  const ref = useRef(null);
  const orbitcontrols = useRef();
  const { camera } = useThree();
  camera.fov = 20;
  camera.far = 1000;
  camera.near = 1;
  camera.aspect = window.innerWidth / window.innerHeight;
  if(camera.position.x ==0 && camera.position.y ==0 && camera.position.z==0){
    camera.position.set(0, 0, 100);
  }
  // console.log(orbitcontrols.current)
  useFrame((state) => {
    if (!!orbitcontrols.current) {
      orbitcontrols.current.maxZoom = 400;
      orbitcontrols.current.minZoom = 100;
      orbitcontrols.current.maxDistance = 500;
      orbitcontrols.current.enableZoom = true;
      orbitcontrols.current.enableRotate = false;
      orbitcontrols.current.enablePan = true;
      orbitcontrols.current.minAzimuthAngle = -Math.PI / 2;
      orbitcontrols.current.maxAzimuthAngle = Math.PI / 2;
      orbitcontrols.current.mouseButtons.LEFT = 2;
      orbitcontrols.current.mouseButtons.RIGHT = 0;
      orbitcontrols.current.touches.ONE = THREE.TOUCH.PAN ;
      orbitcontrols.current.touches.TWO = THREE.TOUCH.DOLLY_PAN ;
      orbitcontrols.current.update();
    }
  });
  const p = new THREE.Vector2();
  p.x = 0;
  p.y = 0;
  function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
  }
  function isClick(e) {
    requestAnimationFrame(animate);
    const v = { x: 0, y: 0 };
    new TWEEN.Tween(v)
      .to(
        {
          x: 30,
          y: 10,
          z: 0,
        },
        0
      )
      .easing(TWEEN.Easing.Quadratic.Out)
      .onUpdate(() => orbitcontrols.current.target.set(v.x, v.y, 0))
      .start();
    const coords = {
      x: camera.position.x,
      y: camera.position.y,
      z: camera.position.z,
    };
    if (camera.position.z < 100) {
      new TWEEN.Tween(coords)
        .to(
          {
            x: camera.position.x,
            y: camera.position.y,
            z: 200,
          },
          2000
        )
        .easing(TWEEN.Easing.Quadratic.Out)
        .onUpdate(() =>
          camera.position.set(camera.position.x, camera.position.y, coords.z)
        )
        .start();
    }

    new TWEEN.Tween(coords)
      .to(
        {
          x: 30,
          y: 10,
          z: 100,
        },
        2000
      )
      .easing(TWEEN.Easing.Quadratic.Out)
      .onUpdate(() => camera.position.set(coords.x, coords.y, coords.z))
      .start();
  }
  let f =false;
  function isClicked(event){
      event.preventDefault();
      if(f==true){
      if(event.pointerType === "mouse"){
      p.x = ( event.clientX / window.innerWidth ) * 2 - 1;
      p.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
      }
      else if(event.pointerType === 'touchmove' || event.pointerType === 'touchstart' || event.pointerType === 'touchend'|| event.pointerType === 'touchcancle'){
          p.x = ( event.pageX / window.innerWidth ) * 2 - 1;
          p.y = - ( event.pageY / window.innerHeight ) * 2 + 1;
      }

      if(!!orbitcontrols.current){
          let worldPoint = new THREE.Vector3();
          worldPoint.x = p.x;
          worldPoint.y = p.y;
          worldPoint.z = 0;
          worldPoint.unproject( camera );
          orbitcontrols.current.target.x= worldPoint.x;
          orbitcontrols.current.target.y= worldPoint.y;
          orbitcontrols.current.target.z= 0;
          let px = camera.position.z+90;
          if(camera.position.x < -px){
                camera.position.x = -px;
            }
          else if(camera.position.x > px){
                let margin = camera.position.x - px ;
                camera.position.x -= margin;
          }
          // camera.position.y = 10;
          orbitcontrols.current.update()
          console.log(camera.position.x, camera.position.y, camera.position.z )
          console.log(orbitcontrols.current)

      }
    }
  }
  

    useEffect(() => {
      window.addEventListener('mousedown', (e)=>{f=true;})
      window.addEventListener('mousemove', isClicked, false);
      window.addEventListener('mouseup', (e)=>{f=false;})
      window.addEventListener('resize', resize);
      window.addEventListener('touchstart', (e)=>{f=true;});
      window.addEventListener('touchmove', isClicked, false);
      window.addEventListener('touchend', (e)=>{f=false;});
    return () => {
      window.removeEventListener('mousedown', (e)=>{f=true;})
      window.removeEventListener('mousemove', isClicked, false);
      window.removeEventListener('mouseup', (e)=>{f=false;})
      window.removeEventListener('resize', resize);
      window.removeEventListener('touchstart', (e)=>{f=true;});
      window.removeEventListener('touchmove', isClicked, false);
      window.removeEventListener('touchend', (e)=>{f=false;});
    };
  }, []);

  function resize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    window.resizeTo(window.innerWidth, window.innerHeight);
  }
  
  let arr = new Array();
  let pos = new Array();
  let dis = 10;
  for(let i=0;i<len;i++){
    if(props[i]==true){
      let x = data.rockets[i];
      arr=[...arr,x];
      pos=[...pos,dis];
      dis+=10;
    }
  }
  arr.sort((a,b)=>a.height - b.height);
  console.log(arr);
  return (
    <>
    <Html position={[0,100,0]}>
          <div
          style={{
            width: "auto",
            position: "fixed",
            top: "50px",
            left: "50px",
          }}
          >
            <button>submit</button>
          </div>
        </Html>
      <Suspense ref={ref} fallback={null}>
        <ambientLight />
        <PerspectiveCamera position={camera} />
        {/* <Camera position={[0, 0, 10]} /> */}
        <pointLight position={[-10, 100, 0]} />
        <pointLight position={[0, -1000, 0]} />
        <pointLight position={[-10, 100, -2000]} />
        <pointLight position={[1000, 0, 0]} />
        <pointLight position={[-1000, 0, 0]} />
        <Stars
          radius={200}
          depth={50}
          count={30000}
          factor={4}
          saturation={5}
          fade
          speed={1}
        />
        <Stars
          color={"#EC6258"}
          position={[-10, -100, 10]}
          radius={200}
          depth={20}
          count={200}
          factor={7}
          saturation={0}
          fade
          speed={0}
        />
        <Text fontSize={3} position={[0, -0.1, 50]}>
          Rocket nauts
        </Text>
        <Cloud
          color={"#EC6257"}
          position={[-10, -100, 10]}
          opacity={0.5}
          speed={0.4}
          width={10}
          depth={1.5}
          segments={20}
        />
        <Model position={[-1, 0, 0]} />
        <Modelmars scale={2} position={[0, 0, -500]} />
        
        {arr.map((x,idx)=>(
          x.model_path==="Testmodel"?<Testmodel key={idx} position={[dis[idx],0,0]}/>:<Testmodel position={[dis[idx],0,0]}/>
        ))}
        <OrbitControls ref={orbitcontrols} />
      </Suspense>
    </>
  );
}
export default Showmodel;
