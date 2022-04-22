import React from 'react'
import "./styles/Footer.css"

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className='Footer'>
            <p>© Copyright Michael Hochreiter {year}.<br/>All rights reserved.</p>
        </footer>
    )
}

export default Footer