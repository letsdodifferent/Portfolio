import { portfolioData } from '../data/portfolio';

const Projects = () => {
    const { projects } = portfolioData;

    return (
        <section className="section" id="projects">
            <div className="container">
                <div className="section-title fade-in">
                    <h2>Featured Projects</h2>
                </div>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card glass fade-in">
                            <div className="project-header">
                                <span className="project-icon">{project.icon}</span>
                                <span className="project-date">{project.date}</span>
                            </div>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-tagline">{project.tagline}</p>
                            <div className="project-description">
                                <ul>
                                    {project.description.map((desc, descIndex) => (
                                        <li key={descIndex}>{desc}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="tech-stack">
                                <p className="tech-stack-label">Tech Stack:</p>
                                <div className="tech-stack-tags">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className="tech-tag">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
