import React, { useState } from 'react'
import './styles/Work.scss';
import Footer from './Footer';
import Project from './Project';

const Work = ({ theme }) => {
    const projects = require('./assets/projects.json');

    // let initialExpandedProjects = Array(projects.length).fill(false);
    // const [expandedProjects, setExpandedProjects] = useState(initialExpandedProjects);

    return (
        <div className={'Work' + ' ' + theme}>
            <div className='Intro'>
                <p>
                    Some projects that I worked on in the last years...
                </p>
            </div>
            {projects.map((project, index) => (
                <Project
                    theme={theme}
                    title={project.title}
                    year={project.year}
                    description={project.description}
                    software={project.software}
                    role={project.role}
                    thumbnail={project.thumbnail}
                    detail_0={project.detail_0}
                    detail_1={project.detail_1} />
            ))}
            <Footer theme={theme} />
        </div>
    )
}

export default Work