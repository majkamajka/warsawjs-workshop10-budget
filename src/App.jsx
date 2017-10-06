import React, { Component } from 'react';
import './App.css';
import Counter from './components/counter.jsx';
import {TransactionCard} from './components';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [
      {
        id: 1,
        description: 'Potwierdzenie uczestnictwa w warsztatach WarsawJS',
        value: 20,
        date: '16.09.2017',
        category: 'Edukacja'
      },
      {
        id: 2,
        description: 'Bilet na pociąg',
        value: 120,
        date: '07.09.2017',
        category: 'Transport'
      },
      {
        id: 3,
        description: 'Części do samochodu',
        value: 430,
        date: '26.08.2017',
        category: 'Samochód'
      }
    ]
    }

  }


  render() {
    return (
      <div className="App">

        <Counter initialCount={5}/>
        <TransactionCard name={this.state.transactions[0].description} value={this.state.transactions[0].value} date={this.state.transactions[0].date} category={this.state.transactions[0].category}/>

      </div>
    );
  }
}

export default App;
