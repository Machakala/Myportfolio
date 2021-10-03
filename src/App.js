import React, { useContext } from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import ContactScreen from "./Screens/ContactScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import Project from "./Screens/Project";
import SkillsScreen from "./Screens/SkillsScreen";
import WhatIDoScreen from "./Screens/WhatIDoScreen";
import ThemeButton from "./components/ThemeButton";
import { ThemeContext } from "./components/ThemeContext";

function App() {
    const { darkMode } = useContext(ThemeContext);
    return (
        <BrowserRouter >
            <div className='grid-container '>
                <div className={darkMode ? 'App-dark' : 'App'}>
                    <header className={darkMode ? "header" : "header"}>
                        <div className={darkMode ? 'row-dark' : 'row'}>
                            <div>
                                <Link to="/" className='brand'>Home</Link>
                            </div>
                            <div className='brand'>
                                <Link to="/WhatIDo"> What I Do</Link>
                                <Link to="/skills"> Skills</Link>
                                <Link to="/project">Projects </Link>
                                <Link to="/contact"> Contact Me</Link>
                            </div>
                        </div>
                    </header>
                    <main className={darkMode ? 'main' : 'main'} >
                        <Route path="/" component={ProfileScreen} exact></Route>
                        <Route path="/WhatIDo" component={WhatIDoScreen}></Route>
                        <Route path="/skills" component={SkillsScreen}></Route>
                        <Route path="/Project" component={Project}></Route>
                        <Route path="/Contact" component={ContactScreen}></Route>
                    </main>
                    <footer className={darkMode ? "footer" : "footer"}>
                        <div className={darkMode ? "bottom-container2-dark" : "bottom-container2"}>
                            <a className="footer-link" href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            <a className="footer-link" href='https://git.heroku.com/hamzyshopmall.git' target="_blank" rel="noopener noreferrer">Twitter</a>
                            <a className="footer-link" href="https://www.hmtechdesigns.com" target="_blank" rel="noopener noreferrer">Website</a>
                            <p className="copyright">All Rights reserved 2021 © 2021 Yussuf.</p>
                        </div>
                    </footer>
                    <ThemeButton />
                </div>
            </div>
        </BrowserRouter >
    );
}

export default App;