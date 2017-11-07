import React, { Component } from 'react';
import './App.css';

import AceEditor from 'react-ace';

import Butterfly from './critters/butterfly';
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

    // resize canvas "properly"
    this.canvas.style.width = `${this.canvas.parentElement.offsetWidth}px`;
    this.canvas.style.height = `${this.canvas.parentElement.offsetHeight}px`;
    this.canvas.width = this.canvas.offsetWidth;
    this.canvas.height = this.canvas.offsetHeight;

    this.critters.push(new Chicken());
    this.critters.push(new Pig());
    this.critters.push(new Butterfly());

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
        <div style={{ paddingLeft: '20px', paddingRight: '20px', height: 'calc(100% - 30px)' }}>

          <img id="terrain-image" alt='terrain' src={terrainImage} style={srcImageStyle} />
          <img id="butterfly-image" alt='butterly' src={butterflyImage} style={ srcImageStyle } />
          <img id="chicken-image" alt='chicken' src={chickenImage} style={ srcImageStyle } />
          <img id="pig-image" alt='pig' src={pigImage} style={ srcImageStyle } />

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%'}}>
            <div>
              <div id='barnyard-window' className="soft-window" style={{ position: 'relative', width: '800px', height: '500px' }}>
                {<canvas id='barnyard' />}
              </div>
              <div className='soft-window' style={{ marginTop: '20px', height: '300px'}}>
                <AceEditor style={{ width: '100%' }}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
