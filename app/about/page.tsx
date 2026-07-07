"use client";

import { motion } from "framer-motion";
import { Eye, Rocket, Target } from "lucide-react";
import { PageTransition } from "@/components/shared/PageTransition";
import { SectionHeading } from "@/components/ui/SectionHeading";

const timeline = [
  {
    period: "2024",
    title: "The Beginning",
    description:
      "Started the journey into Android development and game design, learning the fundamentals of mobile app development, game mechanics, and modern development tools.",
  },
  {
    period: "2025",
    title: "First Prototypes",
    description:
      "Developed multiple game prototypes, explored different gameplay concepts, and strengthened skills in Android development, UI/UX design, and game optimization.",
  },
  {
    period: "Early 2026",
    title: "First Release",
    description:
      "Successfully launched Road Hopper on Google Play, marking SouMoster's first published Android game and the beginning of its public journey.",
  },
  {
    period: "July 2026",
    title: "Building the Future",
    description:
      "Expanding the SouMoster portfolio with new Android games, introducing fresh gameplay ideas, enhancing existing titles, and continuously improving the player experience based on community feedback.",
  },
  {
    period: "Looking Ahead",
    title: "The Vision",
    description:
      "The vision for SouMoster is to grow into a recognizable indie game studio, releasing a diverse collection of high-quality Android games that entertain players around the world.",
  },
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

        <SectionHeading title="Timeline" align="left" />
        <div className="relative mb-20 space-y-8 border-l-2 border-primary/30 pl-8">
          {timeline.map((item, index) => (
            <motion.div
              key={`${item.period}-${item.title}`}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="absolute -left-[41px] h-4 w-4 rounded-full bg-primary" />
              <span className="text-sm font-bold text-primary">{item.period}</span>
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