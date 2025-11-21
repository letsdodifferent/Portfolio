import { useEffect } from 'react';
import { portfolioData } from '../data/portfolio';

const Hero = () => {
    const { personal } = portfolioData;

    useEffect(() => {
        // Parallax effect
        const handleScroll = () => {
            const scrolled = window.pageYOffset;
            const heroBg = document.querySelector('.hero-bg');
            if (heroBg && scrolled < window.innerHeight) {
                heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="hero" id="home">
            <div className="hero-bg"></div>
            <div className="container hero-content">
                <p className="hero-greeting">{personal.greeting}</p>
                <h1 className="hero-title">
                    <span className="gradient-text">{personal.name}</span>
                </h1>
                <p className="hero-subtitle">{personal.subtitle}</p>
                <div className="hero-buttons">
                    <a href="#projects" className="btn btn-primary">
                        View My Work
                    </a>
                    <a href="#contact" className="btn btn-secondary">
                        Get In Touch
                    </a>
                </div>
            </div>
            <div className="hero-scroll">↓</div>
        </section>
    );
};

export default Hero;
