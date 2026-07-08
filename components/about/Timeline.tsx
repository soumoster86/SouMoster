"use client";

import { motion } from "framer-motion";
import { Code2, Rocket, Sparkles, Star, TrendingUp } from "lucide-react";
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
    period: "Early 2026",
    title: "First Release",
    description:
      "Successfully launched Road Hopper on Google Play, marking SouMoster's first published Android game and the beginning of its public journey.",
    icon: Rocket,
    milestone: true,
  },
  {
    period: "July 2026",
    title: "Building the Future",
    description:
      "Expanding the SouMoster portfolio with new Android games, introducing fresh gameplay ideas, enhancing existing titles, and continuously improving the player experience based on community feedback.",
    icon: TrendingUp,
    milestone: false,
  },
  {
    period: "Looking Ahead",
    title: "The Vision",
    description:
      "The vision for SouMoster is to grow into a recognizable indie game studio, releasing a diverse collection of high-quality Android games that entertain players around the world.",
    icon: Star,
    milestone: false,
  },
];

export function Timeline() {
  return (
    <div className="relative mb-20">
      <div
        className="absolute top-0 left-4 h-full w-0.5 bg-gradient-to-b from-primary/50 via-primary/20 to-transparent md:left-1/2 md:-translate-x-px"
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
                      ? "bg-primary text-white shadow-lg shadow-primary/40 ring-4 ring-primary/20"
                      : "border-2 border-primary/40 bg-card text-primary",
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
                      ? "border border-primary/30 bg-primary/10 shadow-lg shadow-primary/10"
                      : "glass",
                  )}
                >
                  {item.milestone && (
                    <span className="mb-2 inline-block rounded-full bg-primary/20 px-2.5 py-0.5 text-xs font-semibold text-primary">
                      Milestone
                    </span>
                  )}
                  <span className="text-sm font-bold text-primary">{item.period}</span>
                  <h3 className="mt-1 text-lg font-semibold text-text">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}