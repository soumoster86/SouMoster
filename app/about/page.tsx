"use client";

import { motion } from "framer-motion";
import { Eye, Rocket, Target } from "lucide-react";
import { PageTransition } from "@/components/shared/PageTransition";
import { SectionHeading } from "@/components/ui/SectionHeading";

const timeline = [
  { year: "2023", title: "The Beginning", description: "Started learning Android development and game design." },
  { year: "2024", title: "First Prototypes", description: "Built multiple game prototypes and refined development skills." },
  { year: "2025", title: "Road Hopper Launch", description: "Released Road Hopper on Google Play — our first published game." },
  { year: "2026", title: "Growing Portfolio", description: "Expanding the game library with new titles and features." },
];

const goals = [
  "Release 3+ new Android games by 2027",
  "Build a community of 100K+ players",
  "Implement cross-platform leaderboards",
  "Explore multiplayer game modes",
];

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-7xl px-4 pt-28 pb-20 sm:px-6 lg:px-8">
        <SectionHeading
          title="About SouMoster"
          subtitle="An independent Android game developer on a mission to create unforgettable mobile experiences"
        />

        <div className="mb-20 grid gap-8 md:grid-cols-2">
          <motion.div
            className="glass rounded-2xl p-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Target className="mb-4 h-10 w-10 text-primary" />
            <h3 className="mb-3 text-xl font-semibold text-text">Our Mission</h3>
            <p className="leading-relaxed text-muted">
              To create fun, addictive, and high-quality Android games that bring joy to players
              around the world. We believe great games don&apos;t need big budgets — just passion,
              creativity, and attention to detail.
            </p>
          </motion.div>

          <motion.div
            className="glass rounded-2xl p-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Eye className="mb-4 h-10 w-10 text-secondary" />
            <h3 className="mb-3 text-xl font-semibold text-text">Our Vision</h3>
            <p className="leading-relaxed text-muted">
              To become a recognized indie Android game studio known for polished gameplay,
              beautiful design, and a strong community of players who love what we create.
            </p>
          </motion.div>
        </div>

        <SectionHeading title="Developer Story" align="left" />
        <div className="mb-20 max-w-3xl space-y-4 text-muted leading-relaxed">
          <p>
            SouMoster started as a solo developer&apos;s passion project — a dream to build mobile
            games that are as fun to play as they are to create. What began with late-night coding
            sessions and countless iterations has grown into a brand dedicated to quality Android
            gaming.
          </p>
          <p>
            Our first release, Road Hopper, embodies everything we stand for: simple controls,
            addictive gameplay, and a polished user experience. Every game we build follows the same
            philosophy — player enjoyment comes first.
          </p>
        </div>

        <SectionHeading title="Timeline" align="left" />
        <div className="relative mb-20 space-y-8 border-l-2 border-primary/30 pl-8">
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="absolute -left-[41px] h-4 w-4 rounded-full bg-primary" />
              <span className="text-sm font-bold text-primary">{item.year}</span>
              <h3 className="text-lg font-semibold text-text">{item.title}</h3>
              <p className="text-muted">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <SectionHeading title="Future Goals" align="left" />
        <div className="grid gap-4 sm:grid-cols-2">
          {goals.map((goal) => (
            <div key={goal} className="flex items-start gap-3 text-muted">
              <Rocket className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              {goal}
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}