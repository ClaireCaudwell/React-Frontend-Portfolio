import React from "react";
import styled from "styled-components/macro";

import { SocialMediaIcons } from "./SocialMediaIcons";

export const HeaderMenu = ({ mobileMenu }) => {
    
    return (
        <>
            <Menu className={mobileMenu ? "modal-menu" : "desktop-menu"}>
                <MenuItem 
                    href="home" 
                className={mobileMenu ? "modal-item" : "desktop-item"}
                >
                    HOME
                </MenuItem>
                <MenuItem 
                    href="development" 
                    className={mobileMenu ? "modal-item" : "desktop-item"}
                >
                    DEVELOPMENT
                </MenuItem>
                <MenuItem 
                    href="ui-design" 
                    className={mobileMenu ? "modal-item" : "desktop-item"}
                >
                    UI DESIGN
                </MenuItem>
                <MenuItem 
                    href="about-contact" 
                className={mobileMenu ? "modal-item" : "desktop-item"}
                >
                    ABOUT / CONTACT
                </MenuItem>
                <MenuItem 
                    href="https://clairecaudwell-art.blogspot.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={mobileMenu ? "modal-item" : "desktop-item"}
                >
                    BLOG
                </MenuItem>
            </Menu>
            <SocialMediaIcons mobileMenu={mobileMenu}/>
        </>   
    );
};

const Menu = styled.nav`
    /* position: relative; */
    margin: 0 0 20px;

    &.desktop-menu {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-content: space-between;
        margin-right: 20px;
    }

    &.modal-menu {
        top: 5%;
        width: 100%;
        text-align: right;
        display: flex;
        align-items: flex-end;
        flex-direction: column;
    }
`;

const MenuItem = styled.a`
    transition: 0.3s;
    font-weight: 500;

    &.desktop-item {
        margin-right: 5px;
    }
    &.modal-item {
        margin-top: 2px;
    }
    &:hover{
        color: #000;
    }
`;