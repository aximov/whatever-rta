import React, { Component } from "react";
import Stopwatch from "./Stopwatch";
import Button from "./Button";
import styled from "styled-components";

class App extends Component {
  render() {
    return (
      <Root>
        <Title>Whatever RTA</Title>
        <Stopwatch ref="stopwatch" />
        <Unit>
          <Button
            text="start"
            bgColor="#4169e1"
            handleClick={() => this.refs.stopwatch.start()}
          />
          <Button
            text="stop"
            bgColor="#dc143c"
            handleClick={() => this.refs.stopwatch.stop()}
          />
          <Button
            text="reset"
            bgColor="#808080"
            handleClick={() => this.refs.stopwatch.reset()}
          />
        </Unit>
      </Root>
    );
  }
}

export default App;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Title = styled.h1`
  color: #333;
`;

const Unit = styled.div`
  disylay: flex;
  justify-content: space-between;
  width: 500px;
`;
