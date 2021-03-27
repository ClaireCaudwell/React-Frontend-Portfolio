import styled from "styled-components/macro";
import { Container } from "./About";

export const SkillsContainer = styled(Container)`
    background: #fff;
`;

export const MainTitle = styled.h3`
    display: inline;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 700;
    background-color: #6cb889;
    padding: 10px;
    margin: 20px 0;
    color: #fff;
    text-align: center;
    border-radius: 2px;
    &.footer-title{
        margin: 5px 0;
    }
`;

export const InnerContainer = styled.div`
    text-align: center;
    width: 80%;
    margin: 0 auto;
    @media(min-width: 800px){
        width: 60%;
    }
    @media(min-width: 1024px){
        width: 55%;
    }
`;

export const TechText = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    font-weight: 400;
    color: #333333;
    line-height: 2;
    margin-top: 0;
`;

export const TextSpan = styled.span`
    color: #ffb31a;
    font-weight: 700;
    line-height: 2;
    &.welcome-title {
        color: #000;
    }
`;
