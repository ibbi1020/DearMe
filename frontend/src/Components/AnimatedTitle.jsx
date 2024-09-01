import React, { useState, useEffect } from 'react';
import './AnimatedTitle.css';
import Pencil from '../Images/Pencil.png';

export default function AnimatedTitle() {
    const [size, setSize] = useState(0); 

    useEffect(() => {
        const animateSize = () => {
            setSize(20);

            // After 10 seconds, decrease the size to 0% (hidden)
            setTimeout(() => {
                setSize(0);
            }, 3000);
        };

        const startAnimation = () => {
            // const randomInterval = Math.random() * 9000 + 5000;
            setTimeout(() => {
                animateSize();
                startAnimation();
            }, 5000);
        };

        startAnimation();

        return () => {};
    }, []);

    return (
        <>
            <div className="mainTitle">
                <h1 style={{ display: 'flex', alignItems: 'center' }}>
                    Dear
                    <span 
                        className="pencilContainer"
                        style={{
                            display: 'inline-block',
                            width: `${size}%`,
                            height: `${size}%`,
                            // overflow: 'hidden', // Prevent content overflow
                            transition: 'width 0.5s ease, height 0.5s ease', // Smooth transition
                            margin: `0 ${-size / 7.7}rem 1rem ${-size/9}rem`, // Dynamic margin based on size
                        }}
                    >
                        {size > 0 && (
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
