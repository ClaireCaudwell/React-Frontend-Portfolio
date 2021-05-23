import React from 'react';
import styled from "styled-components/macro";

import { HamburgerMenu } from "./HamburgerMenu";
import { HeaderMenu } from "./HeaderMenu";

export const Header = ({ forwardedRef }) => { 

  return (
    <HeaderContainer ref={forwardedRef}>
      <HeaderInnerWrapper>
        <div>
          <HeaderTitle>CLAIRE CAUDWELL</HeaderTitle>
          <h4>FRONTEND DEVELOPER</h4>
        </div>
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
`;

const HeaderInnerWrapper = styled.div`
  margin: auto;
  padding: 20px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  border-bottom: 2px solid #E6FF82;
  @media(min-width: 800px) {
    width: auto;
    margin: 0 40px;
    padding: 0;
  }
`;

const HeaderTitle = styled.h1`
  font-size: 25px;
  @media(min-width: 800px) {
    margin: 0 0 10px;
  }
`;

const DesktopMenu = styled.div`
  display: none;
  @media(min-width: 800px){
    display: flex;
  }
`;
