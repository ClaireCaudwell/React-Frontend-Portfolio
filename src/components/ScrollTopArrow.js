import React, { useState } from "react";

import { FaArrowCircleUp } from 'react-icons/fa';
import "../index.css";

export const ScrollTopArrow = ({ forwardedRef  }) => {

    const [ showScroll, setShowScroll ] = useState(false);

    const scrollTop = () => {
        forwardedRef.current.scrollIntoView();
    };

    const checkScrollTop = () => {
        if(!showScroll && window.pageYOffset > 400) {
            setShowScroll(true);
        } else if(showScroll && window.pageYOffset <= 400) {
            setShowScroll(false);
        }
    };

    window.addEventListener("scroll", checkScrollTop);

    return (
        <>
            <FaArrowCircleUp 
                className="scrollTop" 
                onClick={scrollTop} 
                style={{height: 35, display: showScroll ? 'flex' : 'none'}}
            />
        </>
    );
};