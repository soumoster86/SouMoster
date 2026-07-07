import { DeveloperIntro } from "@/components/home/DeveloperIntro";
import { FeaturedApp } from "@/components/home/FeaturedApp";
import { Hero } from "@/components/home/Hero";
import { LatestApps } from "@/components/home/LatestApps";
import { Newsletter } from "@/components/home/Newsletter";
import { Stats } from "@/components/home/Stats";
import { Testimonials } from "@/components/home/Testimonials";
import { PageTransition } from "@/components/shared/PageTransition";

export default function HomePage() {
  return (
    <PageTransition>
      <Hero />
      <Stats />
      <LatestApps />
      <FeaturedApp />
      <DeveloperIntro />
      <Testimonials />
      <Newsletter />
    </PageTransition>
  );
}