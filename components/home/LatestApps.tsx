import { getTranslations } from "next-intl/server";
import { AppCard } from "@/components/apps/AppCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getLocalizedApps } from "@/lib/server-i18n";

export async function LatestApps() {
  const t = await getTranslations("home.latest");
  const apps = await getLocalizedApps();

  return (
    <section className="py-20" aria-label={t("sectionLabel")}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
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
