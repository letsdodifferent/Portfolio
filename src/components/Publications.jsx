import { portfolioData } from '../data/portfolio';

const Publications = () => {
    const { publications } = portfolioData;

    return (
        <section className="section" id="publications">
            <div className="container">
                <div className="section-title fade-in">
                    <h2>Publications</h2>
                </div>
                {publications.map((publication, index) => (
                    <div key={index} className="publication-card glass fade-in">
                        <span className="publication-badge">{publication.badge}</span>
                        <h3 className="publication-title">{publication.title}</h3>
                        <p className="publication-conference">{publication.conference}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Publications;
