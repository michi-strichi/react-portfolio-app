import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar";
import Work from './components/Work';
import Home from "./components/Home";
import About from './components/About';
import './App.scss';


function App() {
    const [page, setPage] = useState("home");
    const [theme, setTheme] = useState("Light");
    const [min781, setMin781] = useState( window.matchMedia("(min-width: 781px)").matches)

    useEffect(() => {
        window
            .matchMedia("(min-width: 781px)")
            .addEventListener('change', e => setMin781(e.matches));
    }, []);

    const toggleTheme = () => {
        theme === "Light" ? setTheme("Dark") : setTheme("Light")    
    }

    return (
        <Router>
            <div className={'App' + ' ' + theme}>
                <Navbar className='bar' page={page} theme={theme} min781={min781} setPage={setPage} toggleTheme={toggleTheme}/>
                <div className='page'  >
                    <Routes>
                        <Route path='/' element={<Home theme={theme} />}></Route>
                        <Route path='/work' element={<Work theme={theme} />}></Route>
                        <Route path='/about' element={<About theme={theme} min781={min781}/>}></Route>
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
