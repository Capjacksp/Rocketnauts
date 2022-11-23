import React, {useRef, Component} from 'react';
import { useGLTF } from '@react-three/drei';
import {useFrame} from '@react-three/fiber';


function  Testmodel({...props}){
  const group = useRef();
  const { nodes, materials } = useGLTF("/falcon_9.glb");
  useFrame((state, delta)=>(group.current.rotation.y+=0.03));
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[0, -Math.PI / 2, 0]} scale={1}>
            <group
              position={[0, 48.64999771, -0.00000213]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[1, 1, 0.23743337]}
            >
              <group
                position={[-1e-8, -1e-8, 18.70808411]}
                rotation={[0, 0, 6.5e-7]}
                scale={[0.99999994, 0.99999994, 4.21170759]}
              >
                <group position={[-1.2e-7, 0, 0]} rotation={[0, 0, Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={
                      nodes.Second_Stage_Raceways_F9_Second_Stage_0.geometry
                    }
                    material={materials.F9_Second_Stage}
                  />
                </group>
              </group>
              <group
                position={[-1e-8, -1e-8, -5.78921509]}
                rotation={[0, 0, -2.09416461]}
                scale={[0.99999994, 0.99999994, 4.21170759]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.Second_Stage_Detacher_Stage_F9_Second_Stage_0.geometry
                  }
                  material={materials.F9_Second_Stage}
                />
              </group>
              <group
                position={[6e-8, -1.35394561, -7.42536926]}
                rotation={[0, 0, Math.PI / 2]}
                scale={[0.99999988, 0.99999988, 4.21170712]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.Merlin_1D_Engine_Center001_Merlin_Engine_2_0.geometry
                  }
                  material={materials.Merlin_Engine_2}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.Merlin_1D_Engine_Center001_Merlin_Engine_3_0.geometry
                  }
                  material={materials.Merlin_Engine_3}
                />
              </group>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Second_Stage_F9_Second_Stage_0.geometry}
                material={materials.F9_Second_Stage}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Second_Stage_F9_Black_0.geometry}
                material={materials.F9_Black}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={[1, 1, 1.02526927]}>
              <group
                position={[0, 0, 40.64297867]}
                rotation={[0, 0, Math.PI / 2]}
                scale={[1, 1, 0.16750664]}
              >
                <group
                  position={[-1.1e-7, 1.2e-7, -2.99867249]}
                  rotation={[0, 0, -2.35619473]}
                  scale={[2.0441308, 2.0441308, 11.90251446]}
                >
                  <group
                    position={[1e-8, 1e-8, 0]}
                    rotation={[0, 0, -1.57056582]}
                    scale={0.48920551}
                  >
                    <group
                      position={[1.7e-7, -2e-8, 0]}
                      rotation={[0, 0, -Math.PI / 2]}
                      scale={[1, 1, 1.00000012]}
                    >
                      <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Grid_Fins_F9_Grid_Fin_0.geometry}
                        material={materials.F9_Grid_Fin}
                      />
                      <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Grid_Fins_Landing_Leg_Black_0.geometry}
                        material={materials.Landing_Leg_Black}
                      />
                      <mesh
                        castShadow
                        receiveShadow
                        geometry={
                          nodes.Grid_Fin_Controllers_F9_Black_0.geometry
                        }
                        material={materials.F9_Black}
                      />
                      <mesh
                        castShadow
                        receiveShadow
                        geometry={
                          nodes.Grid_Fin_Controllers_F9_Grid_Fin_0.geometry
                        }
                        material={materials.F9_Grid_Fin}
                      />
                      <mesh
                        castShadow
                        receiveShadow
                        geometry={
                          nodes.Grid_Fin_Controllers_Metal_White_Gold_0.geometry
                        }
                        material={materials.Metal_White_Gold}
                      />
                    </group>
                  </group>
                </group>
                <group
                  position={[-1.2e-7, 1e-8, -2.99867249]}
                  rotation={[0, 0, Math.PI / 2]}
                  scale={[1, 1, 5.82277536]}
                >
                  <group
                    position={[1.1e-7, -1.3e-7, 0]}
                    rotation={[0, 0, Math.PI]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Cold_Gas_Thrusters_First_Stage_F9_Black_0.geometry
                      }
                      material={materials.F9_Black}
                    />
                  </group>
                </group>
                <group
                  position={[2.2e-7, 5.6e-7, 0.62435913]}
                  rotation={[0, 0, -2.61799407]}
                  scale={[1, 1, 5.82277584]}
                >
                  <group rotation={[0, 0, -2.0943954]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Interstage_Engine_holder_extra_F9_Black_0.geometry
                      }
                      material={materials.F9_Black}
                    />
                  </group>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={
                      nodes.Interstage_Engine_holder_F9_Second_Stage_0.geometry
                    }
                    material={materials.F9_Second_Stage}
                  />
                </group>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Interstage_F9_Black_0.geometry}
                  material={materials.F9_Black}
                />
              </group>
              <group
                position={[-1.11129868, 1.3328793, 6.21945143]}
                rotation={[-2.41331992, -0.50134243, -0.50794212]}
                scale={[1, 0.98599046, 0.98951375]}
              >
                <group
                  position={[4.9e-7, -0.03226781, 0.43749237]}
                  rotation={[2.29534531, -0.00000106, 3.8e-7]}
                  scale={[0.99999994, 1, 1.00000012]}
                >
                  <group
                    position={[-2e-7, 0.00330615, 0.56977028]}
                    rotation={[-2.6e-7, 1.5e-7, -2e-8]}
                    scale={[0.99999988, 0.9999997, 0.99999988]}
                  >
                    <group
                      position={[-8e-8, -0.00000143, 0.38011143]}
                      rotation={[-1.1e-7, 1.6e-7, -1.5e-7]}
                      scale={[1.00000012, 1, 1.00000024]}
                    >
                      <group
                        position={[-0.00000215, -0.00000215, 1.38010931]}
                        rotation={[5e-8, -2e-8, 1.2e-7]}
                        scale={[1.00000012, 1, 0.99999994]}
                      >
                        <mesh
                          castShadow
                          receiveShadow
                          geometry={
                            nodes.Landing_Leg_Hydraulic_4003_Landing_Leg_Gray_0
                              .geometry
                          }
                          material={materials.Landing_Leg_Gray}
                        />
                      </group>
                      <mesh
                        castShadow
                        receiveShadow
                        geometry={
                          nodes.Landing_Leg_Hydraulic_3003_Landing_Leg_Gray_0
                            .geometry
                        }
                        material={materials.Landing_Leg_Gray}
                      />
                    </group>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Landing_Leg_Hydraulic_2003_Landing_Leg_Gray_0
                          .geometry
                      }
                      material={materials.Landing_Leg_Gray}
                    />
                  </group>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={
                      nodes.Landing_Leg_Hydraulic_1003_Landing_Leg_Gray_0
                        .geometry
                    }
                    material={materials.Landing_Leg_Gray}
                  />
                </group>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.Landing_Leg_Hydraulic_Holder_3_Landing_Leg_Black_0
                      .geometry
                  }
                  material={materials.Landing_Leg_Black}
                />
              </group>
              <group
                position={[1.33287942, 1.11129856, 6.2194519]}
                rotation={[-2.50041088, 0.61519064, 0.67585855]}
                scale={[1, 0.98599046, 0.98951375]}
              >
                <group
                  position={[-6.1e-7, -0.03226697, 0.43749309]}
                  rotation={[2.29534674, -0.00000168, 0.0000014]}
                  scale={[1, 0.99999988, 0.99999958]}
                >
                  <group
                    position={[-1e-8, 0.00330615, 0.56977105]}
                    rotation={[-2.4e-7, 1.6e-7, 8e-8]}
                    scale={[1, 0.99999988, 0.99999994]}
                  >
                    <group
                      position={[-1e-8, -0.00000167, 0.38011026]}
                      rotation={[-9e-8, 1.4e-7, -1.2e-7]}
                      scale={[0.99999988, 0.99999988, 1.00000024]}
                    >
                      <group
                        position={[-0.00000158, -0.00000143, 1.38011062]}
                        rotation={[4e-8, -6e-8, 1.1e-7]}
                        scale={[0.99999988, 0.99999994, 1]}
                      >
                        <mesh
                          castShadow
                          receiveShadow
                          geometry={
                            nodes.Landing_Leg_Hydraulic_4002_Landing_Leg_Gray_0
                              .geometry
                          }
                          material={materials.Landing_Leg_Gray}
                        />
                      </group>
                      <mesh
                        castShadow
                        receiveShadow
                        geometry={
                          nodes.Landing_Leg_Hydraulic_3002_Landing_Leg_Gray_0
                            .geometry
                        }
                        material={materials.Landing_Leg_Gray}
                      />
                    </group>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Landing_Leg_Hydraulic_2002_Landing_Leg_Gray_0
                          .geometry
                      }
                      material={materials.Landing_Leg_Gray}
                    />
                  </group>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={
                      nodes.Landing_Leg_Hydraulic_1002_Landing_Leg_Gray_0
                        .geometry
                    }
                    material={materials.Landing_Leg_Gray}
                  />
                </group>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.Landing_Leg_Hydraulic_Holder_2_Landing_Leg_Black_0
                      .geometry
                  }
                  material={materials.Landing_Leg_Black}
                />
              </group>
              <group
                position={[1.11129844, -1.33287954, 6.21945238]}
                rotation={[2.43344223, 0.53569063, 2.70808486]}
                scale={[1, 0.98599046, 0.98951375]}
              >
                <group
                  position={[-6.4e-7, -0.03226638, 0.43749404]}
                  rotation={[2.29534626, -0.00000137, 0.00000117]}
                  scale={[0.99999982, 1, 0.99999994]}
                >
                  <group
                    position={[-1.3e-7, 0.00330687, 0.56977034]}
                    rotation={[-2.5e-7, 1.7e-7, 2e-8]}
                    scale={[1, 0.99999982, 0.99999988]}
                  >
                    <group
                      position={[-1.3e-7, -0.00000143, 0.38011146]}
                      rotation={[-7e-8, 1.2e-7, -1e-7]}
                      scale={[1, 1, 1.00000024]}
                    >
                      <group
                        position={[-0.0000018, -0.00000119, 1.38010979]}
                        rotation={[8e-8, -2e-8, 7e-8]}
                        scale={[1.00000012, 1.00000012, 0.99999988]}
                      >
                        <mesh
                          castShadow
                          receiveShadow
                          geometry={
                            nodes.Landing_Leg_Hydraulic_4001_Landing_Leg_Gray_0
                              .geometry
                          }
                          material={materials.Landing_Leg_Gray}
                        />
                      </group>
                      <mesh
                        castShadow
                        receiveShadow
                        geometry={
                          nodes.Landing_Leg_Hydraulic_3001_Landing_Leg_Gray_0
                            .geometry
                        }
                        material={materials.Landing_Leg_Gray}
                      />
                    </group>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Landing_Leg_Hydraulic_2001_Landing_Leg_Gray_0
                          .geometry
                      }
                      material={materials.Landing_Leg_Gray}
                    />
                  </group>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={
                      nodes.Landing_Leg_Hydraulic_1001_Landing_Leg_Gray_0
                        .geometry
                    }
                    material={materials.Landing_Leg_Gray}
                  />
                </group>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.Landing_Leg_Hydraulic_Holder_1_Landing_Leg_Black_0
                      .geometry
                  }
                  material={materials.Landing_Leg_Black}
                />
              </group>
              <group
                position={[-1.33287966, -1.11129832, 6.21945286]}
                rotation={[2.52436522, -0.64081223, -2.52201552]}
                scale={[1, 0.98599052, 0.98951375]}
              >
                <group
                  position={[-6.9e-7, -0.03226757, 0.43749297]}
                  rotation={[2.29534602, -0.00000115, 0.00000111]}
                  scale={[1, 1, 0.99999982]}
                >
                  <group
                    position={[-5.1e-7, 0.00330615, 0.56976962]}
                    rotation={[-2e-7, 1.4e-7, 3e-8]}
                    scale={[1.00000024, 1, 1]}
                  >
                    <group
                      position={[-1.5e-7, -0.00000119, 0.38011113]}
                      rotation={[-1.1e-7, 1.1e-7, -1.5e-7]}
                      scale={[1, 1, 1.00000024]}
                    >
                      <group
                        position={[-0.00000188, -0.00000167, 1.38011086]}
                        rotation={[4e-8, -4e-8, 7e-8]}
                        scale={[0.99999994, 1.00000012, 0.99999988]}
                      >
                        <mesh
                          castShadow
                          receiveShadow
                          geometry={
                            nodes.Landing_Leg_Hydraulic_4004_Landing_Leg_Gray_0
                              .geometry
                          }
                          material={materials.Landing_Leg_Gray}
                        />
                      </group>
                      <mesh
                        castShadow
                        receiveShadow
                        geometry={
                          nodes.Landing_Leg_Hydraulic_3004_Landing_Leg_Gray_0
                            .geometry
                        }
                        material={materials.Landing_Leg_Gray}
                      />
                    </group>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Landing_Leg_Hydraulic_2004_Landing_Leg_Gray_0
                          .geometry
                      }
                      material={materials.Landing_Leg_Gray}
                    />
                  </group>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={
                      nodes.Landing_Leg_Hydraulic_1004_Landing_Leg_Gray_0
                        .geometry
                    }
                    material={materials.Landing_Leg_Gray}
                  />
                </group>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.Landing_Leg_Hydraulic_Holder_4_Landing_Leg_Black_0
                      .geometry
                  }
                  material={materials.Landing_Leg_Black}
                />
              </group>
              <group rotation={[0, 0, 1.48007166]} scale={[1, 1, 0.97535354]}>
                <group
                  rotation={[0, 0, -Math.PI / 4]}
                  scale={[0.99999994, 0.99999994, 1]}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Octaweb_F9_Octaweb_Black_0.geometry}
                    material={materials.F9_Octaweb_Black}
                  />
                </group>
              </group>
              <group
                rotation={[0, 0, 1.17809725]}
                scale={[0.99999994, 0.99999994, 0.97535354]}
              >
                <group rotation={[0, 0, -Math.PI / 4]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={
                      nodes.Merlin_1D_Engine_Outer_Merlin_Engine_2_0.geometry
                    }
                    material={materials.Merlin_Engine_2}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={
                      nodes.Merlin_1D_Engine_Outer_Merlin_Engine_1_0.geometry
                    }
                    material={materials.Merlin_Engine_1}
                  />
                </group>
                <group
                  position={[-0.51813263, 1.25088286, -0.09753352]}
                  rotation={[0, 0, -1.17809725]}
                  scale={[0.99999994, 0.99999994, 1]}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={
                      nodes.Merlin_1D_Engine_Center_Merlin_Engine_2_0.geometry
                    }
                    material={materials.Merlin_Engine_2}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={
                      nodes.Merlin_1D_Engine_Center_Merlin_Engine_1_0.geometry
                    }
                    material={materials.Merlin_Engine_1}
                  />
                </group>
                <group rotation={[0, 0, -Math.PI / 4]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Engine_Cloth_Engine_Cloth_Black_0.geometry}
                    material={materials.Engine_Cloth_Black}
                  />
                </group>
                <group rotation={[0, 0, -Math.PI / 4]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={
                      nodes.Engine_Holder_Detail_Outer_F9_Black_0.geometry
                    }
                    material={materials.F9_Black}
                  />
                </group>
              </group>
              <group
                position={[-1.97876489, 0.17311947, 16.74885368]}
                rotation={[0, 0, -0.08726645]}
                scale={[1, 1, 0.97535354]}
              >
                <group
                  position={[0, 0, 23.80830383]}
                  rotation={[-1e-8, 5.1e-7, 0]}
                  scale={[1.00000012, 1, 1]}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={
                      nodes.Raceway_Main_Detail_2_First_Stage_F9_Black_0
                        .geometry
                    }
                    material={materials.F9_Black}
                  />
                </group>
                <group rotation={[-1e-8, 5.1e-7, 0]} scale={[1.00000012, 1, 1]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={
                      nodes.Raceway_Main_Detail_First_Stage_F9_Black_0.geometry
                    }
                    material={materials.F9_Black}
                  />
                </group>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Raceway_Main_First_Stage_F9_Black_0.geometry}
                  material={materials.F9_Black}
                />
              </group>
              <group
                position={[1.97876489, -0.17311929, 16.74885368]}
                rotation={[0, 0, 3.05432653]}
                scale={[1, 1, 0.97535354]}
              >
                <group
                  position={[0, 0, -6.87716198]}
                  rotation={[-1e-8, 5.1e-7, 0]}
                  scale={[1.00000012, 1, 1]}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={
                      nodes.Raceway_Holders_2_First_Stage_F9_Black_0.geometry
                    }
                    material={materials.F9_Black}
                  />
                </group>
                <group rotation={[-1e-8, 5.1e-7, 0]} scale={[1.00000012, 1, 1]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={
                      nodes.Raceway_Holders_1_First_Stage_F9_Black_0.geometry
                    }
                    material={materials.F9_Black}
                  />
                </group>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Raceway_First_Stage_F9_Black_0.geometry}
                  material={materials.F9_Black}
                />
              </group>
              <group
                position={[-1e-8, -1e-8, 1.82774615]}
                rotation={[0, 0, 1.48030412]}
                scale={[1, 1, 0.97535354]}
              >
                <group
                  position={[0, 0, 1.2e-7]}
                  rotation={[0, 0, -Math.PI / 2]}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Landing_Leg_Holders_F9_Black_0.geometry}
                    material={materials.F9_Black}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={
                      nodes.Landing_Leg_Holders_Metal_White_Gold_0.geometry
                    }
                    material={materials.Metal_White_Gold}
                  />
                </group>
              </group>
              <group
                position={[1e-8, 2e-8, 1.82774615]}
                rotation={[0, 0, -2.07378697]}
                scale={[1, 1, 0.97535354]}
              >
                <group
                  position={[0, -1.7e-7, 1.2e-7]}
                  rotation={[0, 0, Math.PI]}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={
                      nodes.First_Stage_Bottom_Things_Landing_Leg_Black_0
                        .geometry
                    }
                    material={materials.Landing_Leg_Black}
                  />
                </group>
              </group>
              <group
                position={[-1e-8, -1e-8, 1.82774615]}
                rotation={[0, 0, 2.26566792]}
                scale={[0.99999994, 0.99999994, 0.97535354]}
              >
                <group
                  position={[0, -1.51051605, 0.10907423]}
                  rotation={[-1.7e-7, 1.5e-7, Math.PI / 2]}
                >
                  <group
                    position={[-0.38353598, 0.0006716, 8.73014355]}
                    rotation={[-5.8e-7, -4.6e-7, -5.7e-7]}
                    scale={[1, 0.99999976, 0.99999994]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={
                        nodes
                          .Landing_Leg_2_Hydraulic_Attachment_Metal_White_Gold_0
                          .geometry
                      }
                      material={materials.Metal_White_Gold}
                    />
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={
                        nodes
                          .Landing_Leg_2_Hydraulic_Attachment_Landing_Leg_Black_0
                          .geometry
                      }
                      material={materials.Landing_Leg_Black}
                    />
                  </group>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Landing_Leg_2_Landing_Leg_Black_0.geometry}
                    material={materials.Landing_Leg_Black}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Landing_Leg_2_Landing_Leg_White_0.geometry}
                    material={materials.Landing_Leg_White}
                  />
                </group>
                <group
                  position={[-1.51051593, 5e-8, 0.10907447]}
                  rotation={[4e-8, 1.7e-7, -2.4e-7]}
                >
                  <group
                    position={[-0.38353598, 0.0006704, 8.73014355]}
                    rotation={[-5.5e-7, -5.3e-7, 6e-8]}
                    scale={[1, 0.99999988, 0.99999994]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={
                        nodes
                          .Landing_Leg_1_Hydraulic_Attachment_Metal_White_Gold_0
                          .geometry
                      }
                      material={materials.Metal_White_Gold}
                    />
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={
                        nodes
                          .Landing_Leg_1_Hydraulic_Attachment_Landing_Leg_Black_0
                          .geometry
                      }
                      material={materials.Landing_Leg_Black}
                    />
                  </group>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Landing_Leg_1_Landing_Leg_Black_0.geometry}
                    material={materials.Landing_Leg_Black}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Landing_Leg_1_Landing_Leg_White_0.geometry}
                    material={materials.Landing_Leg_White}
                  />
                </group>
                <group
                  position={[0, 1.51051605, 0.10907471]}
                  rotation={[1.7e-7, -7e-8, -Math.PI / 2]}
                  scale={[1, 0.99999994, 1]}
                >
                  <group
                    position={[-0.38353598, 0.00067086, 8.73014545]}
                    rotation={[-5.7e-7, -3.8e-7, -7.6e-7]}
                    scale={[0.99999988, 1.00000012, 0.99999994]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={
                        nodes
                          .Landing_Leg_4_Hydraulic_Attachment_Metal_White_Gold_0
                          .geometry
                      }
                      material={materials.Metal_White_Gold}
                    />
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={
                        nodes
                          .Landing_Leg_4_Hydraulic_Attachment_Landing_Leg_Black_0
                          .geometry
                      }
                      material={materials.Landing_Leg_Black}
                    />
                  </group>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Landing_Leg_4_Landing_Leg_Black_0.geometry}
                    material={materials.Landing_Leg_Black}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Landing_Leg_4_Landing_Leg_White_0.geometry}
                    material={materials.Landing_Leg_White}
                  />
                </group>
                <group
                  position={[1.51051617, -1e-8, 0.10907495]}
                  rotation={[-1.6e-7, -1.7e-7, Math.PI]}
                >
                  <group
                    position={[-0.3835361, 0.00067094, 8.73014736]}
                    rotation={[-4.5e-7, -3.6e-7, -5.4e-7]}
                    scale={[0.99999994, 0.99999994, 0.99999988]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={
                        nodes
                          .Landing_Leg_3_Hydraulic_Attachment_Metal_White_Gold_0
                          .geometry
                      }
                      material={materials.Metal_White_Gold}
                    />
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={
                        nodes
                          .Landing_Leg_3_Hydraulic_Attachment_Landing_Leg_Black_0
                          .geometry
                      }
                      material={materials.Landing_Leg_Black}
                    />
                  </group>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Landing_Leg_3_Landing_Leg_Black_0.geometry}
                    material={materials.Landing_Leg_Black}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Landing_Leg_3_Landing_Leg_White_0.geometry}
                    material={materials.Landing_Leg_White}
                  />
                </group>
              </group>
              <group
                position={[-1.1e-7, 1.2e-7, 1.82774615]}
                rotation={[0, 0, 0.69487172]}
                scale={[1, 1, 0.97535354]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.Landing_Leg_Clamps_Landing_Leg_Black_0.geometry
                  }
                  material={materials.Landing_Leg_Black}
                />
              </group>
              <group
                position={[-1e-8, -1e-8, 46.11027145]}
                rotation={[0, 0, 0.00023073]}
                scale={[1, 1, 0.97535354]}
              >
                <group
                  rotation={[0, 0, -2.09439492]}
                  scale={[1.00000012, 1.00000012, 1]}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={
                      nodes.Second_Stage_Detacher_Interstage_F9_Black_0.geometry
                    }
                    material={materials.F9_Black}
                  />
                </group>
              </group>
              <group
                position={[-1.1e-7, 1.2e-7, 40.14068222]}
                rotation={[0, 0, 0.78562886]}
                scale={[1, 1, 0.97535354]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Grid_Fin_Holders_F9_First_Stage_0.geometry}
                  material={materials.F9_First_Stage}
                />
              </group>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.First_Stage_F9_Octaweb_Black_0.geometry}
                material={materials.F9_Octaweb_Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.First_Stage_F9_First_Stage_0.geometry}
                material={materials.F9_First_Stage}
              />
            </group>
            <group
              position={[0, 57.97720337, -0.00000253]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <group rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <group position={[0, 0, 0.00000381]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Fairing_2_Detail_F9_Fairing_0.geometry}
                    material={materials.F9_Fairing}
                  />
                </group>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Fairing_2_F9_Fairing_0.geometry}
                  material={materials.F9_Fairing}
                />
              </group>
              <group rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <group position={[0, 0, 0.00000381]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Fairing_1_Detail_F9_Fairing_0.geometry}
                    material={materials.F9_Fairing}
                  />
                </group>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Fairing_1_F9_Fairing_0.geometry}
                  material={materials.F9_Fairing}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );

}



export default Testmodel;