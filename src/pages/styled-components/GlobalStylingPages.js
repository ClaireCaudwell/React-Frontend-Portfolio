import styled from "styled-components/macro";

export const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 20px;
    @media(min-width: 750px) {
        margin: 0 50px;
    }
    @media(min-width: 1024px) {
        margin: 0 100px;
    }
    @media(min-width: 1200px) {
        margin: 0 200px;
    }
    @media(min-width: 1500px) {
        margin: 0 300px;
    }
`;

export const SectionContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    margin: 40px 0;
    @media(min-width: 700px){
        &.second-skills-section {
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-evenly;
        }
    }
    @media(min-width: 750px) {
        &.skills-section {
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
        }
        margin: 100px 0;
    }
    @media(min-width: 1024px) {
        margin: 40px 0;
    }
`;

// Reusable column
export const ReusableColumn = styled.div`
    max-width: 350px;
    &.skills-column {
        margin-top: 20px;
    }
    @media(min-width: 700px){
        &.second-skills-column {
            min-width: 20%;
            max-width: 40%;
            margin: 10px;
        }
    }
    @media(min-width: 750px) {
        max-width: 600px;
        min-width: 300px;
        &.skills-column {
            margin-left: 20px;
            max-width: 900px;
        }
    }
    @media(min-width: 1024px) {
        margin: 50px;
    }
`;

export const TitleContainer = styled.div`
    background-color: #F5FDD6;
    padding: 10px;
    margin-bottom: 30px;
    border-radius: 5px;
    &.recent-projects-title-container {
        align-self: flex-start;
    }
    @media(min-width: 750px) {
       margin-bottom: 30px;
    }
`;

export const MainTitle = styled.h3`
    line-height: 30px;
    letter-spacing: 2px;
    font-size: 20px;
    &.skills-title {
        font-weight: 600;
        color: #089942;
        text-align: center;
        margin-bottom: 20px;
        margin-top: 0;
    }
`;

// Skills component
export const SkillsDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 500px;
    @media(min-width: 750px) {
        margin: 0 auto;
    }
`;

export const SkillsTextDiv = styled.div`
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

export const SkillsText = styled.p`
    font-weight: bold;
    font-size: 15px;
    padding: 0;
    letter-spacing: 1.5px;
`;