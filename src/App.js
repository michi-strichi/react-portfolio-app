import React from "react";
import Navbar from "./components/Navbar";
import ColorTheme from './components/ColorTheme';
import Work from './components/Work';
import Home from "./components/Home";
import About from './components/About';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  
  return (
    <Router>
    <div className="App">
      <Navbar />
      <ColorTheme />
      <div className='content'>
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
