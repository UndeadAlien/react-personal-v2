import React from 'react'

import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const ProjectTemp = ({ id, image, title, description, languages, githubLink, liveDemo }) => {
    return (
        <>
            <div className="project__content" id={id}>
                            
                <div className="project__container">
                    <div className="project__splitter">
                        <div className="left__half">
                            <div className="image" style={{backgroundImage: `url('/images/snapshots/${image}')`}}></div>
                        </div>

                        <div className="right__half">
                            <div className="project__title">{title}</div>

                            <div className="project__description">
                                <div className="box">
                                    <p>{description}</p>
                                </div>
                            </div>

                            <div className="project__languages">
                                <ul>
                                    {languages.map((lang, i) => (
                                        <li key={i}>{lang}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="project__links">
                                <ul>
                                    <li><a href={githubLink} target="_blank" rel="noreferrer"><FaGithub /></a></li>
                                    <li><a href={liveDemo} target="_blank" rel="noreferrer"><FaExternalLinkAlt /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </>
    )
}

export default ProjectTemp;
