import { portfolioData } from '../data/portfolio';

const Experience = () => {
    const { experience } = portfolioData;

    return (
        <section className="section" id="experience">
            <div className="container">
                <div className="section-title fade-in">
                    <h2>Professional Experience</h2>
                </div>
                <div className="timeline">
                    {experience.map((item, index) => (
                        <div key={index} className="timeline-item fade-in">
                            <div className="timeline-content glass">
                                <div className="experience-header">
                                    <div>
                                        <h3 className="experience-role">{item.role}</h3>
                                        <p className="experience-company">{item.company}</p>
                                    </div>
                                    <span className="experience-date">{item.date}</span>
                                </div>
                                <div className="experience-description">
                                    <ul>
                                        {item.description.map((desc, descIndex) => (
                                            <li key={descIndex}>{desc}</li>
                                        ))}
                                    </ul>
                                </div>
                                {item.technologies.length > 0 && (
                                    <div className="tech-stack">
                                        <p className="tech-stack-label">Technologies Used:</p>
                                        <div className="tech-stack-tags">
                                            {item.technologies.map((tech, techIndex) => (
                                                <span key={techIndex} className="tech-tag">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
