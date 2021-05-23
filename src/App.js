import React, { useRef } from 'react';
import styled, { createGlobalStyle } from "styled-components";

import { Header } from "./components/header/Header";
import { About } from "./components/About";
import { TechSkills } from "./components/TechSkills";
import { ProjectList } from "./components/ProjectList";
import { OtherSkills } from "./components/OtherSkills";
import { Articles } from "./components/Articles";
import { Footer } from "./components/Footer";
import { ScrollTopArrow } from "./components/ScrollTopArrow";

export const App = () => {
  
  const scrollUpToRef = useRef(null);

  return (
    <>
      <GlobalStyle />
      <Header forwardedRef={scrollUpToRef}/>
      <MainContainer>
        <About />
        <TechSkills />
        <ProjectList />
        <OtherSkills />
        <Articles />
        <Footer />
        <ScrollTopArrow forwardedRef={scrollUpToRef}/>
      </MainContainer>
    </>
  );
};

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
}
body {
  font-family: 'Quicksand', sans-serif;
  color: #5C5E5F;  
  font-size: 16px;
  a {
    text-decoration: none;
    color: #5C5E5F;
  }
}
`;

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;