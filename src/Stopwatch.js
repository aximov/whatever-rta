import React, { Component } from "react";
import styled from "styled-components";

class Stopwatch extends Component {
  constructor() {
    super();
    this.state = {
      startTime: null,
      clock: "0:00:00.000"
    };
  }

  start() {
    clearInterval(this.stopwatch);
    this.setState({
      startTime: new Date().getTime()
    });
    this.stopwatch = setInterval(() => {
      this.update();
    }, 1);
  }

  stop() {
    clearInterval(this.stopwatch);
  }

  reset() {
    this.stop();
    this.setState({
      startTime: null,
      clock: "0:00:00.000"
    });
  }

  update() {
    const currentTime = new Date().getTime();
    const duration = currentTime - this.state.startTime;
    const millisec = (duration % 1000).toString().padStart(3, "0");
    const seconds = (Math.trunc(duration / 1000) % 60)
      .toString()
      .padStart(2, "0");
    const minutes = (Math.trunc(duration / 1000 / 60) % 60)
      .toString()
      .padStart(2, "0");
    const hours = Math.trunc(duration / 1000 / 60 / 60).toString();

    const clock = hours + ":" + minutes + ":" + seconds + "." + millisec;

    this.setState({
      clock: clock
    });
  }

  render() {
    return (
      <div>
        <StopwatchText>{this.state.clock}</StopwatchText>
      </div>
    );
  }
}

export default Stopwatch;

const StopwatchText = styled.span`
  font-size: 5em;
  color: #333;
`;
