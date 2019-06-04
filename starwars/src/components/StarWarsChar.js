import React from 'react';
import './StarWars.css';

const StarWarsChar = props => {
    const { name, created, edited, birth_year, gender, height, mass, eye_color, hair_color, skin_color, homeworld, url, films, species, starships, vehicles } = props.char;
    return (
        <div
            className="starwars-char"
            key={props.key}
        >
            <h2>{name}</h2>
            <div className="basic-info">
                <h3>Basic Info</h3>
                <p><span>Birth Year: </span>{birth_year}</p>
                <p><span>Created On: </span>{created}</p>
                <p><span>Edited On: </span>{edited}</p>
            </div>
            <div className="bio-details">
                <h3>Bio Details</h3>
                <p><span>Gender: </span>{gender}</p>
                <p><span>Height: </span>{height}</p>
                <p><span>Mass: </span>{mass}</p>
                <p><span>Eye Color: </span>{eye_color}</p>
                <p><span>Hair Color: </span>{hair_color}</p>
                <p><span>Skin Color: </span>{skin_color}</p>
            </div>
            <div className="special-info">
                <h3><span>Movies</span></h3>
                <div>{films.map(film => <p><a href={film} rel="noopener noreferrer" target="_blank">{film}</a></p>)}</div>
            </div>
            <div className="special-info">
                <h3>Unique Attributes</h3>
                <div><span>Species: </span>{species.map(species => <p><a href={species}>{species}</a></p>)}</div>
                <div><span>Starships: </span>{starships.map(starships => <p><a href={starships}>{starships}</a></p>)}</div>
                <div><span>Vehicles: </span>{vehicles.map(vehicles => <p><a href={vehicles}>{vehicles}</a></p>)}</div>
            </div>
            <div className="link-info">
                <h3>Link</h3>
                <p><span>Homeworld: </span><a href={homeworld}>{homeworld}</a></p>
                <p><span>URL: </span><a href={url}>{url}</a></p>
            </div>
        </div>
    )
};

export default StarWarsChar;