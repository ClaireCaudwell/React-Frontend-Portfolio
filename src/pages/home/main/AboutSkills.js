import React from "react";
import styled from "styled-components/macro";

import { SectionContainer, TitleContainer, MainTitle } from "../../styled-components/GlobalStylingPages";

export const AboutSkills = () => {

    const techSkills = ["HTML5", "CSS3", "JavaScriptES6", "Flexbox", "React", "React router", "Redux", "Styled components", "Node.js", "MongoDB", "Mongoose", "Web accessiblity", "RESTful API's", "Agile", "Responsive web-design"];

    return (
        <SectionContainer className="about-skills-section">
            <AboutSkillsColumn>
                <TitleContainer>
                    <MainTitle>FRONTEND DEVELOPER</MainTitle>
                    <MainTitle className="designer-title">& DESIGNER</MainTitle>
                </TitleContainer>
                <AboutText className="about-title">Hi<span role="img" aria-label="waving hand emoji" style={{margin: "0 7px"}}>👋</span> I’m Claire.</AboutText>
                <AboutText>A frontend developer who has a background in design. I enjoy creating clean code, creative and user friendly websites and applications.</AboutText>
            </AboutSkillsColumn>
            <AboutSkillsColumn className="tech-column">
                <MainTitle className="tech-title">TECH SKILLS</MainTitle>
                <TechSkillsDiv>
                    {techSkills.map((skill, index) => (
                        <TechTextDiv key={index} className={`colour-${index % 2}`}>
                            <TechText>{skill}</TechText>
                        </TechTextDiv>
                    ))}
                </TechSkillsDiv>
            </AboutSkillsColumn>
        </SectionContainer>
    );
};

const AboutSkillsColumn = styled.div`
    max-width: 350px;
    &.tech-column {
        margin-top: 20px;
    }
    @media(min-width: 750px) {
        max-width: 600px;
        min-width: 300px;
        &.tech-column {
            margin-left: 20px;
            max-width: 900px;
        }
    }
    @media(min-width: 1024px) {
        margin: 50px;
    }
`;

const AboutText = styled.p`
    line-height: 25px;
    margin-bottom: 20px;
    margin-top: 20px;
    font-size: 18px;
    font-weight: 500;
    &:last-child {
        margin-bottom: 0;
        margin-top: 0;
        font-size: 17px;
        line-height: 30px;        
    }
`;

const TechSkillsDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 500px;
    @media(min-width: 750px) {
        margin: 0 auto;
    }
`;

const TechTextDiv = styled.div`
    margin: 5px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    padding: 5px;
    height: 30px;
    height: 50px;
    border-radius: 5px;
    flex-grow: 1;
    &.colour-0 {
        background-color: #CFF5DE;
    }
    
    &.colour-1 {
        background-color: #DEFAE9;
    }
`;

const TechText = styled.p`
    font-weight: bold;
    font-size: 15px;
    padding: 0;
    letter-spacing: 1.5px;
`;