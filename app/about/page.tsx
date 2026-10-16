"use client";

import { motion } from "framer-motion";
import { Eye, Rocket, Target } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Timeline } from "@/components/about/Timeline";
import { PageTransition } from "@/components/shared/PageTransition";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { apps, hasBuildVersion } from "@/data/apps";
import type { App } from "@/types";

const STATUS_LABEL: Record<NonNullable<App["status"]>, string> = {
  live: "Live on Google Play",
  "closed-testing": "Closed Testing",
  "in-development": "In development",
  "coming-soon": "Coming soon",
};

const goals = [
  "Take Time Hopper from Closed Testing to a worldwide Google Play launch",
  "Bring Space Hopper to Google Play Closed Testing",
  "Take Arena Legends, our first action game, from first playable build to testing",
  "Keep improving Road Hopper and Bank Hopper with player feedback",
  "Grow the SouMosterGames YouTube channel with trailers and developer diaries",
  "Release 3+ new Android games by 2027",
  "Build a community of 100K+ players",
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
            <Target className="text-primary mb-4 h-10 w-10" />
            <h3 className="text-text mb-3 text-xl font-semibold">
              Our Mission
            </h3>
            <p className="text-muted leading-relaxed">
              To create fun, addictive, and high-quality Android games that
              bring joy to players around the world. We believe great games
              don&apos;t need big budgets — just passion, creativity, and
              attention to detail.
            </p>
          </motion.div>

          <motion.div
            className="glass rounded-2xl p-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Eye className="text-secondary mb-4 h-10 w-10" />
            <h3 className="text-text mb-3 text-xl font-semibold">Our Vision</h3>
            <p className="text-muted leading-relaxed">
              To become a recognized indie Android game studio known for
              polished gameplay, beautiful design, and a strong community of
              players who love what we create.
            </p>
          </motion.div>
        </div>

        <SectionHeading title="Developer Story" align="left" />
        <div className="text-muted mb-20 max-w-3xl space-y-4 leading-relaxed">
          <p>
            SouMoster is an independent Android game studio founded by a solo
            developer with a passion for creating fun, accessible, and engaging
            mobile games. What began as a personal journey to learn Android
            development has evolved into a commitment to building polished
            gaming experiences that players can enjoy anytime, anywhere.
          </p>
          <p>
            Every project is driven by a simple philosophy:{" "}
            <strong className="text-text">
              great games don&apos;t have to be complicated
            </strong>
            . By focusing on intuitive controls, satisfying gameplay, and
            continuous improvement, SouMoster aims to deliver games that are
            easy to pick up, difficult to put down, and enjoyable for players of
            all ages.
          </p>
          <p>
            Our debut title, <strong className="text-text">Road Hopper</strong>,
            launched on Google Play in July 2026, combining fast-paced arcade
            gameplay with clean design and offline play. It was followed in
            October 2026 by <strong className="text-text">Bank Hopper</strong>,
            a one-thumb bank heist that went live after a Closed Test with
            players from our community.
          </p>
          <p>
            <strong className="text-text">Time Hopper</strong>, a seven-era
            time-travel runner built around the Time Hop, is now in Google Play
            Closed Testing. <strong className="text-text">Space Hopper</strong>{" "}
            is being prepared for testing, and{" "}
            <strong className="text-text">Arena Legends</strong>, our first
            action game, takes SouMoster beyond the Hopper series into real-time
            gladiator combat. Each release builds on the lessons of the last,
            with player feedback shaping every update.
          </p>
          <p>
            Follow trailers, gameplay, and behind-the-scenes videos on YouTube
            at{" "}
            <a
              href="https://www.youtube.com/@SouMosterGames"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium hover:underline"
            >
              @SouMosterGames
            </a>
            . As SouMoster grows, the mission stays the same: to create
            high-quality Android games that are fun, polished, and memorable.
          </p>
        </div>

        <SectionHeading
          eyebrow="Our Games"
          title="Where Every Game Stands"
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
                <p className="text-muted truncate text-xs">{app.genre}</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  <Badge
                    variant={app.status === "live" ? "accent" : "secondary"}
                  >
                    {STATUS_LABEL[app.status ?? "live"]}
                  </Badge>
                  {hasBuildVersion(app) && <Badge>v{app.version}</Badge>}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <SectionHeading eyebrow="Journey" title="Timeline" align="left" />
        <Timeline />

        <SectionHeading eyebrow="Roadmap" title="Future Goals" align="left" />
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
