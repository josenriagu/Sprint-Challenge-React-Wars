import React from 'react';
import './StarWars.css';

const Button = props => {
    return (
        <button className={props.class} style={props.style} onClick={props.onClick}>{props.text}</button>
    );
}

export default Button;