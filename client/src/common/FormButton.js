import React from "react";
import styled from "styled-components";

const Button = props => <button {...props} type={"submit"} />;

const FormButton = styled(Button)`
  width: 100%;
  max-width: 267px;
  height: 42px;
  font-family: "LatoBold", sans-serif;
  font-weight: 900;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 1px;
  text-transform: uppercase;
  display: flex;
  text-align: center;
  -webkit-box-pack: center;
  -moz-box-pack: justify;
  -ms-flex-pack: justify;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  align-items: center;
  margin: 17px auto;
  color: ${props => (props.green ? "#fff" : "#7FBF26")};
  background: ${props => (props.green ? "#7FBF26" : "#fff")};
  box-shadow: 0px 3.61334px 13.55px rgba(102, 255, 199, 0.2);
  border-radius: 2px;
  border: 2px solid #7fbf26;
  cursor: pointer;
  transition: all 0.5s;
  :hover {
    color: ${props => (props.green ? "#7FBF26" : "#fff")};
    background: ${props => (props.green ? "#fff" : "#7FBF26")};
  }
`;

export default FormButton;
