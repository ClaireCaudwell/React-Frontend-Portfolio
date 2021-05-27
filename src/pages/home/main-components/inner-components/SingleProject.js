import React from "react";
import styled from "styled-components/macro";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SingleProject = (props) => {
    return (
        <ProjectContainer>   
            <ProjectImage src={props.src} alt={props.alt}/>
            <ProjectTitle>{props.projectTitle}</ProjectTitle>
            <LinkContainer>
                <InnerLink 
                    href={props.gitHubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <LinkTitle className="github-title">{props.gitHubTitle}</LinkTitle>
                    <FontAwesomeIcon 
                        icon={props.icon}
                        size="lg"
                    />                
                </InnerLink >
                <InnerLink  
                    href={props.siteLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <LinkTitle>{props.deployTitle}</LinkTitle>               
                </InnerLink >
            </LinkContainer>
        </ProjectContainer>
    );
}

const ProjectContainer = styled.div`
    max-width: 350px;
    margin-bottom: 20px;
    @media(min-width: 700px) {
        max-width: 32%;
    }
`;

const ProjectImage = styled.img`
    width: 100%;
`;

const ProjectTitle = styled.h3`
    font-size: 18px;
    width: 100%;
    margin: 10px 0;
`;

const LinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const InnerLink = styled.a`
    width: 100%;
    height: 40px;
    padding: 20px;
    background-color: #E6FF82;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    text-align: center;
    transition: 0.3s;
    margin-bottom: 5px;
    & > .svg-inline--fa {
        margin-left: 10px;
    }
    &:hover{
        background-color: #e0ff66;
        transition: 0.3s;
    }
`;

const LinkTitle = styled.p`
    font-size: 15px;
    font-weight: 500;
`;