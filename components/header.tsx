"use client";
import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/mode-toggle"
import { ThemeSelector } from "@/components/theme-selector"

export function Header() {
    const scrolled = useScroll(10);

    return (
        <header
            className={cn(
                "sticky top-0 z-50 mx-auto w-full max-w-4xl border-transparent border-b md:rounded-md md:border md:transition-all md:ease-out",
                {
                    "border-border bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/50 md:top-2 md:max-w-3xl md:shadow":
                        scrolled,
                }
            )}
        >
            <nav
                className={cn(
                    "flex h-14 w-full items-center justify-between px-4 md:h-12 md:transition-all md:ease-out",
                    {
                        "md:px-2": scrolled,
                    }
                )}
            >
                <a
                    className="rounded-md p-2 hover:bg-muted dark:hover:bg-muted/50"
                    href="#"
                >
                    {/* <Logo className="h-4" /> */} Logo
                </a>
                <div className="hidden items-center gap-2 md:flex">
                    <ModeToggle />
                    <ThemeSelector />
                    {/* Search input */}
                </div>
            </nav>
        </header>
    );
}