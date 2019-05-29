import React, { Component } from "react";
import styled from "styled-components";

class Stopwatch extends Component {
  constructor() {
    super();
    this.state = {
      hours: "00",
      minutes: "00",
      seconds: "00",
      milliseconds: "000",
      time: 0
    };
  }

  start() {
    this.stopwatch = setInterval(() => {
      this.update();
    }, 1);
  }

  stop() {
    clearInterval(this.stopwatch);
  }

  reset() {
    this.setState({
      hours: "00",
      minutes: "00",
      seconds: "00",
      milliseconds: "000",
      time: 0
    });
  }

  update() {
    const time = this.state.time + 1;
    const hours = parseInt(time / 1000 / 60 / 60, 10);
    const minutes = parseInt((time / 1000 / 60) % 60, 10);
    const seconds = parseInt((time / 1000) % 60, 10);
    const milliseconds = parseInt(time % 1000, 10);

    this.setState({
      hours: this.toText(hours),
      minutes: this.toText(minutes),
      seconds: this.toText(seconds),
      milliseconds: milliseconds,
      time: time
    });
  }

  toText(time) {
    return ("00" + time).slice(-2);
  }

  render() {
    return (
      <div>
        <StopwatchText>{this.state.hours}</StopwatchText>
        <StopwatchText>:</StopwatchText>
        <StopwatchText>{this.state.minutes}</StopwatchText>
        <StopwatchText>:</StopwatchText>
        <StopwatchText>{this.state.seconds}</StopwatchText>
        <StopwatchText>.</StopwatchText>
        <StopwatchText>{this.state.milliseconds}</StopwatchText>
      </div>
    );
  }
}

export default Stopwatch;

const StopwatchText = styled.span`
  font-size: 5em;
  color: #333;
`;
