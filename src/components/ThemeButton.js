import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ThemeButton() {
    const { darkMode, setDarkMode } = useContext(ThemeContext);
    const handleTheme = (e) => {
        setDarkMode(!darkMode);
        //making the local storage not to return to default upon refresh 
        localStorage.setItem("darkMode", !darkMode);
    }
    return (
        <div className='toggle'>
            <button className={darkMode ? "fa fa-toggle-on" : "fa fa-toggle-off"} onClick={handleTheme}></button>
        </div>
    );
}

export default ThemeButton;