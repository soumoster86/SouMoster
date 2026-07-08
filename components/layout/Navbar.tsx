"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BrandIcon } from "@/components/shared/BrandIcon";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS, PLAY_STORE_DEV_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useTheme } from "@/hooks/useTheme";
import { useScrollPosition } from "@/hooks/useScrollPosition";

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();
  const { isScrolled } = useScrollPosition();

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
        isScrolled ? "glass shadow-lg" : "bg-transparent",
      )}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link href="/" className="flex items-center gap-2.5" aria-label="SouMoster Home">
          <BrandIcon size={40} className="rounded-xl shadow-lg shadow-primary/20" />
          <span className="font-heading text-xl font-bold text-text">SouMoster</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                  isActive ? "text-primary" : "text-muted hover:text-text hover-surface",
                )}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute right-4 bottom-1 left-4 h-0.5 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <Button
            href={PLAY_STORE_DEV_URL}
            size="sm"
            className="hidden lg:inline-flex"
            ariaLabel="Download on Google Play"
          >
            <Download className="h-4 w-4" />
            Download
          </Button>

          {mounted && (
            <button
              onClick={toggleTheme}
              className="hover-surface rounded-lg p-2 text-muted transition-colors hover:text-text"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          )}

          <button
            className="hover-surface rounded-lg p-2 text-muted transition-colors hover:text-text md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="glass border-t border-border md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              <Button href={PLAY_STORE_DEV_URL} size="sm" className="mb-2 w-full lg:hidden">
                <Download className="h-4 w-4" />
                Download on Google Play
              </Button>
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                    pathname === link.href
                      ? "bg-primary/20 text-primary"
                      : "text-muted hover:text-text",
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}