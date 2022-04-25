import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar";
import Work from './components/Work';
import Home from "./components/Home";
import About from './components/About';
import './App.scss';


function App() {
    const [page, setPage] = useState("home");
    const [theme, setTheme] = useState("Light");

    const toggleTheme = () => {
        theme === "Light" ? setTheme("Dark") : setTheme("Light")
    }

    return (
        <Router>
            <div className="App">
                <Navbar page={page} theme={theme} setPage={setPage} toggleTheme={toggleTheme}/>
                <div className='page'  >
                    <Routes>
                        <Route path='/' element={<Home theme={theme} />}></Route>
                        <Route path='/work' element={<Work theme={theme} />}></Route>
                        <Route path='/about' element={<About theme={theme} />}></Route>
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
