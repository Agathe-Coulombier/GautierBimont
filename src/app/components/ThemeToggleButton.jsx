'use client';
import { useState, useEffect } from 'react';

export default function ThemeToggleButton() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Check the current theme on initial render
        const savedTheme = localStorage.getItem('theme');
        const isDark = savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);

        document.documentElement.classList.toggle('dark', isDark);
        setIsDarkMode(isDark);
    }, []);

    const toggleTheme = () => {
        const newTheme = isDarkMode ? 'light' : 'dark';
        document.documentElement.classList.toggle('dark', !isDarkMode);
        document.documentElement.classList.toggle('light', isDarkMode);
        localStorage.setItem('theme', newTheme);
        setIsDarkMode(!isDarkMode);
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 bg-gray-200 dark:bg-gray-800 rounded-md"
        >
            {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
    );
}
