import React from "react";
import styled from "styled-components/macro";
import { useHistory } from "react-router-dom";

export const GeneralButton = (props) => {
    const history = useHistory();
    
    const directToPage = () => {
        history.push(props.url);
    };
    
    return (
        <ReusableButton type="button" onClick={directToPage}>
            {props.buttonText}
        </ReusableButton>
    );
};

const ReusableButton = styled.button`
    border: 2px solid #089942;
    background: transparent;
    border-radius: 5px;
    width: 150px;
    height: 40px;
    font-size: 16px;
    cursor: pointer; 
    align-self: flex-end;  
`;

