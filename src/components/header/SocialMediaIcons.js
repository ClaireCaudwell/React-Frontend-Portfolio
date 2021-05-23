import React from "react";
import styled from "styled-components/macro";

import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


export const SocialMediaIcons = ({ mobileMenu }) => {
    return (
        <SocialMediaContainer className={mobileMenu ? "modal-menu" : "desktop-menu" }>
          <SocialMediaItem 
            href="mailto:clairecaudwell@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
          </SocialMediaItem>
          <SocialMediaItem 
            href="https://www.linkedin.com/in/claire-caudwell-229354a5/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} size="lg"/>
          </SocialMediaItem>
          <SocialMediaItem 
            href="https://github.com/ClaireCaudwell" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </SocialMediaItem>
        </SocialMediaContainer>
    );
};

const SocialMediaContainer = styled.nav`
  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;  
  margin: 0;
  padding: 10px;
  background-color: #F5FDD6;
  border-radius: 7px;
  &.desktop-menu {
    width: 200px;
  }

  &.modal-menu {
    width: 100%;
  }
`;

const SocialMediaItem = styled.a`
  padding: 10px;
`;

