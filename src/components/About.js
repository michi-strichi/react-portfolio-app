import React, { useRef, Suspense } from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

//import { useGLTF } from '@react-three/drei'

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

function Michi_Model({ ...props }) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/Michi_3D_smiling.glb')
    return (
      <group ref={group} {...props} dispose={null}>
        <mesh geometry={nodes.michi_smiling.geometry} material={materials['Michi_FINAL_MAT.002']} />
      </group>
    )
  }

const About = ({ theme, min781 }) => {
    return (
        <div className={'About' + ' ' + theme}>
            <div className='Wrapper'>
                <div className='Portrait'>
                    <div className='CanvasWrapper'>
                        <Canvas>
                            <ambientLight />
                            <OrbitControls />
                            {/* <gridHelper args={[1000, 1000]} /> */}
                            <Suspense fallback={null} >
                                <Michi_Model />
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
                        <span className="C">C</span>urrently I'm studying media technology &amp; design and am really digging it. I come from a 3D background, but interaction has found its way into my interests. Now i work in all the places where interactivity meets the third dimension.<br />
                        When I'm not playing around with 3D models, i'm probably either cooking pasta, shooting a basketball or hiking through some forest.
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
                        <span className="Book">Epic of Gilgamesh</span> by ???
                        <br />
                        <span className="Book">Flatland</span> by Edwin Abbott Abbott
                        <br />
                        <span className="Book">Der Schimmelreiter</span> by Theodor Storm
                    </p>

                    <h3>
                        Favourite Animals
                    </h3>
                    <p>
                        Cicada sitting on a toad's back
                    </p>
                </div>
            </div>
            <Footer theme={theme} />
        </div>
    )
}

export default About