import React, { useState } from 'react'
import './styles/Work.css';
import Footer from './Footer';
import Project from './Project';

const Work = () => {
    const projects = require('./assets/projects.json');

    // let initialExpandedProjects = Array(projects.length).fill(false);
    // const [expandedProjects, setExpandedProjects] = useState(initialExpandedProjects);

    return (
        <div className='Work'>
            <Project
                title={projects[0].title}
                description={projects[0].description}
                software={projects[0].software}
                thumbnail={projects[0].thumbnail}
                detail_0={projects[0].detail_0}
                detail_1={projects[0].detail_1} />
            <Project
                title={projects[1].title}
                description={projects[1].description}
                software={projects[1].software}
                thumbnail={projects[1].thumbnail}
                detail_0={projects[1].detail_0}
                detail_1={projects[1].detail_1} />
            <Footer />
        </div>
    )
}

export default Work