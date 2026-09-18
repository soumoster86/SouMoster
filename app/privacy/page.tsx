import { PageTransition } from "@/components/shared/PageTransition";
import { PrivacyContent } from "@/components/privacy/PrivacyContent";
import { SITE_NAME } from "@/lib/constants";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Privacy Policy",
  description: `Comprehensive Privacy Policy for ${SITE_NAME} Android games, mobile applications, and services. Compliant with EU GDPR, UK GDPR, Google Play Families, and international standards.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <PageTransition>
      <PrivacyContent />
    </PageTransition>
  );
}
