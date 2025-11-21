import { useState, useEffect } from 'react';

export const useTheme = () => {
    const [theme, setTheme] = useState(() => {
        // Check localStorage on mount, default to dark
        return localStorage.getItem('theme') || 'dark';
    });

    useEffect(() => {
        // Update document element
        document.documentElement.setAttribute('data-theme', theme);
        // Save to localStorage
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
    };

    return { theme, toggleTheme };
};
