import React from 'react'
import { FaBars } from 'react-icons/fa';
import './style/NavBar.css'

const NavBar = () => {
    return (
        <>
            
            <div className="mobile__navbar">
                <p><FaBars /></p>
            </div>

            <header>

                <div className="navbar__logo">
                    <span>C</span>
                </div>

                <nav>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>

                <div className="navbar__button">Resume</div>
                
            </header>
        </>
    )
}

export default NavBar;
