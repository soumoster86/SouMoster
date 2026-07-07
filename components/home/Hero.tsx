"use client";

import { motion } from "framer-motion";
import { Download, Gamepad2 } from "lucide-react";
import { BrandIcon } from "@/components/shared/BrandIcon";
import { Button } from "@/components/ui/Button";
import { PLAY_STORE_DEV_URL } from "@/lib/constants";

const floatingShapes = [
  { size: 60, x: "10%", y: "20%", delay: 0, color: "bg-primary/20" },
  { size: 40, x: "80%", y: "15%", delay: 1, color: "bg-secondary/20" },
  { size: 50, x: "70%", y: "70%", delay: 2, color: "bg-accent/20" },
  { size: 30, x: "20%", y: "75%", delay: 0.5, color: "bg-primary/15" },
  { size: 45, x: "50%", y: "10%", delay: 1.5, color: "bg-secondary/15" },
];

export function Hero() {
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

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            className="mb-8 flex justify-center"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 120 }}
          >
            <motion.div
              className="relative"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div
                className="absolute inset-0 scale-110 rounded-[2rem] bg-primary/25 blur-2xl"
                aria-hidden="true"
              />
              <BrandIcon
                size={148}
                className="relative rounded-[2rem] shadow-2xl shadow-primary/40 ring-1 ring-white/10"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-6 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
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
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
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
      </div>
    </section>
  );
}