import React, { useContext } from "react";
import { ThemeContext } from "../components/ThemeContext";
import computer from '../images/computer.png';

import chillies from '../images/chillies.png';

function WhatIDoScreen() {
    const { darkMode } = useContext(ThemeContext);

    return (
        <div className="WhatIDo" >
            <section id="WhatIDo" className={darkMode ? "WhatIDo-dark" : "WhatIDo"}>
                <h1>What I Do</h1>
                <div className="skill-row">
                    <img className="computer" src={computer} alt="computer"></img>
                    <div className="words">
                        <h3>web developer</h3>
                        <p>I love coding, I found it pretty simple. Its a great way to learn and develop.</p>
                    </div>
                </div>
                <div className="skill-row">
                    <img className="chillies" src={chillies} alt="chillies"></img>
                    <div className="words">
                        <h3>Building</h3>
                        <p>I like building new companies,so we can try to make the world a better place. I love startups. My goal is to help many succeed.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default WhatIDoScreen;