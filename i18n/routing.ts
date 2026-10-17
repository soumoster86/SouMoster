import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "fr", "es", "pt-BR", "hi", "zh"],
  defaultLocale: "en",
  // English keeps the existing unprefixed URLs (/apps); other languages get /fr/apps etc.
  localePrefix: "as-needed",
});

export type Locale = (typeof routing.locales)[number];

/** Native names for the language switcher. */
export const LOCALE_NAMES: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  es: "Español",
  "pt-BR": "Português (Brasil)",
  hi: "हिन्दी",
  zh: "简体中文",
};

/** BCP 47 tags for <html lang>, hreflang and Open Graph. */
export const LOCALE_TAGS: Record<Locale, string> = {
  en: "en",
  fr: "fr",
  es: "es",
  "pt-BR": "pt-BR",
  hi: "hi",
  zh: "zh-CN",
};

/** Prefix an internal href ("/apps", "/beta?game=x") with the locale; external links pass through. */
export function localizeHref(locale: string, href: string): string {
  const isInternal = href.startsWith("/") && !href.startsWith("//") && !href.startsWith("/api");
  return isInternal ? localizedPath(locale, href) : href;
}

/** Path for a locale, keeping English unprefixed. `path` starts with "/". */
export function localizedPath(locale: string, path: string): string {
  if (locale === routing.defaultLocale) return path;
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}
