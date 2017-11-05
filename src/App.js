import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Critter from './components/critter';
import critterImage from "./components/spritesheets/butterfly_right.png"

class App extends Component {

  componentDidMount() {
    this.critter = new Critter('butterfly');
    this.critter.startTimer();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        <canvas id="barnyard" width = "1000" height = "1000"></canvas>
        <img id="source" alt='me' src={critterImage} style={{visibility:"hidden"}}/>
        </p>
      </div>
    );
  }
}

export default App;
