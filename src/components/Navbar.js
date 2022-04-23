import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './styles/Navbar.scss';
import kleeblatt_dark_thin from './assets/svgs/Kleeblatt_dark_thin.svg';
import kleeblatt_dark_bold from './assets/svgs/Kleeblatt_dark_bold.svg';


const Navbar = ({ page, theme, setPage }) => {

    const [navbarStatus, setNavbarStatus] = useState('Inactive');

    const toggleNavbarStatus = () => {
        navbarStatus === 'Active' ? setNavbarStatus('Inactive') : setNavbarStatus('Active');
    }

    return (
        <div className={'Navbar' + ' ' + theme + ' ' + navbarStatus}>
            <div className='burger' onClick={() => toggleNavbarStatus()}>
                <div className='box' />
                <div className='box' />
            </div>
            {navbarStatus === 'Active' &&
                <nav>
                    <ul>
                        <li className="kleeblatt">
                            <Link to='/' onClick={() => setPage("home")}>
                                <img src={page === "home" ? kleeblatt_dark_bold : kleeblatt_dark_thin} alt="Clover Leaf Logo" />
                            </Link>
                        </li>
                        <li>
                            <Link to='/work' onClick={() => setPage("work")} className={page === "work" ? 'selected' : 'notSelected'}>
                                work
                            </Link>
                        </li>
                        <li>
                            <Link to='/about' onClick={() => setPage("about")} className={page === "about" ? 'selected' : 'notSelected'}>
                                about
                            </Link>
                        </li>
                    </ul>
                </nav>
            }
        </div>
    )
}

export default Navbar