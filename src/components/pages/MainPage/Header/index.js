import React, { Component } from "react";
import styled from "styled-components";
import Icon from "../../../common/InputIcon";
import SrcSearch from "../../../assets/images/svg/search_icon.svg";
import SrcMenu from "../../../assets/images/svg/search_menu.svg";

class Header extends Component {
  state = {
    showSearch: false,
    showFilters: false
  };

  handleClick = () => {
    console.log("click");
  };
  render() {
    const { content, contentsearch } = this.props;

    if (content) {
      return (
        <div>
          {!this.state.showSearch ? (
            <Wrap>
              <h1>My Content</h1>
              <WrapSearh onClick={this.showSearch}>
                <Icon src={SrcSearch} alt="" />
              </WrapSearh>
            </Wrap>
          ) : (
            <Wrap>
              <WrapBlock>
                <WrapSearhTitle onClick={this.showSearch}>
                  <Icon src={SrcSearch} />
                </WrapSearhTitle>
                <WrapSearhText>Search...</WrapSearhText>
              </WrapBlock>
              <WrapSearh onClick={this.showFilters}>
                <Icon src={SrcMenu} alt="" />
              </WrapSearh>
            </Wrap>
          )}
        </div>
      );
    } else if (contentsearch) {
      return (
        <Wrap>
          <WrapBlock>
            <WrapSearh>
              <Icon src={SrcSearch} />
            </WrapSearh>
            <WrapSearhText>Search...</WrapSearhText>
          </WrapBlock>
          <WrapSearh onClick={this.handleClick}>
            <Icon src={SrcMenu} />
          </WrapSearh>
        </Wrap>
      );
    }
  }
}

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #e5e5e5;
  padding: 15px 30px;
`;

const WrapBlock = styled.div`
  display: flex;
  align-items: center;
`;

const WrapSearh = styled.div`
  cursor: pointer;
  margin: 10px 30px;
  position: relative;
  :last-child {
    margin-right: 10px;
  }
  img {
    width: 25px;
  }
`;

const WrapSearhTitle = styled.div`
  margin: 10px;
`;

const WrapSearhText = styled.h1`
  font-family: "CeraProLight", sans-serif;
  font-size: 24px;
  line-height: 30px;
  color: #000000;
  opacity: 0.5;
  margin-left: 17px;
`;

export default Header;
