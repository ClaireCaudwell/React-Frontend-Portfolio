import React from "react";

import { 
    SkillsContainer,
    MainTitle,
    InnerContainer,
    TechTextDiv,
    TechText,
    TextSpan
} from "../styled-components/TechSkills";

export const TechSkills = () => {

    const techSkills = ["HTML5", "CSS3", "JavaScriptES6", "Flexbox", "React", "React hooks", "React router", "Redux", "Styled components", "Node.js", "MongoDB", "Mongoose", "Web accessiblity", "RESTful API's", "Agile working methodology", "Error handling", "Responsive web-design", "Cross browser testing" ];
    return(
        <SkillsContainer>
            <MainTitle>TECH</MainTitle>
            <InnerContainer>
                {techSkills.map((skill, index) => (
                    <TechTextDiv key={index}>
                        <TechText>{skill}</TechText>
                    </TechTextDiv>
                ))}
            </InnerContainer>
        </SkillsContainer>
    );
};