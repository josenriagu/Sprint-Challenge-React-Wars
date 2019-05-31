import React, { Component } from 'react';
import './App.css';
import Dog from './components/Dog'
import Button from './components/Button';

class DogApp extends Component {
    constructor() {
        super();
        this.state = {
            imageUrl: [],
        };
    }

    componentDidMount() {
        this.getCharacters('https://dog.ceo/api/breeds/image/random');
    }

    getCharacters = URL => {
        // feel free to research what this code is doing.
        // At a high level we are calling an API to fetch some starwars data from the open web.
        // We then take that data and resolve it our state.
        fetch(URL)
            .then(res => {
                return res.json();
            })
            .then(data => {
                this.setState({ imageUrl: this.state.imageUrl.concat(data.message) });
            })
            .catch(err => {
                throw new Error(err);
            });
    };

    onClick = () => {
        this.getCharacters('https://dog.ceo/api/breeds/image/random')
    }

    render() {
        return ((this.state.imageUrl) ?
            <div className="App">
                <h1 className="Header">Dog Collection</h1>
                <Button
                    onClick={this.onClick}
                    text="New Dog"
                />
                <Dog
                    src={this.state.imageUrl}
                    onClick={this.onClick}
                />
            </div> :
            <div className="App">
                <h1 className="Header">No Data Loaded in State</h1>
            </div>
        );
    }
}

export default DogApp;