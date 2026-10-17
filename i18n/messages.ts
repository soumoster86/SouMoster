import type { AbstractIntlMessages } from "next-intl";
import { routing } from "./routing";

/** One JSON file per section in messages/<locale>/. */
export const NAMESPACES = [
  "common",
  "meta",
  "home",
  "apps",
  "about",
  "beta",
  "contact",
  "support",
  "press",
  "blog",
  "appContent",
] as const;

type Messages = Record<string, unknown>;

function isObject(value: unknown): value is Messages {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

/** Overlay `override` on `base`; arrays and strings are replaced, objects merged. */
function deepMerge(base: Messages, override: Messages): Messages {
  const result: Messages = { ...base };
  for (const [key, value] of Object.entries(override)) {
    result[key] =
      isObject(value) && isObject(base[key])
        ? deepMerge(base[key] as Messages, value)
        : value;
  }
  return result;
}

async function loadLocale(locale: string): Promise<Messages> {
  const entries = await Promise.all(
    NAMESPACES.map(async (ns) => {
      try {
        const mod = await import(`../messages/${locale}/${ns}.json`);
        return [ns, mod.default as Messages] as const;
      } catch {
        return [ns, {}] as const;
      }
    }),
  );
  return Object.fromEntries(entries);
}

/** Locale messages, with English filling any key a translation doesn't have yet. */
export async function loadMessages(locale: string): Promise<AbstractIntlMessages> {
  const english = await loadLocale(routing.defaultLocale);
  if (locale === routing.defaultLocale) return english as AbstractIntlMessages;
  return deepMerge(english, await loadLocale(locale)) as AbstractIntlMessages;
}
