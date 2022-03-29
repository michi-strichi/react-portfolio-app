import React from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import './styles/About.css';
import Footer from './Footer';


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
            <div className='Container'>
                <div className='AboutBio'>
                    <div style={{ fontSize: "3rem" }}>
                        Hey, I'm Michael.
                    </div>
                    <div>
                        Pleasure to meet you, im really interested in Lorem ipsum dolor sit amet,
                        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                        ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                        diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
                        diam voluptua.
                    </div>
                    <div>
                        If you want to know more or maybe get to know me, drop me a line yo :)
                    </div>
                </div>
                <div className='AboutPortrait'>
                    <Canvas>
                        <ambientLight />
                        <gridHelper args={[1000, 1000]} />
                        <Box />
                    </Canvas>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About