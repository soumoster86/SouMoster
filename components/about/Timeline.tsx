"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Rocket,
  Sparkles,
  Star,
  Swords,
  TrendingUp,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";

const timeline = [
  {
    period: "2024",
    title: "The Beginning",
    description:
      "Started the journey into Android development and game design, learning the fundamentals of mobile app development, game mechanics, and modern development tools.",
    icon: Sparkles,
    milestone: false,
  },
  {
    period: "2025",
    title: "First Prototypes",
    description:
      "Developed multiple game prototypes, explored different gameplay concepts, and strengthened skills in Android development, UI/UX design, and game optimization.",
    icon: Code2,
    milestone: false,
  },
  {
    period: "July 2026",
    title: "First Release: Road Hopper",
    description:
      "Road Hopper launched on Google Play after an open beta, SouMoster's first published game. It has kept improving since, and is now at v9.4.9.",
    icon: Rocket,
    milestone: true,
  },
  {
    period: "September 2026",
    title: "Bank Hopper Closed Testing",
    description:
      "Bank Hopper entered Google Play Closed Testing at v0.8.0, with tap-to-bank heists, eight-floor Full Heist runs and Play Games leaderboards, tested by players from the bank-hopper-game Google Group.",
    icon: Users,
    milestone: false,
  },
  {
    period: "October 2026",
    title: "Bank Hopper Goes Live",
    description:
      "Bank Hopper v1.0.0 launched on Google Play on 6 October, SouMoster's second published game.",
    icon: Rocket,
    milestone: true,
  },
  {
    period: "October 2026",
    title: "Time Hopper Closed Testing",
    description:
      "Time Hopper, a seven-era time-travel runner built around the Time Hop, moved to Google Play Closed Testing at v1.13.2. Testers join through the timehoppergame Google Group.",
    icon: Users,
    milestone: false,
  },
  {
    period: "October 2026",
    title: "Arena Legends Begins",
    description:
      "Work started on Arena Legends: Gladiator Wars, SouMoster's first action game: a gladiator brawler with combos, parries, four weapon classes and a five-chapter campaign.",
    icon: Swords,
    milestone: false,
  },
  {
    period: "Now",
    title: "Growing the Studio",
    description:
      "Two games are live on Google Play, Time Hopper is in Closed Testing, Space Hopper is being prepared for testing, and Arena Legends is in development. Trailers and gameplay are on YouTube @SouMosterGames.",
    icon: TrendingUp,
    milestone: false,
  },
  {
    period: "Looking Ahead",
    title: "The Vision",
    description:
      "Grow into a recognizable indie game studio with a diverse collection of high-quality Android games, from more Hopper titles to new genres like Arena Legends, that entertain players around the world.",
    icon: Star,
    milestone: false,
  },
];

export function Timeline() {
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
                      Milestone
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
