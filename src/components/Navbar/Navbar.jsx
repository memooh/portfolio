import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark ">
            <div className="container">
                <a className="navbar-brand" href="#">Mehmet Ozturk</a>
                <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse justify-content-end ${isOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#aboutMeSection">About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#skillsSection">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projectsSection">Personal projects</a>
                        </li>                        
                        <li className="nav-item">
                            <a className="nav-link" href="#contactMeSection">Contact Me</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
