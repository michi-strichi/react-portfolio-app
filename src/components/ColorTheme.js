import React from 'react'

import './styles/ColorTheme.css';
import sun from './assets/Sun.svg';
import moon from './assets/Moon.svg';

const ColorTheme = ({theme, setTheme}) => {

    return (
        <button className='ColorTheme' onClick={() => setTheme("Dark")}>
            <div className='Knob Light'></div>
            <div className='IconContainer'>
                <img src={moon} className='Icon' />
                <img src={sun} className='Icon' />
            </div>
        </button>
    )
}

export default ColorTheme
