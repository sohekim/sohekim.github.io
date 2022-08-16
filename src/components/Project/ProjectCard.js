import React from 'react'
import "./ProjectCard.css"

/**
 * @param: (thumbnail, title, type, desc, url)
 * @returns: ProjectCard
 */

function ProjectCard({thumbnail, title, type, desc, url}) {
    return(
        <div className='projectcard-container' onClick={() => window.location.href=url}>
            <div className=' thumbnail-container'>
                <img  src={thumbnail} alt='project-thumbnail' className='card-img'/>
            </div>
            <div style={{paddingTop:'5px', paddingLeft: '3px'}}>
                <p className='title'>{title}</p>
                <p className='desc'>{desc}</p>
                <p className = 'type'>{type}</p>
            </div>
        </div>
    )
}

export default ProjectCard