import type { App, FAQItem } from "@/types";

/** Translated text for one game; anything missing falls back to the English in data/apps.ts. */
export interface AppTranslation {
  tagline?: string;
  description?: string;
  longDescription?: string;
  features?: string[];
  howToPlay?: string[];
  knownIssues?: string[];
  faq?: FAQItem[];
  /** Change notes keyed by version string. */
  versionHistory?: Record<string, string[]>;
}

/** The `appContent` message namespace: translations keyed by app slug. */
export type AppContentMessages = Record<string, AppTranslation | undefined>;

export function localizeApp(app: App, content?: AppContentMessages): App {
  const tr = content?.[app.slug];
  if (!tr) return app;

  return {
    ...app,
    tagline: tr.tagline ?? app.tagline,
    description: tr.description ?? app.description,
    longDescription: tr.longDescription ?? app.longDescription,
    features: tr.features ?? app.features,
    howToPlay: tr.howToPlay ?? app.howToPlay,
    knownIssues: tr.knownIssues ?? app.knownIssues,
    faq: tr.faq ?? app.faq,
    versionHistory: app.versionHistory.map((entry) => ({
      ...entry,
      changes: tr.versionHistory?.[entry.version] ?? entry.changes,
    })),
  };
}

export function localizeApps(apps: App[], content?: AppContentMessages): App[] {
  return apps.map((app) => localizeApp(app, content));
}
