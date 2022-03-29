import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar";
import Work from './components/Work';
import Home from "./components/Home";
import About from './components/About';
import ColorTheme from "./components/ColorTheme";


function App() {
    const [page, setPage] = useState("home");
    const [theme, setTheme] = useState("Light");

    // const themeToggler = () => {
    //     theme === "Light" ? setTheme("Dark") : setTheme("Light");
    //     console.log(theme);
    // }

    return (
        <Router>
            <div className="App">
                <ColorTheme theme={theme} setTheme={setTheme} />
                <Navbar page={page} theme={theme} setPage={setPage} />
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
