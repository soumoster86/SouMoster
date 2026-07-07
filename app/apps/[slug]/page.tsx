import { CheckCircle, AlertTriangle } from "lucide-react";
import { notFound } from "next/navigation";
import { AppCard } from "@/components/apps/AppCard";
import { AppDetailHero } from "@/components/apps/AppDetailHero";
import { GameplayVideo } from "@/components/apps/GameplayVideo";
import { ScreenshotCarousel } from "@/components/apps/ScreenshotCarousel";
import { PageTransition } from "@/components/shared/PageTransition";
import { Accordion } from "@/components/ui/Accordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getAppBySlug, getRelatedApps } from "@/data/apps";
import { formatDate } from "@/lib/utils";
import { generateSEO, generateSoftwareAppSchema } from "@/lib/seo";

interface AppPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const { apps } = await import("@/data/apps");
  return apps.map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({ params }: AppPageProps) {
  const { slug } = await params;
  const app = getAppBySlug(slug);
  if (!app) return {};

  return generateSEO({
    title: app.name,
    description: app.description,
    path: `/apps/${app.slug}`,
    image: app.banner,
  });
}

export default async function AppPage({ params }: AppPageProps) {
  const { slug } = await params;
  const app = getAppBySlug(slug);
  if (!app) notFound();

  const related = getRelatedApps(slug);
  const schema = generateSoftwareAppSchema(app);

  return (
    <PageTransition>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <AppDetailHero app={app} />

      <div className="mx-auto max-w-7xl space-y-20 px-4 py-16 sm:px-6 lg:px-8">
        <section>
          <SectionHeading title="Gameplay Screenshots" align="left" />
          <ScreenshotCarousel screenshots={app.screenshots} appName={app.name} />
        </section>

        {app.gameplayVideo && (
          <section>
            <SectionHeading title="Gameplay Video" align="left" />
            <GameplayVideo
              src={app.gameplayVideo}
              title={app.name}
              poster={app.screenshots[0]}
            />
          </section>
        )}

        <section>
          <SectionHeading title="How to Play" align="left" />
          <ol className="space-y-3">
            {app.howToPlay.map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-muted">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/20 text-sm font-bold text-primary">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </section>

        <section>
          <SectionHeading title="Game Features" align="left" />
          <div className="grid gap-3 sm:grid-cols-2">
            {app.features.map((feature) => (
              <div key={feature} className="flex items-start gap-3 text-muted">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                {feature}
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionHeading title="Version History" align="left" />
          <div className="space-y-4">
            {app.versionHistory.map((entry) => (
              <div key={entry.version} className="glass rounded-xl p-6">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="font-semibold text-text">v{entry.version}</h3>
                  <span className="text-sm text-muted">{formatDate(entry.date)}</span>
                </div>
                <ul className="space-y-1">
                  {entry.changes.map((change) => (
                    <li key={change} className="flex items-start gap-2 text-sm text-muted">
                      <span className="text-primary">•</span>
                      {change}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {app.knownIssues.length > 0 && (
          <section>
            <SectionHeading title="Known Issues" align="left" />
            <div className="space-y-3">
              {app.knownIssues.map((issue) => (
                <div key={issue} className="flex items-start gap-3 text-muted">
                  <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                  {issue}
                </div>
              ))}
            </div>
          </section>
        )}

        <section>
          <SectionHeading title="FAQ" align="left" />
          <Accordion items={app.faq} />
        </section>

        {related.length > 0 && (
          <section>
            <SectionHeading title="Related Games" align="left" />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((relatedApp) => (
                <AppCard key={relatedApp.slug} app={relatedApp} />
              ))}
            </div>
          </section>
        )}
      </div>
    </PageTransition>
  );
}