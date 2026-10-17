import { setRequestLocale } from "next-intl/server";
import { BetaContent } from "@/components/beta/BetaContent";
import { PageTransition } from "@/components/shared/PageTransition";
import { pageMetadata } from "@/lib/server-i18n";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  return pageMetadata(locale, "beta", "/beta");
}

export default async function BetaPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <PageTransition>
      <BetaContent />
    </PageTransition>
  );
}
