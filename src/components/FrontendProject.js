import React from "react";




export const FrontendProject = ({ project }) => {
    return(
        <div>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
                <p>{project.projectName}</p>
                <img src={project.img} alt={project.projectName}></img>
            </a>
        </div>
    );
};