import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Card } from 'material-ui/Card';

import Butterly from './critters/butterfly';
import Chicken from './critters/chicken';
import Pig from './critters/pig';

import terrainImage from "./Terrain.jpg"
import butterflyImage from "./critters/spritesheets/butterfly_right.png"
import chickenImage from "./critters/spritesheets/chicken_walk_right.png"
import pigImage from "./critters/spritesheets/pig_walk_right.png"

const srcImageStyle = {
  width: '0px',
  height: '0px',
  visibility: 'hidden'
}

class App extends Component {

  constructor(props) {
    super(props);

    this.critters = [];
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.canvas = document.getElementById('barnyard');
    this.ctx = this.canvas.getContext('2d');

    this.critters.push(new Chicken());
    this.critters.push(new Butterly());
    this.critters.push(new Pig());

    const img = document.getElementById("terrain-image");
    img.onload = (event) => {
      this.backgroundImage = event.target
      this.timer = setInterval(this.tick, 62.5);
    }
  }

  tick() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.drawImage(this.backgroundImage, 0, 0, this.canvas.width, this.canvas.height);
    this.critters.forEach(elem => {
      elem.draw();
    });
  }

  render() {
    return (
      <div className="App">
        <div style={{ paddingLeft: '20px', paddingRight: '20px' }}>

          <img id="terrain-image" alt='terrain' src={terrainImage} style={srcImageStyle} />
          <img id="butterfly-image" alt='me' src={butterflyImage} style={ srcImageStyle } />
          <img id="chicken-image" alt='me' src={chickenImage} style={ srcImageStyle } />
          <img id="pig-image" alt='me' src={pigImage} style={ srcImageStyle } />

          <Card>
            <canvas id="barnyard" width = "500" height = "300" />
          </Card>

        </div>
      </div>
    );
  }
}

export default App;
