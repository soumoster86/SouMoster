import { SectionHeading } from "@/components/ui/SectionHeading";
import { AppCard } from "@/components/apps/AppCard";
import { apps } from "@/data/apps";

export function LatestApps() {
  return (
    <section className="py-20" aria-label="Latest apps">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Games"
          title="Latest Apps"
          subtitle="Discover our collection of Android games"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {apps.map((app) => (
            <AppCard key={app.slug} app={app} />
          ))}
        </div>
      </div>
    </section>
  );
}