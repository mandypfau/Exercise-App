import React, { Component } from 'react';

class RepetitionExercise extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  }

  handleReset = () => {
    this.setState({ count: 0 });
  }

  handleReturn = () => {
    this.props.onReturn();
  }

  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.handleIncrement}>Complete Rep</button>
        <button onClick={this.handleReset}>Reset</button>
        <button onClick={this.handleReturn}>Return</button>
      </div>
    );
  }
}

export default RepetitionExercise;
