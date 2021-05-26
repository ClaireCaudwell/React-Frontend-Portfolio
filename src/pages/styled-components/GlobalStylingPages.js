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
/* border: 1px solid red; */
    @media(min-width: 750px) {
        &.about-skills-section {
            flex-direction: row;
            justify-content: space-between;
        }
        margin: 100px 0;
    }
    @media(min-width: 1024px) {
        margin: 40px 0;
    }
`;

export const TitleContainer = styled.div`
    border-bottom: 2px solid #089942;
    margin-bottom: 30px;
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
    &.designer-title, &.recent-projects-title {
        margin-bottom: 10px;
    }
    &.tech-title {
        font-weight: 600;
        color: #089942;
        text-align: center;
        margin-bottom: 20px;
        margin-top: 0;
    }
`;