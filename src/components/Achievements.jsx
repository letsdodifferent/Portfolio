import { portfolioData } from '../data/portfolio';

const Achievements = () => {
    const { achievements } = portfolioData;

    return (
        <section className="section" id="achievements">
            <div className="container">
                <div className="section-title fade-in">
                    <h2>Achievements & Honours</h2>
                </div>
                <div className="achievements-grid">
                    {achievements.map((achievement, index) => (
                        <div key={index} className="achievement-card glass fade-in">
                            <div className="achievement-icon">{achievement.icon}</div>
                            <h3 className="achievement-title">{achievement.title}</h3>
                            <p className="achievement-detail">
                                <span className="achievement-rank">{achievement.rank}</span>
                                {achievement.details && (
                                    <>
                                        <br />
                                        <span style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)' }}>
                                            {achievement.details}
                                        </span>
                                    </>
                                )}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
