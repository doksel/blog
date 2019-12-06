import React from "react";
import styled from "styled-components";
import Form from "./Form";
import Logo from "../../../common/fullLogo";
import ImgLogo from "../../../assets/images/logo.svg";

export default class LoginPage extends React.Component {
  onSubmit = values => {
    const {
      registerPassword,
      match: {
        params: { key }
      }
    } = this.props;
    registerPassword({ ...values, key });
  };
  componentDidUpdate(prevProps) {
    const {
      confirmed,
      history: { push }
    } = this.props;
    if (!prevProps.confirmed && confirmed) push("/");
  }

  render() {
    const { error, isLoading } = this.props;
    const values = {
      password: "",
      confirmPassword: ""
    };
    return (
      <Wrap>
        <FormWrapper>
          <Logo src={ImgLogo} />
          <Title>Сonfirm your password</Title>
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

const Title = styled.div`
  font-family: "CeraPromedium", sans-serif;
  font-size: 26px;
  line-height: 36px;
  letter-spacing: -0.0180667px;
  color: #555f5b;
  margin-bottom: 24px;
`;
