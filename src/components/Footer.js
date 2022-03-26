import React from 'react'
import "./styles/Footer.css"

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <div className='Footer'>
            <p>© Copyright Michael Hochreiter {year}.<br/>All rights reserved.</p>
        </div>
    )
}

export default Footer