import React from 'react';
import styled from "styled-components";

import { Header } from "./components/Header.js";
import { About } from "./components/About.js";
import { TechSkills } from "./components/TechSkills";
import { ProjectList } from "./components/ProjectList";
import { OtherSkills } from "./components/OtherSkills";


export const App = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <About />
        <TechSkills />
        <ProjectList />
        <OtherSkills />
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