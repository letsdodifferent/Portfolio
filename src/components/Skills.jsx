import { portfolioData } from '../data/portfolio';

const Skills = () => {
    const { skills } = portfolioData;
    const categories = [
        skills.programmingLanguages,
        skills.frameworks,
        skills.interests
    ];

    return (
        <section className="section" id="skills">
            <div className="container">
                <div className="section-title fade-in">
                    <h2>Skills & Expertise</h2>
                </div>
                <div className="skills-grid">
                    {categories.map((category, index) => (
                        <div key={index} className="skill-category glass fade-in">
                            <h3 className="skill-category-title">
                                <span className="skill-category-icon">{category.icon}</span>
                                {category.title}
                            </h3>
                            <div className="skill-tags">
                                {category.skills.map((skill, skillIndex) => (
                                    <span key={skillIndex} className="skill-tag">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
