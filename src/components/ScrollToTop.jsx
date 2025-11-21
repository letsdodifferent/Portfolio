import { useState, useEffect } from 'react';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.pageYOffset > 500);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            className={`scroll-top ${isVisible ? 'visible' : ''}`}
            id="scrollTop"
            onClick={scrollToTop}
            aria-label="Scroll to top"
        >
            ↑
        </button>
    );
};

export default ScrollToTop;
