import { setRequestLocale } from "next-intl/server";
import { DeveloperIntro } from "@/components/home/DeveloperIntro";
import { FeaturedApp } from "@/components/home/FeaturedApp";
import { Hero } from "@/components/home/Hero";
import { LatestApps } from "@/components/home/LatestApps";
import { Newsletter } from "@/components/home/Newsletter";
import { Stats } from "@/components/home/Stats";
import { PageTransition } from "@/components/shared/PageTransition";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <PageTransition>
      <Hero />
      <Stats />
      <LatestApps />
      <FeaturedApp />
      <DeveloperIntro />
      <Newsletter />
    </PageTransition>
  );
}
