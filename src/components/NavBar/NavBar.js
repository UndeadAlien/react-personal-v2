import React from 'react'
import { FaBars } from 'react-icons/fa';
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';
import './style/NavBar.css'

const NavBar = () => {

    return (
        <>
            <div className="mobile__navbar">
                <p><FaBars /></p>
            </div>

            <header>
                <LinkS activeClass="active" to="hero" spy={true} smooth={true}>
                    <div className="navbar__logo">
                        <span>C</span>
                    </div>
                </LinkS>

                <nav>
                    <ul>
                        <li>
                            <LinkS 
                                activeClass="active" 
                                to="about" 
                                spy={true} 
                                smooth={true}
                                exact="true"
                                offset={-150}
                            >
                                <a href="#">About</a>
                            </LinkS>
                        </li>
                        <li>
                            <LinkS 
                                activeClass="active" 
                                to="projects" 
                                spy={true} 
                                smooth={true}
                                exact="true"
                                offset={-150}
                            >
                                <a href="#">Projects</a>
                            </LinkS>
                        </li>
                        <li>
                            <LinkS 
                                activeClass="active" 
                                to="contact" 
                                spy={true} 
                                smooth={true}
                                exact="true"
                                offset={-150}
                            >
                                <a href="#">Contact</a>
                            </LinkS>
                        </li>
                    </ul>
                </nav>

                <LinkR to="/resume"><div className="navbar__button">Resume</div></LinkR>
                
            </header>
        </>
    )
}

export default NavBar;
