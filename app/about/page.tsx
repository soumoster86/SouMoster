"use client";

import { motion } from "framer-motion";
import { Eye, Rocket, Target } from "lucide-react";
import { Timeline } from "@/components/about/Timeline";
import { PageTransition } from "@/components/shared/PageTransition";
import { SectionHeading } from "@/components/ui/SectionHeading";

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
        <div className="mb-20 max-w-3xl space-y-4 leading-relaxed text-muted">
          <p>
            SouMoster is an independent Android game studio founded by a solo developer with a
            passion for creating fun, accessible, and engaging mobile games. What began as a personal
            journey to learn Android development has evolved into a commitment to building polished
            gaming experiences that players can enjoy anytime, anywhere.
          </p>
          <p>
            Every project is driven by a simple philosophy:{" "}
            <strong className="text-text">
              great games don&apos;t have to be complicated
            </strong>
            . By focusing on intuitive controls, satisfying gameplay, and continuous improvement,
            SouMoster aims to deliver games that are easy to pick up, difficult to put down, and
            enjoyable for players of all ages.
          </p>
          <p>
            Our debut title, <strong className="text-text">Road Hopper</strong>, represents this
            vision—combining fast-paced arcade gameplay with clean design and an offline-friendly
            experience. Each new release builds on the lessons learned from the last, with player
            feedback playing a key role in shaping future updates and games.
          </p>
          <p>
            As SouMoster grows, the mission remains the same: to create high-quality Android games
            that are fun, polished, and memorable.
          </p>
        </div>

        <SectionHeading eyebrow="Journey" title="Timeline" align="left" />
        <Timeline />

        <SectionHeading eyebrow="Roadmap" title="Future Goals" align="left" />
        <div className="grid gap-4 sm:grid-cols-2">
          {goals.map((goal) => (
            <div key={goal} className="glass flex items-start gap-3 rounded-xl p-5 text-muted">
              <Rocket className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              {goal}
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}