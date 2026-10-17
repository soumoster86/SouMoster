import { setRequestLocale } from "next-intl/server";
import { PrivacyContent } from "@/components/privacy/PrivacyContent";
import { EnglishOnlyNotice } from "@/components/shared/EnglishOnlyNotice";
import { PageTransition } from "@/components/shared/PageTransition";
import { pageMetadata } from "@/lib/server-i18n";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  return pageMetadata(locale, "privacy", "/privacy", { englishOnly: true });
}

// Kept in English on purpose: the English text is the official version.
export default async function PrivacyPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <PageTransition>
      <EnglishOnlyNotice />
      <div lang="en">
        <PrivacyContent />
      </div>
    </PageTransition>
  );
}
