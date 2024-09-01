import React, { useState, useEffect } from 'react';
import './AnimatedTitle.css';

import Pencil from '../Images/Pencil.png';

export default function AnimatedTitle() {
    const [size, setSize] = useState(20); // Start with initial size of 20%

    useEffect(() => {
        const animateSize = () => {
            setSize(20);

            // After 10 seconds, decrease the size to 0% (hidden)
            setTimeout(() => {
                setSize(0);
            }, 10000);
        };

        const startAnimation = () => {
            const randomInterval = Math.random() * 6000 + 5000; // Random interval between 5-10 seconds
            setTimeout(() => {
                animateSize();
                startAnimation(); // Recursively start the next animation
            }, randomInterval);
        };

        startAnimation(); // Start the animation sequence

        return () => {}; // Cleanup if needed, though not necessary here
    }, []);

    return (
        <>
            <div className="mainTitle">
                <h1>
                    Dear
                    <span 
                        className="pencilContainer"
                        style={{
                            display: 'inline-flex',
                            width: `${size > 0 ? '20%' : '0'}`, 
                            height: `${size}%`, 
                            overflow: 'hidden',
                        }}
                    >
                        {size > 0 && ( // Only render the image if the size is greater than 0
                            <img
                                style={{
                                    width: '100%',
                                    height: '100%',
                                }}
                                src={Pencil}
                                alt=""
                            />
                        )}
                    </span>
                    Me!
                </h1>
                <span>Write today - Reflect tomorrow</span>
            </div>
        </>
    );
}
