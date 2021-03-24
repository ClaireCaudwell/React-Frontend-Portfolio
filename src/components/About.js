import React from "react";

import { 
    AboutContainer, 
    AboutText, 
    CircleShape, 
    LineShape 
} from "../styled-components/AboutStyling";

export const About = () => {
    return (
        <AboutContainer>
            <AboutText>
                <LineShape></LineShape>
                <CircleShape></CircleShape>
                Hi! I’m Claire, a frontend developer who has a background in design. As a frontend developer I have a passion for building applications and websites from scratch and using my creative skills to find solutions to problems.

                I also enjoy using my design skills when thinking about the UI of the application I’m building and how the overall user experience will be for the user.

                To me working together in a team is an integral part of working as a frontend developer, as together we can find and share solutions and be proud of what we’ve built.
            </AboutText>
        </AboutContainer>
    );
};