"use client";

import { motion } from "framer-motion";
import { ChevronDown, Download, Gamepad2 } from "lucide-react";
import Image from "next/image";
import { BrandIcon } from "@/components/shared/BrandIcon";
import { PhoneFrame } from "@/components/shared/PhoneFrame";
import { Button } from "@/components/ui/Button";
import { getFeaturedApp } from "@/data/apps";
import { PLAY_STORE_DEV_URL } from "@/lib/constants";

const floatingShapes = [
  { size: 60, x: "10%", y: "20%", delay: 0, color: "bg-primary/20" },
  { size: 40, x: "80%", y: "15%", delay: 1, color: "bg-secondary/20" },
  { size: 50, x: "70%", y: "70%", delay: 2, color: "bg-accent/20" },
  { size: 30, x: "20%", y: "75%", delay: 0.5, color: "bg-primary/15" },
  { size: 45, x: "50%", y: "10%", delay: 1.5, color: "bg-secondary/15" },
];

export function Hero() {
  const featuredApp = getFeaturedApp();
  const heroScreenshot = featuredApp?.screenshots[0] ?? featuredApp?.banner;

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <div className="hero-gradient absolute inset-0" />

      {floatingShapes.map((shape, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${shape.color} blur-sm`}
          style={{ width: shape.size, height: shape.size, left: shape.x, top: shape.y }}
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay: shape.delay, ease: "easeInOut" }}
          aria-hidden="true"
        />
      ))}

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="text-center lg:text-left">
            <motion.div
              className="mb-6 flex justify-center lg:justify-start"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
            >
              <BrandIcon
                size={72}
                className="rounded-2xl shadow-xl shadow-primary/30 ring-1 ring-white/10"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                Android Game Developer
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="gradient-text">SouMoster</span>
            </motion.h1>

            <motion.p
              className="mt-6 text-xl text-muted sm:text-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Building fun Android games.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button href={PLAY_STORE_DEV_URL} size="lg">
                <Download className="h-5 w-5" />
                Download on Google Play
              </Button>
              <Button href="/apps" variant="outline" size="lg">
                <Gamepad2 className="h-5 w-5" />
                Explore Apps
              </Button>
            </motion.div>
          </div>

          {heroScreenshot && featuredApp && (
            <motion.div
              className="relative flex justify-center lg:justify-end"
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 80 }}
            >
              <motion.div
                className="relative"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div
                  className="absolute inset-0 scale-110 rounded-[3rem] bg-primary/20 blur-3xl"
                  aria-hidden="true"
                />
                <PhoneFrame
                  src={featuredApp.gameplayVideo ? undefined : heroScreenshot}
                  videoSrc={featuredApp.gameplayVideo}
                  poster={heroScreenshot}
                  alt={`${featuredApp.name} gameplay`}
                  size="lg"
                  priority
                />
                <motion.div
                  className="absolute -right-2 -bottom-2 flex items-center gap-2 rounded-2xl border border-border bg-card/90 px-3 py-2 shadow-lg backdrop-blur-sm sm:-right-4 sm:-bottom-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Image
                    src={featuredApp.icon}
                    alt=""
                    width={32}
                    height={32}
                    className="rounded-lg"
                    aria-hidden="true"
                  />
                  <div className="text-left">
                    <p className="text-xs font-semibold text-text">{featuredApp.name}</p>
                    <p className="text-xs text-muted">Available now</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </div>

        <motion.a
          href="#stats"
          className="mt-16 flex flex-col items-center gap-1 text-muted transition-colors hover:text-primary lg:mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          aria-label="Scroll to explore"
        >
          <span className="text-xs font-medium tracking-wider uppercase">Explore</span>
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
}