import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './styles/Navbar.scss';
import ThemeSwitch from './ThemeSwitch';
import {ReactComponent as KleeblattThin} from './assets/svgs/Kleeblatt_thin.svg';
import {ReactComponent as KleeblattBold} from './assets/svgs/Kleeblatt_bold.svg';

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
                                <Link to='/' onClick={() => { setPage("home"); setNavbarStatus('Inactive'); window.scrollTo({top: 0, left: 0, behavior: 'auto'}); }} className={page === "home" ? 'selected' : 'notSelected'}>
                                    {page === "home" ? <KleeblattBold /> : <KleeblattBold />}
                                </Link>
                            </li>
                            <li>
                                <Link to='/work' onClick={() => { setPage("work"); setNavbarStatus('Inactive'); window.scrollTo({top: 0, left: 0, behavior: 'auto'}); }} className={page === "work" ? 'selected' : 'notSelected'}>
                                    work
                                </Link>
                            </li>
                            <li>
                                <Link to='/about' onClick={() => { setPage("about"); setNavbarStatus('Inactive'); window.scrollTo({top: 0, left: 0, behavior: 'auto'}); }} className={page === "about" ? 'selected' : 'notSelected'}>
                                    about
                                </Link>

                            </li>

                        </ul>
                    </nav>
                    <ThemeSwitch theme={theme} setTheme={setTheme} setNavbarStatus={setNavbarStatus} />
                </>
            }
        </div>
    )
}

export default Navbar