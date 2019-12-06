import React from "react";
import styled from "styled-components";
import Form from "./Form";
import Logo from "../../../common/fullLogo";
import ImgLogo from "../../../assets/images/logo.svg";

export default class RessetPassword extends React.Component {
  componentDidUpdate(prevProps) {
    const {
      reseted,
      history: { push }
    } = this.props;
    if (!prevProps.reseted && reseted) push("/success-reseted");
  }
  onSubmit = values => {
    const { resetPassword } = this.props;
    resetPassword(values);
  };
  render() {
    const { error } = this.props;
    const values = {
      email: ""
    };
    return (
      <Wrap>
        <FormWrapper>
          <Logo src={ImgLogo} />
          <Title>Reset password</Title>
          <Text>
            Enter your e-mail address and we'll send you a link to reset your
            password.
          </Text>
          <Form
            requestError={error}
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

const Text = styled.div`
  width: 100%;
  max-width: 290px;
  font-size: 14px;
  line-height: 24px;
  color: #34423d;
  margin: 23px 0 54px;
`;
