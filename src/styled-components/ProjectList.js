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
    font-family: 'Montserrat', sans-serif;
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
    font-size: 15px;
    margin: 0 5px 0 0;
    color: #ffb31a;
    display: inline;
    font-family: 'Roboto', sans-serif;
`;

export const ProjectText = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    text-align: justify;
    font-weight: 400;
    color: #333333;
    margin: 7px 0 0;
    line-height: 2;
    transition: 0.3s;
    &:hover{
        background-color: #e6e6e6;
        transition: 0.3s;
    }
    &.backend{
        margin-top: 0;
    }
    &.backend:hover{        
        background-color: #f2f2f2;
        transition: 0.3s;       
    }
`;

export const Arrow = styled(TextSpan)`
    display: inline;
    margin-left: 10px;
    font-weight: 700;
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
    font-family: 'Roboto', sans-serif;
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
    color: #333333;
    font-weight: 600;
    transition: 0.3s;
    outline: none;
    margin: 15px;
    font-family: 'Roboto',sans-serif;
    &:hover{
        cursor: pointer;
        background-color: #ffc34d;
        transition: 0.3s;
    }
    &.hide-button{
        display: none;
    }
`;

