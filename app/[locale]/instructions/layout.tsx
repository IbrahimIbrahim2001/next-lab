import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { IconArrowLeft } from "@tabler/icons-react";
import { useLocale, useTranslations } from "next-intl";

export default function InstructionsLayout({
    children
}: {
    children: React.ReactNode
}) {
    const locale = useLocale();
    const t = useTranslations("instructionLayout")
    return (
        <main className="w-full  max-w-3xl mx-auto">
            {children}


            <div className="space-y-4 py-4">
                <div className="rounded-lg border p-4 text-sm text-muted-foreground">
                    <p>
                        {t("description")}
                    </p>
                </div>

                {/* Back link */}
                <Link
                    href="/"
                    className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-all duration-300"
                >
                    <IconArrowLeft direction={locale === "ar" ? "right" : "left"} className={cn("size-4", locale === "ar" ? "rotate-180 ml-1" : "mr-1")} />
                    {t("back")}
                </Link>
            </div>
        </main>
    )
}