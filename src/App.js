import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar";
import Work from './components/Work';
import Home from "./components/Home";
import About from './components/About';
import ColorTheme from "./components/ColorTheme";


function App() {
    const [page, setPage] = useState("home");
    const [theme, setTheme] = useState("Dark");

    const toggleTheme = () => {
        theme === "Light" ? setTheme("Dark") : setTheme("Light")
    }

    return (
        <Router>
            <div className="App">
                {/* <ColorTheme theme={theme} toggleTheme={toggleTheme}/> */}
                {/* <Navbar page={page} theme={theme} setPage={setPage} /> */}
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
