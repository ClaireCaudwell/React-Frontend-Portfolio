import React from "react";

import { SkillsTextDiv, SkillsText  } from "../../../styled-components/GlobalStylingPages";

export const Skills = (props) => {
    return (
        <SkillsTextDiv className={`colour-${props.index % 2}`}>
            <SkillsText>{props.skill}</SkillsText>
        </SkillsTextDiv>
    );
};