import styled from "styled-components/macro"; 

export const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 0px;
    background: #f4f4f4;
    &.backend{
        background: #fff;
    }
    &.footer-container{
        padding: 0;
    }

`;

export const AboutText = styled.p`
    width: 80%;
    margin: 0 0 10px 0;
    text-align: justify;
    line-height: 2;
    font-weight: 400;
    @media(min-width: 800px){
        width: 60%;
    }
    @media(min-width: 1024px){
        width: 55%;
    }
`;