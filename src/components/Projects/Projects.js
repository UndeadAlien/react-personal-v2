import React from 'react'
import { personalV2, amazonClone, pokedex, covidTracker } from './Data'
import ProjectTemp from './ProjectTemp'

import './style/Projects.css'

const Projects = () => {
    return ( 
        <> 
            <div className="ulti__container" id="projects">
                <div className="project__wrapper">
                    <div className="wrapper">

                        <div className="project__header"><h1>Projects</h1></div>

                        <ProjectTemp {...personalV2} />
                        <ProjectTemp {...amazonClone} />
                        <ProjectTemp {...pokedex} />
                        <ProjectTemp {...covidTracker} />
                        
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects;
