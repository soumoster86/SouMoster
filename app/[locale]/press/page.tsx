import { Download, ExternalLink, Mail, Youtube } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import type { ReactNode } from "react";
import { PageTransition } from "@/components/shared/PageTransition";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { hasBuildVersion } from "@/data/apps";
import { Link } from "@/i18n/navigation";
import {
  PLAY_STORE_DEVELOPER_URL,
  SITE_NAME,
  SITE_URL,
  SUPPORT_EMAIL,
  YOUTUBE_HANDLE,
  YOUTUBE_URL,
} from "@/lib/constants";
import { getLocalizedApps, pageMetadata } from "@/lib/server-i18n";
import type { App } from "@/types";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  return pageMetadata(locale, "press", "/press");
}

const STATUS_KEY: Record<NonNullable<App["status"]>, string> = {
  live: "live",
  "closed-testing": "closedTesting",
  "in-development": "inDevelopment",
  "coming-soon": "comingSoon",
};

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

export default async function PressPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("press");
  const tc = await getTranslations("common");
  const apps = await getLocalizedApps();

  const strong = (chunks: ReactNode) => <strong className="text-text">{chunks}</strong>;
  const studioFacts = [
    { label: t("facts.studio"), value: SITE_NAME },
    { label: t("facts.type"), value: t("facts.typeValue") },
    { label: t("facts.started"), value: "2024" },
    { label: t("facts.firstRelease"), value: "Road Hopper (2026)" },
    { label: t("facts.platform"), value: "Android (Google Play)" },
    { label: t("facts.website"), value: SITE_URL.replace("https://", "") },
    { label: t("facts.pressContact"), value: SUPPORT_EMAIL },
  ];

  return (
    <PageTransition>
      <div className="mx-auto max-w-7xl px-4 pt-28 pb-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} />

        <div className="mb-16 grid gap-8 lg:grid-cols-3">
          <section className="glass rounded-2xl p-6 sm:p-8 lg:col-span-2">
            <h2 className="text-text mb-4 text-2xl font-bold">{t("aboutStudio")}</h2>
            <div className="text-muted space-y-4 leading-relaxed">
              <p>{t.rich("aboutP1", { site: SITE_NAME, strong })}</p>
              <p>
                {t.rich("aboutP2", {
                  handle: YOUTUBE_HANDLE,
                  strong,
                  youtube: (chunks) => (
                    <a
                      href={YOUTUBE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-medium hover:underline"
                    >
                      {chunks}
                    </a>
                  ),
                })}
              </p>
            </div>

            <h3 className="text-text mt-8 mb-3 font-semibold">{t("studioLogo")}</h3>
            <div className="flex flex-wrap items-center gap-4">
              <div className="border-border bg-card/60 rounded-xl border p-4">
                <Image src="/logo.svg" alt={t("logoAlt", { site: SITE_NAME })} width={64} height={64} />
              </div>
              <AssetLink href="/logo.svg" label={t("logoSvg")} />
              <AssetLink href="/icon.svg" label={t("appIconSvg")} />
            </div>
          </section>

          <aside className="glass rounded-2xl p-6 sm:p-8">
            <h2 className="text-text mb-4 text-xl font-bold">{t("factSheet")}</h2>
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
                {t("emailPress")}
              </Button>
              <Button href={PLAY_STORE_DEVELOPER_URL} size="sm" variant="outline">
                <ExternalLink className="h-4 w-4" />
                {t("developerPage")}
              </Button>
              <Button href={YOUTUBE_URL} size="sm" variant="outline">
                <Youtube className="h-4 w-4" />
                {t("trailers")}
              </Button>
            </div>
          </aside>
        </div>

        <SectionHeading title={t("games")} align="left" />
        <div className="space-y-8">
          {apps.map((app) => (
            <section key={app.slug} className="glass rounded-2xl p-6 sm:p-8">
              <div className="flex flex-col gap-6 md:flex-row">
                <Image
                  src={app.icon}
                  alt={tc("a11y.appIcon", { name: app.name })}
                  width={96}
                  height={96}
                  className="h-24 w-24 shrink-0 rounded-2xl"
                />
                <div className="flex-1 space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-text text-2xl font-bold">{app.name}</h3>
                    <Badge variant="secondary">
                      {tc(`status.${STATUS_KEY[app.status ?? "live"]}`)}
                    </Badge>
                    {app.status !== "in-development" ? (
                      <Badge>{tc("badge.version", { version: app.version })}</Badge>
                    ) : (
                      hasBuildVersion(app) && (
                        <Badge>{tc("badge.devBuild", { version: app.version })}</Badge>
                      )
                    )}
                  </div>
                  <p className="text-text font-medium">{app.tagline}</p>
                  <p className="text-muted text-sm leading-relaxed">{app.longDescription}</p>

                  <dl className="text-muted grid gap-x-6 gap-y-1 text-sm sm:grid-cols-2">
                    <div>
                      <dt className="inline">{t("genre")} </dt>
                      <dd className="text-text inline">{tc(`genre.${app.genre}`)}</dd>
                    </div>
                    <div>
                      <dt className="inline">{t("platform")} </dt>
                      <dd className="text-text inline">Android</dd>
                    </div>
                    <div>
                      <dt className="inline">{t("price")} </dt>
                      <dd className="text-text inline">{t("freeToPlay")}</dd>
                    </div>
                    {app.playStoreUrl && (
                      <div>
                        <dt className="inline">{t("googlePlay")} </dt>
                        <dd className="inline">
                          <a
                            href={app.playStoreUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            {t("storeListing")}
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
                    <AssetLink href={app.icon} label={t("assets.icon")} />
                    <AssetLink href={app.banner} label={t("assets.banner")} />
                    {app.screenshots.map((shot, i) => (
                      <AssetLink key={shot} href={shot} label={t("assets.screenshot", { number: i + 1 })} />
                    ))}
                    {app.gameplayVideo && (
                      <AssetLink href={app.gameplayVideo} label={t("assets.video")} />
                    )}
                  </div>

                  <Link
                    href={`/apps/${app.slug}`}
                    className="text-primary inline-flex items-center gap-1 text-sm font-medium hover:underline"
                  >
                    {t("fullPage")}
                  </Link>
                </div>
              </div>
            </section>
          ))}
        </div>

        <section className="glass mt-16 rounded-2xl p-6 text-center sm:p-8">
          <h2 className="text-text text-xl font-bold">{t("needMore")}</h2>
          <p className="text-muted mx-auto mt-2 max-w-2xl text-sm">
            {t.rich("needMoreText", {
              address: SUPPORT_EMAIL,
              email: (chunks) => (
                <a href={`mailto:${SUPPORT_EMAIL}`} className="text-primary font-medium hover:underline">
                  {chunks}
                </a>
              ),
            })}
          </p>
        </section>
      </div>
    </PageTransition>
  );
}
