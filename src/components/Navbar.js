import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles/Navbar.css';

const Navbar = ({selected}) => {

    const [page, setPage] = useState("home");

  return (
    <div className='Navbar'>
        <nav className="NavbarNav">
            <ul className="NavbarList">
                <li className="NavbarItem">
                    <Link to='/work' onClick={() => setPage("work")} className={page === "work" ? "NavbarItemSelected" : "NavbarItemNotSelected"}>work</Link>
                </li>
                <li className="NavbarItem" >
                    <Link to='/' onClick={() => setPage("home")} className={page === "home" ? "NavbarItemSelected" : "NavbarItemNotSelected"}>home</Link>
                </li>   
                <li className="NavbarItem">
                    <Link to='/about' onClick={() => setPage("about")} className={page === "about" ? "NavbarItemSelected" : "NavbarItemNotSelected"}>about</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar