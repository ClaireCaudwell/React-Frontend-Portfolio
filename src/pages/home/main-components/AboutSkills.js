import React from "react";
import styled from "styled-components/macro";

import { Skills } from "./inner-components/Skills";

import { SectionContainer, TitleContainer, ReusableColumn, MainTitle, SkillsDiv } from "../../styled-components/GlobalStylingPages";

export const AboutSkills = () => {

    const techSkills = ["HTML5", "CSS3", "JavaScriptES6", "Flexbox", "React", "React router", "Redux", "Styled components", "Node.js", "MongoDB", "Mongoose", "Web accessiblity", "RESTful API's", "Agile", "Responsive web-design"];

    return (
        <SectionContainer className="skills-section">
            <ReusableColumn>
                <TitleContainer>
                    <MainTitle>FRONTEND DEVELOPER</MainTitle>
                    <MainTitle className="designer-title">& DESIGNER</MainTitle>
                </TitleContainer>
                <AboutText className="about-title">Hi<span role="img" aria-label="waving hand emoji" style={{margin: "0 7px"}}>👋</span> I’m Claire.</AboutText>
                <AboutText>A frontend developer who has a background in design. I enjoy creating clean code, creative and user friendly websites and applications.</AboutText>
            </ReusableColumn>
            <ReusableColumn className="skills-column">
                <MainTitle className="skills-title">TECH SKILLS</MainTitle>
                <SkillsDiv>
                    {techSkills.map((skill, index) => (
                        <Skills 
                            skill={skill}
                            index={index}
                            key={index}
                        />
                    ))}
                </SkillsDiv>
            </ReusableColumn>
        </SectionContainer>
    );
};

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