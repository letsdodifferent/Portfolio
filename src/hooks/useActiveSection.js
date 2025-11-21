import { useState, useEffect } from 'react';

export const useActiveSection = (sectionIds) => {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const observerOptions = {
            threshold: 0.3,
            rootMargin: '-100px 0px -66%'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        // Observe all sections
        sectionIds.forEach(id => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        // Cleanup
        return () => {
            sectionIds.forEach(id => {
                const element = document.getElementById(id);
                if (element) observer.unobserve(element);
            });
        };
    }, [sectionIds]);

    return activeSection;
};
