import React from "react";
import styled from "styled-components/macro";

export const AboutSkills = () => {

    const techSkills = ["HTML5", "CSS3", "JavaScriptES6", "Flexbox", "React", "React router", "Redux", "Styled components", "Node.js", "MongoDB", "Mongoose", "Web accessiblity", "RESTful API's", "Agile", "Responsive web-design"];

    return (
        <AboutSkillsSection>
            <AboutSkillsColumn>
                <TitleContainer>
                    <MainTitle>FRONTEND DEVELOPER</MainTitle>
                    <MainTitle className="designer-title">& DESIGNER</MainTitle>
                </TitleContainer>
                <AboutText className="about-title">Hi<span role="img" aria-label="waving hand emoji" style={{margin: "0 7px"}}>👋</span> I’m Claire.</AboutText>
                <AboutText>A frontend developer who has a background in design. I enjoy creating clean code, creative and user friendly websites and applications.</AboutText>
            </AboutSkillsColumn>
            <AboutSkillsColumn>
                <MainTitle className="tech-title">TECH SKILLS</MainTitle>
                <TechSkillsDiv>
                    {techSkills.map((skill, index) => (
                        <TechTextDiv key={index} className={`colour-${index % 2}`}>
                            <TechText>{skill}</TechText>
                        </TechTextDiv>
                    ))}
                </TechSkillsDiv>
            </AboutSkillsColumn>
        </AboutSkillsSection>
    );
};

const AboutSkillsSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    @media(min-width: 750px) {
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
    }
`;

const AboutSkillsColumn = styled.div`
    margin: 20px 0;
    max-width: 350px;
    &:last-child{
    }
    @media(min-width: 750px) {
        width: 500px;
        height: 410px;
        margin: 30px;
    }
    @media(min-width: 1024px) {
        margin: 50px;
        height: 350px;
    }
`;

const TitleContainer = styled.div`
    border-bottom: 2px solid #089942;
    margin-bottom: 30px;
    @media(min-width: 750px) {
       margin-bottom: 30px;
    }
`;

const MainTitle = styled.h3`
    line-height: 30px;
    letter-spacing: 2px;
    font-size: 20px;
    &.designer-title {
        margin-bottom: 10px;
    }
    &.tech-title {
        font-weight: 600;
        color: #089942;
        text-align: center;
        margin-bottom: 20px;
        margin-top: 0;
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