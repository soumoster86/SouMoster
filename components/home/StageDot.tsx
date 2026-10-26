"use client";

import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import type { App } from "@/types";

type Status = NonNullable<App["status"]>;

export const stageColors: Record<Status, string> = {
  live: "bg-accent",
  "closed-testing": "bg-secondary",
  "in-development": "bg-primary",
  "coming-soon": "bg-primary",
};

/** Translation keys under home.stages. */
export const stageKeys: Record<Status, string> = {
  live: "live",
  "closed-testing": "closedTesting",
  "in-development": "inDevelopment",
  "coming-soon": "comingSoon",
};

/** Small status pill: coloured dot plus the short localized stage name. */
export function StageDot({
  status = "live",
  className,
}: {
  status?: App["status"];
  className?: string;
}) {
  const t = useTranslations("home.stages");
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center gap-1.5 rounded-full bg-black/55 px-2 py-0.5 text-[11px] font-semibold text-white backdrop-blur-sm",
        className,
      )}
    >
      <span className={cn("h-2 w-2 rounded-full", stageColors[status])} aria-hidden="true" />
      <span className="sr-only sm:not-sr-only">{t(stageKeys[status])}</span>
    </span>
  );
}
