import { useState, useEffect } from 'react';
import { useTheme } from '../hooks/useTheme';
import { useActiveSection } from '../hooks/useActiveSection';

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    const sectionIds = ['home', 'about', 'skills', 'experience', 'projects', 'achievements', 'contact'];
    const activeSection = useActiveSection(sectionIds);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.pageYOffset > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setIsMobileMenuOpen(false);
        }
    };

    const navLinks = [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#skills', label: 'Skills' },
        { href: '#experience', label: 'Experience' },
        { href: '#projects', label: 'Projects' },
        { href: '#achievements', label: 'Achievements' },
        { href: '#contact', label: 'Contact' }
    ];

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
            <div className="container nav-container">
                <div className="nav-logo">NARENDRA</div>
                <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`} id="navLinks">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className={`nav-link ${activeSection === link.href.slice(1) ? 'active' : ''}`}
                                onClick={(e) => handleNavClick(e, link.href)}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <button
                        className="theme-toggle"
                        id="themeToggle"
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                    >
                        <span id="themeIcon">{theme === 'dark' ? '☀️' : '🌙'}</span>
                    </button>
                    <button
                        className="mobile-menu-btn"
                        id="mobileMenuBtn"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span id="menuIcon">{isMobileMenuOpen ? '✕' : '☰'}</span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
