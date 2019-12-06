import React from "react";
import styled from "styled-components";
import FormButton from "../../../common/FormButton";

import Logo from "../../../common/fullLogo";
import ImgLogo from "../../../assets/images/logo_icon.svg";

export default class LoginPage extends React.Component {
  render() {
    const {
      history: { push }
    } = this.props;
    return (
      <Wrap>
        <WrapperBlock>
          <Wrapper>
            <WrapLogo src={ImgLogo} />
            <Title>Password has been reset</Title>
            <Text>
              Enter your e-mail address and we'll send you a link to reset your
              password.
            </Text>
          </Wrapper>
          <FormButton green="green" onClick={() => push("/")}>
            Back
          </FormButton>
        </WrapperBlock>
      </Wrap>
    );
  }
}

const WrapperBlock = styled.div`
  width: 100%;
  max-width: 525px;
`;

const Wrapper = styled.div`
  width: max-content;
  margin: 0 auto;
`;
const WrapLogo = styled(Logo)`
  margin-bottom: 35px;
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
  margin: 23px 0 180px;
`;
