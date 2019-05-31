import React, { Component } from 'react';
import './App.css';
import StarWarsCharList from './components/StarWarsCharList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      next: '',
      previous: ''  
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
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
        this.setState({ starwarsChars: data.results });
        this.setState({ next: data.next })
        this.setState({ previous: data.previous})
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  onClickNext = () => {
    this.getCharacters(this.state.next);
  }

  onClickPrev = () => {
    this.getCharacters(this.state.previous);
  }

  render() {
    return ((this.state.starwarsChars) ?
      <div className="App">
        <h1 className="Header">React Wars Characters</h1>
        <StarWarsCharList
          starwarsChars={this.state.starwarsChars}
          onClickPrev={this.onClickPrev}
          onClickNext={this.onClickNext}
          next={this.state.next}
          previous={this.state.previous}
        />
      </div> :
      <div className="App">
        <h1 className="Header">No Data Loaded in State</h1>
      </div>
    );
  }
}

export default App;
