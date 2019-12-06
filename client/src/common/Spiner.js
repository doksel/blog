import React from "react";
import styled from "styled-components";

const SpinnerBlock = props => <div {...props} />;

const Spinner = styled(SpinnerBlock)`
  display: inline-block;
  width: 30px;
  height: 30px;
  :after {
    content: " ";
    display: block;
    width: 25px;
    height: 25px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid ${props => (props.green ? "#fff" : "#7FBF26")};
    border-color: ${props => (props.green ? "#fff" : "#7FBF26")} transparent
      ${props => (props.green ? "#fff" : "#7FBF26")} transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Spinner;
