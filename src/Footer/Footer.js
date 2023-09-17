import React from "react";
import styled from "styled-components";

const Footer = () => {
  const date = new Date();
  const getYear = date.getFullYear();

  return (
    <FooterSection>
      <span>copyright {getYear} All Right Reserved By SG</span>
    </FooterSection>
  );
};

const FooterSection = styled.section`
  width: 100%;
  height: 10vh;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Footer;
