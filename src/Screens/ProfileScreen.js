import React, { useContext } from "react";
import { ThemeContext } from "../components/ThemeContext";

function ProfileScreen(props) {
    const { darkMode } = useContext(ThemeContext);

    return (
        <div className="Pofile" >
            <div className={darkMode ? 'top-container-dark' : 'top-container'}>
                <img className="top-cloud" src="images\cloud.png" alt="cloud"></img>
                <h1>I'm Hamzat.</h1>
                <h3>a <span className="web">Software</span> Engineer</h3>
                <img className="bottom-cloud" src="images\cloud.png" alt="cloud"></img>
                <img className="mountain" src="images\mountain.png" alt="mountain"></img>
            </div>
            <div className={darkMode ? 'profile-dark' : 'profile'}>
                <img src="images\circle-cropped.png" alt="Hamzy"></img>
                <h2>Hello.</h2>
                <p className="intro">I am a software engineer, am the Co-founder of Shiptous LLC. I love comfort and life changing opportunities.</p>
            </div>
        </div>
    );
}
export default ProfileScreen;