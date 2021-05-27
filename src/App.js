import React, { useRef } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import { Header } from "./components/header/Header";
import { ScrollTopArrow } from "./components/ScrollTopArrow";
import { Home } from "./pages/home/Home";
import { FrontendDevelopment } from "./pages/frontend-development/FrontendDevelopment";
import { UiDesign } from "./pages/ui-design/UiDesign";
import { AboutContact } from "./pages/about-contact/AboutContact";

// import { Footer } from "./components/Footer";

export const App = () => {
  
  const scrollUpToRef = useRef(null);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header forwardedRef={scrollUpToRef} />
      <ScrollTopArrow forwardedRef={scrollUpToRef}/>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/frontenddevelopment">
          <FrontendDevelopment />
        </Route>
        <Route path="/uidesign">
          <UiDesign />
        </Route>
        <Route path="/aboutcontact">
          <AboutContact />
        </Route>
        <Redirect to="/" />
      </Switch>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  letter-spacing: 1px;
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