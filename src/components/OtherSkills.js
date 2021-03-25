import React from "react";

import skillsdata from "../data/skillsdata";

import { 
    OtherSkillsContainer,
    InnerSkillsContainer,
    SkillsTitle,
    OtherSkillList,
    OtherSkillItem
} from "../styled-components/OtherSkills";
import { MainTitle } from "../styled-components/TechSkills";

export const OtherSkills = () => {
    return (
        <OtherSkillsContainer>
            <MainTitle>OTHER SKILLS</MainTitle>
                {skillsdata.map((skills, index) => (
                    <InnerSkillsContainer key={index}>
                        <SkillsTitle>{skills.title}</SkillsTitle>
                        <OtherSkillList key={skills.id}>
                            {skills.skills.map((skill, index) => (
                                <OtherSkillItem key={index}>
                                    {skill}
                                </OtherSkillItem>
                            ))}
                        </OtherSkillList>
                    </InnerSkillsContainer>
                ))}
        </OtherSkillsContainer>
    );
};