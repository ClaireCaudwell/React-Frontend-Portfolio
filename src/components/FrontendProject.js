import React from "react";

import {
    ProjectCard,
    ProjectLink,
    ProjectImageContainer,
    ImageOverlay,
    ProjectImageTitle,
    ProjectImage,
    ProjectText,
    ProjectTitle,
    Arrow,
    TagsListContainter,
    TagItem,
} from "../styled-components/ProjectList";


export const FrontendProject = ({ frontendProject }) => {
    return (
        <ProjectCard>
            <ProjectLink 
                href={frontendProject.link} 
                target="_blank" 
                rel="noopener noreferrer">
                    <ProjectImageContainer aria-hidden="true">
                        <ImageOverlay></ImageOverlay>
                        <ProjectImageTitle>{frontendProject.projectName}</ProjectImageTitle>
                        <ProjectImage 
                            src={require("../assets" +frontendProject.img)} 
                            alt={frontendProject.projectName}
                        />
                    </ProjectImageContainer>
                    <ProjectText>
                        <ProjectTitle>{frontendProject.projectName}: </ProjectTitle>
                        {frontendProject.text}
                        <Arrow>&#707;&#707;</Arrow>
                    </ProjectText>
            </ProjectLink>
            <TagsListContainter>
                {frontendProject.tags.map((tag, index) => (
                    <TagItem key={index}>{tag}</TagItem>
                ))}
            </TagsListContainter>
        </ProjectCard>
    );
};