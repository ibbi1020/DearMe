import React, {useEffect} from "react";
// import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    useEffect(() => {
        let lastScrollTop = 0;
        const navContainer = document.querySelector('.navContainer');

        const handleScroll = () => {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop) {
                // Scrolling down
                navContainer.style.top = '-100px'; // Adjust this value as needed
            } else {
                // Scrolling up
                navContainer.style.top = '0';
            }
            lastScrollTop = scrollTop;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

return (
    <>
        <div className="navContainer">
            <div className="logo">
                <img src="https://via.placeholder.com/75" alt="logo" />
            </div>
            <div className="links">
                <div className="link">
                    <a href="#home">Home</a>
                    {/* <Link to = "/">Home</Link> */}
                </div>
                <div className="link">
                    <a href="#write">Write</a>
                    {/* <Link to = "/write">Write</Link> */}
                </div>
                <div className="link">
                    <a href="#about">About</a>
                    {/* <Link to = "/about">About</Link> */}
                </div>
                <div className="login">
                    <button>
                        Login
                        <div class="arrow-wrapper">
                            <div class="arrow"></div>
                        </div>
                    </button>
                    {/* <Link to = "/login">Login</Link> */}
                </div>
            </div>
        </div>
    </>
    )
}

export default Navbar;