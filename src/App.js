import React, { Component } from 'react';
import './core/app.js';
import NavBar from './components/NavBar';
 
import './App.css';
// eslint-disable-next-line
import { store } from "./store.js";
//t
class VGApp extends Component {
  render() {
    return (
      <div>
        <NavBar />
      </div>
    );
  }

  _stateChanged(props){

  }

}

export default VGApp;
