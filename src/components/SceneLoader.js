import React from 'react'
import "./styles/SceneLoader.scss"

import { MoonLoader } from 'react-spinners';

const SceneLoader = ({ theme }) => {


    return (
        <div className={'SceneLoader ' + theme}>
            <MoonLoader className={'Loader'} color={theme === 'Light' ? '#050505' : '#ffffff'} loading={true} size={30} speedMultiplier={0.5} />
            <p className='LoaderText' >
                Loading 3D Scene
            </p>
        </div>
    )
}

export default SceneLoader