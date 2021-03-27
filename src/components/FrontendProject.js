import React, { useState } from "react";

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