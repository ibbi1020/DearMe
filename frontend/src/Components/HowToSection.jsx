import React from 'react';
import './HowToSection.css';

const HowToSection = ({ title, description, gifSrc, backgroundColor }) => {
    return (
        <>
            <div className="mainContainer">
                <div className="sectionContainer" style={{backgroundColor: backgroundColor}}>
                    <div className="sectionSubContainer" >
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
