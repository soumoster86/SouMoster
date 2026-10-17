import { setRequestLocale } from "next-intl/server";
import { pageMetadata } from "@/lib/server-i18n";

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: LayoutProps) {
  const { locale } = await params;
  return pageMetadata(locale, "apps", "/apps");
}

export default async function AppsLayout({ children, params }: LayoutProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  return children;
}
