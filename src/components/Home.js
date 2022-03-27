import React from 'react'
import './styles/Home.css';
import Navbar from "./Navbar";
import ColorTheme from './ColorTheme';

const Home = () => {
  return (
    <div className='Home'>
      {/* <Navbar selected="home" /> */}
      <ColorTheme />
      Home aloone
    </div>
  )
}

export default Home