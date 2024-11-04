'use client'
import { useState, useEffect } from "react";

export default function ThemeToggleButton() {
    
    // Toggle theme and update both localStorage and document class
    const toggleTheme = () => {
        const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        document.documentElement.classList.remove(currentTheme);
        document.documentElement.classList.add(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 bg-gray-200 dark:bg-gray-800 rounded-md"
        >
            {document.documentElement.classList.contains('dark') ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
    );
}
