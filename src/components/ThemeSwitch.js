import React from 'react'

import './styles/ThemeSwitch.scss';

const ColorTheme = ({theme, setTheme}) => {

    return (
        <div className={'ThemeSwitch' + ' ' + theme}>
            <div className='Wrapper'>
                <button className='Button L' onClick={() => { setTheme("Light");}} >Light</button>
                <button className='Button D' onClick={() => { setTheme("Dark");}} >Dark</button>
            </div>
            <div className='Bar'></div>
        </div>
    )
}

export default ColorTheme
