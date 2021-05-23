import styled from "styled-components/macro";

export const HeaderContainer = styled.header`
    margin: 20px 40px;
    @media(min-width: 750px){
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const NameTitle = styled.h1`
    width: 20%;
    align-self: flex-start;
    @media(min-width: 1024px){
        font-size: 34px;
    }
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
        background-color: #ffaa00;
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
    width: ${props => props.className === "github-icon" ? "25px" : "20px"};
    height: ${props => props.className === "github-icon" ? "25px" : "20px"};
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

export const DeveloperTitle = styled.h3`
    margin: 0px;
    font-weight: 400;
    font-size: 25px;
    @media(min-width: 1024px){
        font-size: 27px;
    }
`;

export const ProfileImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: contain;
    display: flex;
    align-self: flex-end;
    margin-top: -25px;
    margin-right: 10px;
    @media(min-width: 1024px){
        width: 137px;
        height: 137px;
    }
`;
