import React, { Component } from 'react';
import './App.css';
import Stateless from './components/stateless.jsx';
import Statefull from './components/statefull.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Stateless text='sdsdasd' />
        <Statefull text='dsddsfsdf' />


      </div>
    );
  }
}

export default App;
