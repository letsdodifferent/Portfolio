import { portfolioData } from '../data/portfolio';

const Contact = () => {
    const { personal } = portfolioData;

    return (
        <section className="contact" id="contact">
            <div className="container contact-content">
                <h2 className="contact-title fade-in">Let's Connect</h2>
                <p className="contact-description fade-in">
                    I'm always open to discussing new projects, opportunities, or just having a chat about technology!
                </p>
                <div className="contact-methods">
                    <div className="contact-method glass fade-in">
                        <div className="contact-icon">📧</div>
                        <div className="contact-label">Email</div>
                        <a href={`mailto:${personal.email}`} className="contact-value">
                            {personal.email}
                        </a>
                    </div>
                    <div className="contact-method glass fade-in">
                        <div className="contact-icon">📱</div>
                        <div className="contact-label">Phone</div>
                        <a href={`tel:${personal.phone}`} className="contact-value">
                            {personal.phone}
                        </a>
                    </div>
                    <div className="contact-method glass fade-in">
                        <div className="contact-icon">📍</div>
                        <div className="contact-label">Location</div>
                        <div className="contact-value">{personal.location}</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
