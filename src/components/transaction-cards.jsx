import React, { Component } from 'react';

class TransactionList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: this.props.items
    }
  }





  render() {
    let cards = (this.state.transactions).map((e, i) => {
      return (
        <div className='transaction-card' key={e.id}>
          <p className="close">X</p>
          <h1>{e.description}</h1>
          <p>kwota {e.value} zł</p>
          <p>data {e.date} </p>
          <p>kategoria {e.category}</p>
        </div>
      )
    });

    return (
      <div>
        {cards}
      </div>
    )
  }
}

export default TransactionList;
