import React from 'react'
import NavBar from '../NavBar/NavBar';
import './style/Hero.css'

const Hero = () => {
    return (
        <>
            <div className="hero__wrapper">
                <NavBar />
                <div className="wrapper">
                    <div className="hero__content">
                        <h1 className="name">Connor Hutchinson</h1>
                        <p className="subtitle">Software Engineer</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Hero;
