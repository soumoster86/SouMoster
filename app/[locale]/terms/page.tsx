import { setRequestLocale } from "next-intl/server";
import { TermsContent } from "@/components/terms/TermsContent";
import { EnglishOnlyNotice } from "@/components/shared/EnglishOnlyNotice";
import { PageTransition } from "@/components/shared/PageTransition";
import { pageMetadata } from "@/lib/server-i18n";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  return pageMetadata(locale, "terms", "/terms", { englishOnly: true });
}

// Kept in English on purpose: the English text is the official version.
export default async function TermsPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <PageTransition>
      <EnglishOnlyNotice />
      <div lang="en">
        <TermsContent />
      </div>
    </PageTransition>
  );
}
