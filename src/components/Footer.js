import React from 'react'
import "./styles/Footer.scss"

const Footer = ({ theme }) => {
    const year = new Date().getFullYear();

    return (
        <footer className={'Footer' + ' ' + theme}>
            © Copyright Michael Hochreiter {year}.<br/>All rights reserved.
        </footer>
    )
}

export default Footer