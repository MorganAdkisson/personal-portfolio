import React, { useState, useEffect, useRef } from "react";
import './NavBar.css';
import { NavLink as Link} from "react-router-dom";
import Resume from "../assets/images/AdkissonMorgan_Resume.pdf"


const NavBar = () => {
    const navLinks = ["home", "skills", "experience", "projects", "contact"]
    const navRef = useRef(null)

    const [bgColor, setBgColor] = useState(false);

    const renderNavLink = (nav) => {
        const handleNavClick = () => {
            document.getElementById(`${nav}`).scrollIntoView({behavior: 'smooth'})
        }
        return (
            <ul key={nav}>
                <Link to={nav} onClick={handleNavClick}>{nav}</Link>
            </ul>
        )
    }

    const handleScrollY = () => {
        const nav = navRef.current
        if (!nav) return;
        const bgColor = window.scrollY > nav.offsetTop;
        setBgColor(bgColor);
    }

    useEffect(() => {
    window.addEventListener('scroll', handleScrollY);
    return () => {
        window.removeEventListener('scroll', handleScrollY);
    };
    }, []);

    return (
        <div ref={navRef} className={bgColor ? "navbar navbar-bg" : "navbar "}>
                <div className="nav-links_logo">
                    <h1>Morgan Adkisson</h1>
                </div>
            <div className="nav-links">
                <nav className="nav-links_container">
                    {navLinks.map(nav => renderNavLink(nav))}
                </nav>
            <div className="nav-links_resume">
                <a href={Resume} target="_blank" rel="noopener noreferrer">
                    Resume
                </a>
            </div>
            </div>
        </div>
    )
}

export default NavBar;
