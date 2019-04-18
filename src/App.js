import React, { Component } from 'react';
import './App.css';
import GardensList from "./gardens/GardensList"

class App extends Component {
  render() {
    return (
      <div className="App">
        <GardensList />
      </div>
    );
  }
}

export default App;
