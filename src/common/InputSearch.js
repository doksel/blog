import TextField from "@material-ui/core/TextField";
import styled from "styled-components";

const FormInput = styled(TextField)`
  width: 100%;
  position: relative;
  input {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    font-family: "CeraProRegular", sans-serif;
    font-size: 24px;
    line-height: 30px;
    color: #000;
    padding: 30px;
    @media (max-width: 680px) {
      padding: 10px;
    }
  }
  input::placeholder {
    font-family: "CeraProRegular", sans-serif;
    color: #000;
    font-weight: 300;
    font-size: 24px;
    line-height: 30px;
  }
  div {
    ::before,
    ::after {
      content: none;
    }
  }
  p {
    font-family: "CeraProRegular", sans-serif;
    margin-top: 0;
    font-size: 14px;
    color: red;
  }
`;
export default FormInput;
