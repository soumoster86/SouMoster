"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import { StageDot, stageColors, stageKeys } from "@/components/home/StageDot";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useLocalizedApps } from "@/hooks/useLocalizedApps";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import type { App } from "@/types";

const pipeline = ["in-development", "closed-testing", "live"] as const;

function stageIndex(status: App["status"]) {
  const index = pipeline.indexOf((status ?? "live") as (typeof pipeline)[number]);
  return index === -1 ? 0 : index;
}

function PipelineBar({ app }: { app: App }) {
  const t = useTranslations("home");
  const current = stageIndex(app.status);
  return (
    <div>
      <ol className="grid grid-cols-3 gap-1.5" aria-label={t("slate.progressLabel")}>
        {pipeline.map((stage, i) => (
          <li key={stage} aria-current={i === current ? "step" : undefined}>
            <span
              className={cn(
                "block h-1.5 rounded-full",
                i <= current ? stageColors[app.status ?? "live"] : "bg-border",
              )}
            />
            <span
              className={cn(
                "mt-1.5 block truncate text-[11px]",
                i === current ? "text-text font-semibold" : "text-muted",
              )}
            >
              {t(`stages.${stageKeys[stage]}`)}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function SlateCard({ app }: { app: App }) {
  const tc = useTranslations("common");
  return (
    <Link
      href={`/apps/${app.slug}`}
      className="group glass hover:border-primary/50 flex h-full flex-col overflow-hidden rounded-2xl transition-colors"
    >
      <div className="relative aspect-[2/1] overflow-hidden">
        <Image
          src={app.banner}
          alt={tc("a11y.appPreview", { name: app.name })}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <StageDot status={app.status} className="absolute top-3 right-3" />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex items-center gap-3">
          <Image
            src={app.icon}
            alt=""
            width={44}
            height={44}
            className="rounded-xl shadow-md"
          />
          <div className="min-w-0">
            <h3 className="text-text truncate font-semibold">{app.name}</h3>
            <p className="text-muted text-xs">
              {tc(`genre.${app.genre}`)} · v{app.version}
            </p>
          </div>
          <ArrowRight className="text-muted group-hover:text-primary ml-auto h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
        </div>
        <p className="text-muted line-clamp-2 flex-1 text-sm leading-relaxed">
          {app.tagline}
        </p>
        <PipelineBar app={app} />
      </div>
    </Link>
  );
}

/** Every game in the studio, filterable by genre, with its pipeline stage. */
export function GameSlate() {
  const t = useTranslations("home.slate");
  const tc = useTranslations("common.genre");
  const apps = useLocalizedApps();
  const genres = ["All", ...new Set(apps.map((app) => app.genre))];
  const [genre, setGenre] = useState("All");
  const shown = genre === "All" ? apps : apps.filter((app) => app.genre === genre);

  return (
    <section id="slate" className="py-20" aria-label={t("sectionLabel")}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} />

        <div
          className="mb-10 flex flex-wrap justify-center gap-2"
          role="group"
          aria-label={t("filterLabel")}
        >
          {genres.map((g) => {
            const count = g === "All" ? apps.length : apps.filter((a) => a.genre === g).length;
            return (
              <button
                key={g}
                type="button"
                onClick={() => setGenre(g)}
                aria-pressed={genre === g}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  genre === g
                    ? "border-primary bg-primary text-white"
                    : "border-border text-muted hover:border-primary/50 hover:text-text",
                )}
              >
                {tc(g)} <span className="opacity-70">({count})</span>
              </button>
            );
          })}
        </div>

        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {shown.map((app) => (
              <motion.div
                key={app.slug}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
              >
                <SlateCard app={app} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-10 text-center">
          <Button href="/apps" variant="outline">
            {t("viewAll")}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
