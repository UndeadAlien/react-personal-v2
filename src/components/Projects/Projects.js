import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

import './style/Projects.css'

const Projects = () => {
    return ( 
        <> 
            <div className="ulti__container">
                <div className="project__wrapper">
                    <div className="wrapper">

                        <div className="project__header"><h1>Projects</h1></div>
                        
                        <div className="project__content">
                            
                            <div className="project__container">
                                <div className="project__splitter">
                                    <div className="left__half">
                                        {/* <img src="/images/projects.jpg" alt="" /> */}
                                        <div className="image"></div>
                                    </div>

                                    <div className="right__half">
                                        <div className="project__title">Project Title</div>


                                        <div className="project__description">
                                            <div className="box">
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, ipsa at perferendis minus modi ullam repudiandae quis ex non accusamus?
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, ipsa at perferendis minus modi ullam repudiandae quis ex non accusamus?
                                                </p>
                                            </div>
                                        </div>

                                        
                                        <div className="project__languages">
                                            <ul>
                                                <li>React.js</li>
                                                <li>Javascript</li>
                                            </ul>
                                        </div>

                                        <div className="project__links">
                                            <ul>
                                                <li><a href="#"><FaGithub /></a></li>
                                                <li><a href="#"><FaExternalLinkAlt /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects;
