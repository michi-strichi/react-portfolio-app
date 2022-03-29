import React from 'react'

import './styles/ColorTheme.css';
import sun from './assets/svgs/Sun.svg';
import moon from './assets/svgs/Moon.svg';

const ColorTheme = ({theme, toggleTheme}) => {

    return (
        <button className={'ColorTheme' + ' ' + theme} onClick={toggleTheme}  >
            <div className={'Knob' + ' ' + theme}></div>
            <div className='IconContainer'>
                <img src={moon} className='Icon' alt='Moon Icon' />
                <img src={sun} className='Icon' alt='Sun Icon' />
            </div>
        </button>
    )
}

export default ColorTheme
