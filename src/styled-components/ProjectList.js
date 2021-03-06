import styled from "styled-components/macro";
import { TextSpan } from "./TechSkills";

export const ProjectCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin-bottom: 0px;
    @media(min-width: 700px){
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
`;

export const ProjectCard = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 0px;
    &.backend{
        margin-top: 0;
    }
    @media(min-width: 700px){
        width: 45%;
        margin: 10px;
    }
    @media(min-width: 1024px){
        width: 35%;
    } 
`;

export const ProjectLink = styled.a`
    text-decoration: none;
`;

// Project Image and overlay effect
export const ProjectImageContainer = styled.div`
    position: relative;
    text-align: center;
    transition: 0.5s ease;
    color: #fff;
    width: 100%;
    height: 250px;
    &:hover{
        color: transparent;
    }
`;

export const ImageOverlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(27, 25, 25, 0.3);
    transition: 0.5s ease;
    &:hover{
        background-color: transparent;
    }
`;

export const ProjectImageTitle = styled.p`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 28px;
    font-weight: 700;
    margin: 0;
    padding: 10px;
    border-radius: 2px;
    color: #fff;
    transition: 0.3s;
    &.dark-fontcolour{
        color: transparent;
    }
`;

export const ProjectImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover; 
`;

export const ProjectTitle = styled.span`
    font-weight: 700;
    font-size: 20px;
    margin: 20px 0;
    color: #ffb31a;
    display: inline;
`;

export const ProjectText = styled.p`
    font-weight: 400;
    line-height: 2;
    transition: 0.3s;
    padding: 7px;
    border-radius: 20px;
    height: 60px;
    &:hover{
        background-color: #e6e6e6;
        transition: 0.3s;
    }
    &.backend{
        margin-top: 0;
        height: auto;
    }
    &.backend:hover{        
        background-color: #f2f2f2;
        transition: 0.3s;       
    }
    @media(min-width: 700px) {
        height: 75px;
    }
    @media(min-width: 1024px) {
        height: 60px;
    }
`;

export const Arrow = styled(TextSpan)`
    display: inline;
    margin-left: 10px;
    font-weight: 700;
`;


// GitHub icon/Link
export const GitHubContainer = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #d9d9d9;
    border-radius: 30px;
    padding: 10px 0;
    transition: 0.3s; 
    margin: 10px 0 20px;
    &:hover{
        background-color: #cccccc;
        transition: 0.3s; 
    }
`;

export const GitHubIconContainer = styled.div` 
    border-radius: 50%;
    width: 40px;
    height: 40px;
    background-color: #ffb31a;
    padding: 10px;
    transition: 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover{
        background-color: #ffaa00;
        transition: 0.3s; 
    }
`;

export const GitHubTitle = styled(ProjectTitle)`
    font-size: 15px;
    color: #000;
    margin: 0 0 0 10px;
`;

// Tags
export const TagsListContainter = styled.ul`
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding-left: 0;
    margin-top: 0;
`;

export const TagItem = styled.li`
    background:rgb(170, 219, 189);
    color: #fff;
    padding: 5px; 
    font-size: 12px;
    font-weight: 400;
    margin-right: 13px;
    margin-top: 5px;
`;

// Load more button
export const ButtonContainer = styled.div`
    display: flex;
`;

export const LoadMoreButton = styled.button`
    border: none;
    font-size: 15px;
    border-radius: 3px;
    padding: 10px;
    background-color: #ffb31a;
    font-weight: 600;
    transition: 0.3s;
    outline: none;
    margin: 15px;
    &:hover{
        cursor: pointer;
        background-color: #ffaa00;
        transition: 0.3s;
    }
    &.hide-button{
        display: none;
    }
`;

