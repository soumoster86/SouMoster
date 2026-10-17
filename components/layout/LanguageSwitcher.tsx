"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, Globe } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useRef, useState, useTransition } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { LOCALE_NAMES, routing, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { LocaleFlag } from "./LocaleFlag";

interface LanguageSwitcherProps {
  /** "menu": compact globe button with a dropdown; "list": inline list for the mobile menu. */
  variant?: "menu" | "list";
  onSelect?: () => void;
}

export function LanguageSwitcher({ variant = "menu", onSelect }: LanguageSwitcherProps) {
  const t = useTranslations("common.language");
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const close = (event: MouseEvent | KeyboardEvent) => {
      if (event instanceof KeyboardEvent) {
        if (event.key === "Escape") setOpen(false);
        return;
      }
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    document.addEventListener("keydown", close);
    return () => {
      document.removeEventListener("mousedown", close);
      document.removeEventListener("keydown", close);
    };
  }, [open]);

  const switchTo = (next: Locale) => {
    setOpen(false);
    onSelect?.();
    if (next === locale) return;
    // Keep the query string (e.g. /beta?game=time-hopper) when switching.
    const search = window.location.search;
    startTransition(() => {
      router.replace(`${pathname}${search}`, { locale: next, scroll: false });
    });
  };

  const options = routing.locales.map((code) => {
    const active = code === locale;
    return (
      <li key={code}>
        <button
          type="button"
          lang={code}
          onClick={() => switchTo(code)}
          aria-current={active ? "true" : undefined}
          className={cn(
            "flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors",
            active ? "bg-primary/15 text-primary" : "text-muted hover:text-text hover-surface",
          )}
        >
          <span className="flex items-center gap-2.5">
            <LocaleFlag locale={code} />
            {LOCALE_NAMES[code]}
          </span>
          {active && <Check className="h-4 w-4 shrink-0" aria-hidden="true" />}
        </button>
      </li>
    );
  });

  if (variant === "list") {
    return (
      <div>
        <p className="mb-1 flex items-center gap-2 px-4 pt-2 text-xs font-semibold tracking-wider text-muted uppercase">
          <Globe className="h-3.5 w-3.5" aria-hidden="true" />
          {t("label")}
        </p>
        <ul className="grid grid-cols-2 gap-1" aria-label={t("choose")}>
          {options}
        </ul>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className={cn(
          "hover-surface flex items-center gap-1.5 rounded-lg p-2 text-sm font-medium text-muted transition-colors hover:text-text",
          isPending && "opacity-60",
        )}
        aria-label={t("choose")}
        aria-haspopup="true"
        aria-expanded={open}
      >
        <LocaleFlag locale={locale} className="h-4 w-6" />
        <span className="hidden uppercase sm:inline">{locale === "pt-BR" ? "PT" : locale}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-52 space-y-0.5 rounded-xl border border-border bg-card p-1.5 shadow-2xl shadow-black/30"
            aria-label={t("choose")}
          >
            {options}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
