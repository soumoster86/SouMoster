"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ScreenshotCarouselProps {
  screenshots: string[];
  appName: string;
}

export function ScreenshotCarousel({ screenshots, appName }: ScreenshotCarouselProps) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? screenshots.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === screenshots.length - 1 ? 0 : c + 1));

  return (
    <div className="relative" aria-label="Gameplay screenshots">
      <div className="relative aspect-video overflow-hidden rounded-2xl bg-card">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="relative h-full w-full"
          >
            <Image
              src={screenshots[current]}
              alt={`${appName} screenshot ${current + 1}`}
              fill
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <button
          onClick={prev}
          className="absolute top-1/2 left-3 -translate-y-1/2 rounded-full bg-background/80 p-2 text-text backdrop-blur-sm transition-colors hover:bg-primary"
          aria-label="Previous screenshot"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={next}
          className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full bg-background/80 p-2 text-text backdrop-blur-sm transition-colors hover:bg-primary"
          aria-label="Next screenshot"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="mt-4 flex justify-center gap-2">
        {screenshots.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all ${
              i === current ? "w-8 bg-primary" : "w-2 bg-muted/40"
            }`}
            aria-label={`Go to screenshot ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}