import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Component/Greet'
import Welcome from './Component/Welcome';




class App extends Component {
  render() {
    return (
      <div Classname = "app">
        <Greet />
        <Welcome />
      </div>
    );
  }
}

export default App;
