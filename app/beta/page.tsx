import { BetaContent } from "@/components/beta/BetaContent";
import { PageTransition } from "@/components/shared/PageTransition";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Join Closed Beta",
  description:
    "Sign up for the SouMoster Android Closed Beta testing track on Google Play. Get exclusive pre-release access to Bank Hopper, test new mechanics, and earn tester perks.",
  path: "/beta",
});

export default function BetaPage() {
  return (
    <PageTransition>
      <BetaContent />
    </PageTransition>
  );
}
