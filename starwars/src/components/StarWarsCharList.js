import React from 'react';
import StarWars from './StarWarsChar';
import './StarWars.css';

const StarWarsCharList = props => {
    let styleP = {
        display: props.previous ? "" : "none"
    }
    let styleN = {
        display: props.next ? "" : "none"
    }
    return (
        <div className="main">
            <div className="buttons">
                <button
                    className="previous"
                    style={styleP}
                    onClick={props.onClickPrev}>Prev</button>
                <button
                    className="Next"
                    style={styleN}
                    onClick={props.onClickNext}>Next</button>
            </div>
            <div className="starwarschar-list">
                {
                    props.starwarsChars.map((char, index) => {
                        return (
                            <StarWars
                                key={index}
                                name={char.name}
                                created={char.created}
                                edited={char.edited}
                                birthyear={char.birth_year}
                                gender={char.gender}
                                height={char.height}
                                mass={char.mass}
                                eyecolor={char.eye_color}
                                haircolor={char.hair_color}
                                skincolor={char.skin_color}
                                homeworld={char.homeworld}
                                url={char.url}
                                films={char.films}
                                species={char.species}
                                starships={char.starships}
                                vehicles={char.vehicles}
                            />
                        );
                    })
                }
            </div>
        </div>
    )
};

export default StarWarsCharList;