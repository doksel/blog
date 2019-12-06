import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

export default class WrapperPage extends React.Component {
  userLogout = () => {
    const { userLogout } = this.props;
    userLogout();
  };
  render() {
    
    return (
      <Wrap>
        <WrapNavbar>
          <Navbar {...this.props}/>
        </WrapNavbar>
        <WrapInner>
          <WrapContent>
            <Content>
              {this.props.children}
            </Content>
          </WrapContent>
          <WrapMap/>
        </WrapInner>
      </Wrap>
    );
  }
}

const Wrap = styled.div`
  font-family: 'CeraProRegular', sans-serif;
  min-height: 100vh;
  width: 100%;
`;

const WrapNavbar = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 100;
`;

const WrapInner = styled.div`
  width: 100%;
  display: flex;
  padding-top: 80px;
  min-height: 100vh;
`;

const WrapContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  overflow: auto;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const WrapMap = styled.div`
  width: 100%;
  background: #FBFBFB;
  max-width: 300px;
`;