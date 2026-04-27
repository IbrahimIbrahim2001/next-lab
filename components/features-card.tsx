import { Feature } from "@/lib/types";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";

interface FeaturesCardProps {
    feature: Feature
}

export default function FeaturesCard({ feature }: FeaturesCardProps) {
    return (
        <Link
            href={feature.href}
            className="group block w-full rounded-xl border bg-card p-4 transition-all hover:shadow-md hover:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/40"
        >
            <div className="flex items-start justify-between">
                <div className="space-y-1">
                    <p className="text-base font-semibold text-foreground">
                        {feature.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                        {feature.description}
                    </p>
                </div>

                <IconArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
            </div>
        </Link>
    )
}
