import React, { useState, useRef, Suspense, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, TrackballControls, useGLTF, Stars, Environment, Cloud, Sky } from '@react-three/drei';
import './styles/Home.scss';
import Controls from './Controls';
import { useSpring, a } from '@react-spring/three';
import { randFloat } from 'three/src/math/MathUtils';

import { MoonLoader } from 'react-spinners';

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
    const { nodes, materials } = useGLTF('/planetModels/klee.glb')

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
                <mesh geometry={nodes.Cylinder002.geometry} material={materials['klee_flower_petal_MAT.004']} />
                <mesh geometry={nodes.Cylinder002_1.geometry} material={materials['klee_flower_stem_MAT.003']} />
                <mesh geometry={nodes.Cylinder002_2.geometry} material={materials['klee_leaf_MAT.003']} />
                <mesh geometry={nodes.Cylinder002_3.geometry} material={materials['flower_stem_MAT.003']} />
            </a.group>
        </group>
    )
}
useGLTF.preload('/planetModels/klee.glb')


const MushroomModel = ({ ...props }) => {
    const innerGroup = useRef()
    const outerGroup = useRef()
    const { nodes, materials } = useGLTF('/planetModels/mushroom.glb')

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
useGLTF.preload('/planetModels/mushroom.glb')



const DandelionModel = ({ ...props }) => {
    const innerGroup = useRef();
    const outerGroup = useRef();
    const { nodes, materials } = useGLTF('/planetModels/dandelion.glb')

    const [created, setCreated] = useState(false);

    const springProps = useSpring({
        scale: created ? props.scaleLarge : props.scaleSmall,
        config: { mass: 0.5, tension: 250, friction: 20, precision: 0.01, velocity: 0 }
    });

    useEffect(() => {
        innerGroup.current.lookAt(0, 0, 0);
        innerGroup.current.rotateZ(randFloat(0, Math.PI * 2));
        materials['dandelion_petal_leaves_MAT.002'].alphaTest = 0.1;
        materials['dandelion_petal_leaves_MAT.002'].transparent = true;
        materials['dandelion_petal_leaves_MAT.002'].side = 'THREE.DoubleSide';
        setCreated(true);
    }, []);

    useFrame(() => {
        outerGroup.current.rotation.y += rotationSpeed;
    });

    return (
        <group ref={outerGroup} >
            <a.group ref={innerGroup} {...props} dispose={null} visible={created ? true : false} position={props.pos} scale={springProps.scale}>
                <mesh geometry={nodes.Icosphere013.geometry} material={materials['dandelion_petal_leaves_MAT.002']} />
                <mesh geometry={nodes.Icosphere013_1.geometry} material={materials['dandelion_center_MAT.001']} />
                <mesh geometry={nodes.Icosphere013_2.geometry} material={materials['dandelion_petal_trunk_MAT.002']} />
                <mesh geometry={nodes.Icosphere013_3.geometry} material={materials['dandelion_petal_stem_MAT.001']} />
                <mesh geometry={nodes.Icosphere013_4.geometry} material={materials['flower_stem_MAT.004']} />
            </a.group>
        </group>
    )
}
useGLTF.preload('/planetModels/dandelion.glb')


const PlanetModel = ({ ...props }) => {
    const group = useRef()
    const { nodes, materials } = useGLTF('/planetModels/planet.glb')

    useFrame(() => {
        group.current.rotation.y += rotationSpeed;
    });

    useEffect(() => {
        props.setLoading(false);
    }, []);

    return (
        <group ref={group} {...props} dispose={null} scale={[1.5, 1.5, 1.5]} renderOrder={1}>
            <mesh geometry={nodes.Mesh_01799.geometry} material={materials['Material_0.002']} />
            <mesh name={'planet'} geometry={nodes.Mesh_01799_1.geometry} material={materials.planet_core_MAT} />
        </group>
    )
}
useGLTF.preload('/planetModels/planet.glb')


const Home = ({ theme, min781, min1281, homeHintEnabled, setHomeHintEnabled }) => {

    const [klees, setKlees] = useState([]);
    const [mushrooms, setMushrooms] = useState([]);
    const [dandelions, setDandelions] = useState([]);

    const [brush, setBrush] = useState('klee');

    const [loading, setLoading] = useState(true);

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

    const handlePlanetClick = (e) => {
        e.stopPropagation();
        if (true) {
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

    const printIsTouch = () => {
        if ("ontouchstart" in document.documentElement) {
            alert("touch")
        }
        else {
            alert("no touch")
        }
    };


    return (
        <div className={'Home' + ' ' + 'noselect' + ' ' + theme}>
            <div className='MichaelHochreiter' >
                <p className='Name'>Michael Hochreiter</p>
                <p className='Title'>3D Developer</p>
            </div>

            <Controls theme={theme} brush={brush} setBrush={setBrush} clearPlanet={clearPlanet} />


            {!loading && homeHintEnabled && <span className='Hint'>rotate me! <br />click me!</span>}
            <div className='CanvasWrapper'>
                {loading &&
                    <div className='LoaderWrapper'>
                        <MoonLoader className={'Loader'} color={theme === 'Light' ? '#050505' : '#ffffff'} loading={true} size={30} speedMultiplier={0.5} />
                    </div>
                }
                <Canvas dpr={window.devicePixelRatio}>
                    <OrbitControls dampingFactor={0.3} enablePan={false} minDistance={3.2} maxDistance={8} rotateSpeed={0.5} />
                    <Suspense fallback={null}>
                        <ambientLight intensity={theme === "Light" ? 0.7 : 0.5} color={theme === "Light" ? 'white' : '#d7d8fc'} />
                        <directionalLight color={theme === "Light" ? '#ffdea6' : '#8e8aff'} position={theme === "Light" ? [0, 4, 2] : [2, 5, 0]} intensity={theme === "Light" ? 0.2 : 0.6} />
                        <Environment files={theme === "Light" ? '/hdris/lauter_waterfall.hdr' : '/hdris/satara_night.hdr'} />
                        {theme === 'Light' && <Sky />}
                        {theme === 'Light' && <Clouds />}
                        {theme === 'Dark' && <Stars radius={400} count={1500} />}

                        <PlanetModel onPointerUp={(e) => { setHomeHintEnabled(false); }} onClick={(e) => { handlePlanetClick(e); printIsTouch()}} setLoading={setLoading} />
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

