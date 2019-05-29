import React from "react";
import styled from "styled-components";

const Button = props => {
  return (
    <Root bgColor={props.bgColor} onClick={() => props.handleClick()}>
      {props.text}
    </Root>
  );
};

export default Button;

const Root = styled.button`
  background-color: ${props => props.bgColor};
  width: 100px;
  height: 50px;
  font-size: 20px;
  color: #fff;

  &:hover {
    cursor: pointer;
  }
`;
