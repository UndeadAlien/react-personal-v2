import React from 'react'
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';

import './style/NavBarStyle/NavBar.css'
import MobileNavBar from './MobileNavBar';

const NavBar = () => {

    return (
        <>
            <header>
                <LinkS activeClass="active" to="hero" spy={true} smooth={true}>
                    <div className="navbar__logo">
                        <span>C</span>
                    </div>
                </LinkS>

                {/* <MobileNavBar /> */}

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
                                About
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
                                Projects
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
                                Contacts
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
