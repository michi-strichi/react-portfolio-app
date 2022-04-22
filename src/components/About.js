import React from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import './styles/About.scss';
import Footer from './Footer';


const Box = () => {

    return (
        <mesh>
            <OrbitControls />
            <boxBufferGeometry attach='geometry' />
            <meshPhongMaterial attach="material" color="black" />
        </mesh>
    )
}

const About = ({ theme }) => {
    return (
        <div className={'About' + ' ' + theme}>
            <div className='Container'>
                <div className='Portrait'>
                    <Canvas>
                        <ambientLight />
                        <gridHelper args={[1000, 1000]} />
                        <Box />
                    </Canvas>
                </div>
                <div className='Bio'>
                    <h1>
                        Hey, I'm Michael.
                    </h1>
                    <h4>
                        Currently I'm studying media technology in the fourth semester and really digging it. I come from a 3D background, but interaction has found its way into my interests. Now i work in all the places where interactivity meets the third dimension. I think the possibilities that this combination offers are exciting and yet to be fully explored.<br />
                        When I'm not playing around with 3D models, i'm probably either cooking pasta, shooting a basketball or looking at plants in the woods.
                    </h4>

                    <h3>
                        Skills
                    </h3>
                    <p>
                        Drinking water really quickly, great basketball hustle
                    </p>

                    <h3>
                        Current Reads
                    </h3>
                    <p>
                        Epic of Gilgamesh by ??? <br />
                        Flatland by Edwin Abbott Abbott
                    </p>

                    <h3>
                        Favourite Animals
                    </h3>
                    <p>
                        Cicada sitting on a toads back
                    </p>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default About