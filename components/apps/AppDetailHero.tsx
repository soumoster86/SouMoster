"use client";

import { motion } from "framer-motion";
import { Bell, Star, Users, Youtube } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { GooglePlayBadge } from "@/components/shared/GooglePlayBadge";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  closedTestingJoinUrl,
  hasBuildVersion,
  isInDevelopment,
  isInviteOnly,
} from "@/data/apps";
import { YOUTUBE_URL } from "@/lib/constants";
import type { App } from "@/types";

interface AppDetailHeroProps {
  app: App;
}

export function AppDetailHero({ app }: AppDetailHeroProps) {
  const t = useTranslations("common");
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
            alt={t("a11y.appLogo", { name: app.name })}
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
              <Badge variant="primary">{t(`genre.${app.genre}`)}</Badge>
              {app.status === "closed-testing" ? (
                <Badge variant="secondary">{t("status.closedTesting")}</Badge>
              ) : app.status === "in-development" ? (
                <Badge variant="secondary">{t("status.inDevelopment")}</Badge>
              ) : app.status === "coming-soon" ? (
                <Badge variant="secondary">{t("status.comingSoon")}</Badge>
              ) : null}
              {isInDevelopment(app) ? (
                hasBuildVersion(app) && (
                  <Badge>{t("badge.devBuild", { version: app.version })}</Badge>
                )
              ) : (
                <Badge>{t("badge.version", { version: app.version })}</Badge>
              )}
              {app.rating && (
                <Badge variant="secondary">
                  <Star className="mr-1 h-3 w-3" />
                  {app.rating}
                </Badge>
              )}
              {app.downloads && (
                <Badge variant="accent">
                  {t("badge.downloads", { count: app.downloads })}
                </Badge>
              )}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              {isInDevelopment(app) ? (
                <>
                  <Button
                    href={`/beta?game=${app.slug}`}
                    size="lg"
                    className="shadow-primary/20 min-h-[54px] shadow-lg"
                  >
                    <Bell className="h-5 w-5" />
                    {t("actions.getNotified")}
                  </Button>
                  <Button
                    href={app.youtubeUrl ?? YOUTUBE_URL}
                    size="lg"
                    variant="outline"
                    className="min-h-[54px]"
                  >
                    <Youtube className="h-5 w-5" />
                    {t("actions.followOnYouTube")}
                  </Button>
                </>
              ) : isInviteOnly(app) ? (
                <>
                  <Button
                    href={closedTestingJoinUrl(app)}
                    size="lg"
                    className="shadow-primary/20 min-h-[54px] shadow-lg"
                  >
                    <Users className="h-5 w-5" />
                    {app.googleGroupUrl
                      ? t("actions.joinGoogleGroup")
                      : t("actions.joinClosedTesting")}
                  </Button>
                  <GooglePlayBadge
                    href={app.playStoreUrl}
                    size="lg"
                    subtext={t("playBadge.closedTestingOn")}
                    title="Google Play"
                    ariaLabel={t("playBadge.downloadTestBuild", { name: app.name })}
                  />
                  <Button
                    href={app.youtubeUrl ?? YOUTUBE_URL}
                    size="lg"
                    variant="outline"
                    className="min-h-[54px]"
                  >
                    <Youtube className="h-5 w-5" />
                    {t("actions.watchOnYouTube")}
                  </Button>
                </>
              ) : (
                <>
                  <GooglePlayBadge
                    href={app.playStoreUrl}
                    size="lg"
                    title="Google Play"
                    ariaLabel={t("playBadge.downloadApp", { name: app.name })}
                  />
                  <Button
                    href="/support"
                    variant="outline"
                    size="lg"
                    className="min-h-[54px]"
                  >
                    {t("actions.getSupport")}
                  </Button>
                  <Button
                    href={app.youtubeUrl ?? YOUTUBE_URL}
                    variant="outline"
                    size="lg"
                    className="min-h-[54px]"
                  >
                    <Youtube className="h-5 w-5" />
                    {t("actions.watchOnYouTube")}
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
