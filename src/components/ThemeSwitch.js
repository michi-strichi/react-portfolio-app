import React from 'react'

import './styles/ThemeSwitch.scss';
import sun from './assets/svgs/Sun.svg';
import moon from './assets/svgs/Moon.svg';

const ColorTheme = ({theme, toggleTheme}) => {

    return (
        <button className={'ThemeSwitch' + ' ' + theme} onClick={toggleTheme}>
            <div className='Knob'></div>
        </button>
    )
}

export default ColorTheme
