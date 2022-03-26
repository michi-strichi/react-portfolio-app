import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Navbar.css';

const Navbar = ({selected}) => {

  return (
    <div className='Navbar'>
        <nav className="NavbarNav">
            <ul className="NavbarList">
                <li className="NavbarItem">
                    <Link to='/work' className={selected === "work" ? "NavbarItemSelected" : "NavbarItemNotSelected"}>Work</Link>
                </li>
                <li className="NavbarItem" >
                    <Link to='/' className={selected === "home" ? "NavbarItemSelected" : "NavbarItemNotSelected"}>Home</Link>
                </li>
                <li className="NavbarItem">
                    <Link to='/about' className={selected === "about" ? "NavbarItemSelected" : "NavbarItemNotSelected"}>About</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar