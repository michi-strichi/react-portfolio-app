import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Navbar.css';

const Navbar = () => {
  return (
    <div className='Navbar'>
        <nav className="NavbarNav">
            <ul className="NavbarList">
                <li className="NavbarItem">
                    <Link to='/work'>Work</Link>
                </li>
                <li className="NavbarItem">
                    <Link to='/'>Home</Link>
                </li>
                <li className="NavbarItem">
                    <Link to='/about'>About</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar