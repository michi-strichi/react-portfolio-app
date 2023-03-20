import './styles/Work.scss';
import Footer from './Footer';
import Project from './Project';

const Work = ({ theme, min781, min1281 }) => {
    const projects = require('./assets/projects.json');

    return (
        <div className={'Work' + ' ' + theme}>
            <div className='Intro'>
                <p>
                    Projects that I worked on in the last years
                </p>
            </div>

            {!min781 &&
                projects.map((project, key) => (
                    <Project key={key}
                        theme={theme}
                        title={project.title}
                        year={project.year}
                        description={project.description}
                        link={project.link}
                        color={project.color}
                        software={project.software}
                        role={project.role}
                        thumbnail={project.thumbnail}
                        detail_0={project.detail_0}
                        detail_1={project.detail_1} />
                ))
            }

            {min781 && !min1281 &&
                <div className='gridContainer'>
                    <div className='leftContainer'>
                        {projects
                            .filter((project, key) => key % 2 === 0)
                            .map((project, key) => (
                                <Project key={key}
                                    theme={theme}
                                    title={project.title}
                                    year={project.year}
                                    description={project.description}
                                    link={project.link}
                                    color={project.color}
                                    software={project.software}
                                    role={project.role}
                                    thumbnail={project.thumbnail}
                                    detail_0={project.detail_0}
                                    detail_1={project.detail_1} />
                            ))}
                    </div>
                    <div className='rightContainer'>
                        {projects
                            .filter((project, key) => key % 2 === 1)
                            .map((project, key) => (
                                <Project key={key}
                                    theme={theme}
                                    title={project.title}
                                    year={project.year}
                                    description={project.description}
                                    link={project.link}
                                    color={project.color}
                                    software={project.software}
                                    role={project.role}
                                    thumbnail={project.thumbnail}
                                    detail_0={project.detail_0}
                                    detail_1={project.detail_1} />
                            ))}
                    </div>

                </div>
            }
            {min1281 &&
                <div className='gridContainer'>
                    <div className='leftContainer'>
                        {projects
                            .filter((project, key) => key % 3 === 0)
                            .map((project, key) => (
                                <Project key={key}
                                    theme={theme}
                                    title={project.title}
                                    year={project.year}
                                    description={project.description}
                                    link={project.link}
                                    color={project.color}
                                    software={project.software}
                                    role={project.role}
                                    thumbnail={project.thumbnail}
                                    detail_0={project.detail_0}
                                    detail_1={project.detail_1} />
                            ))}
                    </div>
                    
                    <div className='middleContainer'>
                        {projects
                            .filter((project, key) => key % 3 === 1)
                            .map((project, key) => (
                                <Project key={key}
                                    theme={theme}
                                    title={project.title}
                                    year={project.year}
                                    description={project.description}
                                    link={project.link}
                                    color={project.color}
                                    software={project.software}
                                    role={project.role}
                                    thumbnail={project.thumbnail}
                                    detail_0={project.detail_0}
                                    detail_1={project.detail_1} />
                            ))}
                    </div>

                    <div className='rightContainer'>
                        {projects
                            .filter((project, key) => key % 3 === 2)
                            .map((project, key) => (
                                <Project key={key}
                                    theme={theme}
                                    title={project.title}
                                    year={project.year}
                                    description={project.description}
                                    link={project.link}
                                    color={project.color}
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