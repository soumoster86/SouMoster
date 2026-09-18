import { AlertTriangle, ExternalLink, Users } from "lucide-react";
import { notFound } from "next/navigation";
import { AppCard } from "@/components/apps/AppCard";
import { AppDetailHero } from "@/components/apps/AppDetailHero";
import { AppDownloadBar } from "@/components/apps/AppDownloadBar";
import { FeatureGrid } from "@/components/apps/FeatureGrid";
import { GameplayVideo } from "@/components/apps/GameplayVideo";
import { ScreenshotCarousel } from "@/components/apps/ScreenshotCarousel";
import { PageTransition } from "@/components/shared/PageTransition";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getAppBySlug, getRelatedApps } from "@/data/apps";
import { BANK_HOPPER_GOOGLE_GROUP_URL } from "@/lib/constants";
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
      <AppDownloadBar app={app} />

      <div className="mx-auto max-w-7xl space-y-20 px-4 py-16 pb-28 sm:px-6 lg:px-8">
        {app.status === "in-development" && (
          <div className="glass border-primary/40 from-primary/15 via-card to-accent/15 shadow-primary/10 relative overflow-hidden rounded-3xl border bg-gradient-to-r p-8 shadow-xl">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div className="space-y-2">
                <span className="border-primary/40 bg-primary/20 text-primary inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold">
                  <Users className="h-3.5 w-3.5" />
                  Google Play Closed Testing Open
                </span>
                <h2 className="font-heading text-text text-2xl font-bold sm:text-3xl">
                  Want to play {app.name} before everyone else?
                </h2>
                <p className="text-muted max-w-xl text-sm leading-relaxed">
                  Join our closed beta testing team on Google Play. Receive
                  pre-release APK builds, test new levels and mechanics, and get
                  your name in the game credits!
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap items-center gap-3">
                <Button
                  href={`/beta?game=${app.slug}`}
                  size="lg"
                  className="shadow-primary/30 min-h-[50px] shadow-lg"
                >
                  <Users className="mr-2 h-5 w-5" />
                  Join Closed Beta
                </Button>
                <Button
                  href={BANK_HOPPER_GOOGLE_GROUP_URL}
                  size="lg"
                  variant="outline"
                  className="min-h-[50px]"
                >
                  <span>Google Group</span>
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        )}

        <section>
          <SectionHeading title="Gameplay Screenshots" align="left" />
          <ScreenshotCarousel
            screenshots={app.screenshots}
            appName={app.name}
          />
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
              <li key={i} className="text-muted flex items-start gap-3">
                <span className="bg-primary/20 text-primary flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-bold">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </section>

        <section>
          <SectionHeading
            eyebrow="Highlights"
            title="Game Features"
            align="left"
          />
          <FeatureGrid features={app.features} />
        </section>

        <section>
          <SectionHeading title="Version History" align="left" />
          <div className="space-y-4">
            {app.versionHistory.map((entry) => (
              <div key={entry.version} className="glass rounded-xl p-6">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-text font-semibold">v{entry.version}</h3>
                  <span className="text-muted text-sm">
                    {formatDate(entry.date)}
                  </span>
                </div>
                <ul className="space-y-1">
                  {entry.changes.map((change) => (
                    <li
                      key={change}
                      className="text-muted flex items-start gap-2 text-sm"
                    >
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
                <div key={issue} className="text-muted flex items-start gap-3">
                  <AlertTriangle className="text-secondary mt-0.5 h-5 w-5 shrink-0" />
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
