import styled from "styled-components/macro";

import { SkillsContainer, InnerContainer } from "./TechSkills";

export const OtherSkillsContainer = styled(SkillsContainer)`
    background-color: #f4f4f4;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
`;

export const OuterSkillsContainer = styled.div`
    @media(min-width: 700px){
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: center;
    }
`;

export const InnerSkillsContainer = styled(InnerContainer)`
    padding: 10px;
    font-size: 15px;
    background-color: #fff;
    margin-bottom: 10px; 
    width: 300px; 
    @media(min-width: 700px){
        margin: 10px;
        height: 250px;
        width: 250px;
    }
`;

export const SkillsTitle = styled.h4`
    font-weight: 700;
    color: #ffb31a;
    margin: 0;
    text-align: left;
    font-size: 18px;
`;

export const OtherSkillList = styled.ul`
    list-style-type: none;
    text-align: left; 
    padding-left: 0;
    font-weight: 400;
    font-size: 15px;
`;

export const OtherSkillItem = styled.li`
    padding-bottom: 10px;
`;



