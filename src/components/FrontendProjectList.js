import React from "react";
import FrontendProjectData from "../data/frontendprojectsdata.json";

import { FrontendProject } from "./FrontendProject";
import { Container } from "../styled-components/AboutStyling";
import { MainTitle } from "../styled-components/SkillsStyling";

export const FrontendProjectList = () => {
    return (
        <Container>
            <MainTitle>FRONTEND PROJECTS</MainTitle>
            {FrontendProjectData.map((project, index) => (
                <FrontendProject key={index} project={project} />
            ))}
        </Container>
    );
};