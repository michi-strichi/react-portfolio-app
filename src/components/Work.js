import React, { useState } from 'react'
import './styles/Work.scss';
import Footer from './Footer';
import Project from './Project';

const Work = ({theme}) => {
    const projects = require('./assets/projects.json');

    // let initialExpandedProjects = Array(projects.length).fill(false);
    // const [expandedProjects, setExpandedProjects] = useState(initialExpandedProjects);

    return (
        <div className={'Work' + ' ' + theme}>
            {projects.map((project, index) => (
                <Project
                theme={theme}
                title={project.title}
                year={project.year}
                description={project.description}
                software={project.software}
                thumbnail={project.thumbnail}
                detail_0={project.detail_0}
                detail_1={project.detail_1} />
            ))}
            <Footer />
        </div>
    )
}

export default Work