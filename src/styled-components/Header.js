import styled from "styled-components/macro";
import leaves from "../assets/leaves-background.jpg";

export const HeaderContainer = styled.header`
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(rgba(228, 239, 224, 0.1), rgba(244, 244, 244, 1)), url(${leaves});
    height: 50%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    width: 100%;
`;

// Social media icons
export const SocialMediaContainer = styled.div`
    margin: 0 0 10px;
    display: flex;
    align-self: flex-end;
    &.footer-sm-icons{
        margin: 10px;
        align-self: center;
    }
    @media(min-width: 700px){
        flex-direction: column;
        align-self: flex-start;
        width: 87px;
        order: 2;
        margin-left: 10px;
        &.footer-sm-icons{
            display: flex;
            align-self: center;
            flex-direction: row;
            width: auto;
        }
    }
`;

export const IconContainer = styled.a`
    border-radius: 50%;
    width: 50%;
    height: 50%;
    background-color: #ffb31a;
    margin-left: 10px;
    padding: 12px;
    transition: 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover{
        background-color: #ffc34d;
        transition: 0.3s;
    }
    @media(min-width: 700px){
        margin: 5px 0;
        &.footer-sm-icons{
            margin: 0 5px;
            padding: 15px;
        }
    }

`;

export const IconImage = styled.img`
    width: 20px;
    height: 20px;
    &.footer-sm-icons{
        width: 27px;
        height: 27px;
    }
`;

// Header text area
export const HeaderTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    @media(min-width: 700px){
        flex-direction: row;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    color: #000;
`;

export const NameTitle = styled.h1`
    font-size: 30px;
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 2px;
    margin-bottom: 5px;
    margin-top: 0;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    text-align: center;
    color: #333333;
`;

export const DeveloperTitle = styled.h3`
    margin: 0px;
    font-weight: 400;
    font-size: 25px;
    font-family: 'Montserrat', sans-serif;
    color: #333333;
`;

export const ProfileImage = styled.img`
    width: 125px;
    height: 125px;
    border-radius: 50%;
    object-fit: contain;
    display: flex;
    align-self: flex-end;
    margin-top: -25px;
    margin-right: 10px;
    border: 2px solid #ffb31a;
`;
