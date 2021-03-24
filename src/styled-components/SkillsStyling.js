import styled from "styled-components";
import { AboutContainer } from "./AboutStyling";

export const SkillsContainer = styled(AboutContainer)`
    background: rgb(255, 255, 255);
`;

export const MainTitle = styled.h3`
    display: inline;
    font-family: 'Montserrat', sans-serif;
    font-size: 22px;
    font-weight: 700;
    background-color: rgb(108, 184, 137);
    padding: 10px;
    margin: 10px 0;
    color:rgb(255, 255, 255);
    text-align: center;
    border-radius: 2px;
`;

export const InnerContainer = styled.div`
    text-align: center;
    width: 80%;
    margin: 0 auto;
`;

export const TechText = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: rgb(0, 0, 0);
    line-height: 2;
`;

export const TextSpan = styled.span`
    color: rgb(255, 179, 26);
    font-weight: 700;
    line-height: 2; 
`;