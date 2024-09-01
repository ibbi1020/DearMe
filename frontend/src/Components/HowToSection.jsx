import React, { useRef, useEffect, useState } from 'react';
import './HowToSection.css';

const HowToSection = ({ title, description, gifSrc, backgroundColor }) => {
    const sectionRef = useRef(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Check if 20% of the component is in view
                if (entry.intersectionRatio >= 0.5) {
                    setIsInView(true);
                } else {
                    setIsInView(false);
                }
            },
            {
                threshold: [0, 0.5, 1], // Trigger callback at 0%, 20%, and 100% visibility
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        // Cleanup observer on component unmount
        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <>
            <div className="mainContainer" ref={sectionRef}>
                <div 
                    className={`sectionContainer ${isInView ? 'expanded' : ''}`}
                    style={{ backgroundColor: backgroundColor }}
                >
                    <div className="sectionSubContainer">
                        <h2>{title}</h2>
                    </div>
                    <div className="sectionSubContainer">
                        <div className="imageContainer">
                            <img src={gifSrc} alt="placeholder" />
                        </div>
                        <div className="textContainer">
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HowToSection;
