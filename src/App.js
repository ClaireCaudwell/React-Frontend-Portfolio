import React from 'react';
import styled from "styled-components";

import { Header } from "./components/Header.js";
import { About } from "./components/About.js";
import { TechSkills } from "./components/TechSkills";

export const App = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <About />
        <TechSkills />
      </MainContainer>
    </>
  );
};

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;