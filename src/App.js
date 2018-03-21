import React, { Component } from 'react';
import Slider from './components/Slider'
require('./components/style.scss') 
class App extends Component {
  render() {
    return (
      <div className="app">
        <Slider />
      </div>
    );
  }
}

export default App;
