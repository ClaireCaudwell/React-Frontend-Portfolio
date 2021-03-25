import styled from "styled-components/macro"; 

export const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px 0px;
    background: rgb(244, 244, 244);
    &.backend{
        background: rgb(255, 255, 255);
    }
`;

export const LineShape = styled.section`
    width: 40px;
    height: 3px;
    border-radius: 10px;
    background: rgb(255, 179, 26);
    display: inline-block;
    margin-bottom: 5px;
`;

export const CircleShape = styled.span`
    width: 12px;
    height: 12px;
    background: rgb(255, 179, 26);
    border-radius: 50%;
    display: inline-block;
    margin-right: 10px;
`;

export const AboutText = styled.h5`
    font-family: 'Montserrat', sans-serif;
    color: rgb(0, 0, 0);
    font-size: 18px;
    width: 80%;
    margin: 0 auto;
    text-align: justify;
    line-height: 2;
    font-weight: 400;
`;