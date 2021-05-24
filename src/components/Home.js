import React from "react";
import styled from "styled-components/macro";

// import { About } from "./About";
// import { TechSkills } from "./TechSkills";
// import { ProjectList } from "./ProjectList";
// import { OtherSkills } from "./OtherSkills";
// import { Articles } from "./Articles";

// import { AboutSkills } from "./main/AboutSkills";

export const Home = () => {
    return (
        <MainContainer>
            <p>HOME</p>
            {/* <AboutSkills />
            <About />
            <TechSkills />
            <ProjectList />
            <OtherSkills />
            <Articles /> */}
        </MainContainer>
    );
};

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;