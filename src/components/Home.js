import React, { useState, useRef, Suspense, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Stars, Environment, Cloud, Sky } from '@react-three/drei';
import './styles/Home.scss';
import Controls from './Controls';
import { useSpring, a } from '@react-spring/three';
import { randFloat } from 'three/src/math/MathUtils';
import { Vector3 } from 'three';



const rotationSpeed = 0.001;

const Clouds = () => {

    return (
        <group>
            <Cloud position={[-5, 6, 15]} speed={0.2} opacity={0.4} segments={5} />
            <Cloud position={[8, 6, -10]} speed={0.2} opacity={0.35} segments={5} />
        </group>
    )
}


const KleeModel = ({ ...props }) => {
    const innerGroup = useRef()
    const outerGroup = useRef()
    const { nodes, materials } = useGLTF('/planetModels/klee_compressed.glb')

    const [created, setCreated] = useState(false);

    const springProps = useSpring({
        scale: created ? props.scaleLarge : props.scaleSmall,
        config: { mass: 0.5, tension: 250, friction: 20, precision: 0.01, velocity: 0 }
    });

    useEffect(() => {
        innerGroup.current.lookAt(0, 0, 0);
        innerGroup.current.rotateZ(randFloat(0, Math.PI * 2));
        setCreated(true);
    }, []);

    useFrame(() => {
        outerGroup.current.rotation.y += rotationSpeed;
    });

    return (
        <group ref={outerGroup}>
            <a.group ref={innerGroup} {...props} dispose={null} visible={created ? true : false} position={props.pos} scale={springProps.scale}>
                <mesh geometry={nodes.Cylinder090.geometry} material={materials.klee_flower_petal_MAT} />
                <mesh geometry={nodes.Cylinder090_1.geometry} material={materials.klee_flower_stem_MAT} />
                <mesh geometry={nodes.Cylinder090_2.geometry} material={materials.klee_leaf_MAT} />
                <mesh geometry={nodes.Cylinder090_3.geometry} material={materials.flower_stem_MAT} />
            </a.group>
        </group>
    )
}

useGLTF.preload('/planetModels/klee_compressed.glb')


const MushroomModel = ({ ...props }) => {
    const innerGroup = useRef()
    const outerGroup = useRef()
    const { nodes, materials } = useGLTF('/planetModels/mushroom_compressed.glb')

    const [created, setCreated] = useState(false);

    const springProps = useSpring({
        scale: created ? props.scaleLarge : props.scaleSmall,
        config: { mass: 0.5, tension: 250, friction: 20, precision: 0.01, velocity: 0 }
    });

    useEffect(() => {
        innerGroup.current.lookAt(0, 0, 0);
        innerGroup.current.rotateZ(randFloat(0, Math.PI * 2));
        setCreated(true);
    }, []);

    useFrame(() => {
        outerGroup.current.rotation.y += rotationSpeed;
    });

    return (
        <group ref={outerGroup}>
            <a.group ref={innerGroup} {...props} dispose={null} visible={created ? true : false} position={props.pos} scale={springProps.scale}>
                <mesh geometry={nodes.Circle076.geometry} material={materials.mushroom_trunk_MAT} />
                <mesh geometry={nodes.Circle076_1.geometry} material={materials.mushroom_hat_MAT} />
            </a.group>
        </group>
    )
}

useGLTF.preload('/planetModels/mushroom_compressed.glb')



const DandelionModel = ({ ...props }) => {
    const innerGroup = useRef();
    const outerGroup = useRef();
    const { nodes, materials } = useGLTF('/planetModels/dandelion_compressed.glb')

    const [created, setCreated] = useState(false);

    const springProps = useSpring({
        scale: created ? props.scaleLarge : props.scaleSmall,
        config: { mass: 0.5, tension: 250, friction: 20, precision: 0.01, velocity: 0 }
    });

    useEffect(() => {
        innerGroup.current.lookAt(0, 0, 0);
        innerGroup.current.rotateZ(randFloat(0, Math.PI * 2));
        materials.dandelion_petal_leaves_MAT.alphaTest = 0.1;
        materials.dandelion_petal_leaves_MAT.transparent = true;
        materials.dandelion_petal_leaves_MAT.side = 'THREE.DoubleSide';
        setCreated(true);
    }, []);

    useFrame(() => {
        outerGroup.current.rotation.y += rotationSpeed;
    });

    return (
        <group ref={outerGroup} >
            <a.group ref={innerGroup} {...props} dispose={null} visible={created ? true : false} position={props.pos} scale={springProps.scale}>
                <mesh geometry={nodes.Icosphere010.geometry} material={materials.dandelion_center_MAT} />
                <mesh geometry={nodes.Icosphere010_1.geometry} material={materials['flower_stem_MAT.001']} />
                <mesh geometry={nodes.Icosphere010_2.geometry} material={materials.dandelion_petal_trunk_MAT} />
                <mesh geometry={nodes.Icosphere010_3.geometry} material={materials.dandelion_petal_stem_MAT} />
                <mesh geometry={nodes.Icosphere010_4.geometry} material={materials.dandelion_petal_leaves_MAT} />
            </a.group>
        </group>
    )
}

