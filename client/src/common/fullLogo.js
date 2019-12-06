import React from "react";
import styled from "styled-components";

const Logo = props => <img {...props} src={props.src} alt="logo" />;

const WrapLogo = styled(Logo)`
  margin-bottom: 107px;
  @media (max-width: 480px) {
    margin-bottom: 50px;
  }
`;

export default WrapLogo;
