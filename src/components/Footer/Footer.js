import React from 'react'
import {GoRepo} from 'react-icons/go'

import './style/Footer.css'

const Footer = () => {
    return (
        <>
            <div className="footer__container">
                <div className="wrapper">
                    <div className="footer__content">
                        <div className="header__creator">
                            <p>Created by <span>Connor Hutchinson</span></p>
                        </div>

                        <div className="github__repo__count">
                            <p><GoRepo />{/* Todo: #ofRepos */}</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;
