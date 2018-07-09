import React, { Component } from 'react';
import './core/app.js';

import logo from './logo.svg';
import './App.css';
import { store } from "./store.js";

class VGApp extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React hooked with redux</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }

  _stateChanged(props){

  }

}

export default VGApp;
