import React from 'react'
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-scroll';
import './style/Resume.css'

import { CgArrowLeftR } from 'react-icons/cg'

const Resume = () => {
    return (
        <>
            <div className="mobile__navbar">
                <p><FaBars /></p>
            </div>

            <header>

                <nav>
                    <ul>
                        <li>
                            <a href="/" className="go__back"><CgArrowLeftR /></a>
                        </li>
                    </ul>
                </nav>
                
            </header>

            <div className="resume__container">
                <div className="wrapper">
                    <div className="resume__content">
                        <img src="/images/information/connorhutchinson_12-17-2020.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Resume;
