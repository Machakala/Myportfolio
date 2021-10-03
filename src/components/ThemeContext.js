import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
    const [darkMode, setDarkMode] = useState(
        //making the local storage not to return to default upon refresh 
        JSON.parse(localStorage.getItem("darkMode"))
    );
    return (
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
            {props.children}
        </ThemeContext.Provider>
    )
};
