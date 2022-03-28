import React, { useState } from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Navbar from "./components/Navbar";
import Work from './components/Work';
import Home from "./components/Home";
import About from './components/About';


function App() {
  
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className='page'  >
        <Routes>
          <Route path='/work' element={<Work />}></Route>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
