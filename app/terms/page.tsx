import { PageTransition } from "@/components/shared/PageTransition";
import { TermsContent } from "@/components/terms/TermsContent";
import { SITE_NAME } from "@/lib/constants";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Terms & Conditions",
  description: `Comprehensive Terms and Conditions and End User License Agreement (EULA) for ${SITE_NAME} Android games, mobile applications, and services. Compliant with Google Play policies, EU consumer laws, and international standards.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <PageTransition>
      <TermsContent />
    </PageTransition>
  );
}
