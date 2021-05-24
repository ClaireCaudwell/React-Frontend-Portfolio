import React from 'react';
import styled from "styled-components/macro";
import { Link } from "react-router-dom";

import { HamburgerMenu } from "./HamburgerMenu";
import { HeaderMenu } from "./HeaderMenu";

export const Header = ({ forwardedRef }) => { 

  return (
    <HeaderContainer ref={forwardedRef}>
      <HeaderInnerWrapper>
        <TitleContainer>
        <Link to="/">
          <HeaderTitle>
            CLAIRE CAUDWELL
          </HeaderTitle>
        </Link>
          <SecondTitle>FRONTEND DEVELOPER</SecondTitle>
        </TitleContainer>
        <HamburgerMenu />
        <DesktopMenu>
          <HeaderMenu />
        </DesktopMenu>
      </HeaderInnerWrapper>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  margin: auto;
  @media(min-width: 1024px) {
    height: auto;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }
`;

const HeaderInnerWrapper = styled.div`
  margin: auto;
  padding: 20px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  border-bottom: 2px solid #E6FF82;
  @media(min-width: 1024px) {
    width: 100%;
    margin: 0 40px;
    padding: 40px 0 0 0;
  }
`;

const TitleContainer = styled.div`
  @media(min-width: 800px){
    margin: 10px 0;
  }
`;
const SecondTitle = styled.h4`
  font-weight: 400;
  letter-spacing: 2px;
  @media(min-width: 800px) {
    font-size: 15px;
  }
`;

const HeaderTitle = styled.h1`
  font-size: 25px;
  @media(min-width: 800px) {
    /* margin: 0 0 10px; */
  }
`;

const DesktopMenu = styled.div`
  display: none;
  @media(min-width: 1024px){
    display: flex;
  }
`;
