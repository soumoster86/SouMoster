import { setRequestLocale } from "next-intl/server";
import { DeveloperIntro } from "@/components/home/DeveloperIntro";
import { GameSlate } from "@/components/home/GameSlate";
import { Hero } from "@/components/home/Hero";
import { Newsletter } from "@/components/home/Newsletter";
import { Spotlight } from "@/components/home/Spotlight";
import { Stats } from "@/components/home/Stats";
import { StudioTicker } from "@/components/home/StudioTicker";
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
      <StudioTicker />
      <Stats />
      <GameSlate />
      <Spotlight />
      <DeveloperIntro />
      <Newsletter />
    </PageTransition>
  );
}
