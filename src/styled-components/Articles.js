import styled from "styled-components/macro";
import { Container } from "./About"
import { ProjectTitle, ProjectText } from "./ProjectList";

export const ArticleContainer = styled(Container)`
    background: #fff;
`;

export const InnerArticleContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
    @media(min-width: 700px){
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
`;

export const ArticleCard = styled.a`
    margin-bottom: 10px;
    text-decoration: none;
    @media(min-width: 700px){
        width: 45%;
        margin: 10px;
    }
    @media(min-width: 1024px){
        width: 35%;
    }
`;

export const ArticleImage = styled.img`
    width: 100%;
    height: 250px;
    object-fit: cover;
    margin-bottom: 10px;
`; 

export const ArticleDate = styled(ProjectTitle)`
    margin-bottom: 10px;    
    display: inline;
`;

export const ArticleTitle = styled(ProjectTitle)`
    margin: 10px 0 0;
`;

export const ArticleText = styled(ProjectText)`
    margin-bottom: 10px;
    height: auto;
    &:hover{
        background-color: #f2f2f2;
        transition: 0.3s;
    }
`;