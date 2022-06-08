import React from 'react'
import "./styles/Footer.scss"
import kleeblatt_thin from './assets/svgs/Kleeblatt_thin.svg';

const Footer = ({ theme }) => {
    const year = new Date().getFullYear();

    return (
        <footer className={'Footer' + ' ' + theme}>
            © Michael Hochreiter {year}.<br/>All rights reserved.<br/>
            <img src={kleeblatt_thin} />
        </footer>
    )
}

export default Footer