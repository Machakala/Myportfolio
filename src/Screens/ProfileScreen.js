import React, { useContext } from "react";
import { ThemeContext } from "../components/ThemeContext";
import cloud from '../images/cloud.png';
import mountain from '../images/mountain.png';
import circleCropped from '../images/circle-cropped.png';

function ProfileScreen(props) {
    const { darkMode } = useContext(ThemeContext);


    return (
        <div className="Pofile" >
            <div className={darkMode ? 'top-container-dark' : 'top-container'}>
                <img className="top-cloud" src={cloud} alt="cloud"></img>
                <h1>I'm Hamzat.</h1>
                <h3>a <span className="web">Software</span> Engineer</h3>
                <img className="bottom-cloud" src={cloud} alt="cloud"></img>
                <img className="mountain" src={mountain} alt="mountain"></img>
            </div>
            <div className={darkMode ? 'profile-dark' : 'profile'}>
                <img src={circleCropped} alt="Hamzy"></img>
                <h2>Hello.</h2>
                <p className="intro">I am a software engineer, am the Co-founder of Shiptous LLC. I love comfort and life changing opportunities.</p>
            </div>
        </div>
    );
}
export default ProfileScreen;