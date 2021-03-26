import React from "react";

import {
    ProjectCard,
    ProjectLink,
    ProjectText,
    ProjectTitle,
    Arrow,
    TagsListContainter,
    TagItem,
} from "../styled-components/ProjectList";

export const BackendProject = ({ backendProject }) => {
    return (
        <ProjectCard className="backend">
            <ProjectLink 
                href={backendProject.link} 
                target="_blank" 
                rel="noopener noreferrer"
            >
                <ProjectText className="backend">
                    <ProjectTitle>{backendProject.projectName}: </ProjectTitle>
                    {backendProject.text}
                    <Arrow>&#707;&#707;</Arrow>
                </ProjectText>
            </ProjectLink>
            <TagsListContainter>
                {backendProject.tags.map((tag, index) => (
                    <TagItem key={index}>{tag}</TagItem>
                ))}
            </TagsListContainter>
        </ProjectCard>
    );
};