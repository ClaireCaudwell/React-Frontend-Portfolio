import React, { useState, useEffect } from "react";

import profileImage from "../assets/claire-image";
import { SocialMediaIcons } from "./SocialMediaIcons";

import { 
    HeaderTextContainer,
    TextContainer,
    ProfileImage,
    NameTitle,
    DeveloperTitle
} from "../styled-components/Header";

export const HeaderText = () => {

    useEffect(() => {
        setClassName(true);
    }, []);
    
    const [ className, setClassName ] = useState(false);

    return (
        <HeaderTextContainer>
            <SocialMediaIcons header={className} />
            <TextContainer>
                <NameTitle>CLAIRE CAUDWELL</NameTitle>
                <DeveloperTitle>Frontend developer</DeveloperTitle>
                <DeveloperTitle>+ Designer</DeveloperTitle>
                <ProfileImage src={profileImage} alt="profile of Claire"/>
            </TextContainer>
        </HeaderTextContainer>
    );
};