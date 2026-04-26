"use client";

import {
    createContext,
    type ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";

import { Theme } from "@/lib/themes";

import { getThemeCode } from "@/lib/themes";

const COOKIE_NAME = "active_theme";
const DEFAULT_THEME = Theme.Default;

function getThemeCookie(): Theme | null {
    if (typeof window === "undefined") {
        return null;
    }

    try {
        const cookieString = document.cookie;
        const start = cookieString.indexOf(`${COOKIE_NAME}=`);
        if (start === -1) {
            return null;
        }

        const valueStart = start + COOKIE_NAME.length + 1;
        const valueEnd = cookieString.indexOf(";", valueStart);
        const value =
            valueEnd === -1
                ? cookieString.slice(valueStart)
                : cookieString.slice(valueStart, valueEnd);

        // Validate that the value is a valid Theme
        if (value && Object.values(Theme).includes(value as Theme)) {
            return value as Theme;
        }
    } catch (error) {
        console.error("Error reading theme cookie:", error);
    }
    return null;
}

function setThemeCookie(theme: Theme) {
    if (typeof window === "undefined") {
        return;
    }

    // biome-ignore lint/suspicious/noDocumentCookie: Setting cookie requires direct assignment
    document.cookie = `${COOKIE_NAME}=${theme}; path=/; max-age=31536000; SameSite=Lax; ${window.location.protocol === "https:" ? "Secure;" : ""
        }`;
}

interface ThemeContextType {
    activeTheme: Theme;
    setActiveTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ActiveThemeProvider({
    children,
    initialTheme,
}: {
    children: ReactNode;
    initialTheme?: Theme;
}) {
    const [activeTheme, setActiveTheme] = useState<Theme>(() => {
        if (initialTheme) return initialTheme;

        if (typeof window !== "undefined") {
            const cookieTheme = getThemeCookie();
            if (cookieTheme) return cookieTheme;
        }

        return DEFAULT_THEME;
    });

    useEffect(() => {
        setThemeCookie(activeTheme);

        let styleTag = document.getElementById("active-theme-style");

        if (!styleTag) {
            styleTag = document.createElement("style");
            styleTag.id = "active-theme-style";
            document.head.appendChild(styleTag);
        }

        styleTag.innerHTML = getThemeCode(activeTheme);
    }, [activeTheme]);

    return (
        <ThemeContext.Provider value={{ activeTheme, setActiveTheme }
        }>
            {children}
        </ThemeContext.Provider>
    );
}

export function useThemeConfig() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error(
            "useThemeConfig must be used within an ActiveThemeProvider"
        );
    }
    return context;
}