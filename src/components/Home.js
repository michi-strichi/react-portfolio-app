import React, { useState, useRef, Suspense, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import './styles/Home.scss';
import Controls from './Controls';
import { BoxBufferGeometry, Mesh } from 'three';
import { useSpring, a } from '@react-spring/three';


const Klee_Model = ({ ...props }) => {
    const group = useRef()
    const { nodes, materials } = useGLTF('/planetModels/klee_compressed.glb')

    const [created, setCreated] = useState(false);

    const springProps = useSpring({
        scale: created ? props.scaleLarge : props.scaleSmall,
        config: { mass: 0.5, tension: 250, friction: 20, precision: 0.01, velocity: 0 }
    });

    useEffect(() => {
        group.current.lookAt(0, 0, 0);
        setCreated(true);
    });

    return (
      <a.group ref={group} {...props} dispose={null} visible={created ? true : false} position={props.pos} scale={springProps.scale}>
        <mesh geometry={nodes.Cylinder090.geometry} material={materials.klee_flower_petal_MAT} />
        <mesh geometry={nodes.Cylinder090_1.geometry} material={materials.klee_flower_stem_MAT} />
        <mesh geometry={nodes.Cylinder090_2.geometry} material={materials.klee_leaf_MAT} />
        <mesh geometry={nodes.Cylinder090_3.geometry} material={materials.flower_stem_MAT} />
      </a.group>
    )
  }
  
  useGLTF.preload('/planetModels/klee_compressed.glb')


  const Mushroom_Model = ({ ...props }) => {
    const group = useRef()
    const { nodes, materials } = useGLTF('/planetModels/mushroom_compressed.glb')

    const [created, setCreated] = useState(false);

    const springProps = useSpring({
        scale: created ? props.scaleLarge : props.scaleSmall,
        config: { mass: 0.5, tension: 250, friction: 20, precision: 0.01, velocity: 0 }
    });

    useEffect(() => {
        group.current.lookAt(0, 0, 0);
        setCreated(true);
    });

    return (
      <a.group ref={group} {...props} dispose={null} visible={created ? true : false} position={props.pos} scale={springProps.scale}>
        <mesh geometry={nodes.Circle076.geometry} material={materials.mushroom_trunk_MAT} />
        <mesh geometry={nodes.Circle076_1.geometry} material={materials.mushroom_hat_MAT} />
      </a.group>
    )
  }
  
  useGLTF.preload('/planetModels/mushroom_compressed.glb')
  


  const Dandelion_Model = ({ ...props }) => {
    const group = useRef()
    const mesh = useRef();
    const { nodes, materials } = useGLTF('/planetModels/dandelion_compressed.glb')

    const [created, setCreated] = useState(false);

   

    const springProps = useSpring({
        scale: created ? props.scaleLarge : props.scaleSmall,
        config: { mass: 0.5, tension: 250, friction: 20, precision: 0.01, velocity: 0 }
    });

    useEffect(() => {
        group.current.lookAt(0, 0, 0);
        setCreated(true);
        mesh.current.material.transparent = true;
    });

    return (
      <a.group ref={group} {...props} dispose={null}  visible={created ? true : false} position={props.pos} scale={springProps.scale}>
        <mesh geometry={nodes.Icosphere010.geometry} material={materials.dandelion_center_MAT} />
        <mesh geometry={nodes.Icosphere010_1.geometry} material={materials['flower_stem_MAT.001']} />
        <mesh geometry={nodes.Icosphere010_2.geometry} material={materials.dandelion_petal_trunk_MAT} />
        <mesh geometry={nodes.Icosphere010_3.geometry} material={materials.dandelion_petal_stem_MAT} />
        <mesh ref={mesh} geometry={nodes.Icosphere010_4.geometry} material={materials.dandelion_petal_leaves_MAT} />
      </a.group>
    )
  }
  
  useGLTF.preload('/planetModels/dandelion_compressed.glb')





const Planet_Model = ({ ...props }) => {
    const group = useRef()
    const { nodes, materials } = useGLTF('planetModels_TEST/planet_TEST.glb')

    const mesh = useRef();

    return (
        <group visible={true} ref={group} {...props} dispose={null}>
            <mesh ref={mesh} name={'planet'} position={props.pos} scale={[2, 2, 2]} geometry={nodes.planet.geometry} material={materials.planet_mat}>
                <meshStandardMaterial attach='material' color='lime' />
            </mesh>
        </group>
    )
}
useGLTF.preload('/planetModels_TEST/planet_TEST.glb')





const Home = ({ theme }) => {

    const [klees, setKlees] = useState([]);
    const [mushrooms, setMushrooms] = useState([]);
    const [dandelions, setDandelions] = useState([]);


    const [brush, setBrush] = useState('klee');

    const [moved, setMoved] = useState(false);

    const addFormOfLife = (formOfLife, pos, rot) => {
        switch (formOfLife) {
            case 'klee':
                setKlees([...klees, [pos, rot]]);
                break;
            case 'mushroom':
                setMushrooms([...mushrooms, [pos, rot]]);
                console.log(mushrooms);
                break;
            case 'dandelion':
                setDandelions([...dandelions, [pos, rot]]);
                break;
        }
    };

    const clearPlanet = () => {
        setKlees([]);
        setMushrooms([]);
        setDandelions([]);
    };


    const handlePointerUp = (e) => {

        if (!moved) {
            const intersection = e.intersections[0];

            if (intersection.object.name === 'planet') {
                switch (brush) {
                    case 'klee':
                        addFormOfLife('klee', intersection.point, intersection.face.normal);
                        break;
                    case 'mushroom':
                        addFormOfLife('mushroom', intersection.point, intersection.face.normal);
                        break;
                    case 'dandelion':
                        addFormOfLife('dandelion', intersection.point, intersection.face.normal);
                        break;
                }
            }
        }
    };

    return (
        <div className={'Home' + ' ' + 'noselect' + ' ' + theme}>
            <div className='MichaelHochreiter' >
                <p className='Name'>Michael Hochreiter</p>
                <p className='Title'>3D Developer</p>
            </div>

            <Controls theme={theme} brush={brush} setBrush={setBrush} clearPlanet={clearPlanet} />

            <div className='CanvasWrapper' onPointerDown={() => setMoved(false)} onPointerMove={() => setMoved(true)}>
                <Canvas>
                    <OrbitControls autoRotate autoRotateSpeed={0.5} dampingFactor={0.3} enablePan={false} minDistance={2.5} maxDistance={10} rotateSpeed={0.5} />
                    <ambientLight intensity={0.2} />
                    <directionalLight color='white' position={[3, 4, 5]} intensity={2} />
                    <Suspense fallback={null}>
                        <Planet_Model onPointerUp={(e) => handlePointerUp(e)}>
                        </Planet_Model>
                        {klees.map((klee, index) => (
                            <Klee_Model key={index} pos={klee[0]} rot={klee[1]} scaleSmall={[0.5, 0.5, 0.5]} scaleLarge={[1,1,1]} />
                        ))}
                        {mushrooms.map((mushroom, index) => (
                            <Mushroom_Model key={index} pos={mushroom[0]} rot={mushroom[1]} scaleSmall={[0.5, 0.5, 0.5]} scaleLarge={[1,1,1]}/>
                        ))}
                        {dandelions.map((dandelion, index) => (
                            <Dandelion_Model key={index} pos={dandelion[0]} rot={dandelion[1]} scaleSmall={[0.5, 0.5, 0.5]} scaleLarge={[1,1,1]}/>
                        ))}

                    </Suspense>
                </Canvas>
            </div>
        </div >
    )
}

export default Home