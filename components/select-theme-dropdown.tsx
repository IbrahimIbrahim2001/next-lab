"use client";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Theme } from "@/lib/themes";

const themes = [
    { name: Theme.Default, color: "oklch(0.457 0.24 277.023)" },
    { name: Theme.NeoBrutalism, color: "oklch(0.65 0.24 26.92)" },
    { name: Theme.artDeco, color: "oklch(0.77 0.14 91.27)" },
    { name: Theme.caffeine, color: "oklch(0.43 0.04 42.00)" },
    { name: Theme.claude, color: "oklch(0.62 0.14 39.15)" },
    { name: Theme.cleanSlate, color: "oklch(0.59 0.20 277.06)" },
    { name: Theme.corporate, color: "oklch(0.48 0.20 260.47)" },
    { name: Theme.elegantLuxury, color: "oklch(0.47 0.15 25.06)" },
    { name: Theme.ghibli, color: "oklch(0.71 0.10 111.96)" },
    { name: Theme.marshmallow, color: "oklch(0.80 0.14 348.82)" },
    { name: Theme.doom64, color: "oklch(0.5016 0.1887 27.4816)" },
    { name: Theme.bubblegum, color: "oklch(0.6209 0.1801 348.1385)" },
    { name: Theme.softPop, color: "oklch(0.5106 0.2301 276.9656)" },
    { name: Theme.notebook, color: "oklch(0.4891 0 0)" },
];

export function SelectThemeDropdown({
    activeTheme,
    setActiveTheme,
}: {
    activeTheme: Theme;
    setActiveTheme: (theme: Theme) => void;
}) {
    return (
        <Select
            onValueChange={(val) => setActiveTheme(val as Theme)}
            value={activeTheme}
        >
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Select theme" />
            </SelectTrigger>
            <SelectContent>
                {themes.map((theme) => (
                    <SelectItem key={theme.name} value={theme.name}>
                        <div className="flex items-center gap-2">
                            <span
                                aria-hidden
                                className="inline-block h-3 w-3 rounded-sm border border-foreground"
                                style={{ backgroundColor: theme.color }}
                            />
                            <span className="capitalize">{theme.name}</span>
                        </div>
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}