"use client";

import { motion } from "framer-motion";
import { Eye, Rocket, Target } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import type { ReactNode } from "react";
import { Timeline } from "@/components/about/Timeline";
import { PageTransition } from "@/components/shared/PageTransition";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { hasBuildVersion } from "@/data/apps";
import { useLocalizedApps } from "@/hooks/useLocalizedApps";
import { Link } from "@/i18n/navigation";
import { YOUTUBE_URL } from "@/lib/constants";
import type { App } from "@/types";

const STATUS_KEY: Record<NonNullable<App["status"]>, string> = {
  live: "live",
  "closed-testing": "closedTesting",
  "in-development": "inDevelopment",
  "coming-soon": "comingSoon",
};

const STORY_PARAGRAPHS = ["p1", "p2", "p3", "p4", "p5"] as const;

const richText = {
  strong: (chunks: ReactNode) => <strong className="text-text">{chunks}</strong>,
  youtube: (chunks: ReactNode) => (
    <a
      href={YOUTUBE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary font-medium hover:underline"
    >
      {chunks}
    </a>
  ),
};

export default function AboutPage() {
  const t = useTranslations("about");
  const tc = useTranslations("common");
  const apps = useLocalizedApps();
  const goals = t.raw("goals.items") as string[];

  return (
    <PageTransition>
      <div className="mx-auto max-w-7xl px-4 pt-28 pb-20 sm:px-6 lg:px-8">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        <div className="mb-20 grid gap-8 md:grid-cols-2">
          <motion.div
            className="glass rounded-2xl p-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Target className="text-primary mb-4 h-10 w-10" />
            <h3 className="text-text mb-3 text-xl font-semibold">
              {t("mission.title")}
            </h3>
            <p className="text-muted leading-relaxed">{t("mission.text")}</p>
          </motion.div>

          <motion.div
            className="glass rounded-2xl p-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Eye className="text-secondary mb-4 h-10 w-10" />
            <h3 className="text-text mb-3 text-xl font-semibold">
              {t("vision.title")}
            </h3>
            <p className="text-muted leading-relaxed">{t("vision.text")}</p>
          </motion.div>
        </div>

        <SectionHeading title={t("story.title")} align="left" />
        <div className="text-muted mb-20 max-w-3xl space-y-4 leading-relaxed">
          {STORY_PARAGRAPHS.map((key) => (
            <p key={key}>{t.rich(`story.${key}`, richText)}</p>
          ))}
        </div>

        <SectionHeading
          eyebrow={t("games.eyebrow")}
          title={t("games.title")}
          align="left"
        />
        <div className="mb-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {apps.map((app) => (
            <Link
              key={app.slug}
              href={`/apps/${app.slug}`}
              className="glass hover:border-primary/40 flex items-center gap-4 rounded-xl border border-transparent p-4 transition-colors"
            >
              <Image
                src={app.icon}
                alt=""
                width={56}
                height={56}
                className="h-14 w-14 shrink-0 rounded-xl"
                aria-hidden="true"
              />
              <div className="min-w-0">
                <h3 className="text-text font-semibold">{app.name}</h3>
                <p className="text-muted truncate text-xs">
                  {tc(`genre.${app.genre}`)}
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  <Badge
                    variant={app.status === "live" ? "accent" : "secondary"}
                  >
                    {tc(`status.${STATUS_KEY[app.status ?? "live"]}`)}
                  </Badge>
                  {hasBuildVersion(app) && (
                    <Badge>{tc("badge.version", { version: app.version })}</Badge>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <SectionHeading
          eyebrow={t("timeline.eyebrow")}
          title={t("timeline.title")}
          align="left"
        />
        <Timeline />

        <SectionHeading
          eyebrow={t("goals.eyebrow")}
          title={t("goals.title")}
          align="left"
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {goals.map((goal) => (
            <div
              key={goal}
              className="glass text-muted flex items-start gap-3 rounded-xl p-5"
            >
              <Rocket className="text-accent mt-0.5 h-5 w-5 shrink-0" />
              {goal}
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
