import React from "react";
import styled from "styled-components/macro";

import { AboutSkills } from "./main/AboutSkills";
import { RecentProjects } from "./main/RecentProjects";
import { MainContainer } from "../styled-components/GlobalStylingPages";

export const Home = () => {
    return (
        <MainContainer>
            <AboutSkills />
            <SectionDivider></SectionDivider>
            <RecentProjects />
            <SectionDivider></SectionDivider>
        </MainContainer>
    );
};

const SectionDivider = styled.div`
    width: 100%;
    height: 2px;
    background-color: #E6FF82;
`;