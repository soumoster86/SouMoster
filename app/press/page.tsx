import { Download, ExternalLink, Mail, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PageTransition } from "@/components/shared/PageTransition";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { apps, hasBuildVersion } from "@/data/apps";
import {
  PLAY_STORE_DEVELOPER_URL,
  SITE_NAME,
  SITE_URL,
  SUPPORT_EMAIL,
  YOUTUBE_HANDLE,
  YOUTUBE_URL,
} from "@/lib/constants";
import { generateSEO } from "@/lib/seo";
import type { App } from "@/types";

export const metadata = generateSEO({
  title: "Press Kit",
  description: `${SITE_NAME} press kit: studio fact sheet, game fact sheets, logos, icons, banners, screenshots, and trailer links for Road Hopper, Bank Hopper, Time Hopper, and Space Hopper.`,
  path: "/press",
});

const STATUS_LABEL: Record<NonNullable<App["status"]>, string> = {
  live: "Live on Google Play",
  "closed-testing": "Google Play Closed Testing",
  "in-development": "In development",
  "coming-soon": "Coming soon",
};

const studioFacts = [
  { label: "Studio", value: SITE_NAME },
  { label: "Type", value: "Independent Android game developer" },
  { label: "Started", value: "2024" },
  { label: "First release", value: "Road Hopper (2026)" },
  { label: "Platform", value: "Android (Google Play)" },
  { label: "Website", value: SITE_URL.replace("https://", "") },
  { label: "Press contact", value: SUPPORT_EMAIL },
];

function AssetLink({ href, label }: { href: string; label: string }) {
  const isLocal = href.startsWith("/");
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...(isLocal && { download: "" })}
      className="border-border bg-card/40 text-muted hover:text-primary inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs transition-colors"
    >
      <Download className="h-3.5 w-3.5" />
      {label}
    </a>
  );
}

