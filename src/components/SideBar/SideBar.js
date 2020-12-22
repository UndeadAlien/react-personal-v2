import React from 'react'
import { FaBars } from 'react-icons/fa'
import { FiLinkedin, FiGithub } from 'react-icons/fi'
import { SiHackerrank, SiCodewars } from 'react-icons/si'

import './styles/SideBar.css'

const SideBar = () => {
    return (
        <>
            <div className="sidebar__container left">
                <ul>
                    <li><a href="#"><SiCodewars /></a></li>
                    <li><a href="#"><FiGithub /></a></li>
                    <li><a href="#"><FiLinkedin /></a></li>
                    <li><a href="#"><SiHackerrank /></a></li>
                </ul>
            </div>

            <div className="sidebar__container right">
                <h5>workhutchc@gmail.com</h5>
            </div>
        </>
    )
}

export default SideBar;
