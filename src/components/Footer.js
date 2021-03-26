import React from "react";

import { SocialMediaIcons } from "./SocialMediaIcons";

import { FooterContainer, FooterText } from "../styled-components/Footer";
import { MainTitle } from "../styled-components/TechSkills";
import { Container } from "../styled-components/About";

export const Footer = () => {
    return (
        <FooterContainer>
            <MainTitle className="footer-title">CONTACT</MainTitle>
            <Container className="footer-container">
                <FooterText>Get in touch. I'd love to hear from you!</FooterText>
                <SocialMediaIcons footer={"footer"}/>
            </Container>
        </FooterContainer>
    );
};