export default function PressPage() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-7xl px-4 pt-28 pb-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Media & Creators"
          title="Press Kit"
          subtitle="Everything you need to write about or make videos of SouMoster games. All assets may be used for editorial coverage, reviews, and let's-play videos."
        />

        <div className="mb-16 grid gap-8 lg:grid-cols-3">
          <section className="glass rounded-2xl p-6 sm:p-8 lg:col-span-2">
            <h2 className="text-text mb-4 text-2xl font-bold">About the studio</h2>
            <div className="text-muted space-y-4 leading-relaxed">
              <p>
                {SITE_NAME} is an independent Android game developer building
                fun, addictive, high-quality arcade games with simple controls
                and a polished feel. The studio&apos;s Hopper series started
                with <strong className="text-text">Road Hopper</strong>, live
                on Google Play, followed by{" "}
                <strong className="text-text">Bank Hopper</strong>, a one-thumb
                bank heist arcade game that has finished Google Play Closed
                Testing.
              </p>
              <p>
                Two more titles are in development:{" "}
                <strong className="text-text">Time Hopper</strong>, a seven-era
                time-travel runner, and{" "}
                <strong className="text-text">Space Hopper</strong>. Trailers,
                gameplay, and developer videos are on YouTube at{" "}
                <a
                  href={YOUTUBE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium hover:underline"
                >
                  {YOUTUBE_HANDLE}
                </a>
                .
              </p>
            </div>

            <h3 className="text-text mt-8 mb-3 font-semibold">Studio logo</h3>
            <div className="flex flex-wrap items-center gap-4">
              <div className="border-border bg-card/60 rounded-xl border p-4">
                <Image src="/logo.svg" alt={`${SITE_NAME} logo`} width={64} height={64} />
              </div>
              <AssetLink href="/logo.svg" label="Logo (SVG)" />
              <AssetLink href="/icon.svg" label="App icon (SVG)" />
            </div>
          </section>

          <aside className="glass rounded-2xl p-6 sm:p-8">
            <h2 className="text-text mb-4 text-xl font-bold">Fact sheet</h2>
            <dl className="space-y-3 text-sm">
              {studioFacts.map((fact) => (
                <div key={fact.label} className="border-border flex justify-between gap-4 border-b pb-2">
                  <dt className="text-muted">{fact.label}</dt>
                  <dd className="text-text text-right font-medium break-all">{fact.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 flex flex-col gap-3">
              <Button href={`mailto:${SUPPORT_EMAIL}?subject=Press%20inquiry`} size="sm">
                <Mail className="h-4 w-4" />
                Email press contact
              </Button>
              <Button href={PLAY_STORE_DEVELOPER_URL} size="sm" variant="outline">
                <ExternalLink className="h-4 w-4" />
                Developer page on Google Play
              </Button>
              <Button href={YOUTUBE_URL} size="sm" variant="outline">
                <Youtube className="h-4 w-4" />
                Trailers on YouTube
              </Button>
            </div>
          </aside>
        </div>

        <SectionHeading title="Games" align="left" />
        <div className="space-y-8">
          {apps.map((app) => (
            <section key={app.slug} className="glass rounded-2xl p-6 sm:p-8">
              <div className="flex flex-col gap-6 md:flex-row">
                <Image
                  src={app.icon}
                  alt={`${app.name} icon`}
                  width={96}
                  height={96}
                  className="h-24 w-24 shrink-0 rounded-2xl"
                />
                <div className="flex-1 space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-text text-2xl font-bold">{app.name}</h3>
                    <Badge variant="secondary">
                      {app.status ? STATUS_LABEL[app.status] : "Live on Google Play"}
                    </Badge>
                    {app.status !== "in-development" ? (
                      <Badge>v{app.version}</Badge>
                    ) : (
                      hasBuildVersion(app) && <Badge>Dev build v{app.version}</Badge>
                    )}
                  </div>
                  <p className="text-text font-medium">{app.tagline}</p>
                  <p className="text-muted text-sm leading-relaxed">{app.longDescription}</p>

                  <dl className="text-muted grid gap-x-6 gap-y-1 text-sm sm:grid-cols-2">
                    <div>
                      <dt className="inline">Genre: </dt>
                      <dd className="text-text inline">{app.genre}</dd>
                    </div>
                    <div>
                      <dt className="inline">Platform: </dt>
                      <dd className="text-text inline">Android</dd>
                    </div>
                    <div>
                      <dt className="inline">Price: </dt>
                      <dd className="text-text inline">Free to play</dd>
                    </div>
                    {app.playStoreUrl && (
                      <div>
                        <dt className="inline">Google Play: </dt>
                        <dd className="inline">
                          <a
                            href={app.playStoreUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            Store listing
                          </a>
                        </dd>
                      </div>
                    )}
                  </dl>

                  {app.features.length > 0 && (
                    <ul className="text-muted list-disc space-y-1 pl-5 text-sm">
                      {app.features.slice(0, 5).map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  )}

                  <div className="flex flex-wrap gap-2 pt-2">
                    <AssetLink href={app.icon} label="Icon" />
                    <AssetLink href={app.banner} label="Banner" />
                    {app.screenshots.map((shot, i) => (
                      <AssetLink key={shot} href={shot} label={`Screenshot ${i + 1}`} />
                    ))}
                    {app.gameplayVideo && <AssetLink href={app.gameplayVideo} label="Gameplay video" />}
                  </div>

                  <Link
                    href={`/apps/${app.slug}`}
                    className="text-primary inline-flex items-center gap-1 text-sm font-medium hover:underline"
                  >
                    Full game page →
                  </Link>
                </div>
              </div>
            </section>
          ))}
        </div>

        <section className="glass mt-16 rounded-2xl p-6 text-center sm:p-8">
          <h2 className="text-text text-xl font-bold">Need something else?</h2>
          <p className="text-muted mx-auto mt-2 max-w-2xl text-sm">
            For review builds, interview requests, high-resolution assets, or
            early access to games in testing, email{" "}
            <a href={`mailto:${SUPPORT_EMAIL}`} className="text-primary font-medium hover:underline">
              {SUPPORT_EMAIL}
            </a>
            .
          </p>
        </section>
      </div>
    </PageTransition>
  );
}
