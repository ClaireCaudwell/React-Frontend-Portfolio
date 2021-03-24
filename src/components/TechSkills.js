import React from "react";

import { 
    SkillsContainer,
    MainTitle,
    InnerContainer,
    TechText,
    TextSpan
} from "../styled-components/SkillsStyling";

export const TechSkills = () => {
    return(
        <SkillsContainer>
            <MainTitle>TECH</MainTitle>
            <InnerContainer>
                <TechText>
                    HTML5, CSS3, <TextSpan>JavaScript ES6</TextSpan>, Flexbox, <TextSpan>React</TextSpan>, React hooks, React router,<TextSpan>Redux</TextSpan>, Styled components, Node.js, MongoDB, Mongoose, web accessiblity, <TextSpan>working with API's</TextSpan>, agile working methodology, handing errors, <TextSpan>responsive webdesign</TextSpan> and cross browser testing.
                </TechText>
            </InnerContainer>
        </SkillsContainer>
    );
};