import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import './styles/Navbar.scss';
import ThemeSwitch from './ThemeSwitch';
import kleeblatt_thin from './assets/svgs/Kleeblatt_thin.svg';
import kleeblatt_bold from './assets/svgs/Kleeblatt_bold.svg';


const Navbar = ({ page, theme, min781, setPage, setTheme }) => {

    const [navbarStatus, setNavbarStatus] = useState('Inactive');

    const toggleNavbarStatus = () => {
        navbarStatus === 'Active' ? setNavbarStatus('Inactive') : setNavbarStatus('Active');
    }

    return (
        <div className={'Navbar' + ' ' + theme + ' ' + navbarStatus}>
            {!min781 &&
                <div className='burger' onClick={() => toggleNavbarStatus()}>
                    <div className='box0' />
                    <div className='box1' />
                </div>
            }
            {(min781 || navbarStatus === 'Active') &&
                <>
                    <nav>
                        <ul>
                            <li className="kleeblatt">
                                <Link to='/' onClick={() => { setPage("home"); setNavbarStatus('Inactive') }} className={page === "home" ? 'selected' : 'notSelected'}>
                                    <img src={page === "home" ? kleeblatt_bold : kleeblatt_thin} alt="Clover Leaf Logo" />
                                </Link>
                            </li>
                            <li>
                                <Link to='/work' onClick={() => { setPage("work");; setNavbarStatus('Inactive') }} className={page === "work" ? 'selected' : 'notSelected'}>
                                    work
                                </Link>
                            </li>
                            <li>
                                <Link to='/about' onClick={() => { setPage("about"); setNavbarStatus('Inactive') }} className={page === "about" ? 'selected' : 'notSelected'}>
                                    about
                                </Link>

                            </li>

                        </ul>
                    </nav>
                    <ThemeSwitch theme={theme} setTheme={setTheme} />
                </>
            }
        </div>
    )
}

export default Navbar