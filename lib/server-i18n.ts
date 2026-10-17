import type { Metadata } from "next";
import { getMessages, getTranslations } from "next-intl/server";
import { apps } from "@/data/apps";
import { localizeApps, type AppContentMessages } from "@/lib/localized-apps";
import { generateSEO } from "@/lib/seo";

/** All games with text in the request's language (server components). */
export async function getLocalizedApps() {
  const messages = await getMessages();
  return localizeApps(apps, messages.appContent as AppContentMessages | undefined);
}

/** Title/description from the `meta` namespace (`meta.<key>.title` / `.description`). */
export async function pageMetadata(
  locale: string,
  key: string,
  path: string,
  options: { englishOnly?: boolean } = {},
): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "meta" });
  return generateSEO({
    title: t(`${key}.title`),
    description: t(`${key}.description`),
    path,
    locale,
    englishOnly: options.englishOnly,
  });
}
