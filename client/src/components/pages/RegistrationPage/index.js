import React from "react";
import styled from "styled-components";
import Form from "./Form";
import Logo from "../../../common/fullLogo";
import ImgLogo from "../../../assets/images/logo.svg";

export default class LoginPage extends React.Component {
  render() {
    const { error, isLoading } = this.props;
    const values = {
      email: "",
      password: "",
      confirmPassword: ""
    };

    return (
      <Wrap>
        <FormWrapper>
          <Logo src={ImgLogo} />
          <Form
            requestError={error}
            isLoading={isLoading}
            handleSubmit={this.onSubmit}
            values={values}
          />
        </FormWrapper>
      </Wrap>
    );
  }
}

const FormWrapper = styled.div`
  width: 100%;
  max-width: 525px;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  padding: 0 15px;
`;
