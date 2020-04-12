import React, { Component } from "react";
import "./style.css";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: this.props.time,
      timeauto: this.props.timeauto,
      autostart: true,
    };
  }
  startTime() {
    this.countdown = setInterval(() => {
      if (this.state.time === 0) {
        this.setState({ time: this.props.time });
      } else {
        this.setState({ time: this.state.time - 1 });
      }
    }, 1000);
  }
  pauseTime(timer) {
    clearInterval(timer);
  }
  componentDidMount() {
    if (this.state.autostart) {
      return (this.countdownAuto = setInterval(() => {
        if (this.state.timeauto === 0) {
          this.setState({ timeauto: this.props.timeauto });
        } else {
          this.setState({ timeauto: this.state.timeauto - 1 });
        }
      }, 1000 * this.props.step));
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Залишилося часу: {this.state.time} сек</h1>
        <button onClick={() => this.startTime()}>Start</button>
        <button onClick={() => this.pauseTime(this.countdown)}>Pause</button>
        <h1>Залишилося часу: {this.state.timeauto} сек</h1>
        <button onClick={() => this.pauseTime(this.countdownAuto)}>
          Pause
        </button>
      </div>
    );
  }
}
export default Timer;
