import React from 'react'
import "./styles/Footer.scss"
import kleeblatt_thin from './assets/svgs/Kleeblatt_thin.svg';

const Footer = ({ theme }) => {
    const year = new Date().getFullYear();

    return (
        <footer className={'Footer' + ' ' + theme}>
            © Copyright Michael Hochreiter {year}.<br/>All rights reserved.
            <img src={kleeblatt_thin} />
        </footer>
    )
}

export default Footer