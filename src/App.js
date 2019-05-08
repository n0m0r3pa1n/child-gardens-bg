import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import GardensList from "./gardens/GardensList"
import GardensMap from "./map/GardensMap"
import TopToolbar from "./TopToolbar"

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopToolbar />

        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={GardensList} />
            <Route exact path="/map" component={GardensMap} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
