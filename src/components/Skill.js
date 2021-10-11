import React from 'react';
import data from '../data';

export default function Skill(props) {
    return (
        <div className="card1" >

            {data.Skills.map((Skills) => (
                <div key={Skills._id} className="card">
                    <div>
                        <img
                            className="card-image"
                            src={Skills.image}
                            alt={Skills.name}
                        />
                    </div>
                    <div className="card-body" >
                        <h3> {Skills.name} </h3>
                        <p>{Skills.description}</p>
                    </div>
                </div>
            ))}

        </div>
    );
}