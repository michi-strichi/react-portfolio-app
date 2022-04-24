import React from 'react'

import './styles/ThemeSwitch.scss';

const ColorTheme = ({theme, toggleTheme}) => {

    return (
        <button className={'ThemeSwitch' + ' ' + theme} onClick={toggleTheme}>
            <div className='Knob'></div>
        </button>
    )
}

export default ColorTheme
