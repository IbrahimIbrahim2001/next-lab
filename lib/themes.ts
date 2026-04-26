export const Theme = {
  Default: "default",
  NeoBrutalism: "neo-brutalism",
  artDeco: "art-deco",
  caffeine: "caffeine",
  claude: "claude",
  cleanSlate: "clean-slate",
  corporate: "corporate",
  elegantLuxury: "elegant-luxury",
  ghibli: "ghibli",
  marshmallow: "marshmallow",
  doom64: "doom64",
  bubblegum: "bubblegum",
  softPop: "soft-pop",
  notebook: "notebook",
} as const;

export type Theme = (typeof Theme)[keyof typeof Theme];

const themes = [
  {
    name: Theme.Default,
    color: `:root {
        --background: oklch(1 0 0);
        --foreground: oklch(0.141 0.005 285.823);
        --card: oklch(1 0 0);
        --card-foreground: oklch(0.141 0.005 285.823);
        --popover: oklch(1 0 0);
        --popover-foreground: oklch(0.141 0.005 285.823);
        --primary: oklch(0.457 0.24 277.023);
        --primary-foreground: oklch(0.962 0.018 272.314);
        --secondary: oklch(0.967 0.001 286.375);
        --secondary-foreground: oklch(0.21 0.006 285.885);
        --muted: oklch(0.967 0.001 286.375);
        --muted-foreground: oklch(0.552 0.016 285.938);
        --accent: oklch(0.967 0.001 286.375);
        --accent-foreground: oklch(0.21 0.006 285.885);
        --destructive: oklch(0.577 0.245 27.325);
        --border: oklch(0.92 0.004 286.32);
        --input: oklch(0.92 0.004 286.32);
        --ring: oklch(0.705 0.015 286.067);
        --chart-1: oklch(0.879 0.169 91.605);
        --chart-2: oklch(0.769 0.188 70.08);
        --chart-3: oklch(0.666 0.179 58.318);
        --chart-4: oklch(0.555 0.163 48.998);
        --chart-5: oklch(0.473 0.137 46.201);
        --radius: 0;
        --sidebar: oklch(0.985 0 0);
        --sidebar-foreground: oklch(0.141 0.005 285.823);
        --sidebar-primary: oklch(0.511 0.262 276.966);
        --sidebar-primary-foreground: oklch(0.962 0.018 272.314);
        --sidebar-accent: oklch(0.967 0.001 286.375);
        --sidebar-accent-foreground: oklch(0.21 0.006 285.885);
        --sidebar-border: oklch(0.92 0.004 286.32);
        --sidebar-ring: oklch(0.705 0.015 286.067);
    }

    .dark {
        --background: oklch(0.141 0.005 285.823);
        --foreground: oklch(0.985 0 0);
        --card: oklch(0.21 0.006 285.885);
        --card-foreground: oklch(0.985 0 0);
        --popover: oklch(0.21 0.006 285.885);
        --popover-foreground: oklch(0.985 0 0);
        --primary: oklch(0.398 0.195 277.366);
        --primary-foreground: oklch(0.962 0.018 272.314);
        --secondary: oklch(0.274 0.006 286.033);
        --secondary-foreground: oklch(0.985 0 0);
        --muted: oklch(0.274 0.006 286.033);
        --muted-foreground: oklch(0.705 0.015 286.067);
        --accent: oklch(0.274 0.006 286.033);
        --accent-foreground: oklch(0.985 0 0);
        --destructive: oklch(0.704 0.191 22.216);
        --border: oklch(1 0 0 / 10%);
        --input: oklch(1 0 0 / 15%);
        --ring: oklch(0.552 0.016 285.938);
        --chart-1: oklch(0.879 0.169 91.605);
        --chart-2: oklch(0.769 0.188 70.08);
        --chart-3: oklch(0.666 0.179 58.318);
        --chart-4: oklch(0.555 0.163 48.998);
        --chart-5: oklch(0.473 0.137 46.201);
        --sidebar: oklch(0.21 0.006 285.885);
        --sidebar-foreground: oklch(0.985 0 0);
        --sidebar-primary: oklch(0.585 0.233 277.117);
        --sidebar-primary-foreground: oklch(0.962 0.018 272.314);
        --sidebar-accent: oklch(0.274 0.006 286.033);
        --sidebar-accent-foreground: oklch(0.985 0 0);
        --sidebar-border: oklch(1 0 0 / 10%);
        --sidebar-ring: oklch(0.552 0.016 285.938);
        }`,
  },
  {
    name: Theme.NeoBrutalism,
    color: `
            :root {
  --background: oklch(1.00 0 0);
  --foreground: oklch(0 0 0);
  --card: oklch(1.00 0 0);
  --card-foreground: oklch(0 0 0);
  --popover: oklch(1.00 0 0);
  --popover-foreground: oklch(0 0 0);
  --primary: oklch(0.65 0.24 26.92);
  --primary-foreground: oklch(1.00 0 0);
  --secondary: oklch(0.97 0.21 109.74);
  --secondary-foreground: oklch(0 0 0);
  --muted: oklch(0.96 0 0);
  --muted-foreground: oklch(0.32 0 0);
  --accent: oklch(0.56 0.24 260.83);
  --accent-foreground: oklch(1.00 0 0);
  --destructive: oklch(0 0 0);
  --border: oklch(0 0 0);
  --input: oklch(0 0 0);
  --ring: oklch(0.65 0.24 26.92);
  --chart-1: oklch(0.65 0.24 26.92);
  --chart-2: oklch(0.97 0.21 109.74);
  --chart-3: oklch(0.56 0.24 260.83);
  --chart-4: oklch(0.73 0.25 142.50);
  --chart-5: oklch(0.59 0.27 328.36);
  --sidebar: oklch(0.96 0 0);
  --sidebar-foreground: oklch(0 0 0);
  --sidebar-primary: oklch(0.65 0.24 26.92);
  --sidebar-primary-foreground: oklch(1.00 0 0);
  --sidebar-accent: oklch(0.56 0.24 260.83);
  --sidebar-accent-foreground: oklch(1.00 0 0);
  --sidebar-border: oklch(0 0 0);
  --sidebar-ring: oklch(0.65 0.24 26.92);

  --font-sans: DM Sans, sans-serif;
  --font-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
  --font-mono: Space Mono, monospace;

  --radius: 0px;

  --shadow-2xs: 4px 4px 0px 0px oklch(0.00 0 0 / 0.50);
  --shadow-xs: 4px 4px 0px 0px oklch(0.00 0 0 / 0.50);
  --shadow-sm: 4px 4px 0px 0px oklch(0.00 0 0 / 1.00), 4px 1px 2px -1px oklch(0.00 0 0 / 1.00);
  --shadow: 4px 4px 0px 0px oklch(0.00 0 0 / 1.00), 4px 1px 2px -1px oklch(0.00 0 0 / 1.00);
  --shadow-md: 4px 4px 0px 0px oklch(0.00 0 0 / 1.00), 4px 2px 4px -1px oklch(0.00 0 0 / 1.00);
  --shadow-lg: 4px 4px 0px 0px oklch(0.00 0 0 / 1.00), 4px 4px 6px -1px oklch(0.00 0 0 / 1.00);
  --shadow-xl: 4px 4px 0px 0px oklch(0.00 0 0 / 1.00), 4px 8px 10px -1px oklch(0.00 0 0 / 1.00);
  --shadow-2xl: 4px 4px 0px 0px oklch(0.00 0 0 / 2.50);

}

.dark {
  --background: oklch(0 0 0);
  --foreground: oklch(1.00 0 0);
  --card: oklch(0.32 0 0);
  --card-foreground: oklch(1.00 0 0);
  --popover: oklch(0.32 0 0);
  --popover-foreground: oklch(1.00 0 0);
  --primary: oklch(0.70 0.19 23.04);
  --primary-foreground: oklch(0 0 0);
  --secondary: oklch(0.97 0.20 109.61);
  --secondary-foreground: oklch(0 0 0);
  --muted: oklch(0.32 0 0);
  --muted-foreground: oklch(0.85 0 0);
  --accent: oklch(0.68 0.18 251.63);
  --accent-foreground: oklch(0 0 0);
  --destructive: oklch(1.00 0 0);
  --border: oklch(1.00 0 0);
  --input: oklch(1.00 0 0);
  --ring: oklch(0.70 0.19 23.04);
  --chart-1: oklch(0.70 0.19 23.04);
  --chart-2: oklch(0.97 0.20 109.61);
  --chart-3: oklch(0.68 0.18 251.63);
  --chart-4: oklch(0.74 0.23 142.87);
  --chart-5: oklch(0.61 0.25 328.13);
  --sidebar: oklch(0 0 0);
  --sidebar-foreground: oklch(1.00 0 0);
  --sidebar-primary: oklch(0.70 0.19 23.04);
  --sidebar-primary-foreground: oklch(0 0 0);
  --sidebar-accent: oklch(0.68 0.18 251.63);
  --sidebar-accent-foreground: oklch(0 0 0);
  --sidebar-border: oklch(1.00 0 0);
  --sidebar-ring: oklch(0.70 0.19 23.04);

  --shadow-2xs: 0 1px 3px 0px oklch(0.00 0 0 / 0.05);
  --shadow-xs: 0 1px 3px 0px oklch(0.00 0 0 / 0.05);
  --shadow-sm: 0 1px 3px 0px oklch(0.00 0 0 / 0.10), 0 1px 2px -1px oklch(0.00 0 0 / 0.10);
  --shadow: 0 1px 3px 0px oklch(0.00 0 0 / 0.10), 0 1px 2px -1px oklch(0.00 0 0 / 0.10);
  --shadow-md: 0 1px 3px 0px oklch(0.00 0 0 / 0.10), 0 2px 4px -1px oklch(0.00 0 0 / 0.10);
  --shadow-lg: 0 1px 3px 0px oklch(0.00 0 0 / 0.10), 0 4px 6px -1px oklch(0.00 0 0 / 0.10);
  --shadow-xl: 0 1px 3px 0px oklch(0.00 0 0 / 0.10), 0 8px 10px -1px oklch(0.00 0 0 / 0.10);
  --shadow-2xl: 0 1px 3px 0px oklch(0.00 0 0 / 0.25);
}
        `
  },
  {
    name: Theme.artDeco,
    color: `:root {
  --background: oklch(0.96 0.03 106.92);
  --foreground: oklch(0.40 0.07 90.80);
  --card: oklch(0.98 0.04 97.73);
  --card-foreground: oklch(0.32 0 0);
  --popover: oklch(0.98 0.04 97.73);
  --popover-foreground: oklch(0.32 0 0);
  --primary: oklch(0.77 0.14 91.27);
  --primary-foreground: oklch(0 0 0);
  --secondary: oklch(0.67 0.13 61.58);
  --secondary-foreground: oklch(0 0 0);
  --muted: oklch(0.93 0.03 106.94);
  --muted-foreground: oklch(0.32 0 0);
  --accent: oklch(0.89 0.18 95.47);
  --accent-foreground: oklch(0.32 0 0);
  --destructive: oklch(0.69 0.20 32.29);
  --border: oklch(0.83 0.11 93.01);
  --input: oklch(0.65 0.13 81.66);
  --ring: oklch(0.75 0.15 84.05);
  --chart-1: oklch(0.89 0.18 95.47);
  --chart-2: oklch(0.67 0.13 61.58);
  --chart-3: oklch(0.65 0.13 81.66);
  --chart-4: oklch(0.75 0.15 84.05);
  --chart-5: oklch(0.77 0.14 91.27);
  --sidebar: oklch(0.96 0.03 106.92);
  --sidebar-foreground: oklch(0.32 0 0);
  --sidebar-primary: oklch(0.77 0.14 91.27);
  --sidebar-primary-foreground: oklch(0.32 0 0);
  --sidebar-accent: oklch(0.89 0.18 95.47);
  --sidebar-accent-foreground: oklch(0.32 0 0);
  --sidebar-border: oklch(0.65 0.13 81.66);
  --sidebar-ring: oklch(0.75 0.15 84.05);

  --font-sans: Delius Swash Caps;
  --font-serif: Delius Swash Caps;
  --font-mono: Delius Swash Caps;

  --radius: 0.625rem;
  
  --shadow-2xs: 0px 1px 3px 0px oklch(0.70 0.17 28.12 / 0.03);
  --shadow-xs: 0px 1px 3px 0px oklch(0.70 0.17 28.12 / 0.03);
  --shadow-sm: 0px 1px 3px 0px oklch(0.70 0.17 28.12 / 0.05), 0px 1px 2px -1px oklch(0.70 0.17 28.12 / 0.05);
  --shadow: 0px 1px 3px 0px oklch(0.70 0.17 28.12 / 0.05), 0px 1px 2px -1px oklch(0.70 0.17 28.12 / 0.05);
  --shadow-md: 0px 1px 3px 0px oklch(0.70 0.17 28.12 / 0.05), 0px 2px 4px -1px oklch(0.70 0.17 28.12 / 0.05);
  --shadow-lg: 0px 1px 3px 0px oklch(0.70 0.17 28.12 / 0.05), 0px 4px 6px -1px oklch(0.70 0.17 28.12 / 0.05);
  --shadow-xl: 0px 1px 3px 0px oklch(0.70 0.17 28.12 / 0.05), 0px 8px 10px -1px oklch(0.70 0.17 28.12 / 0.05);
  --shadow-2xl: 0px 1px 3px 0px oklch(0.70 0.17 28.12 / 0.13);
  
}

.dark {
  --background: oklch(0.32 0 0);
  --foreground: oklch(0.96 0.03 106.92);
  --card: oklch(0.41 0 0);
  --card-foreground: oklch(0.96 0.03 106.92);
  --popover: oklch(0.41 0 0);
  --popover-foreground: oklch(0.96 0.03 106.92);
  --primary: oklch(0.84 0.17 83.07);
  --primary-foreground: oklch(0 0 0);
  --secondary: oklch(0.47 0.11 50.64);
  --secondary-foreground: oklch(0.96 0.03 106.92);
  --muted: oklch(0.44 0 0);
  --muted-foreground: oklch(0.96 0.03 106.92);
  --accent: oklch(0.66 0.14 79.74);
  --accent-foreground: oklch(0 0 0);
  --destructive: oklch(0.66 0.23 35.22);
  --border: oklch(0.47 0.11 50.64);
  --input: oklch(0.47 0.11 50.64);
  --ring: oklch(0.65 0.13 81.66);
  --chart-1: oklch(0.75 0.15 84.05);
  --chart-2: oklch(0.47 0.11 50.64);
  --chart-3: oklch(0.65 0.13 81.66);
  --chart-4: oklch(0.75 0.15 84.05);
  --chart-5: oklch(0.65 0.13 81.66);
  --sidebar: oklch(0.32 0 0);
  --sidebar-foreground: oklch(1.00 0 0);
  --sidebar-primary: oklch(0.61 0.13 79.65);
  --sidebar-primary-foreground: oklch(1.00 0 0);
  --sidebar-accent: oklch(0.75 0.15 84.05);
  --sidebar-accent-foreground: oklch(0.96 0.03 106.92);
  --sidebar-border: oklch(0.47 0.11 50.64);
  --sidebar-ring: oklch(0.65 0.13 81.66);
  
  --shadow-2xs: 0px 1px 3px 0px oklch(0 0 0 / 0.03);
  --shadow-xs: 0px 1px 3px 0px oklch(0 0 0 / 0.03);
  --shadow-sm: 0px 1px 3px 0px oklch(0 0 0 / 0.05), 0px 1px 2px -1px oklch(0 0 0 / 0.05);
  --shadow: 0px 1px 3px 0px oklch(0 0 0 / 0.05), 0px 1px 2px -1px oklch(0 0 0 / 0.05);
  --shadow-md: 0px 1px 3px 0px oklch(0 0 0 / 0.05), 0px 2px 4px -1px oklch(0 0 0 / 0.05);
  --shadow-lg: 0px 1px 3px 0px oklch(0 0 0 / 0.05), 0px 4px 6px -1px oklch(0 0 0 / 0.05);
  --shadow-xl: 0px 1px 3px 0px oklch(0 0 0 / 0.05), 0px 8px 10px -1px oklch(0 0 0 / 0.05);
  --shadow-2xl: 0px 1px 3px 0px oklch(0 0 0 / 0.13);
}`
  },
  {
    name: Theme.caffeine,
    color: `:root {
  --background: oklch(0.98 0 0);
  --foreground: oklch(0.24 0 0);
  --card: oklch(0.99 0 0);
  --card-foreground: oklch(0.24 0 0);
  --popover: oklch(0.99 0 0);
  --popover-foreground: oklch(0.24 0 0);
  --primary: oklch(0.43 0.04 42.00);
  --primary-foreground: oklch(1.00 0 0);
  --secondary: oklch(0.92 0.07 76.67);
  --secondary-foreground: oklch(0.35 0.07 41.41);
  --muted: oklch(0.95 0 0);
  --muted-foreground: oklch(0.50 0 0);
  --accent: oklch(0.93 0 0);
  --accent-foreground: oklch(0.24 0 0);
  --destructive: oklch(0.63 0.19 33.26);
  --border: oklch(0.88 0 0);
  --input: oklch(0.88 0 0);
  --ring: oklch(0.43 0.04 42.00);
  --chart-1: oklch(0.43 0.04 42.00);
  --chart-2: oklch(0.92 0.07 76.67);
  --chart-3: oklch(0.93 0 0);
  --chart-4: oklch(0.94 0.05 75.02);
  --chart-5: oklch(0.43 0.04 42.00);
  --sidebar: oklch(0.99 0 0);
  --sidebar-foreground: oklch(0.26 0 0);
  --sidebar-primary: oklch(0.33 0 0);
  --sidebar-primary-foreground: oklch(0.99 0 0);
  --sidebar-accent: oklch(0.98 0 0);
  --sidebar-accent-foreground: oklch(0.33 0 0);
  --sidebar-border: oklch(0.94 0 0);
  --sidebar-ring: oklch(0.77 0 0);

  --font-sans: 'Geist', 'Geist Fallback', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  --font-serif: "Geist", "Geist Fallback", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
  --font-mono: "Geist Mono", "Geist Mono Fallback", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;

  --radius: 0.5rem;
  
  --shadow-2xs: 0 1px 3px 0px oklch(0.00 0 0 / 0.05);
  --shadow-xs: 0 1px 3px 0px oklch(0.00 0 0 / 0.05);
  --shadow-sm: 0 1px 3px 0px oklch(0.00 0 0 / 0.10), 0 1px 2px -1px oklch(0.00 0 0 / 0.10);
  --shadow: 0 1px 3px 0px oklch(0.00 0 0 / 0.10), 0 1px 2px -1px oklch(0.00 0 0 / 0.10);
  --shadow-md: 0 1px 3px 0px oklch(0.00 0 0 / 0.10), 0 2px 4px -1px oklch(0.00 0 0 / 0.10);
  --shadow-lg: 0 1px 3px 0px oklch(0.00 0 0 / 0.10), 0 4px 6px -1px oklch(0.00 0 0 / 0.10);
  --shadow-xl: 0 1px 3px 0px oklch(0.00 0 0 / 0.10), 0 8px 10px -1px oklch(0.00 0 0 / 0.10);
  --shadow-2xl: 0 1px 3px 0px oklch(0.00 0 0 / 0.25);
  
}

.dark {
  --background: oklch(0.18 0 0);
  --foreground: oklch(0.95 0 0);
  --card: oklch(0.21 0 0);
  --card-foreground: oklch(0.95 0 0);
  --popover: oklch(0.21 0 0);
  --popover-foreground: oklch(0.95 0 0);
  --primary: oklch(0.92 0.05 67.14);
  --primary-foreground: oklch(0.20 0.02 201.14);
  --secondary: oklch(0.32 0.02 67.00);
  --secondary-foreground: oklch(0.92 0.05 67.14);
  --muted: oklch(0.25 0 0);
  --muted-foreground: oklch(0.77 0 0);
  --accent: oklch(0.29 0 0);
  --accent-foreground: oklch(0.95 0 0);
  --destructive: oklch(0.63 0.19 33.26);
  --border: oklch(0.24 0.01 88.77);
  --input: oklch(0.40 0 0);
  --ring: oklch(0.92 0.05 67.14);
  --chart-1: oklch(0.92 0.05 67.14);
  --chart-2: oklch(0.32 0.02 67.00);
  --chart-3: oklch(0.29 0 0);
  --chart-4: oklch(0.35 0.02 67.11);
  --chart-5: oklch(0.92 0.05 67.14);
  --sidebar: oklch(0.21 0.01 285.56);
  --sidebar-foreground: oklch(0.97 0 0);
  --sidebar-primary: oklch(0.49 0.22 264.43);
  --sidebar-primary-foreground: oklch(1.00 0 0);
  --sidebar-accent: oklch(0.27 0.01 285.81);
  --sidebar-accent-foreground: oklch(0.97 0 0);
  --sidebar-border: oklch(0.27 0.01 285.81);
  --sidebar-ring: oklch(0.87 0.01 286.27);
  
  --shadow-2xs: 0 1px 3px 0px oklch(0.00 0 0 / 0.05);
  --shadow-xs: 0 1px 3px 0px oklch(0.00 0 0 / 0.05);
  --shadow-sm: 0 1px 3px 0px oklch(0.00 0 0 / 0.10), 0 1px 2px -1px oklch(0.00 0 0 / 0.10);
  --shadow: 0 1px 3px 0px oklch(0.00 0 0 / 0.10), 0 1px 2px -1px oklch(0.00 0 0 / 0.10);
  --shadow-md: 0 1px 3px 0px oklch(0.00 0 0 / 0.10), 0 2px 4px -1px oklch(0.00 0 0 / 0.10);
  --shadow-lg: 0 1px 3px 0px oklch(0.00 0 0 / 0.10), 0 4px 6px -1px oklch(0.00 0 0 / 0.10);
  --shadow-xl: 0 1px 3px 0px oklch(0.00 0 0 / 0.10), 0 8px 10px -1px oklch(0.00 0 0 / 0.10);
  --shadow-2xl: 0 1px 3px 0px oklch(0.00 0 0 / 0.25);
}`
  },
  {
    name: Theme.claude,
    color: `:root {
  --background: oklch(0.98 0.01 93.48);
  --foreground: oklch(0.34 0.03 94.42);
  --card: oklch(0.98 0.01 93.48);
  --card-foreground: oklch(0.19 0 0);
  --popover: oklch(1.00 0 0);
  --popover-foreground: oklch(0.27 0.02 99.70);
  --primary: oklch(0.62 0.14 39.15);
  --primary-foreground: oklch(1.00 0 0);
  --secondary: oklch(0.92 0.01 87.42);
  --secondary-foreground: oklch(0.43 0.02 99.33);
  --muted: oklch(0.95 0.01 91.46);
  --muted-foreground: oklch(0.61 0.01 91.49);
  --accent: oklch(0.92 0.01 87.42);
  --accent-foreground: oklch(0.27 0.02 99.70);
  --destructive: oklch(0.19 0 0);
  --border: oklch(0.91 0.01 106.47);
  --input: oklch(0.76 0.02 96.91);
  --ring: oklch(0.59 0.17 252.92);
  --chart-1: oklch(0.56 0.13 42.95);
  --chart-2: oklch(0.69 0.16 290.29);
  --chart-3: oklch(0.88 0.03 91.64);
  --chart-4: oklch(0.88 0.04 298.21);
  --chart-5: oklch(0.56 0.13 41.94);
  --sidebar: oklch(0.97 0.01 93.49);
  --sidebar-foreground: oklch(0.36 0.01 106.85);
  --sidebar-primary: oklch(0.62 0.14 39.15);
  --sidebar-primary-foreground: oklch(0.99 0 0);
  --sidebar-accent: oklch(0.22 0 0);
  --sidebar-accent-foreground: oklch(0.33 0 0);
  --sidebar-border: oklch(0.94 0 0);
  --sidebar-ring: oklch(0.77 0 0);

  --font-sans: 'Geist', 'Geist Fallback', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  --font-serif: "Geist", "Geist Fallback", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
  --font-mono: "Geist Mono", "Geist Mono Fallback", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;

  --radius: 0.5rem;
  
  --shadow-2xs: 0 1px 3px 0px oklch(0.00 0 0 / 0.05);
  --shadow-xs: 0 1px 3px 0px oklch(0.00 0 0 / 0.05);
  --shadow-sm: 0 1px 3px 0px oklch(0.00 0 0 / 0.10), 0 1px 2px -1px oklch(0.00 0 0 / 0.10);
  --shadow: 0 1px 3px 0px oklch(0.00 0 0 / 0.10), 0 1px 2px -1px oklch(0.00 0 0 / 0.10);
  --shadow-md: 0 1px 3px 0px oklch(0.00 0 0 / 0.10), 0 2px 4px -1px oklch(0.00 0 0 / 0.10);
  --shadow-lg: 0 1px 3px 0px oklch(0.00 0 0 / 0.10), 0 4px 6px -1px oklch(0.00 0 0 / 0.10);
  --shadow-xl: 0 1px 3px 0px oklch(0.00 0 0 / 0.10), 0 8px 10px -1px oklch(0.00 0 0 / 0.10);
  --shadow-2xl: 0 1px 3px 0px oklch(0.00 0 0 / 0.25);
  
}

.dark {
  --background: oklch(0.27 0 0);
  --foreground: oklch(0.81 0.01 93.53);
  --card: oklch(0.27 0 0);
  --card-foreground: oklch(0.98 0.01 93.48);
  --popover: oklch(0.31 0 0);
  --popover-foreground: oklch(0.92 0 0);
  --primary: oklch(0.67 0.13 38.92);
  --primary-foreground: oklch(1.00 0 0);
  --secondary: oklch(0.98 0.01 93.48);
  --secondary-foreground: oklch(0.31 0 0);
  --muted: oklch(0.22 0 0);
  --muted-foreground: oklch(0.77 0.02 100.64);
  --accent: oklch(0.21 0.01 88.79);
  --accent-foreground: oklch(0.97 0.01 93.49);
  --destructive: oklch(0.64 0.21 25.39);
  --border: oklch(0.36 0.01 106.85);
  --input: oklch(0.43 0.01 99.03);
  --ring: oklch(0.59 0.17 252.92);
  --chart-1: oklch(0.56 0.13 42.95);
  --chart-2: oklch(0.69 0.16 290.29);
  --chart-3: oklch(0.21 0.01 88.79);
  --chart-4: oklch(0.31 0.05 289.74);
  --chart-5: oklch(0.56 0.13 41.94);
  --sidebar: oklch(0.24 0 0);
  --sidebar-foreground: oklch(0.81 0.01 93.53);
  --sidebar-primary: oklch(0.33 0 0);
  --sidebar-primary-foreground: oklch(0.99 0 0);
  --sidebar-accent: oklch(0.17 0 0);
  --sidebar-accent-foreground: oklch(0.81 0.01 93.53);
  --sidebar-border: oklch(0.94 0 0);
  --sidebar-ring: oklch(0.77 0 0);
  
  --shadow-2xs: 0 1px 3px 0px oklch(0.00 0 0 / 0.05);
  --shadow-xs: 0 1px 3px 0px oklch(0.00 0 0 / 0.05);
  --shadow-sm: 0 1px 3px 0px oklch(0.00 0 0 / 0.10), 0 1px 2px -1px oklch(0.00 0 0 / 0.10);
  --shadow: 0 1px 3px 0px oklch(0.00 0 0 / 0.10), 0 1px 2px -1px oklch(0.00 0 0 / 0.10);
  --shadow-md: 0 1px 3px 0px oklch(0.00 0 0 / 0.10), 0 2px 4px -1px oklch(0.00 0 0 / 0.10);
  --shadow-lg: 0 1px 3px 0px oklch(0.00 0 0 / 0.10), 0 4px 6px -1px oklch(0.00 0 0 / 0.10);
  --shadow-xl: 0 1px 3px 0px oklch(0.00 0 0 / 0.10), 0 8px 10px -1px oklch(0.00 0 0 / 0.10);
  --shadow-2xl: 0 1px 3px 0px oklch(0.00 0 0 / 0.25);
}`
  },
  {
    name: Theme.cleanSlate,
    color: `:root {
  --background: oklch(0.98 0 0);
  --foreground: oklch(0.28 0.04 260.33);
  --card: oklch(1.00 0 0);
  --card-foreground: oklch(0.28 0.04 260.33);
  --popover: oklch(1.00 0 0);
  --popover-foreground: oklch(0.28 0.04 260.33);
  --primary: oklch(0.59 0.20 277.06);
  --primary-foreground: oklch(1.00 0 0);
  --secondary: oklch(0.93 0.01 261.82);
  --secondary-foreground: oklch(0.37 0.03 259.73);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.55 0.02 264.41);
  --accent: oklch(0.93 0.03 273.66);
  --accent-foreground: oklch(0.37 0.03 259.73);
  --destructive: oklch(0.64 0.21 25.39);
  --border: oklch(0.87 0.01 261.81);
  --input: oklch(0.87 0.01 261.81);
  --ring: oklch(0.59 0.20 277.06);
  --chart-1: oklch(0.59 0.20 277.06);
  --chart-2: oklch(0.51 0.23 276.97);
  --chart-3: oklch(0.46 0.21 277.06);
  --chart-4: oklch(0.40 0.18 277.16);
  --chart-5: oklch(0.36 0.14 278.65);
  --sidebar: oklch(0.97 0 0);
  --sidebar-foreground: oklch(0.28 0.04 260.33);
  --sidebar-primary: oklch(0.59 0.20 277.06);
  --sidebar-primary-foreground: oklch(1.00 0 0);
  --sidebar-accent: oklch(0.93 0.03 273.66);
  --sidebar-accent-foreground: oklch(0.37 0.03 259.73);
  --sidebar-border: oklch(0.87 0.01 261.81);
  --sidebar-ring: oklch(0.59 0.20 277.06);

  --font-sans: Inter, sans-serif;
  --font-serif: Merriweather, serif;
  --font-mono: JetBrains Mono, monospace;

  --radius: 0.5rem;
  
  --shadow-2xs: 0px 4px 8px -1px oklch(0.00 0 0 / 0.05);
  --shadow-xs: 0px 4px 8px -1px oklch(0.00 0 0 / 0.05);
  --shadow-sm: 0px 4px 8px -1px oklch(0.00 0 0 / 0.10), 0px 1px 2px -2px oklch(0.00 0 0 / 0.10);
  --shadow: 0px 4px 8px -1px oklch(0.00 0 0 / 0.10), 0px 1px 2px -2px oklch(0.00 0 0 / 0.10);
  --shadow-md: 0px 4px 8px -1px oklch(0.00 0 0 / 0.10), 0px 2px 4px -2px oklch(0.00 0 0 / 0.10);
  --shadow-lg: 0px 4px 8px -1px oklch(0.00 0 0 / 0.10), 0px 4px 6px -2px oklch(0.00 0 0 / 0.10);
  --shadow-xl: 0px 4px 8px -1px oklch(0.00 0 0 / 0.10), 0px 8px 10px -2px oklch(0.00 0 0 / 0.10);
  --shadow-2xl: 0px 4px 8px -1px oklch(0.00 0 0 / 0.25);
  
}

.dark {
  --background: oklch(0.21 0.04 264.04);
  --foreground: oklch(0.93 0.01 256.71);
  --card: oklch(0.28 0.04 260.33);
  --card-foreground: oklch(0.93 0.01 256.71);
  --popover: oklch(0.28 0.04 260.33);
  --popover-foreground: oklch(0.93 0.01 256.71);
  --primary: oklch(0.68 0.16 276.93);
  --primary-foreground: oklch(0.21 0.04 264.04);
  --secondary: oklch(0.34 0.03 261.83);
  --secondary-foreground: oklch(0.87 0.01 261.81);
  --muted: oklch(0.28 0.04 260.33);
  --muted-foreground: oklch(0.71 0.02 261.33);
  --accent: oklch(0.37 0.03 259.73);
  --accent-foreground: oklch(0.87 0.01 261.81);
  --destructive: oklch(0.64 0.21 25.39);
  --border: oklch(0.45 0.03 257.68);
  --input: oklch(0.45 0.03 257.68);
  --ring: oklch(0.68 0.16 276.93);
  --chart-1: oklch(0.68 0.16 276.93);
  --chart-2: oklch(0.59 0.20 277.06);
  --chart-3: oklch(0.51 0.23 276.97);
  --chart-4: oklch(0.46 0.21 277.06);
  --chart-5: oklch(0.40 0.18 277.16);
  --sidebar: oklch(0.28 0.04 260.33);
  --sidebar-foreground: oklch(0.93 0.01 256.71);
  --sidebar-primary: oklch(0.68 0.16 276.93);
  --sidebar-primary-foreground: oklch(0.21 0.04 264.04);
  --sidebar-accent: oklch(0.37 0.03 259.73);
  --sidebar-accent-foreground: oklch(0.87 0.01 261.81);
  --sidebar-border: oklch(0.45 0.03 257.68);
  --sidebar-ring: oklch(0.68 0.16 276.93);
  
  --shadow-2xs: 0 1px 3px 0px oklch(0.00 0 0 / 0.05);
  --shadow-xs: 0 1px 3px 0px oklch(0.00 0 0 / 0.05);
  --shadow-sm: 0 1px 3px 0px oklch(0.00 0 0 / 0.10), 0 1px 2px -1px oklch(0.00 0 0 / 0.10);
  --shadow: 0 1px 3px 0px oklch(0.00 0 0 / 0.10), 0 1px 2px -1px oklch(0.00 0 0 / 0.10);
  --shadow-md: 0 1px 3px 0px oklch(0.00 0 0 / 0.10), 0 2px 4px -1px oklch(0.00 0 0 / 0.10);
  --shadow-lg: 0 1px 3px 0px oklch(0.00 0 0 / 0.10), 0 4px 6px -1px oklch(0.00 0 0 / 0.10);
  --shadow-xl: 0 1px 3px 0px oklch(0.00 0 0 / 0.10), 0 8px 10px -1px oklch(0.00 0 0 / 0.10);
  --shadow-2xl: 0 1px 3px 0px oklch(0.00 0 0 / 0.25);
}`
  },
  {
    name: Theme.corporate,
    color: `:root {
  --background: oklch(0.96 0.01 271.34);
  --foreground: oklch(0.21 0.03 263.61);
  --card: oklch(0.98 0.01 271.41);
  --card-foreground: oklch(0.21 0.03 263.61);
  --popover: oklch(1.00 0 0);
  --popover-foreground: oklch(0.21 0.03 263.61);
  --primary: oklch(0.48 0.20 260.47);
  --primary-foreground: oklch(1.00 0 0);
  --secondary: oklch(0.91 0.02 274.06);
  --secondary-foreground: oklch(0.37 0.03 259.73);
  --muted: oklch(0.94 0.02 274.86);
  --muted-foreground: oklch(0.55 0.02 264.41);
  --accent: oklch(0.95 0.02 260.18);
  --accent-foreground: oklch(0.48 0.20 260.47);
  --destructive: oklch(0.58 0.22 27.29);
  --border: oklch(0.89 0.02 259.43);
  --input: oklch(0.90 0.01 266.73);
  --ring: oklch(0.48 0.20 260.47);
  --chart-1: oklch(0.48 0.20 260.47);
  --chart-2: oklch(0.56 0.24 260.92);
  --chart-3: oklch(0.40 0.16 259.61);
  --chart-4: oklch(0.43 0.16 259.82);
  --chart-5: oklch(0.29 0.07 261.20);
  --sidebar: oklch(0.97 0 0);
  --sidebar-foreground: oklch(0.21 0.03 263.61);
  --sidebar-primary: oklch(0.48 0.20 260.47);
  --sidebar-primary-foreground: oklch(1.00 0 0);
  --sidebar-accent: oklch(0.95 0.02 260.18);
  --sidebar-accent-foreground: oklch(0.48 0.20 260.47);
  --sidebar-border: oklch(0.93 0.01 261.82);
  --sidebar-ring: oklch(0.48 0.20 260.47);

  --font-sans: Inter, sans-serif;
  --font-serif: Source Serif 4, serif;
  --font-mono: IBM Plex Mono, monospace;

  --radius: 0.375rem;
  
  --shadow-2xs: 0 1px 3px 0px oklch(0.00 0 0 / 0.05);
  --shadow-xs: 0 1px 3px 0px oklch(0.00 0 0 / 0.05);
  --shadow-sm: 0 1px 3px 0px oklch(0.00 0 0 / 0.10), 0 1px 2px -1px oklch(0.00 0 0 / 0.10);
  --shadow: 0 1px 3px 0px oklch(0.00 0 0 / 0.10), 0 1px 2px -1px oklch(0.00 0 0 / 0.10);
  --shadow-md: 0 1px 3px 0px oklch(0.00 0 0 / 0.10), 0 2px 4px -1px oklch(0.00 0 0 / 0.10);
  --shadow-lg: 0 1px 3px 0px oklch(0.00 0 0 / 0.10), 0 4px 6px -1px oklch(0.00 0 0 / 0.10);
  --shadow-xl: 0 1px 3px 0px oklch(0.00 0 0 / 0.10), 0 8px 10px -1px oklch(0.00 0 0 / 0.10);
  --shadow-2xl: 0 1px 3px 0px oklch(0.00 0 0 / 0.25);
  
}

.dark {
  --background: oklch(0.26 0.03 262.67);
  --foreground: oklch(0.93 0.01 261.82);
  --card: oklch(0.35 0.02 255.68);
  --card-foreground: oklch(0.93 0.01 261.82);
  --popover: oklch(0.35 0.02 255.68);
  --popover-foreground: oklch(0.93 0.01 261.82);
  --primary: oklch(0.56 0.24 260.92);
  --primary-foreground: oklch(1.00 0 0);
  --secondary: oklch(0.35 0.04 261.40);
  --secondary-foreground: oklch(0.93 0.01 261.82);
  --muted: oklch(0.30 0.03 260.51);
  --muted-foreground: oklch(0.71 0.02 261.33);
  --accent: oklch(0.33 0.04 264.63);
  --accent-foreground: oklch(0.93 0.01 261.82);
  --destructive: oklch(0.64 0.21 25.39);
  --border: oklch(0.35 0.04 261.40);
  --input: oklch(0.35 0.04 261.40);
  --ring: oklch(0.56 0.24 260.92);
  --chart-1: oklch(0.56 0.24 260.92);
  --chart-2: oklch(0.48 0.20 260.47);
  --chart-3: oklch(0.69 0.17 255.59);
  --chart-4: oklch(0.43 0.16 259.82);
  --chart-5: oklch(0.29 0.07 261.20);
  --sidebar: oklch(0.26 0.03 262.67);
  --sidebar-foreground: oklch(0.93 0.01 261.82);
  --sidebar-primary: oklch(0.56 0.24 260.92);
  --sidebar-primary-foreground: oklch(1.00 0 0);
  --sidebar-accent: oklch(0.33 0.04 264.63);
  --sidebar-accent-foreground: oklch(0.93 0.01 261.82);
  --sidebar-border: oklch(0.35 0.04 261.40);
  --sidebar-ring: oklch(0.56 0.24 260.92);
  
  --shadow-2xs: 0 1px 3px 0px oklch(0.00 0 0 / 0.05);
  --shadow-xs: 0 1px 3px 0px oklch(0.00 0 0 / 0.05);
  --shadow-sm: 0 1px 3px 0px oklch(0.00 0 0 / 0.10), 0 1px 2px -1px oklch(0.00 0 0 / 0.10);
  --shadow: 0 1px 3px 0px oklch(0.00 0 0 / 0.10), 0 1px 2px -1px oklch(0.00 0 0 / 0.10);
  --shadow-md: 0 1px 3px 0px oklch(0.00 0 0 / 0.10), 0 2px 4px -1px oklch(0.00 0 0 / 0.10);
  --shadow-lg: 0 1px 3px 0px oklch(0.00 0 0 / 0.10), 0 4px 6px -1px oklch(0.00 0 0 / 0.10);
  --shadow-xl: 0 1px 3px 0px oklch(0.00 0 0 / 0.10), 0 8px 10px -1px oklch(0.00 0 0 / 0.10);
  --shadow-2xl: 0 1px 3px 0px oklch(0.00 0 0 / 0.25);
}`
  },
  {
    name: Theme.elegantLuxury,
    color: `:root {
  --background: oklch(0.98 0 0);
  --foreground: oklch(0.22 0 0);
  --card: oklch(0.98 0 0);
  --card-foreground: oklch(0.22 0 0);
  --popover: oklch(0.98 0 0);
  --popover-foreground: oklch(0.22 0 0);
  --primary: oklch(0.47 0.15 25.06);
  --primary-foreground: oklch(1.00 0 0);
  --secondary: oklch(0.96 0.04 88.18);
  --secondary-foreground: oklch(0.48 0.10 75.09);
  --muted: oklch(0.94 0.01 48.70);
  --muted-foreground: oklch(0.44 0.01 73.63);
  --accent: oklch(0.96 0.06 94.84);
  --accent-foreground: oklch(0.40 0.13 25.81);
  --destructive: oklch(0.44 0.16 26.84);
  --border: oklch(0.94 0.03 81.74);
  --input: oklch(0.94 0.03 81.74);
  --ring: oklch(0.47 0.15 25.06);
  --chart-1: oklch(0.51 0.19 27.52);
  --chart-2: oklch(0.47 0.15 25.06);
  --chart-3: oklch(0.40 0.13 25.81);
  --chart-4: oklch(0.56 0.15 49.06);
  --chart-5: oklch(0.47 0.12 46.52);
  --sidebar: oklch(0.94 0.01 48.70);
  --sidebar-foreground: oklch(0.22 0 0);
  --sidebar-primary: oklch(0.47 0.15 25.06);
  --sidebar-primary-foreground: oklch(1.00 0 0);
  --sidebar-accent: oklch(0.96 0.06 94.84);
  --sidebar-accent-foreground: oklch(0.40 0.13 25.81);
  --sidebar-border: oklch(0.94 0.03 81.74);
  --sidebar-ring: oklch(0.47 0.15 25.06);

  --font-sans: Poppins, sans-serif;
  --font-serif: Libre Baskerville, serif;
  --font-mono: IBM Plex Mono, monospace;

  --radius: 0.375rem;
  
  --shadow-2xs: 1px 1px 16px -2px oklch(0.28 0.09 24.83 / 0.06);
  --shadow-xs: 1px 1px 16px -2px oklch(0.28 0.09 24.83 / 0.06);
  --shadow-sm: 1px 1px 16px -2px oklch(0.28 0.09 24.83 / 0.12), 1px 1px 2px -3px oklch(0.28 0.09 24.83 / 0.12);
  --shadow: 1px 1px 16px -2px oklch(0.28 0.09 24.83 / 0.12), 1px 1px 2px -3px oklch(0.28 0.09 24.83 / 0.12);
  --shadow-md: 1px 1px 16px -2px oklch(0.28 0.09 24.83 / 0.12), 1px 2px 4px -3px oklch(0.28 0.09 24.83 / 0.12);
  --shadow-lg: 1px 1px 16px -2px oklch(0.28 0.09 24.83 / 0.12), 1px 4px 6px -3px oklch(0.28 0.09 24.83 / 0.12);
  --shadow-xl: 1px 1px 16px -2px oklch(0.28 0.09 24.83 / 0.12), 1px 8px 10px -3px oklch(0.28 0.09 24.83 / 0.12);
  --shadow-2xl: 1px 1px 16px -2px oklch(0.28 0.09 24.83 / 0.30);
  
}

.dark {
  --background: oklch(0.22 0.01 52.96);
  --foreground: oklch(0.97 0 0);
  --card: oklch(0.27 0.01 39.35);
  --card-foreground: oklch(0.97 0 0);
  --popover: oklch(0.27 0.01 39.35);
  --popover-foreground: oklch(0.97 0 0);
  --primary: oklch(0.51 0.19 27.52);
  --primary-foreground: oklch(0.98 0 0);
  --secondary: oklch(0.47 0.12 46.52);
  --secondary-foreground: oklch(0.96 0.06 94.84);
  --muted: oklch(0.27 0.01 39.35);
  --muted-foreground: oklch(0.87 0 0);
  --accent: oklch(0.56 0.15 49.06);
  --accent-foreground: oklch(0.96 0.06 94.84);
  --destructive: oklch(0.64 0.21 25.39);
  --border: oklch(0.37 0.01 73.58);
  --input: oklch(0.37 0.01 73.58);
  --ring: oklch(0.51 0.19 27.52);
  --chart-1: oklch(0.71 0.17 21.96);
  --chart-2: oklch(0.64 0.21 25.39);
  --chart-3: oklch(0.58 0.22 27.29);
  --chart-4: oklch(0.84 0.16 84.06);
  --chart-5: oklch(0.77 0.16 69.82);
  --sidebar: oklch(0.22 0.01 52.96);
  --sidebar-foreground: oklch(0.97 0 0);
  --sidebar-primary: oklch(0.51 0.19 27.52);
  --sidebar-primary-foreground: oklch(0.98 0 0);
  --sidebar-accent: oklch(0.56 0.15 49.06);
  --sidebar-accent-foreground: oklch(0.96 0.06 94.84);
  --sidebar-border: oklch(0.37 0.01 73.58);
  --sidebar-ring: oklch(0.51 0.19 27.52);
  
  --shadow-2xs: 0 1px 3px 0px oklch(0.00 0 0 / 0.05);
  --shadow-xs: 0 1px 3px 0px oklch(0.00 0 0 / 0.05);
  --shadow-sm: 0 1px 3px 0px oklch(0.00 0 0 / 0.10), 0 1px 2px -1px oklch(0.00 0 0 / 0.10);
  --shadow: 0 1px 3px 0px oklch(0.00 0 0 / 0.10), 0 1px 2px -1px oklch(0.00 0 0 / 0.10);
  --shadow-md: 0 1px 3px 0px oklch(0.00 0 0 / 0.10), 0 2px 4px -1px oklch(0.00 0 0 / 0.10);
  --shadow-lg: 0 1px 3px 0px oklch(0.00 0 0 / 0.10), 0 4px 6px -1px oklch(0.00 0 0 / 0.10);
  --shadow-xl: 0 1px 3px 0px oklch(0.00 0 0 / 0.10), 0 8px 10px -1px oklch(0.00 0 0 / 0.10);
  --shadow-2xl: 0 1px 3px 0px oklch(0.00 0 0 / 0.25);
}`
  },
  {
    name: Theme.ghibli,
    color: `:root {
  --background: oklch(0.91 0.05 82.78);
  --foreground: oklch(0.41 0.08 78.86);
  --card: oklch(0.92 0.04 84.56);
  --card-foreground: oklch(0.41 0.08 74.04);
  --popover: oklch(0.92 0.04 84.56);
  --popover-foreground: oklch(0.41 0.08 74.04);
  --primary: oklch(0.71 0.10 111.96);
  --primary-foreground: oklch(0.98 0.01 2.18);
  --secondary: oklch(0.88 0.05 83.32);
  --secondary-foreground: oklch(0.51 0.08 78.21);
  --muted: oklch(0.86 0.06 82.94);
  --muted-foreground: oklch(0.51 0.08 74.78);
  --accent: oklch(0.86 0.05 85.12);
  --accent-foreground: oklch(0.26 0.02 356.72);
  --destructive: oklch(0.63 0.24 29.21);
  --border: oklch(0.74 0.06 79.64);
  --input: oklch(0.74 0.06 79.64);
  --ring: oklch(0.51 0.08 74.78);
  --chart-1: oklch(0.66 0.19 41.68);
  --chart-2: oklch(0.70 0.12 183.58);
  --chart-3: oklch(0.48 0.08 211.35);
  --chart-4: oklch(0.84 0.17 84.99);
  --chart-5: oklch(0.74 0.17 60.02);
  --sidebar: oklch(0.87 0.06 84.46);
  --sidebar-foreground: oklch(0.41 0.08 78.86);
  --sidebar-primary: oklch(0.26 0.02 356.72);
  --sidebar-primary-foreground: oklch(0.98 0.01 2.18);
  --sidebar-accent: oklch(0.83 0.06 84.44);
  --sidebar-accent-foreground: oklch(0.26 0.02 356.72);
  --sidebar-border: oklch(0.91 0 0);
  --sidebar-ring: oklch(0.71 0 0);

  --font-sans: Nunito, sans-serif;
  --font-serif: PT Serif, serif;
  --font-mono: JetBrains Mono, monospace;

  --radius: 0.625rem;
  
  --shadow-2xs: 0 1px 3px 0px oklch(0.00 0 0 / 0.05);
  --shadow-xs: 0 1px 3px 0px oklch(0.00 0 0 / 0.05);
  --shadow-sm: 0 1px 3px 0px oklch(0.00 0 0 / 0.10), 0 1px 2px -1px oklch(0.00 0 0 / 0.10);
  --shadow: 0 1px 3px 0px oklch(0.00 0 0 / 0.10), 0 1px 2px -1px oklch(0.00 0 0 / 0.10);
  --shadow-md: 0 1px 3px 0px oklch(0.00 0 0 / 0.10), 0 2px 4px -1px oklch(0.00 0 0 / 0.10);
  --shadow-lg: 0 1px 3px 0px oklch(0.00 0 0 / 0.10), 0 4px 6px -1px oklch(0.00 0 0 / 0.10);
  --shadow-xl: 0 1px 3px 0px oklch(0.00 0 0 / 0.10), 0 8px 10px -1px oklch(0.00 0 0 / 0.10);
  --shadow-2xl: 0 1px 3px 0px oklch(0.00 0 0 / 0.25);
  
}

.dark {
  --background: oklch(0.20 0.01 52.89);
  --foreground: oklch(0.88 0.05 79.11);
  --card: oklch(0.25 0.01 48.28);
  --card-foreground: oklch(0.88 0.05 79.11);
  --popover: oklch(0.25 0.01 48.28);
  --popover-foreground: oklch(0.88 0.05 79.11);
  --primary: oklch(0.64 0.05 114.58);
  --primary-foreground: oklch(0.98 0.01 2.18);
  --secondary: oklch(0.33 0.02 60.70);
  --secondary-foreground: oklch(0.88 0.05 83.32);
  --muted: oklch(0.27 0.01 39.35);
  --muted-foreground: oklch(0.74 0.06 79.64);
  --accent: oklch(0.33 0.02 60.70);
  --accent-foreground: oklch(0.86 0.05 85.12);
  --destructive: oklch(0.63 0.24 29.21);
  --border: oklch(0.33 0.02 60.70);
  --input: oklch(0.33 0.02 60.70);
  --ring: oklch(0.64 0.05 114.58);
  --chart-1: oklch(0.66 0.19 41.68);
  --chart-2: oklch(0.70 0.12 183.58);
  --chart-3: oklch(0.48 0.08 211.35);
  --chart-4: oklch(0.84 0.17 84.99);
  --chart-5: oklch(0.74 0.17 60.02);
  --sidebar: oklch(0.23 0.01 60.90);
  --sidebar-foreground: oklch(0.88 0.05 79.11);
  --sidebar-primary: oklch(0.64 0.05 114.58);
  --sidebar-primary-foreground: oklch(0.98 0.01 2.18);
  --sidebar-accent: oklch(0.33 0.02 60.70);
  --sidebar-accent-foreground: oklch(0.86 0.05 85.12);
  --sidebar-border: oklch(0.33 0.02 60.70);
  --sidebar-ring: oklch(0.64 0.05 114.58);
  
  --shadow-2xs: 0 1px 3px 0px oklch(0.00 0 0 / 0.05);
  --shadow-xs: 0 1px 3px 0px oklch(0.00 0 0 / 0.05);
  --shadow-sm: 0 1px 3px 0px oklch(0.00 0 0 / 0.10), 0 1px 2px -1px oklch(0.00 0 0 / 0.10);
  --shadow: 0 1px 3px 0px oklch(0.00 0 0 / 0.10), 0 1px 2px -1px oklch(0.00 0 0 / 0.10);
  --shadow-md: 0 1px 3px 0px oklch(0.00 0 0 / 0.10), 0 2px 4px -1px oklch(0.00 0 0 / 0.10);
  --shadow-lg: 0 1px 3px 0px oklch(0.00 0 0 / 0.10), 0 4px 6px -1px oklch(0.00 0 0 / 0.10);
  --shadow-xl: 0 1px 3px 0px oklch(0.00 0 0 / 0.10), 0 8px 10px -1px oklch(0.00 0 0 / 0.10);
  --shadow-2xl: 0 1px 3px 0px oklch(0.00 0 0 / 0.25);
}`
  },
  {
    name: Theme.marshmallow,
    color: `:root {
  --background: oklch(0.97 0.01 267.41);
  --foreground: oklch(0.22 0 0);
  --card: oklch(1.00 0 0);
  --card-foreground: oklch(0.22 0 0);
  --popover: oklch(1.00 0 0);
  --popover-foreground: oklch(0.22 0 0);
  --primary: oklch(0.80 0.14 348.82);
  --primary-foreground: oklch(0 0 0);
  --secondary: oklch(0.94 0.07 97.70);
  --secondary-foreground: oklch(0 0 0);
  --muted: oklch(0.92 0.01 273.42);
  --muted-foreground: oklch(0.34 0 0);
  --accent: oklch(0.83 0.09 247.96);
  --accent-foreground: oklch(0 0 0);
  --destructive: oklch(0.70 0.19 23.04);
  --border: oklch(0.85 0 0);
  --input: oklch(0.85 0 0);
  --ring: oklch(0.83 0.09 247.96);
  --chart-1: oklch(0.80 0.14 348.82);
  --chart-2: oklch(0.77 0.15 306.21);
  --chart-3: oklch(0.83 0.09 247.96);
  --chart-4: oklch(0.88 0.09 66.79);
  --chart-5: oklch(0.94 0.14 130.35);
  --sidebar: oklch(1.00 0 0);
  --sidebar-foreground: oklch(0.22 0 0);
  --sidebar-primary: oklch(0.80 0.14 348.82);
  --sidebar-primary-foreground: oklch(0 0 0);
  --sidebar-accent: oklch(0.83 0.09 247.96);
  --sidebar-accent-foreground: oklch(0 0 0);
  --sidebar-border: oklch(0.85 0 0);
  --sidebar-ring: oklch(0.83 0.09 247.96);

  --font-sans: Gabriela, Geist Fallback, ui-sans-serif;
  --font-serif: Gabriela, Geist Fallback, ui-serif;
  --font-mono: Geist Mono, Geist Mono Fallback, ui-monospace;

  --radius: 0rem;
  
  --shadow-2xs: 0px 2px 5px 0px oklch(0.83 0.09 247.96 / 0.05);
  --shadow-xs: 0px 2px 5px 0px oklch(0.83 0.09 247.96 / 0.05);
  --shadow-sm: 0px 2px 5px 0px oklch(0.83 0.09 247.96 / 0.10), 0px 1px 2px -1px oklch(0.83 0.09 247.96 / 0.10);
  --shadow: 0px 2px 5px 0px oklch(0.83 0.09 247.96 / 0.10), 0px 1px 2px -1px oklch(0.83 0.09 247.96 / 0.10);
  --shadow-md: 0px 2px 5px 0px oklch(0.83 0.09 247.96 / 0.10), 0px 2px 4px -1px oklch(0.83 0.09 247.96 / 0.10);
  --shadow-lg: 0px 2px 5px 0px oklch(0.83 0.09 247.96 / 0.10), 0px 4px 6px -1px oklch(0.83 0.09 247.96 / 0.10);
  --shadow-xl: 0px 2px 5px 0px oklch(0.83 0.09 247.96 / 0.10), 0px 8px 10px -1px oklch(0.83 0.09 247.96 / 0.10);
  --shadow-2xl: 0px 2px 5px 0px oklch(0.83 0.09 247.96 / 0.25);
  
}

.dark {
  --background: oklch(0.22 0 0);
  --foreground: oklch(0.97 0.01 267.41);
  --card: oklch(0.29 0 0);
  --card-foreground: oklch(0.97 0.01 267.41);
  --popover: oklch(0.29 0 0);
  --popover-foreground: oklch(0.97 0.01 267.41);
  --primary: oklch(0.80 0.14 348.82);
  --primary-foreground: oklch(0.22 0 0);
  --secondary: oklch(0.77 0.15 306.21);
  --secondary-foreground: oklch(0.22 0 0);
  --muted: oklch(0.32 0 0);
  --muted-foreground: oklch(0.85 0 0);
  --accent: oklch(0.83 0.09 247.96);
  --accent-foreground: oklch(0.22 0 0);
  --destructive: oklch(0.70 0.19 23.04);
  --border: oklch(0.39 0 0);
  --input: oklch(0.39 0 0);
  --ring: oklch(0.83 0.09 247.96);
  --chart-1: oklch(0.80 0.14 348.82);
  --chart-2: oklch(0.77 0.15 306.21);
  --chart-3: oklch(0.83 0.09 247.96);
  --chart-4: oklch(0.88 0.09 66.79);
  --chart-5: oklch(0.94 0.14 130.35);
  --sidebar: oklch(0.29 0 0);
  --sidebar-foreground: oklch(0.97 0.01 267.41);
  --sidebar-primary: oklch(0.80 0.14 348.82);
  --sidebar-primary-foreground: oklch(0.22 0 0);
  --sidebar-accent: oklch(0.83 0.09 247.96);
  --sidebar-accent-foreground: oklch(0.22 0 0);
  --sidebar-border: oklch(0.39 0 0);
  --sidebar-ring: oklch(0.83 0.09 247.96);
  
  --shadow-2xs: 0px 1px 2px 0px oklch(0.83 0.09 247.96 / 0.05);
  --shadow-xs: 0px 1px 2px 0px oklch(0.83 0.09 247.96 / 0.05);
  --shadow-sm: 0px 1px 2px 0px oklch(0.83 0.09 247.96 / 0.10), 0px 1px 2px -1px oklch(0.83 0.09 247.96 / 0.10);
  --shadow: 0px 1px 2px 0px oklch(0.83 0.09 247.96 / 0.10), 0px 1px 2px -1px oklch(0.83 0.09 247.96 / 0.10);
  --shadow-md: 0px 1px 2px 0px oklch(0.83 0.09 247.96 / 0.10), 0px 2px 4px -1px oklch(0.83 0.09 247.96 / 0.10);
  --shadow-lg: 0px 1px 2px 0px oklch(0.83 0.09 247.96 / 0.10), 0px 4px 6px -1px oklch(0.83 0.09 247.96 / 0.10);
  --shadow-xl: 0px 1px 2px 0px oklch(0.83 0.09 247.96 / 0.10), 0px 8px 10px -1px oklch(0.83 0.09 247.96 / 0.10);
  --shadow-2xl: 0px 1px 2px 0px oklch(0.83 0.09 247.96 / 0.25);
}`
  },
  {
    name: Theme.doom64,
    color: `
:root {
  --background: oklch(0.8452 0 0);
  --foreground: oklch(0.2393 0 0);
  --card: oklch(0.7572 0 0);
  --card-foreground: oklch(0.2393 0 0);
  --popover: oklch(0.7572 0 0);
  --popover-foreground: oklch(0.2393 0 0);
  --primary: oklch(0.5016 0.1887 27.4816);
  --primary-foreground: oklch(1.0000 0 0);
  --secondary: oklch(0.4955 0.0896 126.1858);
  --secondary-foreground: oklch(1.0000 0 0);
  --muted: oklch(0.7826 0 0);
  --muted-foreground: oklch(0.4091 0 0);
  --accent: oklch(0.5880 0.0993 245.7394);
  --accent-foreground: oklch(1.0000 0 0);
  --destructive: oklch(0.7076 0.1975 46.4558);
  --destructive-foreground: oklch(0 0 0);
  --border: oklch(0.4313 0 0);
  --input: oklch(0.4313 0 0);
  --ring: oklch(0.5016 0.1887 27.4816);
  --chart-1: oklch(0.5016 0.1887 27.4816);
  --chart-2: oklch(0.4955 0.0896 126.1858);
  --chart-3: oklch(0.5880 0.0993 245.7394);
  --chart-4: oklch(0.7076 0.1975 46.4558);
  --chart-5: oklch(0.5656 0.0431 40.4319);
  --sidebar: oklch(0.7572 0 0);
  --sidebar-foreground: oklch(0.2393 0 0);
  --sidebar-primary: oklch(0.5016 0.1887 27.4816);
  --sidebar-primary-foreground: oklch(1.0000 0 0);
  --sidebar-accent: oklch(0.5880 0.0993 245.7394);
  --sidebar-accent-foreground: oklch(1.0000 0 0);
  --sidebar-border: oklch(0.4313 0 0);
  --sidebar-ring: oklch(0.5016 0.1887 27.4816);
  --font-sans: "Oxanium", sans-serif;
  --font-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
  --font-mono: "Source Code Pro", monospace;
  --radius: 0px;
  --shadow-x: 0px;
  --shadow-y: 2px;
  --shadow-blur: 4px;
  --shadow-spread: 0px;
  --shadow-opacity: 0.4;
  --shadow-color: hsl(0 0% 0%);
  --shadow-2xs: 0px 2px 4px 0px hsl(0 0% 0% / 0.20);
  --shadow-xs: 0px 2px 4px 0px hsl(0 0% 0% / 0.20);
  --shadow-sm: 0px 2px 4px 0px hsl(0 0% 0% / 0.40), 0px 1px 2px -1px hsl(0 0% 0% / 0.40);
  --shadow: 0px 2px 4px 0px hsl(0 0% 0% / 0.40), 0px 1px 2px -1px hsl(0 0% 0% / 0.40);
  --shadow-md: 0px 2px 4px 0px hsl(0 0% 0% / 0.40), 0px 2px 4px -1px hsl(0 0% 0% / 0.40);
  --shadow-lg: 0px 2px 4px 0px hsl(0 0% 0% / 0.40), 0px 4px 6px -1px hsl(0 0% 0% / 0.40);
  --shadow-xl: 0px 2px 4px 0px hsl(0 0% 0% / 0.40), 0px 8px 10px -1px hsl(0 0% 0% / 0.40);
  --shadow-2xl: 0px 2px 4px 0px hsl(0 0% 0% / 1.00);
  --tracking-normal: 0em;
  --spacing: 0.25rem;
}

.dark {
  --background: oklch(0.2178 0 0);
  --foreground: oklch(0.9067 0 0);
  --card: oklch(0.2850 0 0);
  --card-foreground: oklch(0.9067 0 0);
  --popover: oklch(0.2850 0 0);
  --popover-foreground: oklch(0.9067 0 0);
  --primary: oklch(0.6083 0.2090 27.0276);
  --primary-foreground: oklch(1.0000 0 0);
  --secondary: oklch(0.6423 0.1467 133.0145);
  --secondary-foreground: oklch(0 0 0);
  --muted: oklch(0.2645 0 0);
  --muted-foreground: oklch(0.7058 0 0);
  --accent: oklch(0.7482 0.1235 244.7492);
  --accent-foreground: oklch(0 0 0);
  --destructive: oklch(0.7839 0.1719 68.0943);
  --destructive-foreground: oklch(0 0 0);
  --border: oklch(0.4091 0 0);
  --input: oklch(0.4091 0 0);
  --ring: oklch(0.6083 0.2090 27.0276);
  --chart-1: oklch(0.6083 0.2090 27.0276);
  --chart-2: oklch(0.6423 0.1467 133.0145);
  --chart-3: oklch(0.7482 0.1235 244.7492);
  --chart-4: oklch(0.7839 0.1719 68.0943);
  --chart-5: oklch(0.6471 0.0334 40.7963);
  --sidebar: oklch(0.1913 0 0);
  --sidebar-foreground: oklch(0.9067 0 0);
  --sidebar-primary: oklch(0.6083 0.2090 27.0276);
  --sidebar-primary-foreground: oklch(1.0000 0 0);
  --sidebar-accent: oklch(0.7482 0.1235 244.7492);
  --sidebar-accent-foreground: oklch(0 0 0);
  --sidebar-border: oklch(0.4091 0 0);
  --sidebar-ring: oklch(0.6083 0.2090 27.0276);
  --font-sans: "Oxanium", sans-serif;
  --font-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
  --font-mono: "Source Code Pro", monospace;
  --radius: 0px;
  --shadow-x: 0px;
  --shadow-y: 2px;
  --shadow-blur: 5px;
  --shadow-spread: 0px;
  --shadow-opacity: 0.6;
  --shadow-color: hsl(0 0% 0%);
  --shadow-2xs: 0px 2px 5px 0px hsl(0 0% 0% / 0.30);
  --shadow-xs: 0px 2px 5px 0px hsl(0 0% 0% / 0.30);
  --shadow-sm: 0px 2px 5px 0px hsl(0 0% 0% / 0.60), 0px 1px 2px -1px hsl(0 0% 0% / 0.60);
  --shadow: 0px 2px 5px 0px hsl(0 0% 0% / 0.60), 0px 1px 2px -1px hsl(0 0% 0% / 0.60);
  --shadow-md: 0px 2px 5px 0px hsl(0 0% 0% / 0.60), 0px 2px 4px -1px hsl(0 0% 0% / 0.60);
  --shadow-lg: 0px 2px 5px 0px hsl(0 0% 0% / 0.60), 0px 4px 6px -1px hsl(0 0% 0% / 0.60);
  --shadow-xl: 0px 2px 5px 0px hsl(0 0% 0% / 0.60), 0px 8px 10px -1px hsl(0 0% 0% / 0.60);
  --shadow-2xl: 0px 2px 5px 0px hsl(0 0% 0% / 1.50);
}`
  },
  {
    name: Theme.bubblegum,
    color: `
:root {
  --background: oklch(0.9399 0.0203 345.6985);
  --foreground: oklch(0.4712 0 0);
  --card: oklch(0.9498 0.0500 86.8891);
  --card-foreground: oklch(0.4712 0 0);
  --popover: oklch(1.0000 0 0);
  --popover-foreground: oklch(0.4712 0 0);
  --primary: oklch(0.6209 0.1801 348.1385);
  --primary-foreground: oklch(1.0000 0 0);
  --secondary: oklch(0.8095 0.0694 198.1863);
  --secondary-foreground: oklch(0.3211 0 0);
  --muted: oklch(0.8800 0.0504 212.0952);
  --muted-foreground: oklch(0.5795 0 0);
  --accent: oklch(0.9195 0.0801 87.6670);
  --accent-foreground: oklch(0.3211 0 0);
  --destructive: oklch(0.7091 0.1697 21.9551);
  --destructive-foreground: oklch(1.0000 0 0);
  --border: oklch(0.6209 0.1801 348.1385);
  --input: oklch(0.9189 0 0);
  --ring: oklch(0.7002 0.1597 350.7532);
  --chart-1: oklch(0.7002 0.1597 350.7532);
  --chart-2: oklch(0.8189 0.0799 212.0892);
  --chart-3: oklch(0.9195 0.0801 87.6670);
  --chart-4: oklch(0.7998 0.1110 348.1791);
  --chart-5: oklch(0.6197 0.1899 353.9091);
  --sidebar: oklch(0.9140 0.0424 343.0913);
  --sidebar-foreground: oklch(0.3211 0 0);
  --sidebar-primary: oklch(0.6559 0.2118 354.3084);
  --sidebar-primary-foreground: oklch(1.0000 0 0);
  --sidebar-accent: oklch(0.8228 0.1095 346.0184);
  --sidebar-accent-foreground: oklch(0.3211 0 0);
  --sidebar-border: oklch(0.9464 0.0327 307.1745);
  --sidebar-ring: oklch(0.6559 0.2118 354.3084);
  --font-sans: Poppins, sans-serif;
  --font-serif: Lora, serif;
  --font-mono: Fira Code, monospace;
  --radius: 0.4rem;
  --shadow-x: 3px;
  --shadow-y: 3px;
  --shadow-blur: 0px;
  --shadow-spread: 0px;
  --shadow-opacity: 1.0;
  --shadow-color: hsl(325.78 58.18% 56.86% / 0.5);
  --shadow-2xs: 3px 3px 0px 0px hsl(325.7800 58.1800% 56.8600% / 0.50);
  --shadow-xs: 3px 3px 0px 0px hsl(325.7800 58.1800% 56.8600% / 0.50);
  --shadow-sm: 3px 3px 0px 0px hsl(325.7800 58.1800% 56.8600% / 1.00), 3px 1px 2px -1px hsl(325.7800 58.1800% 56.8600% / 1.00);
  --shadow: 3px 3px 0px 0px hsl(325.7800 58.1800% 56.8600% / 1.00), 3px 1px 2px -1px hsl(325.7800 58.1800% 56.8600% / 1.00);
  --shadow-md: 3px 3px 0px 0px hsl(325.7800 58.1800% 56.8600% / 1.00), 3px 2px 4px -1px hsl(325.7800 58.1800% 56.8600% / 1.00);
  --shadow-lg: 3px 3px 0px 0px hsl(325.7800 58.1800% 56.8600% / 1.00), 3px 4px 6px -1px hsl(325.7800 58.1800% 56.8600% / 1.00);
  --shadow-xl: 3px 3px 0px 0px hsl(325.7800 58.1800% 56.8600% / 1.00), 3px 8px 10px -1px hsl(325.7800 58.1800% 56.8600% / 1.00);
  --shadow-2xl: 3px 3px 0px 0px hsl(325.7800 58.1800% 56.8600% / 2.50);
  --tracking-normal: 0em;
  --spacing: 0.25rem;
}

.dark {
  --background: oklch(0.2497 0.0305 234.1628);
  --foreground: oklch(0.9306 0.0197 349.0785);
  --card: oklch(0.2902 0.0299 233.5352);
  --card-foreground: oklch(0.9306 0.0197 349.0785);
  --popover: oklch(0.2902 0.0299 233.5352);
  --popover-foreground: oklch(0.9306 0.0197 349.0785);
  --primary: oklch(0.9195 0.0801 87.6670);
  --primary-foreground: oklch(0.2497 0.0305 234.1628);
  --secondary: oklch(0.7794 0.0803 4.1330);
  --secondary-foreground: oklch(0.2497 0.0305 234.1628);
  --muted: oklch(0.2713 0.0086 255.5780);
  --muted-foreground: oklch(0.7794 0.0803 4.1330);
  --accent: oklch(0.6699 0.0988 356.9762);
  --accent-foreground: oklch(0.9306 0.0197 349.0785);
  --destructive: oklch(0.6702 0.1806 350.3599);
  --destructive-foreground: oklch(0.2497 0.0305 234.1628);
  --border: oklch(0.3907 0.0399 242.2181);
  --input: oklch(0.3093 0.0305 232.0027);
  --ring: oklch(0.6998 0.0896 201.8672);
  --chart-1: oklch(0.6998 0.0896 201.8672);
  --chart-2: oklch(0.7794 0.0803 4.1330);
  --chart-3: oklch(0.6699 0.0988 356.9762);
  --chart-4: oklch(0.4408 0.0702 217.0848);
  --chart-5: oklch(0.2713 0.0086 255.5780);
  --sidebar: oklch(0.2303 0.0270 235.9743);
  --sidebar-foreground: oklch(0.9670 0.0029 264.5419);
  --sidebar-primary: oklch(0.6559 0.2118 354.3084);
  --sidebar-primary-foreground: oklch(1.0000 0 0);
  --sidebar-accent: oklch(0.8228 0.1095 346.0184);
  --sidebar-accent-foreground: oklch(0.2781 0.0296 256.8480);
  --sidebar-border: oklch(0.3729 0.0306 259.7328);
  --sidebar-ring: oklch(0.6559 0.2118 354.3084);
  --font-sans: Poppins, sans-serif;
  --font-serif: Lora, serif;
  --font-mono: Fira Code, monospace;
  --radius: 0.4rem;
  --shadow-x: 3px;
  --shadow-y: 3px;
  --shadow-blur: 0px;
  --shadow-spread: 0px;
  --shadow-opacity: 1.0;
  --shadow-color: #324859;
  --shadow-2xs: 3px 3px 0px 0px hsl(206.1538 28.0576% 27.2549% / 0.50);
  --shadow-xs: 3px 3px 0px 0px hsl(206.1538 28.0576% 27.2549% / 0.50);
  --shadow-sm: 3px 3px 0px 0px hsl(206.1538 28.0576% 27.2549% / 1.00), 3px 1px 2px -1px hsl(206.1538 28.0576% 27.2549% / 1.00);
  --shadow: 3px 3px 0px 0px hsl(206.1538 28.0576% 27.2549% / 1.00), 3px 1px 2px -1px hsl(206.1538 28.0576% 27.2549% / 1.00);
  --shadow-md: 3px 3px 0px 0px hsl(206.1538 28.0576% 27.2549% / 1.00), 3px 2px 4px -1px hsl(206.1538 28.0576% 27.2549% / 1.00);
  --shadow-lg: 3px 3px 0px 0px hsl(206.1538 28.0576% 27.2549% / 1.00), 3px 4px 6px -1px hsl(206.1538 28.0576% 27.2549% / 1.00);
  --shadow-xl: 3px 3px 0px 0px hsl(206.1538 28.0576% 27.2549% / 1.00), 3px 8px 10px -1px hsl(206.1538 28.0576% 27.2549% / 1.00);
  --shadow-2xl: 3px 3px 0px 0px hsl(206.1538 28.0576% 27.2549% / 2.50);
}`
  },
  {
    name: Theme.softPop,
    color: `

:root {
  --background: oklch(0.9789 0.0082 121.6272);
  --foreground: oklch(0 0 0);
  --card: oklch(1.0000 0 0);
  --card-foreground: oklch(0 0 0);
  --popover: oklch(1.0000 0 0);
  --popover-foreground: oklch(0 0 0);
  --primary: oklch(0.5106 0.2301 276.9656);
  --primary-foreground: oklch(1.0000 0 0);
  --secondary: oklch(0.7038 0.1230 182.5025);
  --secondary-foreground: oklch(1.0000 0 0);
  --muted: oklch(0.9551 0 0);
  --muted-foreground: oklch(0.3211 0 0);
  --accent: oklch(0.7686 0.1647 70.0804);
  --accent-foreground: oklch(0 0 0);
  --destructive: oklch(0.6368 0.2078 25.3313);
  --destructive-foreground: oklch(1.0000 0 0);
  --border: oklch(0 0 0);
  --input: oklch(0.5555 0 0);
  --ring: oklch(0.7853 0.1041 274.7134);
  --chart-1: oklch(0.5106 0.2301 276.9656);
  --chart-2: oklch(0.7038 0.1230 182.5025);
  --chart-3: oklch(0.7686 0.1647 70.0804);
  --chart-4: oklch(0.6559 0.2118 354.3084);
  --chart-5: oklch(0.7227 0.1920 149.5793);
  --sidebar: oklch(0.9789 0.0082 121.6272);
  --sidebar-foreground: oklch(0 0 0);
  --sidebar-primary: oklch(0.5106 0.2301 276.9656);
  --sidebar-primary-foreground: oklch(1.0000 0 0);
  --sidebar-accent: oklch(0.7686 0.1647 70.0804);
  --sidebar-accent-foreground: oklch(0 0 0);
  --sidebar-border: oklch(0 0 0);
  --sidebar-ring: oklch(0.7853 0.1041 274.7134);
  --font-sans: DM Sans, sans-serif;
  --font-serif: DM Sans, sans-serif;
  --font-mono: Space Mono, monospace;
  --radius: 1rem;
  --shadow-x: 0px;
  --shadow-y: 0px;
  --shadow-blur: 0px;
  --shadow-spread: 0px;
  --shadow-opacity: 0.05;
  --shadow-color: #1a1a1a;
  --shadow-2xs: 0px 0px 0px 0px hsl(0 0% 10.1961% / 0.03);
  --shadow-xs: 0px 0px 0px 0px hsl(0 0% 10.1961% / 0.03);
  --shadow-sm: 0px 0px 0px 0px hsl(0 0% 10.1961% / 0.05), 0px 1px 2px -1px hsl(0 0% 10.1961% / 0.05);
  --shadow: 0px 0px 0px 0px hsl(0 0% 10.1961% / 0.05), 0px 1px 2px -1px hsl(0 0% 10.1961% / 0.05);
  --shadow-md: 0px 0px 0px 0px hsl(0 0% 10.1961% / 0.05), 0px 2px 4px -1px hsl(0 0% 10.1961% / 0.05);
  --shadow-lg: 0px 0px 0px 0px hsl(0 0% 10.1961% / 0.05), 0px 4px 6px -1px hsl(0 0% 10.1961% / 0.05);
  --shadow-xl: 0px 0px 0px 0px hsl(0 0% 10.1961% / 0.05), 0px 8px 10px -1px hsl(0 0% 10.1961% / 0.05);
  --shadow-2xl: 0px 0px 0px 0px hsl(0 0% 10.1961% / 0.13);
  --tracking-normal: normal;
  --spacing: 0.25rem;
}

.dark {
  --background: oklch(0 0 0);
  --foreground: oklch(1.0000 0 0);
  --card: oklch(0.2455 0.0217 257.2823);
  --card-foreground: oklch(1.0000 0 0);
  --popover: oklch(0.2455 0.0217 257.2823);
  --popover-foreground: oklch(1.0000 0 0);
  --primary: oklch(0.6801 0.1583 276.9349);
  --primary-foreground: oklch(0 0 0);
  --secondary: oklch(0.7845 0.1325 181.9120);
  --secondary-foreground: oklch(0 0 0);
  --muted: oklch(0.3211 0 0);
  --muted-foreground: oklch(0.8452 0 0);
  --accent: oklch(0.8790 0.1534 91.6054);
  --accent-foreground: oklch(0 0 0);
  --destructive: oklch(0.7106 0.1661 22.2162);
  --destructive-foreground: oklch(0 0 0);
  --border: oklch(0.4459 0 0);
  --input: oklch(1.0000 0 0);
  --ring: oklch(0.6801 0.1583 276.9349);
  --chart-1: oklch(0.6801 0.1583 276.9349);
  --chart-2: oklch(0.7845 0.1325 181.9120);
  --chart-3: oklch(0.8790 0.1534 91.6054);
  --chart-4: oklch(0.7253 0.1752 349.7607);
  --chart-5: oklch(0.8003 0.1821 151.7110);
  --sidebar: oklch(0 0 0);
  --sidebar-foreground: oklch(1.0000 0 0);
  --sidebar-primary: oklch(0.6801 0.1583 276.9349);
  --sidebar-primary-foreground: oklch(0 0 0);
  --sidebar-accent: oklch(0.8790 0.1534 91.6054);
  --sidebar-accent-foreground: oklch(0 0 0);
  --sidebar-border: oklch(1.0000 0 0);
  --sidebar-ring: oklch(0.6801 0.1583 276.9349);
  --font-sans: DM Sans, sans-serif;
  --font-serif: DM Sans, sans-serif;
  --font-mono: Space Mono, monospace;
  --radius: 1rem;
  --shadow-x: 0px;
  --shadow-y: 0px;
  --shadow-blur: 0px;
  --shadow-spread: 0px;
  --shadow-opacity: 0.05;
  --shadow-color: #1a1a1a;
  --shadow-2xs: 0px 0px 0px 0px hsl(0 0% 10.1961% / 0.03);
  --shadow-xs: 0px 0px 0px 0px hsl(0 0% 10.1961% / 0.03);
  --shadow-sm: 0px 0px 0px 0px hsl(0 0% 10.1961% / 0.05), 0px 1px 2px -1px hsl(0 0% 10.1961% / 0.05);
  --shadow: 0px 0px 0px 0px hsl(0 0% 10.1961% / 0.05), 0px 1px 2px -1px hsl(0 0% 10.1961% / 0.05);
  --shadow-md: 0px 0px 0px 0px hsl(0 0% 10.1961% / 0.05), 0px 2px 4px -1px hsl(0 0% 10.1961% / 0.05);
  --shadow-lg: 0px 0px 0px 0px hsl(0 0% 10.1961% / 0.05), 0px 4px 6px -1px hsl(0 0% 10.1961% / 0.05);
  --shadow-xl: 0px 0px 0px 0px hsl(0 0% 10.1961% / 0.05), 0px 8px 10px -1px hsl(0 0% 10.1961% / 0.05);
  --shadow-2xl: 0px 0px 0px 0px hsl(0 0% 10.1961% / 0.13);
}`
  },
  {
    name: Theme.notebook,
    color: `

:root {
  --background: oklch(0.9821 0 0);
  --foreground: oklch(0.3485 0 0);
  --card: oklch(1.0000 0 0);
  --card-foreground: oklch(0.3485 0 0);
  --popover: oklch(1.0000 0 0);
  --popover-foreground: oklch(0.3485 0 0);
  --primary: oklch(0.4891 0 0);
  --primary-foreground: oklch(0.9551 0 0);
  --secondary: oklch(0.9006 0 0);
  --secondary-foreground: oklch(0.3485 0 0);
  --muted: oklch(0.9158 0 0);
  --muted-foreground: oklch(0.4313 0 0);
  --accent: oklch(0.9354 0.0456 94.8549);
  --accent-foreground: oklch(0.4015 0.0436 37.9587);
  --destructive: oklch(0.6627 0.0978 20.0041);
  --destructive-foreground: oklch(1.0000 0 0);
  --border: oklch(0.5538 0.0025 17.2320);
  --input: oklch(1.0000 0 0);
  --ring: oklch(0.7058 0 0);
  --chart-1: oklch(0.3211 0 0);
  --chart-2: oklch(0.4495 0 0);
  --chart-3: oklch(0.5693 0 0);
  --chart-4: oklch(0.6830 0 0);
  --chart-5: oklch(0.7921 0 0);
  --sidebar: oklch(0.9551 0 0);
  --sidebar-foreground: oklch(0.3485 0 0);
  --sidebar-primary: oklch(0.4891 0 0);
  --sidebar-primary-foreground: oklch(0.9551 0 0);
  --sidebar-accent: oklch(0.9354 0.0456 94.8549);
  --sidebar-accent-foreground: oklch(0.4015 0.0436 37.9587);
  --sidebar-border: oklch(0.8078 0 0);
  --sidebar-ring: oklch(0.7058 0 0);
  --font-sans: Architects Daughter, sans-serif;
  --font-serif: "Times New Roman", Times, serif;
  --font-mono: "Courier New", Courier, monospace;
  --radius: 0.625rem;
  --shadow-x: 1px;
  --shadow-y: 4px;
  --shadow-blur: 5px;
  --shadow-spread: 0px;
  --shadow-opacity: 0.03;
  --shadow-color: #000000;
  --shadow-2xs: 1px 4px 5px 0px hsl(0 0% 0% / 0.01);
  --shadow-xs: 1px 4px 5px 0px hsl(0 0% 0% / 0.01);
  --shadow-sm: 1px 4px 5px 0px hsl(0 0% 0% / 0.03), 1px 1px 2px -1px hsl(0 0% 0% / 0.03);
  --shadow: 1px 4px 5px 0px hsl(0 0% 0% / 0.03), 1px 1px 2px -1px hsl(0 0% 0% / 0.03);
  --shadow-md: 1px 4px 5px 0px hsl(0 0% 0% / 0.03), 1px 2px 4px -1px hsl(0 0% 0% / 0.03);
  --shadow-lg: 1px 4px 5px 0px hsl(0 0% 0% / 0.03), 1px 4px 6px -1px hsl(0 0% 0% / 0.03);
  --shadow-xl: 1px 4px 5px 0px hsl(0 0% 0% / 0.03), 1px 8px 10px -1px hsl(0 0% 0% / 0.03);
  --shadow-2xl: 1px 4px 5px 0px hsl(0 0% 0% / 0.07);
  --tracking-normal: 0.5px;
  --spacing: 0.25rem;
}

.dark {
  --background: oklch(0.2891 0 0);
  --foreground: oklch(0.8945 0 0);
  --card: oklch(0.3211 0 0);
  --card-foreground: oklch(0.8945 0 0);
  --popover: oklch(0.3211 0 0);
  --popover-foreground: oklch(0.8945 0 0);
  --primary: oklch(0.7572 0 0);
  --primary-foreground: oklch(0.2891 0 0);
  --secondary: oklch(0.4676 0 0);
  --secondary-foreground: oklch(0.8078 0 0);
  --muted: oklch(0.3904 0 0);
  --muted-foreground: oklch(0.7058 0 0);
  --accent: oklch(0.9067 0 0);
  --accent-foreground: oklch(0.3211 0 0);
  --destructive: oklch(0.7915 0.0491 18.2410);
  --destructive-foreground: oklch(0.2891 0 0);
  --border: oklch(0.4276 0 0);
  --input: oklch(0.3211 0 0);
  --ring: oklch(0.8078 0 0);
  --chart-1: oklch(0.9521 0 0);
  --chart-2: oklch(0.8576 0 0);
  --chart-3: oklch(0.7572 0 0);
  --chart-4: oklch(0.6534 0 0);
  --chart-5: oklch(0.5452 0 0);
  --sidebar: oklch(0.2478 0 0);
  --sidebar-foreground: oklch(0.8945 0 0);
  --sidebar-primary: oklch(0.7572 0 0);
  --sidebar-primary-foreground: oklch(0.2478 0 0);
  --sidebar-accent: oklch(0.9067 0 0);
  --sidebar-accent-foreground: oklch(0.3211 0 0);
  --sidebar-border: oklch(0.4276 0 0);
  --sidebar-ring: oklch(0.8078 0 0);
  --font-sans: Architects Daughter, sans-serif;
  --font-serif: Georgia, serif;
  --font-mono: "Fira Code", "Courier New", monospace;
  --radius: 0.625rem;
  --shadow-x: 1px;
  --shadow-y: 4px;
  --shadow-blur: 5px;
  --shadow-spread: 0px;
  --shadow-opacity: 0.03;
  --shadow-color: #000000;
  --shadow-2xs: 1px 4px 5px 0px hsl(0 0% 0% / 0.01);
  --shadow-xs: 1px 4px 5px 0px hsl(0 0% 0% / 0.01);
  --shadow-sm: 1px 4px 5px 0px hsl(0 0% 0% / 0.03), 1px 1px 2px -1px hsl(0 0% 0% / 0.03);
  --shadow: 1px 4px 5px 0px hsl(0 0% 0% / 0.03), 1px 1px 2px -1px hsl(0 0% 0% / 0.03);
  --shadow-md: 1px 4px 5px 0px hsl(0 0% 0% / 0.03), 1px 2px 4px -1px hsl(0 0% 0% / 0.03);
  --shadow-lg: 1px 4px 5px 0px hsl(0 0% 0% / 0.03), 1px 4px 6px -1px hsl(0 0% 0% / 0.03);
  --shadow-xl: 1px 4px 5px 0px hsl(0 0% 0% / 0.03), 1px 8px 10px -1px hsl(0 0% 0% / 0.03);
  --shadow-2xl: 1px 4px 5px 0px hsl(0 0% 0% / 0.07);
}`
  }

];


export const getThemeCode = (theme: Theme) => {
  const found = themes.find(t => t.name === theme);
  if (!found) throw new Error(`Theme "${theme}" not found`);
  return found.color;
};