"use client";
import { useLocale } from "next-intl";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { IconGlobe } from "@tabler/icons-react";
import { usePathname, useRouter } from "@/i18n/navigation";
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
                    variant="ghost"
                    size="icon"
                    className="bg-white text-black hover:bg-gray-100"
                >
                    <IconGlobe className="size-5" />
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
