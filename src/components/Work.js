import React from 'react'
import './styles/Work.css';
import Footer from './Footer';

const Work = () => {
    const projects = require('./assets/projects.json');

  return (
    <div className='Work'>
      <Footer />
    </div>
  )
}

export default Work