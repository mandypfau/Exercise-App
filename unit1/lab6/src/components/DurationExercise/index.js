import React, { Component } from 'react';

class DurationExercise extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startTime: null,
      elapsed: 0,
      timerRunning: false
    };
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  startTimer = () => {
    if (!this.state.timerRunning) {
      const startTime = Date.now() - this.state.elapsed;
      this.setState({
        startTime: startTime,
        timerRunning: true
      });
      this.timer = setInterval(this.updateTimer, 10);
    }
  }

  stopTimer = () => {
    if (this.state.timerRunning) {
      clearInterval(this.timer);
      this.setState({ timerRunning: false });
    }
  }

  updateTimer = () => {
    const elapsed = Math.floor((Date.now() - this.state.startTime) / 1000);
    this.setState({ elapsed: elapsed });
  }

  handleReset = () => {
    this.setState({
      startTime: null,
      elapsed: 0,
      timerRunning: false
    });
    this.stopTimer();
  }

  handleReturn = () => {
    this.props.onReturn();
  }

  formatTime = (time) => {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time - hours * 3600) / 60);
    let seconds = time - hours * 3600 - minutes * 60;

    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (hours === "00") {
      return `${minutes}:${seconds}`;
    } else {
      return `${hours}:${minutes}:${seconds}`;
    }
  }

  render() {
    const { name } = this.props;
    const { elapsed, timerRunning } = this.state;

    return (
      <div>
        <h1>{name}</h1>
        <h2>{this.formatTime(elapsed)}</h2>
        <button onClick={timerRunning ? this.stopTimer : this.startTimer}>
          {timerRunning ? "Stop" : "Start"}
        </button>
        <button onClick={this.handleReset}>Reset</button>
        <button onClick={this.handleReturn}>Return</button>
      </div>
    );
  }
}

export default DurationExercise;
