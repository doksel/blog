import React from "react";
import styled from "styled-components";
import Logo from "../../../../common/fullLogo";
import ImgLogo from "../../../../assets/images/logo.svg";
import MenuLink from "./MenuLink";

export default class WrapperPage extends React.Component {
  handleClick = e => {
    const allMenuLink = document.querySelectorAll(".menuLink");
    if (allMenuLink) {
      allMenuLink.forEach(menuLink => {
        menuLink.classList.remove("active");
      });
    }
    e.target.classList.add("active");
  };
  logout = () => {
    this.props.userLogout();
    localStorage.removeItem("token");
  };
  componentDidMount() {
    const allMenuLink = document.querySelectorAll(".menuLink");
    if (allMenuLink) {
      allMenuLink.forEach(menuLink => {
        if (menuLink.dataset.key === this.props.id) {
          menuLink.classList.add("active");
        }
      });
    }
  }
  render() {
    const listNavbar = [
      { name: "General", id: "general" },
      { name: "Guides", id: "guides" },
      { name: "Tours", id: "tours" },
      { name: "Transactions", id: "transactions" }
    ];
    
    return (
      <Wrap>
        <WrapLeft>
          <WrapLogo>
            <Logo src={ImgLogo} />
          </WrapLogo>
          <WrapMenu>
            {listNavbar.map(link => (
              <MenuLink
                className="menuLink"
                onClick={this.handleClick}
                key={link.id}
                data-key={link.id}
              >
                {link.name}
              </MenuLink>
            ))}
          </WrapMenu>
        </WrapLeft>
        <Logout onClick={this.logout}>Logout</Logout>
      </Wrap>
    );
  }
}

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 100%;
  width: 100%;
  background: #eeeeee;
`;

const WrapLeft = styled.div`
  display: flex;
  align-items: center;
`;

const WrapLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
  padding: 20px 30px;
  border-bottom: 1px solid #e5e5e5;
  img {
    width: 100%;
    max-width: 140px;
    margin-bottom: 0;
  }
`;

const WrapMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Logout = styled.div`
  padding: 30px;
  cursor: pointer;
  font-size: 16px;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.5);
  :hover {
    color: #000;
  }
`;
