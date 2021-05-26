import React, { useState } from "react";
import styled from "styled-components/macro";

import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { SingleProject } from "./SingleProject";
import FrontendProjectData from "../../../data/frontendprojectsdata"; 

import { SectionContainer, TitleContainer, MainTitle } from "../../styled-components/GlobalStylingPages";

export const RecentProjects = () => {
    const [ recentProjects, setRecenteProjects ] = useState(3);

    return (
        <SectionContainer className="recent-projects-section">
            <OuterProjectContainer>
                <TitleContainer className="recent-projects-title-container">
                    <MainTitle className="recent-projects-title">RECENT PROJECTS</MainTitle>
                </TitleContainer>
                <ProjectContainer>
                    {FrontendProjectData.slice(0, recentProjects).map(recentProject => (
                        <SingleProject
                            key={recentProject.id} 
                            src={require("../../../assets" +recentProject.img)}
                            alt={recentProject.alt}
                            projectTitle={recentProject.projectName}
                            gitHubLink={recentProject.githubLink}
                            gitHubTitle="GitHub"
                            icon={faGithub}
                            siteLink={recentProject.link}
                            deployTitle="Deployed site"                        
                        />
                    ))}
                </ProjectContainer>
            </OuterProjectContainer>
        </SectionContainer>
    );
};

const OuterProjectContainer = styled.div`
    @media(min-width: 1024px) {
        margin: 50px;
    }
`;

const ProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    @media(min-width: 700px) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }
`;