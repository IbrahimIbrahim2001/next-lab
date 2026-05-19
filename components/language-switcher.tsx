"use client";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname, useRouter } from "@/i18n/navigation";
import { IconWorld } from "@tabler/icons-react";
import { useLocale } from "next-intl";
import { Button } from "./ui/button";
const LANGUAGES = [
    { value: "ar", label: "العربية" },
    { value: "en", label: "English" },
];

export function LanguageSwitcher() {
    const router = useRouter();
    const pathname = usePathname();
    const locale = useLocale();

    const handleChange = (nextLocale: string) => {
        router.push(pathname, { locale: nextLocale });
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger render={
                <Button
                    variant="outline"
                    size="icon"
                    className="bg-white text-black hover:bg-gray-100"
                >
                    <IconWorld className="size-[1.2rem] dark:text-white" />
                </Button>
            } />

            <DropdownMenuContent align="end">
                <DropdownMenuRadioGroup
                    value={locale}
                    onValueChange={handleChange}
                >
                    {LANGUAGES.map((lang) => (
                        <DropdownMenuRadioItem
                            key={lang.value}
                            value={lang.value}
                        >
                            {lang.label}
                        </DropdownMenuRadioItem>
                    ))}
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
