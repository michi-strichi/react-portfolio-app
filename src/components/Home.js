import React, { useState, useRef, Suspense } from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import './styles/Home.scss';


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
            <mesh rotation={[0.8, -0.2, 0.5]} position={props.pos} geometry={nodes.klee.geometry} material={materials.klee_mat} />
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
            <mesh name={'planet'} position={props.pos} geometry={nodes.planet.geometry} material={materials.planet_mat} />
        </group>
    )
}
useGLTF.preload('/planetModels_TEST/planet_TEST.glb')



const Home = ({ theme }) => {

    const [brush, setBrush] = useState('klee');

    const [klees, setKlees] = useState([]);
    // const [dandelions, setDandelions] = useState([]);
    // const [mushrooms, setMushrooms] = useState([]);

    const addKlee = (pos, rot) => {
        setKlees([...klees, [pos, rot]]);
        console.log(klees);
    };


    const handlePointerDown = (e) => {
        console.log(e);

        const intersection = e.intersections[0];
        
        if (intersection.object.name === 'planet') {

            switch (brush) {
                case 'klee':
                    console.log('adding klee');
                    addKlee(intersection.point, intersection.face.normal);
                    break;
                case 'dandelion':
                    console.log('adding dandelion');
                    break;
                case 'mushroom':
                    console.log('adding mushroom');
                    break;
            }
        }

    };

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
                        <Planet_Model onPointerUp={(e) => handlePointerDown(e)} />

                        {klees.map((klee, index) => (
                            <Klee_Model key={index} pos={klee[0]} rot={klee[1]} />
                        ))}

                    </Suspense>
                </Canvas>
            </div>
        </div>
    )
}

export default Home