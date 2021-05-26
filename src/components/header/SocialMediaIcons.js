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
            <FontAwesomeIcon 
              icon={faEnvelope} 
              size="lg"
              className="icon" 
            />
          </SocialMediaItem>
          <SocialMediaItem 
            href="https://www.linkedin.com/in/claire-caudwell-229354a5/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon 
              icon={faLinkedinIn} 
              size="lg"
              className="icon" 
            />
          </SocialMediaItem>
          <SocialMediaItem 
            href="https://github.com/ClaireCaudwell" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon 
              icon={faGithub} 
              size="lg" 
              className="icon" 
            />
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
    height: 70px;
  }
`;

const SocialMediaItem = styled.a`
  padding: 10px;
  transition: 0.3s;
  .icon {
    color: #089942;
    &:hover {
      color: #08913f;
      transition: 0.3s;
    } 
  }
`;

