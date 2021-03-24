import styled from "styled-components";
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
    display: flex;
    align-self: flex-end;
    margin: 40px 10px 20px 10px;
`;

export const IconContainer = styled.a`
    border-radius: 50%;
    width: 50%;
    height: 50%;
    background-color: #ffb31a;
    margin-right: 10px;
    padding: 10px 12px;
`;

export const IconImage = styled.img`
    width: 25px;
    height: 25px;
`;

// Header text area
export const HeaderTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    text-align: center;
`;

export const DeveloperTitle = styled.h3`
    margin: 0px;
    font-weight: 400;
    font-size: 25px;
    font-family: 'Montserrat', sans-serif;
`;

export const ProfileImage = styled.img`
    width: 135px;
    height: 135px;
    border-radius: 50%;
    object-fit: contain;
    display: flex;
    align-self: flex-end;
    margin-top: -10px;
    border: 2px solid #ffb31a;
`;
