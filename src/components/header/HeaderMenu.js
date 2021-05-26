import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";

import { SocialMediaIcons } from "./SocialMediaIcons";

export const HeaderMenu = ({ mobileMenu, setIsMobileMenuOpen }) => {

    const updateIsMobileMenuOpen = () => {
        setIsMobileMenuOpen(false);
    };

    const navigation = [
        { link: '/', text: 'HOME' },
        { link: '/webdevelopment', text: 'WEB DEVELOPMENT' },
        { link: '/uidesign', text: 'UI DESIGN' },
        { link: '/aboutcontact', text: 'ABOUT / CONTACT' },
    ];
    
    return (
        <>
            <Menu className={mobileMenu ? "modal-menu" : "desktop-menu"}>
                {navigation.map((navItem, index) => (
                    <MenuItem 
                        key={index}
                        to={navItem.link}
                        className={mobileMenu ? "modal-item" : "desktop-item"}
                        onClick={mobileMenu && updateIsMobileMenuOpen}
                    >
                        {navItem.text}
                    </MenuItem>
                ))}
            </Menu>
            <SocialMediaIcons mobileMenu={mobileMenu}/>
        </>   
    );
};

const Menu = styled.nav`
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

const MenuItem = styled(Link)`
    transition: 0.3s;
    font-weight: 400;
    font-size: 15px;

    &.desktop-item {
        margin-right: 5px;
    }
    &.modal-item {
        margin-top: 5px;
    }
    &:hover{
        color: #000;
    }
`;