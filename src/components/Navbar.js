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
                    <Link to='/work' onClick={() => setPage("work")} className={page === "work" ? "NavbarItemSelected" : "NavbarItemNotSelected"}>
                        work
                    </Link>
                </li>
                <li className="NavbarItem" >
                    <Link to='/' onClick={() => setPage("home")} className={page === "home" ? "NavbarItemSelected" : "NavbarItemNotSelected"}>
                        <img src="./assets/Kleeblatt_bold.svg"  />
                        {/* <img src={page === "home" ? "./assets/Kleeblatt_bold.svg" : "./assets/Kleeblatt_medium.svg"} /> */}
                        {/* <object data={page === "home" ? "./assets/Kleeblatt_bold" : "./assets/Kleeblatt_medium"} width="300" height="300"> </object> */}
                    </Link>
                </li>   
                <li className="NavbarItem">
                    <Link to='/about' onClick={() => setPage("about")} className={page === "about" ? "NavbarItemSelected" : "NavbarItemNotSelected"}>
                        about
                    </Link>
                </li>
                <li>
                    <img src="./assets/Kleeblatt_bold.svg" />
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar