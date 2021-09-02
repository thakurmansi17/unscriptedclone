import React from "react";
import styled from "styled-components";
import Burger from "./Burger";

const Navbar = styled.nav`
  padding: 0.4rem 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  color: white;
  z-index: 2;
  background: black;
  -webkit-position:sticky;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
`;
const Logo = styled.div`
  padding: 0.5rem 0;
  color: #fee000;
  text-decoration: none;
  font-weight: 900;
  font-size: 2.5rem;
  font-family: "Source Serif Pro", serif;
`;

const Nav = () => {
  return (
    <Navbar>
      <Logo>unscripted</Logo>
      <Burger />
    </Navbar>
  );
};

export default Nav;
