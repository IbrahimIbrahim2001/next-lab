"use client";

import { useTheme } from "next-themes";
import { useCallback } from "react";
import { Button } from "@/components/ui/button";
import { IconMoon, IconSun } from "@tabler/icons-react";

export function ModeSwitcher() {
    const { setTheme, resolvedTheme } = useTheme();

    const toggleTheme = useCallback(() => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
    }, [resolvedTheme, setTheme]);

    return (
        <Button
            className="group/toggle size-8 px-0"
            onClick={toggleTheme}
            variant="ghost"
        >
            <IconSun className="hidden [html.dark_&]:block" />
            <IconMoon className="hidden [html.light_&]:block" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}