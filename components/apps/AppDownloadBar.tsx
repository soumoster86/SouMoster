"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Download } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import type { App } from "@/types";

interface AppDownloadBarProps {
  app: App;
}

export function AppDownloadBar({ app }: AppDownloadBarProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 420);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.25 }}
          className="border-border glass fixed right-0 bottom-0 left-0 z-50 border-t px-4 py-3 shadow-2xl shadow-black/20"
          role="complementary"
          aria-label={`Download ${app.name}`}
        >
          <div className="mx-auto flex max-w-7xl items-center gap-3 sm:gap-4">
            <Image
              src={app.icon}
              alt=""
              width={40}
              height={40}
              className="shrink-0 rounded-xl"
              aria-hidden="true"
            />
            <div className="min-w-0 flex-1">
              <p className="text-text truncate text-sm font-semibold">
                {app.name}
              </p>
              <p className="text-muted truncate text-xs">{app.tagline}</p>
            </div>
            {app.status === "in-development" ? (
              <Button
                href={app.playStoreUrl}
                size="sm"
                variant="secondary"
                className="shrink-0"
              >
                <span className="hidden sm:inline">In Development</span>
                <span className="sm:hidden">In Dev</span>
              </Button>
            ) : (
              <Button href={app.playStoreUrl} size="sm" className="shrink-0">
                <Download className="h-4 w-4" />
                <span className="hidden sm:inline">Download</span>
                <span className="sm:hidden">Get</span>
              </Button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
