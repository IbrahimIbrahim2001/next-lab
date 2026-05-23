import FeaturesCard from "@/components/features-card";
import { features } from "@/lib/constants";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("homePage");
  return (
    <div className="flex p-6">
      <div className="flex min-w-0 flex-col gap-4 space-y-2 text-sm leading-loose">
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold">
            {t("title")}
          </h1>
          <p className="text-md text-muted-foreground">
            {t("description")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-4">
          {features.map((feature) => (
            <FeaturesCard key={feature.titleKey} feature={feature} />
          ))}
        </div>
      </div>
    </div>
  )
}