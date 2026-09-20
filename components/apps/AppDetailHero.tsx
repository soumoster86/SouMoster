"use client";

import { motion } from "framer-motion";
import { Star, Users, Youtube } from "lucide-react";
import Image from "next/image";
import { GooglePlayBadge } from "@/components/shared/GooglePlayBadge";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { closedTestingJoinUrl, isInviteOnly } from "@/data/apps";
import { YOUTUBE_URL } from "@/lib/constants";
import type { App } from "@/types";

interface AppDetailHeroProps {
  app: App;
}

export function AppDetailHero({ app }: AppDetailHeroProps) {
  return (
    <section className="relative overflow-hidden pt-28 pb-16">
      <div className="hero-gradient absolute inset-0" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col items-center gap-8 text-center lg:flex-row lg:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={app.icon}
            alt={`${app.name} logo`}
            width={120}
            height={120}
            className="shadow-primary/20 rounded-3xl shadow-2xl"
            priority
          />
          <div className="flex-1 space-y-4">
            <h1 className="text-text text-4xl font-bold sm:text-5xl">
              {app.name}
            </h1>
            <p className="text-muted text-xl">{app.tagline}</p>
            <p className="text-muted max-w-2xl leading-relaxed">
              {app.longDescription}
            </p>
            <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
              <Badge variant="primary">{app.genre}</Badge>
              {app.status === "closed-testing" ? (
                <Badge variant="secondary">Closed Testing</Badge>
              ) : app.status === "in-development" ? (
                <Badge variant="secondary">In Development</Badge>
              ) : app.status === "coming-soon" ? (
                <Badge variant="secondary">Coming Soon</Badge>
              ) : null}
              <Badge>v{app.version}</Badge>
              {app.rating && (
                <Badge variant="secondary">
                  <Star className="mr-1 h-3 w-3" />
                  {app.rating}
                </Badge>
              )}
              {app.downloads && (
                <Badge variant="accent">{app.downloads} downloads</Badge>
              )}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              {isInviteOnly(app) ? (
                <>
                  <Button
                    href={closedTestingJoinUrl(app)}
                    size="lg"
                    className="shadow-primary/20 min-h-[54px] shadow-lg"
                  >
                    <Users className="h-5 w-5" />
                    {app.googleGroupUrl
                      ? "Join Google Group"
                      : "Join Closed Testing"}
                  </Button>
                  <GooglePlayBadge
                    href={app.playStoreUrl}
                    size="lg"
                    subtext="CLOSED TESTING ON"
                    title="Google Play"
                    ariaLabel={`Download ${app.name} Closed Testing Build on Google Play`}
                  />
                  <Button
                    href={app.youtubeUrl ?? YOUTUBE_URL}
                    size="lg"
                    variant="outline"
                    className="min-h-[54px]"
                  >
                    <Youtube className="h-5 w-5" />
                    Watch on YouTube
                  </Button>
                </>
              ) : (
                <>
                  <GooglePlayBadge
                    href={app.playStoreUrl}
                    size="lg"
                    subtext="GET IT ON"
                    title="Google Play"
                    ariaLabel={`Download ${app.name} on Google Play`}
                  />
                  <Button
                    href="/support"
                    variant="outline"
                    size="lg"
                    className="min-h-[54px]"
                  >
                    Get Support
                  </Button>
                  <Button
                    href={app.youtubeUrl ?? YOUTUBE_URL}
                    variant="outline"
                    size="lg"
                    className="min-h-[54px]"
                  >
                    <Youtube className="h-5 w-5" />
                    Watch on YouTube
                  </Button>
                </>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
