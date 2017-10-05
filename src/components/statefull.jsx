import React, { Component } from 'react';

class Statefull extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text
    }
  }
  render() {
    return (
      <p>stateful component tekst ze stejta: {this.state.text}</p>
    )
  }
}

export default Statefull;
