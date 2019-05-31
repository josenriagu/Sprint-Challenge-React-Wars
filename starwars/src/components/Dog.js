import React from 'react';
import './StarWars.css';

const Dog = props => {
    return (
        <div className="dogs" >
            {props.src.map((src, index) => {
                return (
                    <div key={index} className="dog">
                        <img src={src} alt="random dog" />
                    </div>
                );
            })}
        </div>
    );
}

export default Dog;