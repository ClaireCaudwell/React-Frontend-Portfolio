import styled from "styled-components/macro";
import { Container } from "./About";

export const SkillsContainer = styled(Container)`
    background: #fff;
`;

export const MainTitle = styled.h3`
    display: inline;
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
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 auto;
    @media(min-width: 600px) {
        width: 60%;
    }
    @media(min-width: 1024px) {
        width: 60%;
    }
`;

export const TechTextDiv = styled.div`
    background-color: #fff;
    border: 2px solid #ffb31a;
    border-radius: 7px;
    margin: 5px;
    width: 35%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    transition: 0.3s;
    @media(min-width: 600px) {
        width: 30%;
    }
    &:hover{
        background-color: #ffb31a;
        transition: 0.3s;
    }
`;

export const TechText = styled.p`
    font-weight: 500;
`;

export const TextSpan = styled.span`
    color: #ffb31a;
    font-weight: 700;
    line-height: 2;
    &.welcome-title {
        color: #000;
    }
`;
