import type { MetadataRoute } from "next";
import { apps } from "@/data/apps";
import { LOCALE_TAGS, localizedPath, routing } from "@/i18n/routing";
import { getAllPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/constants";

type Entry = MetadataRoute.Sitemap[number];

/** Pages kept in English only: listed once, without language alternates. */
const ENGLISH_ONLY = ["/privacy", "/privacy/nitro-racer", "/terms", "/delete-data"];

const TRANSLATED = ["", "/apps", "/about", "/beta", "/support", "/contact", "/blog", "/press"];

/** One entry per language, each listing every language version (hreflang). */
function localizedEntries(path: string, entry: Omit<Entry, "url">): Entry[] {
  const base = path || "/";
  const languages = Object.fromEntries(
    routing.locales.map((locale) => [
      LOCALE_TAGS[locale],
      `${SITE_URL}${localizedPath(locale, base)}`,
    ]),
  );
  return routing.locales.map((locale) => ({
    ...entry,
    url: `${SITE_URL}${localizedPath(locale, base)}`,
    alternates: { languages },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const translatedPages = TRANSLATED.flatMap((path) =>
    localizedEntries(path, {
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: path === "" ? 1 : 0.8,
    }),
  );

  const englishPages: Entry[] = ENGLISH_ONLY.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  const appPages = apps.flatMap((app) => {
    const parsedDate = new Date(app.releaseDate);
    return localizedEntries(`/apps/${app.slug}`, {
      lastModified: Number.isNaN(parsedDate.getTime()) ? new Date() : parsedDate,
      changeFrequency: "weekly",
      priority: 0.9,
    });
  });

  // Blog posts are written in English.
  const blogPages: Entry[] = getAllPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...translatedPages, ...englishPages, ...appPages, ...blogPages];
}
