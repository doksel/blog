import TextField from "@material-ui/core/TextField";
import styled from "styled-components";

const FormInput = styled(TextField)`
  width: 100%;
  position: relative;
  margin-bottom: 10px !important;
  label {
    font-family: "CeraProRegular", sans-serif;
    font-size: 18px;
    line-height: 18px;
    letter-spacing: 0.250154px;
    color: #57645f !important;
  }
  input {
    width: 100%;
    max-width: 525px;
    height: 42px;
    box-sizing: border-box;
    font-family: "LatoBolder", sans-serif;
    font-size: 18px;
    line-height: 24px;
    color: #0a1d16;
    padding: 0 14px;
    margin: 9px 0;
    background: #f8f8fd;
    mix-blend-mode: normal;
    border: 1px solid #ebebf5;
    border-radius: 2px;
  }
  input::placeholder {
    font-family: "CeraProRegular", sans-serif;
    color: #858c89;
    font-weight: 300;
    font-size: 18px;
    line-height: 24px;
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
