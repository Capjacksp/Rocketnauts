import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
export default function Electronmodel({...props}) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/Electron1.glb");
  useFrame((state, delta)=>(group.current.rotation.y+=0.03));
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group position={[0, 0, -16.32]} rotation={[-Math.PI / 2, 0, 0]}>
              <group position={[0, 0.01, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_7.geometry}
                  material={materials.Electron_Metal}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6.geometry}
                  material={materials.Electron}
                />
              </group>
              <group position={[0, 0.01, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_10.geometry}
                  material={materials.Electron_Metal}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_9.geometry}
                  material={materials.Electron}
                />
              </group>
            </group>
            <group position={[0, 0, 0.03]} rotation={[-Math.PI / 2, 0, 0]}>
              <group
                position={[0, 0.46, 0]}
                rotation={[-Math.PI, -Math.PI / 4, -Math.PI]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_14.geometry}
                  material={materials.Electron_Metal}
                />
              </group>
              <group scale={[0.5, 1, 0.5]}>
                <group position={[0, 0.36, 0.79]} scale={[2, 1, 2]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_18.geometry}
                    material={materials.Electron_Nozzle}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_19.geometry}
                    material={materials.Electron}
                  />
                </group>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_16.geometry}
                  material={materials.Electron}
                />
              </group>
              <group rotation={[0, Math.PI / 2, 0]} scale={[0.5, 1, 0.5]}>
                <group position={[0, 0.36, 0.79]} scale={[2, 1, 2]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_23.geometry}
                    material={materials.Electron_Nozzle}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_24.geometry}
                    material={materials.Electron}
                  />
                </group>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_21.geometry}
                  material={materials.Electron}
                />
              </group>
              <group
                rotation={[-Math.PI, Math.PI / 4, -Math.PI]}
                scale={[0.5, 1, 0.5]}
              >
                <group position={[0, 0.36, 0.79]} scale={[2, 1, 2]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_28.geometry}
                    material={materials.Electron_Nozzle}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_29.geometry}
                    material={materials.Electron}
                  />
                </group>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_26.geometry}
                  material={materials.Electron}
                />
              </group>
              <group rotation={[-Math.PI, 0, -Math.PI]} scale={[0.5, 1, 0.5]}>
                <group position={[0, 0.36, 0.79]} scale={[2, 1, 2]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_33.geometry}
                    material={materials.Electron_Nozzle}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_34.geometry}
                    material={materials.Electron}
                  />
                </group>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_31.geometry}
                  material={materials.Electron}
                />
              </group>
              <group
                rotation={[-Math.PI, -Math.PI / 4, -Math.PI]}
                scale={[0.5, 1, 0.5]}
              >
                <group position={[0, 0.36, 0.79]} scale={[2, 1, 2]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_38.geometry}
                    material={materials.Electron_Nozzle}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_39.geometry}
                    material={materials.Electron}
                  />
                </group>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_36.geometry}
                  material={materials.Electron}
                />
              </group>
              <group rotation={[0, -Math.PI / 2, 0]} scale={[0.5, 1, 0.5]}>
                <group position={[0, 0.36, 0.79]} scale={[2, 1, 2]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_43.geometry}
                    material={materials.Electron_Nozzle}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_44.geometry}
                    material={materials.Electron}
                  />
                </group>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_41.geometry}
                  material={materials.Electron}
                />
              </group>
              <group rotation={[0, Math.PI / 4, 0]} scale={[0.5, 1, 0.5]}>
                <group position={[0, 0.36, 0.79]} scale={[2, 1, 2]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_48.geometry}
                    material={materials.Electron_Nozzle}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_49.geometry}
                    material={materials.Electron}
                  />
                </group>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_46.geometry}
                  material={materials.Electron}
                />
              </group>
              <group
                position={[0, 0.23, 0]}
                rotation={[0, Math.PI / 4, 0]}
                scale={[0.5, 1, 0.5]}
              >
                <group
                  position={[0, 0.13, 0]}
                  rotation={[0, -Math.PI / 4, 0]}
                  scale={[2, 1, 2]}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_53.geometry}
                    material={materials.Electron_Nozzle}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_54.geometry}
                    material={materials.Electron}
                  />
                </group>
                <group position={[0, 6.49, 0]} rotation={[0, -Math.PI / 4, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_56.geometry}
                    material={materials.Electron_White}
                  />
                </group>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_51.geometry}
                  material={materials.Electron}
                />
              </group>
              <group rotation={[0, -Math.PI / 4, 0]} scale={[0.5, 1, 0.5]}>
                <group position={[0, 0.36, 0.79]} scale={[2, 1, 2]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_60.geometry}
                    material={materials.Electron_Nozzle}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_61.geometry}
                    material={materials.Electron}
                  />
                </group>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_58.geometry}
                  material={materials.Electron}
                />
              </group>
              <group position={[-0.62, 6.09, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_64.geometry}
                  material={materials.Electron_Metal}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_63.geometry}
                  material={materials.Electron}
                />
              </group>
              <group rotation={[0, 0.42, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_66.geometry}
                  material={materials.Electron_Metal}
                />
              </group>
              <group position={[0, 1.06, 0]} rotation={[0, -Math.PI / 4, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_68.geometry}
                  material={materials.Electron_Metal}
                />
              </group>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_12.geometry}
                material={materials.Electron}
              />
            </group>
            <group position={[0, 0, -14.31]} rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_73.geometry}
                material={materials.Electron_Nozzle}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_74.geometry}
                material={materials.Electron}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_71.geometry}
                material={materials.Electron_Gray}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_70.geometry}
                material={materials.Electron}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

