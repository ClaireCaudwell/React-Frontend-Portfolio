import React from "react";

import profileImage from "../assets/claire-image.jpg";

import { 
    HeaderTextContainer,
    TextContainer,
    ProfileImage,
    NameTitle,
    DeveloperTitle
} from "../styled-components/HeaderStyling";

export const HeaderText = () => {
    return (
        <HeaderTextContainer>
            <TextContainer>
                <NameTitle>CLAIRE CAUDWELL</NameTitle>
                <DeveloperTitle>Frontend developer</DeveloperTitle>
                <DeveloperTitle>+ Designer</DeveloperTitle>
            </TextContainer>
            <ProfileImage src={profileImage} alt="profile of Claire"/>
        </HeaderTextContainer>
    );
};