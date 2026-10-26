"use client";

import { motion } from "framer-motion";
import {
  CarFront,
  Code2,
  Rocket,
  Sparkles,
  Star,
  Swords,
  TrendingUp,
  Users,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

/** Icon and milestone flag for each entry of about.timeline.items, in order. */
const timelineStyle = [
  { icon: Sparkles, milestone: false },
  { icon: Code2, milestone: false },
  { icon: Rocket, milestone: true },
  { icon: Users, milestone: false },
  { icon: Rocket, milestone: true },
  { icon: Users, milestone: false },
  { icon: Swords, milestone: false },
  { icon: Rocket, milestone: true },
  { icon: Users, milestone: false },
  { icon: CarFront, milestone: false },
  { icon: TrendingUp, milestone: false },
  { icon: Star, milestone: false },
];

interface TimelineItem {
  period: string;
  title: string;
  description: string;
}

export function Timeline() {
  const t = useTranslations("about.timeline");
  const timeline = (t.raw("items") as TimelineItem[]).map((item, index) => ({
    ...item,
    ...(timelineStyle[index] ?? { icon: Star, milestone: false }),
  }));
  return (
    <div className="relative mb-20">
      <div
        className="from-primary/50 via-primary/20 absolute top-0 left-4 h-full w-0.5 bg-gradient-to-b to-transparent md:left-1/2 md:-translate-x-px"
        aria-hidden="true"
      />

      <div className="space-y-10">
        {timeline.map((item, index) => {
          const Icon = item.icon;
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={`${item.period}-${item.title}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className={cn(
                "relative md:grid md:grid-cols-2 md:gap-12",
                isEven ? "md:text-right" : "md:text-left",
              )}
            >
              <div
                className={cn(
                  "relative pl-12 md:col-span-1 md:pl-0",
                  isEven ? "md:pr-10" : "md:col-start-2 md:pl-10",
                )}
              >
                <div
                  className={cn(
                    "absolute top-5 left-0 flex h-8 w-8 items-center justify-center rounded-full md:top-6",
                    item.milestone
                      ? "bg-primary shadow-primary/40 ring-primary/20 text-white shadow-lg ring-4"
                      : "border-primary/40 bg-card text-primary border-2",
                    isEven ? "md:-right-4 md:left-auto" : "md:-left-4",
                  )}
                  aria-hidden="true"
                >
                  <Icon className="h-4 w-4" />
                </div>

                <div
                  className={cn(
                    "rounded-2xl p-6",
                    item.milestone
                      ? "border-primary/30 bg-primary/10 shadow-primary/10 border shadow-lg"
                      : "glass",
                  )}
                >
                  {item.milestone && (
                    <span className="bg-primary/20 text-primary mb-2 inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold">
                      {t("milestone")}
                    </span>
                  )}
                  <span className="text-primary text-sm font-bold">
                    {item.period}
                  </span>
                  <h3 className="text-text mt-1 text-lg font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-muted mt-2 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
