"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown, Gamepad2, Users, Youtube } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { StageDot } from "@/components/home/StageDot";
import { BrandIcon } from "@/components/shared/BrandIcon";
import { Button } from "@/components/ui/Button";
import { useLocalizedApps } from "@/hooks/useLocalizedApps";
import { Link } from "@/i18n/navigation";
import { YOUTUBE_URL } from "@/lib/constants";
import type { App } from "@/types";

function WallTile({ app, priority }: { app: App; priority?: boolean }) {
  return (
    <Link
      href={`/apps/${app.slug}`}
      className="group border-border/60 bg-card relative block aspect-[2/1] overflow-hidden rounded-2xl border shadow-xl shadow-black/30"
    >
      <Image
        src={app.banner}
        alt=""
        fill
        priority={priority}
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 1024px) 50vw, 300px"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
      <div className="absolute right-2 bottom-2 left-2 flex items-center gap-2">
        <Image
          src={app.icon}
          alt=""
          width={28}
          height={28}
          className="rounded-lg ring-1 ring-white/30"
        />
        <span className="truncate text-xs font-semibold text-white sm:text-sm">
          {app.name}
        </span>
        <StageDot status={app.status} className="ml-auto" />
      </div>
    </Link>
  );
}

export function Hero() {
  const t = useTranslations("home.hero");
  const tc = useTranslations("common.actions");
  const apps = useLocalizedApps();
  const reduceMotion = useReducedMotion();
  const testing = apps.find((app) => app.status === "closed-testing");
  const columns = [
    apps.filter((_, i) => i % 2 === 0),
    apps.filter((_, i) => i % 2 === 1),
  ];

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <div className="hero-gradient absolute inset-0" />
      <div className="studio-grid absolute inset-0" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
          <div className="text-center lg:text-left">
            <motion.div
              className="mb-6 flex items-center justify-center gap-3 lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <BrandIcon
                size={44}
                className="shadow-primary/30 rounded-xl shadow-lg ring-1 ring-white/10"
              />
              <span className="border-primary/30 bg-primary/10 text-primary rounded-full border px-4 py-1.5 text-sm font-medium">
                {t("badge")}
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="text-muted block text-lg font-semibold tracking-[0.3em] uppercase sm:text-xl">
                SouMoster
              </span>
              <span className="gradient-text mt-2 block leading-tight">
                {t("headline")}
              </span>
            </motion.h1>

            <motion.p
              className="text-muted mx-auto mt-6 max-w-xl text-lg sm:text-xl lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t("subtitle")}
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button href="/apps" size="lg" className="min-h-[52px] whitespace-nowrap">
                <Gamepad2 className="h-5 w-5" />
                {t("exploreApps")}
              </Button>
              {testing && (
                <Button
                  href={`/beta?game=${testing.slug}`}
                  variant="outline"
                  size="lg"
                  className="min-h-[52px] whitespace-nowrap"
                >
                  <Users className="h-5 w-5" />
                  {tc("joinClosedTesting")}
                </Button>
              )}
            </motion.div>

            <motion.a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-primary mt-6 inline-flex items-center gap-2 text-sm font-medium transition-colors"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Youtube className="h-4 w-4" />
              {t("watchTrailers")}
            </motion.a>
          </div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div
              className="bg-primary/20 absolute inset-8 rounded-full blur-3xl"
              aria-hidden="true"
            />
            <nav
              aria-label={t("wallLabel")}
              className="relative grid grid-cols-2 gap-3 sm:gap-4 lg:-rotate-3"
            >
              {columns.map((column, c) => (
                <motion.div
                  key={c}
                  className={`flex flex-col gap-3 sm:gap-4 ${c === 1 ? "lg:mt-12" : ""}`}
                  animate={reduceMotion ? undefined : { y: c === 0 ? [0, -10, 0] : [0, 10, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                >
                  {column.map((app, i) => (
                    <WallTile key={app.slug} app={app} priority={i === 0} />
                  ))}
                </motion.div>
              ))}
            </nav>
          </motion.div>
        </div>

        <motion.a
          href="#stats"
          className="text-muted hover:text-primary mt-14 flex flex-col items-center gap-1 transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          aria-label={t("scrollToExplore")}
        >
          <span className="text-xs font-medium tracking-wider uppercase">
            {t("explore")}
          </span>
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
}
