import React, { useState } from "react";
import styled from "styled-components/macro";

import { HeaderMenu } from "./HeaderMenu";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export const HamburgerMenu = () => {

    const [ isMobileMenuOpen, setIsMobileMenuOpen ] = useState(false);
    
    return (
        <>
            {isMobileMenuOpen ? (
                <MobileMenu> 
                    <HamburgerDiv 
                        className="cross"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <FontAwesomeIcon icon={faTimes} size="2x" />
                    </HamburgerDiv>
                    <ModalMenu>
                        <HeaderMenu mobileMenu={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen}/>
                    </ModalMenu>
                </MobileMenu>                
            ) : (                
                <HamburgerDiv 
                    className="hamburger"
                    onClick={() => setIsMobileMenuOpen(true)}
                >
                    <FontAwesomeIcon icon={faBars} size="2x" />
                </HamburgerDiv>
            )}
        </>
    );
};

const HamburgerDiv = styled.div`
    width: 30px;
    height: 30px;
    cursor: pointer;
    margin-bottom: ${props => props.className === "cross" && "20px"};
    align-self: ${props => props.className === "cross" && "flex-end"};
    align-self: ${props => props.className === "hamburger" && "flex-start"};
    display: flex;
    align-items: center;
    justify-content: center;
    @media (min-width: 1024px) {
        display: none;
  }
`;

const MobileMenu = styled.div`
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #fff;
    overflow-x: hidden;
    transition: 0.5s;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const ModalMenu = styled.div`
    align-self: flex-end;
`;