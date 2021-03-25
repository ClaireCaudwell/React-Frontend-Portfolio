import styled from "styled-components/macro";

import { SkillsContainer, InnerContainer } from "./TechSkills";

export const OtherSkillsContainer = styled(SkillsContainer)`
    background-color: rgb(244, 244, 244);
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
`;

export const InnerSkillsContainer = styled(InnerContainer)`
    padding: 10px;
    font-size: 18px;
    background-color: #fff;
    margin-bottom: 10px;   
`;

export const SkillsTitle = styled.h4`
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    color: rgb(255, 179, 26);
    margin: 0;
    text-align: left;
`;

export const OtherSkillList = styled.ul`
    list-style-type: none;
    text-align: left; 
    padding-left: 0;
    font-weight: 400;
    color: rgb(0, 0, 0);
    font-family: 'Montserrat', sans-serif;   
`;

export const OtherSkillItem = styled.li`
    padding-bottom: 10px;
`;



