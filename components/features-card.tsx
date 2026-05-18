"use client";

import { Link } from "@/i18n/navigation";
import { Feature } from "@/lib/types";
import { cn } from "@/lib/utils";
import { IconArrowRight } from "@tabler/icons-react";
import { useLocale, useTranslations } from "next-intl";


interface FeaturesCardProps {
    feature: Feature
}

export default function FeaturesCard({ feature }: FeaturesCardProps) {
    const locale = useLocale();
    const t = useTranslations();
    return (
        <Link
            href={feature.href}
            className="group block w-full rounded-xl border bg-card p-4 transition-all hover:shadow-md hover:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/40"
        >
            <div className="flex items-start justify-between">
                <div className="space-y-1">
                    <p className="text-base font-semibold text-foreground">
                        {t(feature.titleKey)}
                    </p>
                    <p className="text-sm text-muted-foreground">
                        {t(feature.descriptionKey)}
                    </p>
                </div>
                <IconArrowRight className={cn("size-4 text-muted-foreground transition-transform group-hover:translate-x-1", locale === "ar" && "rotate-180")} direction={locale === "ar" ? "right" : "left"} />
            </div>
        </Link>
    )
}
