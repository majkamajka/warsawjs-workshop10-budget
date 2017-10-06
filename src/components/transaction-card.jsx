import React, { Component } from 'react';

class TransactionCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  render() {
    return (
      <div className='transaction-card'>
        <p className="close">X</p>
        <h1>{this.props.name}</h1>
        <p>kwota {this.props.value} zł</p>
        <p>data {this.props.date} </p>
        <p>kategoria {this.props.category}</p>
      </div>

    )
  }
}

export default TransactionCard;
