import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import React, { Suspense, useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(){
    return(
        <div>
        <Canvas camera={{ position: [0, 0, 25] }} style={{ height: "500px",width: "100%" }} >
            <Suspense fallback={null}>
            <ambientLight intensity={4} />
            <directionalLight position={[10, 10, 10]} />

            
            <Model2 position={[-2, 0, 0]} />
            <OrbitControls enableZoom={false}  />
            </Suspense>
          </Canvas>
        </div>
    )
}

function Model2(props) {
    const { nodes, materials } = useGLTF('/window/138.gltf')
    return (
      <group {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['138001'].geometry}
          material={materials.wood}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        />
      </group>
    )
  }


function Scene(props) {
    const { nodes, materials } = useGLTF('/window/138.gltf')
    return (
      <group {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['138001'].geometry}
          material={materials.wood}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
    )
  }