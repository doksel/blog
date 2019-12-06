import styled from "styled-components";

const MenuLink = styled.div`
  cursor: pointer;
  font-family: "CeraProRegular", sans-serif;
  font-size: 16px;
  line-height: 20px;
  margin: 25px;
  width: max-content;
  color: rgba(0, 0, 0, 0.5);
  position: relative;
  &.active {
    color: #000;
  }
`;
export default MenuLink;
