import React, { useState, useEffect } from "react";

import FrontendProjectData from "../data/frontendprojectsdata.json";
import BackendProjectData from "../data/backendprojectsdata.json";

import { FrontendProject } from "./FrontendProject";
import { BackendProject } from "./BackendProject";

import { Container } from "../styled-components/About";
import { MainTitle } from "../styled-components/TechSkills";
import { 
    ProjectCardContainer,
    ButtonContainer,
    LoadMoreButton 
} from "../styled-components/ProjectList";

export const ProjectList = () => {

    const [ visibleProjects, setVisibleProjects ] = useState(4);
    const [ showCertainButton, setShowCertainButton ] = useState(false);

    const handleShowMoreProjects = () => {
        setVisibleProjects(preVisibleProjects => preVisibleProjects + 4);             
    };

    console.log(visibleProjects);

    const handleShowLessProjects = () => {
        setVisibleProjects(4);
    };

    useEffect(() => {
        if(visibleProjects > 5){
            setShowCertainButton(true);
        } else {
            setShowCertainButton(false);
        } 
    }, [visibleProjects]);

    return (
        <>
            <Container>
                <MainTitle>FRONTEND PROJECTS</MainTitle>
                    <ProjectCardContainer>
                        {FrontendProjectData.slice(0, visibleProjects).map(frontendProject => (
                            <FrontendProject key={frontendProject.id} frontendProject={frontendProject} />
                        ))}
                    </ProjectCardContainer>
                    <ButtonContainer>
                        <LoadMoreButton 
                            onClick={handleShowMoreProjects}
                            className={visibleProjects > 14 && "hide-button"}
                        >
                            Show more projects
                        </LoadMoreButton>
                        {showCertainButton && 
                            <LoadMoreButton onClick={handleShowLessProjects}>
                                Show less projects
                            </LoadMoreButton>
                        }
                    </ButtonContainer>
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