import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './styles/Navbar.css';
import kleeblatt_medium from './assets/Kleeblatt_medium.svg';
import kleeblatt_bold from './assets/Kleeblatt_bold.svg';


const Navbar = ({selected}) => {

    const [page, setPage] = useState("home");

  return (
    <div className='Navbar'>
        <nav className="NavbarNav">
            <ul className="NavbarList">
                <li className="NavbarItem">
                    <Link to='/work' onClick={() => setPage("work")} className={page === "work" ? "NavbarItemSelected" : "NavbarItemNotSelected"}>
                        work
                    </Link>
                </li>
                <li className="NavbarItem kleeblatt">
                    <Link to='/' onClick={() => setPage("home")}>
                        <img src={page === "home" ? kleeblatt_bold : kleeblatt_medium} />
                    </Link>
                </li>   
                <li className="NavbarItem">
                    <Link to='/about' onClick={() => setPage("about")} className={page === "about" ? "NavbarItemSelected" : "NavbarItemNotSelected"}>
                        about
                    </Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar