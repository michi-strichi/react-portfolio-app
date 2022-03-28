import React from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import './styles/About.css';
import Footer from './Footer';
import ColorTheme from './ColorTheme';


const Box = () => {
  return (
    <mesh>
      <OrbitControls />
      <boxBufferGeometry attach='geometry' />
      <meshPhongMaterial attach="material" color="red" />
    </mesh>
  )
}

const About = () => {
  return (
    <div className='About'>
      <ColorTheme />
      <div className='AboutBio'>
        Hi, I'm Michael Hochreiter and im really interested in ....
      </div>
      <div className='AboutPortrait'>
        <Canvas>
          <ambientLight />
          <gridHelper args={[5000, 1000]} />
          <Box />
        </Canvas>
      </div>
      <Footer />
    </div>
  )
}

export default About