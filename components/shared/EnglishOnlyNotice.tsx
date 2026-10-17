import { Languages } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { routing } from "@/i18n/routing";

/** Shown above pages that are deliberately kept in English (legal and data-deletion pages). */
export function EnglishOnlyNotice() {
  const locale = useLocale();
  const t = useTranslations("common.englishOnly");
  if (locale === routing.defaultLocale) return null;

  return (
    <div className="mx-auto -mb-16 max-w-5xl px-4 pt-24 sm:px-6 lg:px-8">
      <div
        role="note"
        className="flex items-start gap-3 rounded-2xl border border-secondary/30 bg-secondary/10 p-4 text-sm"
      >
        <Languages className="mt-0.5 h-5 w-5 shrink-0 text-secondary" aria-hidden="true" />
        <div>
          <p className="font-semibold text-text">{t("title")}</p>
          <p className="mt-1 text-muted">{t("message")}</p>
        </div>
      </div>
    </div>
  );
}
