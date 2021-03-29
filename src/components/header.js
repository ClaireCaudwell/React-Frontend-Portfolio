import React from 'react';

import { HeaderText } from "./HeaderText";

import { HeaderContainer } from "../styled-components/Header";

export const header = ({ forwardedRef }) => { 

  return (
    <HeaderContainer ref={forwardedRef}>
        <HeaderText />
    </HeaderContainer>
  );
};