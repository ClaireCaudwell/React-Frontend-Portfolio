import React, { useState } from "react";

import {FaArrowCircleUp} from 'react-icons/fa';
import "../App.css";

export const ScrollTopArrow = () => {

    const [ showScroll, setShowScroll ] = useState(false);
    
    const checkScrollTop = () => {
        if(!showScroll && window.pageYOffset > 400) {
            setShowScroll(true);
        } else if(showScroll && window.pageYOffset <= 400) {
            setShowScroll(false);
        }
    };

    window.addEventListener("scroll", checkScrollTop);

    const scrollTop = () => {
        window.scrollTo({top: 0, behaviour: "smooth"});
    };

    return(
        <FaArrowCircleUp 
            className="scrollTop" 
            onClick={scrollTop} 
            style={{height: 35, display: showScroll ? 'flex' : 'none'}}
        />
    );
};