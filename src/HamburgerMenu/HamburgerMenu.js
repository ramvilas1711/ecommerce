import React from "react";
import styled from "styled-components";
import Nav from "../NavBar/Nav";

const HamburgerMenu = () => {
  return (
    <HamburgerSection className="mobileMenu">
      <Nav />
    </HamburgerSection>
  );
};

const HamburgerSection = styled.section``;

export default HamburgerMenu;
