import React from 'react';
import Button from './Button';
import './StarWars.css';

const Dog = props => {
    return (
        <div className="dog" >
            <Button
                onClick={props.onClick}
                text="New Dog"
            />
            <img src={props.src} alt="random dog" />
        </div>
    );
}

export default Dog;