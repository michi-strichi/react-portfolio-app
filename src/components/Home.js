import React, { useState, useRef, Suspense } from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, PerspectiveCamera } from '@react-three/drei';
import './styles/Home.scss';
import { randFloat } from 'three/src/math/MathUtils';


function Dandelion_Model({ ...props }) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/planetModels_TEST/dandelion_TEST.glb')
    return (
        <group ref={group} {...props} dispose={null}>
            <mesh position={props.pos} geometry={nodes.dandelion.geometry} material={materials.dandelion_mat} />
        </group>
    )
}
useGLTF.preload('/planetModels_TEST/dandelion_TEST.glb')

function Klee_Model({ ...props }) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/planetModels_TEST/klee_TEST.glb')
    return (
        <group ref={group} {...props} dispose={null}>
            <mesh position={props.pos} geometry={nodes.klee.geometry} material={materials.klee_mat} />
        </group>
    )
}
useGLTF.preload('/planetModels_TEST/klee_TEST.glb')

function Shroom_Model({ ...props }) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/planetModels_TEST/shroom_TEST.glb')
    return (
        <group ref={group} {...props} dispose={null}>
            <mesh position={props.pos} geometry={nodes.mushroom.geometry} material={materials.shroom_mat} />
        </group>
    )
}
useGLTF.preload('/planetModels_TEST/shroom_TEST.glb')





function Planet_Model({ ...props }) {
    const group = useRef()
    const { nodes, materials } = useGLTF('planetModels_TEST//planet_TEST.glb')
    return (
        <group ref={group} {...props} dispose={null}>
            <mesh position={props.pos} geometry={nodes.planet.geometry} material={materials.planet_mat} />
        </group>
    )
}
useGLTF.preload('/planetModels_TEST/planet_TEST.glb')



const Home = ({ theme }) => {

    const [brush, setBrush] = useState('dandelion');

    const [klees, setKlees] = useState([]);
    // const [dandelions, setDandelions] = useState([]);
    // const [mushrooms, setMushrooms] = useState([]);

    const addKlee = (pos) => {
        setKlees([...klees, pos]);
        console.log(klees);
    }

    return (
        <div className={'Home' + ' ' + theme}>
            <button onClick={() => setBrush('dandelion')} className='button'>dandelion</button>
            <button onClick={() => setBrush('mushroom')} className='button'>mushroom</button>
            <button onClick={() => setBrush('klee')} className='button'>klee</button>
            <div>selected brush: {brush}</div>

            <div className='CanvasWrapper'>
                <Canvas>
                    <OrbitControls />   
                    <ambientLight intensity={1} />
                    <Suspense fallback={null}>
                        <Planet_Model onClick={(e) => console.log("you clicked", e.object.name)}/>

                        {klees.map((klee, index) => (
                            <Klee_Model key={index} pos={klee} />
                        ))}

                    </Suspense>
                </Canvas>
            </div>
        </div>
    )
}

export default Home