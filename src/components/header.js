import React, { useState, useEffect } from 'react';

import { SocialMediaIcons } from "./SocialMediaIcons";
import { HeaderText } from "./HeaderText";

import { HeaderContainer } from "../styled-components/Header";

export const Header = () => {

  useEffect(() => {
    setClassName(true);
  }, []);

  const [ className, setClassName ] = useState(false);

  return (
      <HeaderContainer>
        <SocialMediaIcons header={className} />
        <HeaderText />
      </HeaderContainer>
  );
};