useGLTF.preload('/planetModels/dandelion_compressed.glb')


const PlanetModel = ({ ...props }) => {
    const group = useRef()
    const { nodes, materials } = useGLTF('/planetModels/planet_compressed.glb')

    useFrame(() => {
        group.current.rotation.y += rotationSpeed;
    });

    return (
        <group ref={group} {...props} dispose={null} scale={[2, 2, 2]} renderOrder={1}>
            <mesh geometry={nodes.Mesh_01799.geometry} material={materials['Material_0.002']} />
            <mesh name={'planet'} geometry={nodes.Mesh_01799_1.geometry} material={materials.planet_core_MAT} />
        </group>
    )
}

useGLTF.preload('/planetModels/planet_compressed.glb')








const Home = ({ theme, min781, min1281, homeHintEnabled, setHomeHintEnabled }) => {

    const [klees, setKlees] = useState([]);
    const [mushrooms, setMushrooms] = useState([]);
    const [dandelions, setDandelions] = useState([]);

    const [brush, setBrush] = useState('klee');

    const [moved, setMoved] = useState(false);

    const addFormOfLife = (formOfLife, pos) => {
        switch (formOfLife) {
            case 'klee':
                setKlees([...klees, pos]);
                break;
            case 'mushroom':
                setMushrooms([...mushrooms, pos]);
                break;
            case 'dandelion':
                setDandelions([...dandelions, pos]);
                break;
        }

    };


    const clearPlanet = () => {
        setKlees([]);
        setMushrooms([]);
        setDandelions([]);
    };


    const handlePointerUp = (e) => {
        e.stopPropagation();
        if (!moved) {
            e.intersections.forEach(intersection => {
                if (intersection.object.name === 'planet') {
                    switch (brush) {
                        case 'klee':
                            addFormOfLife('klee', intersection.point);
                            break;
                        case 'mushroom':
                            addFormOfLife('mushroom', intersection.point);
                            break;
                        case 'dandelion':
                            addFormOfLife('dandelion', intersection.point);
                            break;
                    }
                }
            });
        }
    };


    return (
        <div className={'Home' + ' ' + 'noselect' + ' ' + theme}>
            <div className='MichaelHochreiter' >
                <p className='Name'>Michael Hochreiter</p>
                <p className='Title'>3D Developer</p>
            </div>

            <Controls theme={theme} brush={brush} setBrush={setBrush} clearPlanet={clearPlanet} />
            {homeHintEnabled && <span className='Hint'>rotate me! <br />click me!</span>}
            <div className='CanvasWrapper' onPointerDown={() => setMoved(false)} onPointerMove={() => setMoved(true)}>
                <Canvas dpr={window.devicePixelRatio}>
                    <OrbitControls dampingFactor={0.3} enablePan={false} minDistance={3.5} maxDistance={8} rotateSpeed={0.5} />
                    <Suspense fallback={null}>
                        <ambientLight intensity={theme === "Light" ? 0.7 : 0.5} color={theme === "Light" ? 'white' : '#d7d8fc'} />
                        <directionalLight color={theme === "Light" ? '#ffdea6' : '#8e8aff'} position={theme === "Light" ? [0, 4, 2] : [2, 5, 0]} intensity={theme === "Light" ? 0.2 : 0.6} />
                        <Environment files={theme === "Light" ? '/hdris/lauter_waterfall.hdr' : '/hdris/satara_night.hdr'} />
                        {theme === 'Light' && <Sky />}
                        {theme === 'Light' && <Clouds />}
                        {theme === 'Dark' && <Stars radius={400} count={1500} />}
                            <PlanetModel onPointerUp={(e) => { handlePointerUp(e); setHomeHintEnabled(false); }} />
                            {klees.map((klee, index) => (
                                <KleeModel
                                    key={index}
                                    pos={klee}
                                    scaleSmall={[0.5, 0.5, 0.5]}
                                    scaleLarge={[0.95, 0.95, 0.95]}
                                />
                            ))}
                            {mushrooms.map((mushroom, index) => (
                                <MushroomModel
                                    key={index}
                                    pos={mushroom}
                                    scaleSmall={[0.5, 0.5, 0.5]}
                                    scaleLarge={[1.3, 1.3, 1.3]}
                                />
                            ))}
                            {dandelions.map((dandelion, index) => (
                                <DandelionModel
                                    key={index}
                                    pos={dandelion}
                                    scaleSmall={[0.5, 0.5, 0.5]}
                                    scaleLarge={[1.5, 1.5, 1.5]} />
                            ))}
                    </Suspense>
                </Canvas>
            </div>
        </div >
    )
}

export default Home

