import { PageTransition } from "@/components/shared/PageTransition";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SITE_NAME, SUPPORT_EMAIL } from "@/lib/constants";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Terms & Conditions",
  description: `Terms and Conditions for using ${SITE_NAME} games and website.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-3xl px-4 pt-28 pb-20 sm:px-6 lg:px-8">
        <SectionHeading title="Terms & Conditions" subtitle="Last updated: March 1, 2026" />

        <div className="prose-blog space-y-6">
          <section>
            <h2>Agreement to Terms</h2>
            <p>
              By accessing or using {SITE_NAME} games and website, you agree to be bound by these
              Terms and Conditions. If you disagree with any part of these terms, you may not use
              our services.
            </p>
          </section>

          <section>
            <h2>Use of Our Games</h2>
            <ul>
              <li>Our games are provided for personal, non-commercial entertainment</li>
              <li>You may not modify, reverse engineer, or distribute our games</li>
              <li>You may not use cheats, exploits, or unauthorized third-party tools</li>
              <li>We reserve the right to suspend accounts that violate these terms</li>
            </ul>
          </section>

          <section>
            <h2>Intellectual Property</h2>
            <p>
              All content, graphics, logos, and game assets are the property of {SITE_NAME} and are
              protected by copyright and intellectual property laws. Unauthorized use is prohibited.
            </p>
          </section>

          <section>
            <h2>In-App Purchases</h2>
            <p>
              Some games may offer optional in-app purchases. All purchases are processed through
              Google Play and are subject to Google&apos;s refund policies. Virtual items have no
              real-world monetary value.
            </p>
          </section>

          <section>
            <h2>Limitation of Liability</h2>
            <p>
              {SITE_NAME} games are provided &quot;as is&quot; without warranties of any kind. We are
              not liable for any damages arising from the use of our games or website, including
              data loss or device issues.
            </p>
          </section>

          <section>
            <h2>Changes to Terms</h2>
            <p>
              We may update these Terms at any time. Continued use of our services after changes
              constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2>Contact</h2>
            <p>
              For questions about these Terms, contact us at{" "}
              <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
            </p>
          </section>
        </div>
      </div>
    </PageTransition>
  );
}