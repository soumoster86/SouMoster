"use client";

import { useMessages } from "next-intl";
import { useMemo } from "react";
import { apps } from "@/data/apps";
import { localizeApps, type AppContentMessages } from "@/lib/localized-apps";

/** All games with text in the current language. */
export function useLocalizedApps() {
  const messages = useMessages();
  const content = messages.appContent as AppContentMessages | undefined;
  return useMemo(() => localizeApps(apps, content), [content]);
}
