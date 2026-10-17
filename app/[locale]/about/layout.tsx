import { setRequestLocale } from "next-intl/server";
import { pageMetadata } from "@/lib/server-i18n";

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: LayoutProps) {
  const { locale } = await params;
  return pageMetadata(locale, "about", "/about");
}

export default async function AboutLayout({ children, params }: LayoutProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  return children;
}
