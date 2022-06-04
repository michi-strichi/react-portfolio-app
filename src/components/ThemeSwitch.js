import React from 'react'

import './styles/ThemeSwitch.scss';

const ColorTheme = ({theme, toggleTheme}) => {

    return (
        <button className={'ThemeSwitch' + ' ' + theme} onClick={toggleTheme}>
            <div className='Wrapper'>
                <p className='Text'>Light</p>
                <p className='Text'>Dark</p>
            </div>
            <div className='Bar'></div>
        </button>
    )
}

export default ColorTheme
