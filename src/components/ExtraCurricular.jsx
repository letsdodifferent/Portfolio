import { portfolioData } from '../data/portfolio';

const ExtraCurricular = () => {
    const { extraCurricular } = portfolioData;

    return (
        <section className="section" id="extra-curricular">
            <div className="container">
                <div className="section-title fade-in">
                    <h2>Extra-Curricular Activities</h2>
                </div>
                <div className="publication-card glass fade-in">
                    <span className="publication-badge">{extraCurricular.badge}</span>
                    <h3 className="publication-title">{extraCurricular.title}</h3>
                    <p
                        className="achievement-detail"
                        style={{ fontSize: 'var(--text-base)', lineHeight: '1.7', textAlign: 'left' }}
                        dangerouslySetInnerHTML={{ __html: extraCurricular.description }}
                    />
                </div>
            </div>
        </section>
    );
};

export default ExtraCurricular;
