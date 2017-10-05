import React, { Component } from 'react';
import './App.css';
import Counter from './components/counter.jsx';



class App extends Component {



  render() {
    return (
      <div className="App">

        <Counter initialCount={5}/>


      </div>
    );
  }
}

export default App;
