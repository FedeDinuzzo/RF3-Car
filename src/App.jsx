import './App.css'
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, SpotLight } from '@react-three/drei'
import { Ground } from './components/Ground.jsx'

function CarShow() {
  return (
    <>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
      
      <PerspectiveCamera makeDefault fav={50} position={[3, 2, 5]} />
      
      {/* <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color={'red'} />
      </mesh> */}

      {/* let color = new Color(0, 0, 0); */}
      <color args={[0, 0, 0]} attach='background' />

      {/* 
        let spotlight = new SpotLight();
        Spotlight.intensity = 1.5;
        spotlight.position.set( ... ); 
      */}
      <SpotLight
        color={[1, 0.25, 0.7]}
        intensity={1.5}
        angle={0.6}
        penumbra={0.5}
        position={[5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      
      <SpotLight
        color={[0.14, 0.5, 1]}
        intensity={2}
        angle={0.6}
        penumbra={0.5}
        position={[-5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />

      <Ground />
    </>
  )
}

function App() {
  return (
    <Suspense fallback={null}>
      <Canvas shadows>
        <CarShow />
      </Canvas>
    </Suspense>
  )
}

export default App
