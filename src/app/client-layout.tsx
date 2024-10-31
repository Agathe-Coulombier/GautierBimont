// app/client-layout.tsx (Client Component)
'use client';

import { ReactNode, useEffect, useState } from 'react';
import { appWithTranslation } from 'next-i18next';
import { useTheme } from 'next-themes';
import "../../i18n"

export function ClientLayout({ children }: { children: ReactNode }) {
    const [isDarkMode, setIsDarkMode] = useState(false); // Track whether dark mode is active
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    // Check for saved theme in localStorage or fallback to system preference
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setIsDarkMode(savedTheme === 'dark');
        } else {
            const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setIsDarkMode(systemPrefersDark);
        }
        setMounted(true);
    }, []);

    // Apply the dark mode class based on the isDarkMode state
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark'); // Save preference
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light'); // Save preference
        }
    }, [isDarkMode]);

    return (
        <div className={`theme-${theme} bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}>
        <header className="p-4 flex justify-between items-center">
            <div>
            <button
                    onClick={() => setIsDarkMode(!isDarkMode)} // Toggle between light and dark
                    className="p-2 bg-gray-200 dark:bg-gray-800 rounded-md"
                >
                    {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                </button>
            </div>
        </header>
        {children}
        </div>
    );
}

export default appWithTranslation(ClientLayout);
