"use client";

import React, { useState, useEffect } from "react";

const AnimatedDesignation = ({ designations }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let timer;

        if (isDeleting) {
            if (displayText.length === 0) {
                setIsDeleting(false);
                setCurrentIndex(
                    (prevIndex) => (prevIndex + 1) % designations.length
                );
            } else {
                timer = setTimeout(() => {
                    setDisplayText((prevText) => prevText.slice(0, -1));
                }, 50);
            }
        } else {
            if (displayText === designations[currentIndex]) {
                timer = setTimeout(() => setIsDeleting(true), 2000);
            } else {
                timer = setTimeout(() => {
                    setDisplayText((prevText) =>
                        designations[currentIndex].slice(0, prevText.length + 1)
                    );
                }, 100);
            }
        }

        return () => clearTimeout(timer);
    }, [displayText, isDeleting, currentIndex, designations]);

    return (
        <span className="text-[#16f2b3] min-w-[200px]">
            {displayText}
            <span className="animate-blink">|</span>
        </span>
    );
};

export default AnimatedDesignation;
