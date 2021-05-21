import React, { useState } from "react";

import github from "../assets/white-github.png";

import {
    ProjectCard,
    ProjectLink,
    ProjectImageContainer,
    ImageOverlay,
    ProjectImageTitle,
    ProjectImage,
    GitHubContainer,
    GitHubIconContainer,
    GitHubTitle,
    ProjectText,
    Arrow,
    TagsListContainter,
    TagItem,
} from "../styled-components/ProjectList";

import {
    IconImage
} from "../styled-components/Header";

export const FrontendProject = ({ frontendProject }) => {

    const [ hoverImage, setHoverImage ] = useState(false);

    const onHover = () => {
        setHoverImage(true);
    };
    const offHover = () => {
        setHoverImage(false);
    };
    
    return (
        <ProjectCard>
            <ProjectLink 
                href={frontendProject.link} 
                target="_blank" 
                rel="noopener noreferrer">
                    <ProjectImageContainer 
                        aria-hidden="true" 
                        onMouseOver={onHover}
                        onMouseOut={offHover}
                    >
                        <ImageOverlay></ImageOverlay>
                        <ProjectImageTitle 
                            className={hoverImage && "dark-fontcolour"}>
                            {frontendProject.projectName}
                        </ProjectImageTitle>
                        <ProjectImage 
                            src={require("../assets" +frontendProject.img)} 
                            alt={frontendProject.alt}
                        />
                    </ProjectImageContainer>
                    <ProjectText>
                        {/* <ProjectTitle>{frontendProject.projectName}: </ProjectTitle> */}
                        {frontendProject.text}
                        <Arrow>&#707;&#707;</Arrow>
                    </ProjectText>
            </ProjectLink>
            <GitHubContainer
                href={frontendProject.githubLink}  
                target="_blank" 
                rel="noopener noreferrer"
            >
                <GitHubIconContainer>
                    <IconImage 
                        src={github} 
                        alt="github icon"
                        className="github-icon" 
                    />
                </GitHubIconContainer>
                <GitHubTitle >GitHub code</GitHubTitle >
            </GitHubContainer>
            <TagsListContainter>
                {frontendProject.tags.map((tag, index) => (
                    <TagItem key={index}>{tag}</TagItem>
                ))}
            </TagsListContainter>
        </ProjectCard>
    );
};