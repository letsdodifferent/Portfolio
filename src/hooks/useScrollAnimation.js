import { useEffect } from 'react';

export const useScrollAnimation = () => {
    useEffect(() => {
        const fadeElements = document.querySelectorAll('.fade-in');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        // Add stagger effect
                        setTimeout(() => {
                            entry.target.classList.add('visible');
                        }, index * 50);
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        fadeElements.forEach(element => observer.observe(element));

        // Cleanup
        return () => {
            fadeElements.forEach(element => observer.unobserve(element));
        };
    }, []);
};
