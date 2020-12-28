import React from 'react'
import './style/MobileStyle/Mobile.css'

import { Link as LinkS } from 'react-scroll'
import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'

export const Container = styled.div`
    
`;

const MobileNavBar = ({ isOpen, toggle }) => {

    return (
        <>
            <div className="mobile__navbar">
                <p><FaBars onClick={toggle} color="red" /></p>
            </div>

            <Container className="mobile__container" isOpen={isOpen} toggle={toggle}>
                {/* <ul>
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
                            Contact
                        </LinkS>
                    </li>
                </ul> */}
            </Container>
        </>
    )
}

export default MobileNavBar;
