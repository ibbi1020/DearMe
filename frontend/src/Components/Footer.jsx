import React from 'react'
import './Footer.css'
import Icon1 from '../Images/Insta.svg';
import Icon2 from '../Images/Github.svg';
import Icon3 from '../Images/LinkedIn.svg';
import Pencil from '../Images/Pencil.png';

const Footer = () => {
    return (
        <footer>
        <div className="footerContainer">
            <div className="logo">
                <img src="https://via.placeholder.com/150" alt="logo" />
            </div>
            <div className="title">
                <h1>Dear<span><img src={Pencil} alt=''></img></span>Me!</h1>
                <span>Write today - Reflect tomorrow</span>
            </div>
            <div className="icons">
                <div className="icon">
                    <img src={Icon1} href="https://www.instagram.com/" alt="icon1" />
                </div>
                <div className="icon">
                    <img src={Icon2} alt="icon2" />
                </div>
                <div className="icon">
                    <img src={Icon3} alt="icon3" />
                </div>
            </div>

            
        </div>
        <div className="backToTop">
            <a href="#top">Back to top</a>
        </div>
        </footer>
    )
}

export default Footer