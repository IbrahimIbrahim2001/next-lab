import FeaturesCard from "@/components/features-card";
import { features } from "@/lib/constants";

export default function Page() {
  return (
    <div className="flex p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 space-y-2 text-sm leading-loose">
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold">
            Feature Setup
          </h1>
          <p className="text-md text-muted-foreground">
            Start building by adding components to your project.
          </p>
        </div>
        {features.map((feature) => (
          <FeaturesCard key={feature.name} feature={feature} />
        ))}
      </div>
    </div>
  )
}