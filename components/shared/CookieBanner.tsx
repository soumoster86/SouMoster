"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Cookie } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed right-4 bottom-4 left-4 z-50 mx-auto max-w-lg"
          role="dialog"
          aria-label="Cookie consent"
        >
          <div className="glass flex items-start gap-4 rounded-2xl p-5 shadow-2xl">
            <Cookie className="h-6 w-6 shrink-0 text-secondary" />
            <div className="flex-1">
              <p className="text-sm text-text">
                We use cookies to improve your experience and analyze site traffic. By continuing,
                you agree to our use of cookies.
              </p>
              <div className="mt-3 flex gap-2">
                <Button size="sm" onClick={accept}>
                  Accept
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  href="/privacy"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}