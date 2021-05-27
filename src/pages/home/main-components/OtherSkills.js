import React from "react";

import { Skills } from "./inner-components/Skills";

import { SectionContainer, ReusableColumn, MainTitle, SkillsDiv } from "../../styled-components/GlobalStylingPages";

export const OtherSkills = () => {

    const teamSkills = ["Collaborating", "Communication", "Pair & Mob programming", "Stand up's", "Retro's", "Code reviews"];

    const toolboxSkills = ["Slack", "GitHub", "VSC", "Command line", "Postman", "Adobe Photoshop & Illustrator", "Figma & Miro"];

    const otherSkills = ["Problem solving", "Eye for detail", "Organisational skills", "Idea generation", "Design development", "Pattern design", "Graphic design"];

    return (
        <SectionContainer className="second-skills-section">
            <ReusableColumn className="skills-column second-skills-column">
                <MainTitle className="skills-title">TEAM</MainTitle>
                <SkillsDiv>
                    {teamSkills.map((skill, index) => (
                        <Skills 
                            skill={skill}
                            index={index}
                            key={index}
                        />
                    ))}
                </SkillsDiv>
            </ReusableColumn>
            <ReusableColumn className="skills-column second-skills-column">
                <MainTitle className="skills-title">TOOLBOX</MainTitle>
                <SkillsDiv>
                    {toolboxSkills.map((skill, index) => (
                        <Skills 
                            skill={skill}
                            index={index}
                            key={index}
                        />
                    ))}
                </SkillsDiv>
            </ReusableColumn>
            <ReusableColumn className="skills-column second-skills-column">
                <MainTitle className="skills-title">OTHER</MainTitle>
                <SkillsDiv>
                    {otherSkills.map((skill, index) => (
                        <Skills 
                            skill={skill}
                            index={index}
                            key={index}
                        />
                    ))}
                </SkillsDiv>
            </ReusableColumn>
        </SectionContainer>
    );
};