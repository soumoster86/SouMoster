"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { usePathname } from "next/navigation";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { cn } from "@/lib/utils";

export function ScrollToTop() {
  const pathname = usePathname();
  const { showScrollTop } = useScrollPosition();
  const isAppDetail = /^\/apps\/[^/]+$/.test(pathname);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className={cn(
            "fixed right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30 transition-colors hover:bg-primary/90",
            isAppDetail ? "bottom-24" : "bottom-6",
          )}
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}