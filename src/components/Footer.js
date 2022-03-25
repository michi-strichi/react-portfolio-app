import React from 'react'
import './styles/Footer.css';

const Footer = () => {
    const year = new Date().getFullYear;
    console.log("bruh")

  return (
    <div className='Footer'>Footer
        <Footer>
            <p>© Michael Hochreiter {year}. All rights reserved.</p>
        </Footer>
    </div>
  )
}

export default Footer