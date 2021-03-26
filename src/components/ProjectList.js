import React, { useState } from "react";

import FrontendProjectData from "../data/frontendprojectsdata.json";
import BackendProjectData from "../data/backendprojectsdata.json";

import { FrontendProject } from "./FrontendProject";
import { BackendProject } from "./BackendProject";

import { Container } from "../styled-components/About";
import { MainTitle } from "../styled-components/TechSkills";
import { ProjectCardContainer, LoadMoreButton } from "../styled-components/ProjectList";

export const ProjectList = () => {

    const [ visibleProjects, setVisibleProjects ] = useState(4);

    const handleClick = () => {
        setVisibleProjects(preVisibleProjects => preVisibleProjects + 4);
    };

    return (
        <>
            <Container>
                <MainTitle>FRONTEND PROJECTS</MainTitle>
                    <ProjectCardContainer>
                        {FrontendProjectData.slice(0, visibleProjects).map(frontendProject => (
                            <FrontendProject key={frontendProject.id} frontendProject={frontendProject} />
                        ))}
                    </ProjectCardContainer>
                    <LoadMoreButton onClick={handleClick}>
                    {visibleProjects === 16 ? "All projects loaded" : "Load more projects"}
                    </LoadMoreButton>
            </Container>
            <Container className="backend">
                <MainTitle>BACKEND PROJECTS</MainTitle>
                <ProjectCardContainer>
                    {BackendProjectData.map(backendProject => (
                        <BackendProject key={backendProject.id} backendProject={backendProject} />
                    ))}
                </ProjectCardContainer>
            </Container>
        </>
    );
};