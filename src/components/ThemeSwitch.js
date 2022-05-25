import React from 'react'

import './styles/ThemeSwitch.scss';

const ColorTheme = ({theme, toggleTheme}) => {

    return (
        <button className={'ThemeSwitch' + ' ' + theme} onClick={toggleTheme}>
            <p className='Text'>Light &nbsp; Dark</p>
            <div className='Bar'></div>
        </button>
    )
}

export default ColorTheme
