// app/client-layout.tsx (Client Component)
'use client';

import { ReactNode, useEffect } from 'react';
import { useTheme } from 'next-themes';
import ThemeToggleButton from './components/ThemeToggleButton';
import "../../i18n"

export default function ClientLayout({ children }: { children: ReactNode }) {
    // Set the initial theme based on localStorage or default to 'light' if not set
    useEffect(() => {
        // Check for a saved theme in localStorage
        const savedTheme = localStorage.getItem('theme');

        // If no saved theme, check the user's system preference
        if (savedTheme) {
            document.documentElement.classList.add(savedTheme);
        } else {
            const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
            const initialTheme = prefersDarkMode ? 'dark' : 'light';
            document.documentElement.classList.add(initialTheme);
            localStorage.setItem('theme', initialTheme);
        }
    }, []);

    return (
        <div className={`bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}>
        <header className="p-4 flex justify-between items-center">
            <ThemeToggleButton />
        </header>
        {children}
        </div>
    );
}

