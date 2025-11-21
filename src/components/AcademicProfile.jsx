import { portfolioData } from '../data/portfolio';

const AcademicProfile = () => {
    const { academic } = portfolioData;

    return (
        <section className="section" id="about">
            <div className="container">
                <div className="section-title fade-in">
                    <h2>Academic Profile</h2>
                </div>
                <div className="academic-grid">
                    {academic.map((item, index) => (
                        <div key={index} className="academic-card glass fade-in">
                            <div className="academic-header">
                                <div>
                                    <h3 className="academic-degree">{item.degree}</h3>
                                    <p className="academic-institution">{item.institution}</p>
                                </div>
                                <div className="academic-score">
                                    <span className="score-value">{item.score}</span>
                                    <span className="score-label">{item.scoreLabel}</span>
                                </div>
                            </div>
                            <span className="academic-year">{item.year}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AcademicProfile;
