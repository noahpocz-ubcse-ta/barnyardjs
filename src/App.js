import React, { Component } from 'react';
import './App.css';

import Terrain from './Terrain.jpg'
import RaisedButton from 'material-ui/RaisedButton'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

  
class App extends Component {

  componentDidMount() {
    const img = document.getElementById("terrain-img")
    img.onload = function(event) {
      const c = document.getElementById("mainCanvas")
      const ctx = c.getContext("2d")
      console.log(event)
      ctx.drawImage(event.target, 0, 0,document.getElementById("mainCanvas").width,document.getElementById("mainCanvas").height);
    }
  }

  render() {
    return (
      <div className="App">
        <div className = "back">
        <header className="App-header">
         
          <h1 className="App-title">Barnyard</h1>
        </header>
            <img id='terrain-img' src={Terrain} style={{visibility: 'hidden',width:"60px",height:"60px"}} />
            <canvas id='mainCanvas' alt='by' className="App-canvas" >
            </canvas>
        <textarea className ="textarea">
          </textarea>
          <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>  
        <RaisedButton className="button">

          Clear
          </RaisedButton>  
          </MuiThemeProvider>
        </div>
      </div>
    )
  }
}

export default App;
