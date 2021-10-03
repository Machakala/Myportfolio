import React, { useContext } from "react";
import { ThemeContext } from "../components/ThemeContext";
import data from "../data";

function Project() {
    const { darkMode } = useContext(ThemeContext);
    return (
        <div className={darkMode ? "Project-dark" : "Project"}>
            <h1>Project Samples</h1>
            <section id='Project' className="card1" >
                {data.Projects.map((Projects) => (
                    <div key={Projects._id} className="card">
                        <div>
                            <a href={Projects.webpage} target="_blank" rel="noopener noreferrer">
                                <img className="medium1"
                                    src={Projects.image}
                                    alt={Projects.name}
                                />
                            </a>
                            <div>
                                <h3> {Projects.name} </h3>
                            </div>
                        </div>
                        <div className="card-body" >
                            <p>{Projects.description}</p>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}
export default Project;