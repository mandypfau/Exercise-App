import React, { Component } from "react";

class RunningExercise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      laps: [],
      timerId: null,
      startTime: null,
      elapsed: 0,
      timerRunning: false,
    };
  }

  recordLap = () => {
    this.setState((prevState) => ({
      laps: [...prevState.laps, this.formatTime(prevState.elapsed)],
    }));
  };

  startTimer = () => {
    if (!this.state.timerRunning) {
      const startTime = Date.now() - this.state.elapsed;
      this.setState({
        startTime: startTime,
        timerRunning: true,
      });
      this.timer = setInterval(this.updateTimer, 10);
    }
  };

  updateTimer = () => {
    const elapsed = Math.floor((Date.now() - this.state.startTime) / 1000);
    this.setState({ elapsed: elapsed });
  };

  stopTimer = () => {
    if (this.state.timerRunning) {
      clearInterval(this.timer);
      this.setState({ timerRunning: false });
    }
  };

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
  };

  handleReturn = () => {
    this.props.onReturn();
  };

  componentWillUnmount() {
    this.stopTimer();
  }

  render() {
    const { laps } = this.state;
    const { elapsed, timerRunning } = this.state;

    return (
      <div>
        <h1>{this.props.name}</h1>
        <h2>{this.formatTime(elapsed)}</h2>
        <button onClick={this.recordLap}>Record Lap</button>
        <button onClick={timerRunning ? this.stopTimer : this.startTimer}>
          {timerRunning ? "Stop" : "Start"}
        </button>
        <button onClick={this.handleReturn}>Return</button>
        {/* add your timer display code here */}
        <div>
          {laps.map((lapTime, index) => (
            <p key={index}>
              Lap {index + 1}: {lapTime}
            </p>
          ))}
        </div>
      </div>
    );
  }
}

export default RunningExercise;
