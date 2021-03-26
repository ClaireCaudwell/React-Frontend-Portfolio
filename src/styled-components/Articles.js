import styled from "styled-components/macro";
import { Container } from "./About"
import { SkillsTitle } from "./OtherSkills";
import { ProjectTitle, ProjectText } from "./ProjectList";

export const ArticleContainer = styled(Container)`
    background: rgb(255, 255, 255);
`;

export const InnerArticleContainer = styled.div`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
`;

export const ArticleCard = styled.a`
    margin-bottom: 30px;
    text-decoration: none;
`;

export const ArticleImage = styled.img`
    width: 100%;
    height: 250px;
    object-fit: cover;
    margin-bottom: 10px;
`; 

export const ArticleDate = styled(SkillsTitle)`
    margin-bottom: 10px;
    font-size: 20px;
    display: inline;
`;

export const ArticleTitle  = styled(ProjectTitle)`
    color: #000;
    margin: 10px 0 0;
    font-size: 18px;
`;

export const ArticleText = styled(ProjectText)`
    margin-bottom: 10px;
    &:hover{
        background-color: #f2f2f2;
        transition: 0.3s;
    }
`;