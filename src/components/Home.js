import React from "react";
import styled from "styled-components/macro";

import { AboutSkills } from "./main/AboutSkills";

export const Home = () => {
    return (
        <MainContainer>
            <AboutSkills />
        </MainContainer>
    );
};

const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 40px 20px;
    @media(min-width: 1024px) {
        margin: 40px;
    }
`;