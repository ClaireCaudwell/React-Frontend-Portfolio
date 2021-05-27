import React from "react";
import styled from "styled-components/macro";

export const UiDesign = () => {
    return (
        <MainContainer>
            <p>UI DESIGN</p>
        </ MainContainer>
    );
};

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;