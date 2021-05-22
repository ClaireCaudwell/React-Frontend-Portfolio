import React from "react";

import {
    Container, 
    AboutText, 
} from "../styled-components/About";

import { TextSpan } from "../styled-components/TechSkills";

export const About = () => {
    return (        
        <Container>
            <AboutText>
                <TextSpan className="welcome-title">Hi I’m Claire <span role="img" aria-label="waving hand emoji">👋</span></TextSpan>  A frontend developer who has a background in textile design. As a developer I have a passion for building applications and websites from scratch, using my creative skills to find solutions to problems and developing user friendly UI and functionality.

                To me working together in a team is an integral part of working as a frontend developer, as together we can find solutions, share knowledge and be proud of what we’ve built.
            </AboutText>
        </Container>        
    );
};