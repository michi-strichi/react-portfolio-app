import React from 'react'
import './styles/Home.css';
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className='Home'>
      <Navbar selected="home" />
      Home aloone
    </div>
  )
}

export default Home