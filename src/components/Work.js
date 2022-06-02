import React, { useState } from 'react'
import './styles/Work.scss';
import Footer from './Footer';
import Project from './Project';

const Work = ({ min781, theme }) => {
    const projects = require('./assets/projects.json');

    // let initialExpandedProjects = Array(projects.length).fill(false);
    // const [expandedProjects, setExpandedProjects] = useState(initialExpandedProjects);

    const leftProjects = []
    const rightProjects = [];

    for (let i = 0; i < projects.length; i++) {
        if (i % 2 === 0) {
            leftProjects.push(projects[i]);
        } else {
            rightProjects.push(projects[i]);
        }
    }

    return (
        <div className={'Work' + ' ' + theme}>
            <div className='Intro'>
                <p>
                    Some projects that I worked on in the last years...
                </p>
            </div>
            {!min781 &&
                projects.map((project, index) => (
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
                ))
            }
            {min781 &&
                <div className='gridContainer'>
                    <div className='leftContainer'>
                        {leftProjects.map((project, index) => (
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
                    </div>
                    <div className='rightContainer'>
                    {rightProjects.map((project, index) => (
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
                    </div>
                </div>

            }

            <Footer theme={theme} />
        </div>
    )
}

export default Work