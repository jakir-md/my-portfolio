"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="flex justify-center mb-8">
            <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-3 bg-white dark:bg-gray-800 shadow-lg rounded-full flex items-center justify-center hover:scale-110 transition-transform border border-gray-100 dark:border-gray-700"
                aria-label="Toggle theme"
            >
                {theme === "dark" ? (
                    <Sun className="w-6 h-6 text-yellow-500" />
                ) : (
                    <Moon className="w-6 h-6 text-gray-700" />
                )}
            </button>
        </div>
    );
}
