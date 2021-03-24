import React from "react";

import email from "../assets/white-email.png";
import linkedin from "../assets/white-linkedin.png";
import github from "../assets/white-github.png";
import stackoverflow from "../assets/white-stack.png";

import { 
    SocialMediaContainer,
    IconContainer,
    IconImage
} from "../styled-components/HeaderStyling";


export const SocialMediaIcons = () => {
    return(
        <SocialMediaContainer>
            <IconContainer href="mailto:clairecaudwell@gmail.com" target="_blank" rel="noopener noreferrer">
                <IconImage src={email} alt="email icon" />
            </IconContainer>            
            <IconContainer href="https://www.linkedin.com/in/claire-caudwell-229354a5/" target="_blank" rel="noopener noreferrer">
                <IconImage src={linkedin} alt="linkedin icon" />
            </IconContainer>            
            <IconContainer href="https://github.com/ClaireCaudwell" target="_blank" rel="noopener noreferrer">
                <IconImage src={github} alt="github icon" />
            </IconContainer>
            <IconContainer href="https://stackexchange.com/users/19239637/" target="_blank" rel="noopener noreferrer">
                <IconImage src={stackoverflow} alt="stackoverflow icon" />
            </IconContainer>
        </SocialMediaContainer>
    );
};