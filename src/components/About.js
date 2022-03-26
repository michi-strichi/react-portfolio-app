import React from 'react'
import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from 'drei';
// import { boxBufferGeometry } from 'three';

import './styles/About.css';
import Footer from './Footer';

const Box = () => {
  return (
    <mesh>
      <sphereGeometry args={[1, 32, 32]} />
      <meshPhongMaterial color="red" />
    </mesh>
  )
}

const About = () => {
  return (
    <div className='About'>
      <div className='AboutBio'>
        Hi, I'm Michael Hochreiter and im really interested in ....
      </div>
      <div className='AboutPortrait'>
        <Canvas>
          <Box />
        </Canvas>
      </div>
      <Footer />
    </div>
  )
}

export default About