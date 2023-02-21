import React, { Component } from "react";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";
import RunningExercise from "./components/RunningExercise";
import "./App.css";

class App extends Component {
  state = {
    showingExercise: null,
  };

  handleClick = (exerciseName) => {
    this.setState({
      showingExercise: exerciseName,
    });
  };

  handleReturn = () => {
    this.setState({
      showingExercise: null,
    });
  };

  renderExercise = () => {
    const { showingExercise } = this.state;

    switch (showingExercise) {
      case "Push Ups":
        return (
          <RepetitionExercise name="Push Ups" onReturn={this.handleReturn} />
        );
      case "Bicycling":
        return (
          <DurationExercise name="Bicycling" onReturn={this.handleReturn} />
        );
      case "Jumping Jacks":
        return (
          <RepetitionExercise
            name="Jumping Jacks"
            onReturn={this.handleReturn}
          />
        );
      case "Running":
        return <RunningExercise name="Running" onReturn={this.handleReturn} />;
      case "Sit Ups":
        return (
          <RepetitionExercise name="Sit Ups" onReturn={this.handleReturn} />
        );
      default:
        return null;
    }
  };

  render() {
    const { showingExercise } = this.state;

    if (showingExercise) {
      return this.renderExercise();
    }

    return (
      <div className="App">
        <h1>Workout App</h1>
        <div className="exercise-list">
          <button onClick={() => this.handleClick("Push Ups")}>Push Ups</button>
          <button onClick={() => this.handleClick("Bicycling")}>
            Bicycling
          </button>
          <button onClick={() => this.handleClick("Jumping Jacks")}>
            Jumping Jacks
          </button>
          <button onClick={() => this.handleClick("Running")}>Running</button>
          <button onClick={() => this.handleClick("Sit Ups")}>Sit Ups</button>
        </div>
      </div>
    );
  }
}

export default App;
