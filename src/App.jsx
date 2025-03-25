import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import './style.css';
import { OrbitControls } from '@react-three/drei';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import Cyl from './Cyl';
import Navbar from './navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Canvas flat camera={{ fov: 35 }} className="w-full h-screen">
        <OrbitControls />
        <ambientLight intensity={1.9} />
        <Cyl />
        <EffectComposer>
          <Bloom
            mipmapBlur
            intensity={4.0}
            luminanceThreshold={0.36}
            luminanceSmoothing={0.2}
          />
        </EffectComposer>
      </Canvas>
    </>
  );
};

export default App;