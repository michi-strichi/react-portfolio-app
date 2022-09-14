import React from 'react'

import './styles/ThemeSwitch.scss';

const ColorTheme = ({theme, setTheme, setNavbarStatus}) => {

    return (
        <div className={'ThemeSwitch' + ' ' + theme}>
            <div className='Wrapper'>
                <button className='Button L' onClick={() => { setTheme("Light"); setNavbarStatus('Inactive');}} >Light</button>
                <button className='Button D' onClick={() => { setTheme("Dark"); setNavbarStatus('Inactive');}} >Dark</button>
            </div>
            <div className='Bar'></div>
        </div>
    )
}

export default ColorTheme
