"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { stageColors, stageKeys } from "@/components/home/StageDot";
import { useLocalizedApps } from "@/hooks/useLocalizedApps";
import { cn } from "@/lib/utils";

/** Scrolling strip listing every game and the stage it is at. */
export function StudioTicker() {
  const t = useTranslations("home");
  const apps = useLocalizedApps();

  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center gap-10 pr-10" aria-hidden={hidden || undefined}>
      {apps.map((app) => (
        <li key={app.slug} className="flex items-center gap-3 whitespace-nowrap">
          <Image src={app.icon} alt="" width={28} height={28} className="rounded-lg" />
          <span className="text-text font-heading text-sm font-semibold">{app.name}</span>
          <span className="text-muted flex items-center gap-1.5 text-xs">
            <span
              className={cn("h-2 w-2 rounded-full", stageColors[app.status ?? "live"])}
              aria-hidden="true"
            />
            {t(`stages.${stageKeys[app.status ?? "live"]}`)}
          </span>
          <span className="text-muted/40" aria-hidden="true">✦</span>
        </li>
      ))}
    </ul>
  );

  return (
    <section
      aria-label={t("ticker.label")}
      className="border-border/60 bg-card/40 overflow-hidden border-y py-4"
    >
      <div className="ticker-track flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </section>
  );
}
