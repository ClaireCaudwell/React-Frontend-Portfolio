import React from 'react';

import { SocialMediaIcons } from "./SocialMediaIcons";
import { HeaderText } from "./HeaderText";

import { HeaderContainer } from "../styled-components/HeaderStyling";

export const Header = () => {
  return (
      <HeaderContainer>
        <SocialMediaIcons />
        <HeaderText />
      </HeaderContainer>
  );
};