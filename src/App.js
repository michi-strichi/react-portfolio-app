import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Navbar from "./components/Navbar";
import Work from './components/Work';
import Home from "./components/Home";
import About from './components/About';
import Preloader from './components/Preloader';
import './App.scss';

function App() {
    const [page, setPage] = useState("home");
    const [theme, setTheme] = useState("Light");
    const [min781, setMin781] = useState(window.matchMedia("(min-width: 781px)").matches)
    const [min1281, setMin1281] = useState(window.matchMedia("(min-width: 1281px)").matches)
    const [homeHintEnabled, setHomeHintEnabled] = useState(true);
    const [aboutHintEnabled, setAboutHintEnabled] = useState(true);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            const preloader = document.getElementById("preloader");
            preloader.classList.add("out");
        }, 1800);
        setTimeout(() => {
            const preloader = document.getElementById("preloader");
            preloader.classList.add("disabled");
        }, 2100);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    useEffect(() => {
        window
            .matchMedia("(min-width: 781px)")
            .addEventListener('change', e => setMin781(e.matches));
    }, []);

    useEffect(() => {
        window
            .matchMedia("(min-width: 1281px)")
            .addEventListener('change', e => setMin1281(e.matches));
    }, []);

    useEffect(() => {
        if (theme === "Light") {
            document.body.className = 'lightBody';
        } else {
            document.body.className = 'darkBody';
        }
    }, [theme]);



    return (
        <Router>
            <div className={'App' + ' ' + theme} id='App'>
                {loading && <Preloader />}
                <Navbar className='bar' page={page} theme={theme} min781={min781} setPage={setPage} setTheme={setTheme} /><div className='page'>
                    <Routes>
                        <Route path='/' element={<Home theme={theme} min781={min781} min1281={min1281} homeHintEnabled={homeHintEnabled} setHomeHintEnabled={setHomeHintEnabled} />}></Route>
                        <Route path='/work' element={<Work theme={theme} min781={min781} min1281={min1281} />}></Route>
                        <Route path='/about' element={<About theme={theme} min781={min781} aboutHintEnabled={aboutHintEnabled} setAboutHintEnabled={setAboutHintEnabled} />}></Route>
                    </Routes>
                </div>
            </div>
            <HelmetProvider>
                <Helmet>
                    <meta name="theme-color" content={theme === "Light" ? "#f6f6f6" : "#191919"} />
                </Helmet>
            </HelmetProvider>
        </Router>
    );
}

export default App;
