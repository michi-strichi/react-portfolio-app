import React, { useRef, Suspense } from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

import './styles/About.scss';
import Footer from './Footer';

function Michi_Model({ ...props }) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/Michi_3D_smiling.glb')
    return (
        <group ref={group} {...props} dispose={null}>
            <mesh position={[0, -0.6, 0]} rotation={[0, -2, 0]} scale={[1.1, 1.1, 1.1]} geometry={nodes.michi_smiling.geometry} material={materials['Michi_FINAL_MAT.002']} />
        </group>
    )
}

const About = ({ theme, min781, aboutHintEnabled, setAboutHintEnabled }) => {
    return (
        <div className={'About' + ' ' + theme}>
            <div className='Wrapper'>
                <div className='Portrait'>
                    {aboutHintEnabled && <span className='Hint'>rotate me!</span>}
                    <div className='CanvasWrapper' onPointerUp={() => setAboutHintEnabled(false)}>
                        <Canvas dpr={window.devicePixelRatio}>
                            <OrbitControls autoRotate dampingFactor={0.3} enablePan={false} enableZoom={false} autoRotateSpeed={-0.5} />

                            <Suspense fallback={null}>
                                <ambientLight intensity={0.9} />
                                <Michi_Model  />
                            </Suspense>
                        </Canvas>
                    </div>

                </div>
                <div className='Bio' >
                    {!min781 &&
                        <div className='PullBarWrapper'>
                            <div className='PullBar' />
                        </div>
                    }
                    <h1>
                        Hi ✌️ I'm Michael
                    </h1>
                    <h4>
                        <span className="C">C</span>urrently I'm studying media technology &amp; design in Hagenberg and am really digging it. I come from a 3D background, but interactive media has found its way into my interests. Now i work in all the places where interactivity meets the three dimensions.<br />
                        When I'm not playing around with 3D models, i'm probably either cooking pasta, blasting music way too loud or hiking through some forest.
                    </h4>

                    <h3>
                        Work Experience
                    </h3>
                    <p>
                        Interaction Developer at <a href='https://www.re-spaces.com' target='_blank'>Responsive Spaces</a>, Linz
                        <br />
                        3D Design Intern at <a href='https://www.crazyeye.at' target='_blank'>Crazy Eye</a>, Vienna
                    </p>

                    <h3>
                        Current Reads
                    </h3>
                    <p>
                        <span className="Book">Moby Dick</span> by Herman Melville
                        <br />
                        <span className="Book">Don't Sleep, There are Snakes</span> by Daniel Everett
                        <br />
                        <span className="Book">Fear and Loathing in Las Vegas</span> by Hunter S. Thompson
                    </p>

                    <h3>
                        Favourite Animals
                    </h3>
                    <p>
                        Cicada sitting on a toad's back
                    </p>

                    <h3>
                        My Mantra
                    </h3>
                    <p>
                        "Observe the world like a child and design it like an adult"
                    </p>
                </div>
            </div>
            <Footer theme={theme} />
        </div>
    )
}

export default About