import { BetaContent } from "@/components/beta/BetaContent";
import { PageTransition } from "@/components/shared/PageTransition";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Join Closed Beta",
  description:
    "Time Hopper v1.13.2 is in Google Play Closed Testing, and Bank Hopper is now live on Google Play. Sign up for the SouMoster tester track, install from Play, and watch trailers on YouTube @SouMosterGames.",
  path: "/beta",
});

export default function BetaPage() {
  return (
    <PageTransition>
      <BetaContent />
    </PageTransition>
  );
}
