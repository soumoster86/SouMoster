"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import { PhoneFrame } from "@/components/shared/PhoneFrame";
import { cn } from "@/lib/utils";

interface ScreenshotCarouselProps {
  screenshots: string[];
  appName: string;
  orientation?: "portrait" | "landscape";
}

export function ScreenshotCarousel({
  screenshots,
  appName,
  orientation = "portrait",
}: ScreenshotCarouselProps) {
  const t = useTranslations("common.a11y");
  const landscape = orientation === "landscape";
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? screenshots.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === screenshots.length - 1 ? 0 : c + 1));

  return (
    <div className="relative" aria-label={t("screenshots")}>
      <div
        className={cn(
          "relative mx-auto",
          landscape ? "max-w-3xl px-6 sm:px-0" : "max-w-xs sm:max-w-sm",
        )}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.3 }}
          >
            <PhoneFrame
              src={screenshots[current]}
              alt={t("screenshotAlt", { name: appName, number: current + 1 })}
              size="md"
              orientation={orientation}
            />
          </motion.div>
        </AnimatePresence>

        <button
          onClick={prev}
          className="absolute top-1/2 -left-4 z-10 -translate-y-1/2 rounded-full bg-background/90 p-2 text-text shadow-lg backdrop-blur-sm transition-colors hover:bg-primary hover:text-white sm:-left-12"
          aria-label={t("previousScreenshot")}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={next}
          className="absolute top-1/2 -right-4 z-10 -translate-y-1/2 rounded-full bg-background/90 p-2 text-text shadow-lg backdrop-blur-sm transition-colors hover:bg-primary hover:text-white sm:-right-12"
          aria-label={t("nextScreenshot")}
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {screenshots.map((screenshot, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={cn(
              "relative overflow-hidden rounded-lg border-2 transition-all",
              landscape ? "h-9 w-16 sm:h-11 sm:w-20" : "h-16 w-9 sm:h-20 sm:w-11",
              i === current
                ? "border-primary shadow-lg shadow-primary/25"
                : "border-border opacity-60 hover:opacity-100",
            )}
            aria-label={t("goToScreenshot", { number: i + 1 })}
            aria-current={i === current ? "true" : undefined}
          >
            <Image
              src={screenshot}
              alt=""
              fill
              className="object-cover object-top"
              sizes={landscape ? "80px" : "44px"}
              aria-hidden="true"
            />
          </button>
        ))}
      </div>
    </div>
  );
}