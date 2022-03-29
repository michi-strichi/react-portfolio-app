import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './styles/Navbar.css';
import kleeblatt_medium from './assets/Kleeblatt_medium.svg';
import kleeblatt_bold from './assets/Kleeblatt_bold.svg';


const Navbar = ({ page, theme , setPage}) => {

    return (
        <div className='Navbar'>
            <nav className="NavbarNav">
                <ul className="NavbarList">
                    <li className="NavbarItem">
                        <Link to='/work' onClick={() => setPage("work")} style={page === "work" ? { fontWeight: 700 } : { fontWeight: 500 }}>
                            work
                        </Link>
                    </li>
                    <li className="NavbarItem kleeblatt">
                        <Link to='/' onClick={() => setPage("home")}>
                            <img src={page === "home" ? kleeblatt_bold : kleeblatt_medium} alt="Clover Leaf Logo" />
                        </Link>
                    </li>
                    <li className="NavbarItem">
                        <Link to='/about' onClick={() => setPage("about")} style={page === "about" ? { fontWeight: 700 } : { fontWeight: 500 }}>
                            about
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar