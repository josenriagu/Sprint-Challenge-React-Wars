import React from 'react';
import './StarWars.css';

const StarWarsChar = props => {
    return (
        <div
            className="starwars-char"
            key={props.key}
        >
            <h3>{props.name}</h3>
            <div className="basic-info">
                <h4>Basic Info</h4>
                <p><span>Birth Year: </span>{props.birthyear}</p>
                <p><span>Created On: </span>{props.created}</p>
                <p><span>Edited On: </span>{props.edited}</p>
            </div>
            <div className="bio-details">
                <h4>Bio Details</h4>
                <p><span>Gender: </span>{props.gender}</p>
                <p><span>Height: </span>{props.height}</p>
                <p><span>Mass: </span>{props.mass}</p>
                <p><span>Eye Color: </span>{props.eyecolor}</p>
                <p><span>Hair Color: </span>{props.haircolor}</p>
                <p><span>Skin Color: </span>{props.skincolor}</p>
            </div>
            <div className="special-info">
                <h4><span>Movies</span></h4>
                <p>{props.films.map(film => <p><a href={film} rel="noopener noreferrer" target="_blank">{film}</a></p>)}</p>
            </div>
            <div className="special-info">
                <h4>Unique Attributes</h4>
                <p><span>Species: </span>{props.species.map(species => <p><a href={species}>{species}</a></p>)}</p>
                <p><span>Starships: </span>{props.starships.map(starships => <p><a href={starships}>{starships}</a></p>)}</p>
                <p><span>Vehicles: </span>{props.vehicles.map(vehicles => <p><a href={vehicles}>{vehicles}</a></p>)}</p>

            </div>
            <div className="link-info">
                <h4>Link</h4>
                F<p><span>Homeworld: </span><a href={props.homeworld}>{props.homeworld}</a></p>
                <p><span>URL: </span><a href={props.url}>{props.url}</a></p>
            </div>
        </div>
    )
};

export default StarWarsChar;