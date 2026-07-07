import { PageTransition } from "@/components/shared/PageTransition";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SITE_NAME, SUPPORT_EMAIL } from "@/lib/constants";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Privacy Policy",
  description: `Privacy Policy for ${SITE_NAME} games and website.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-3xl px-4 pt-28 pb-20 sm:px-6 lg:px-8">
        <SectionHeading title="Privacy Policy" subtitle={`Last updated: March 1, 2026`} />

        <div className="prose-blog space-y-6">
          <section>
            <h2>Introduction</h2>
            <p>
              {SITE_NAME} (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your privacy.
              This Privacy Policy explains how we collect, use, and protect your information when you
              use our website and mobile applications.
            </p>
          </section>

          <section>
            <h2>Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li>Device information (model, OS version, unique device identifiers)</li>
              <li>Gameplay data (scores, achievements, in-app preferences)</li>
              <li>Analytics data (app usage patterns, crash reports)</li>
              <li>Contact information (when you submit support requests or contact forms)</li>
            </ul>
          </section>

          <section>
            <h2>How We Use Your Information</h2>
            <ul>
              <li>To provide and improve our games and services</li>
              <li>To respond to support requests and feedback</li>
              <li>To analyze usage patterns and fix bugs</li>
              <li>To display leaderboards and achievements</li>
              <li>To send updates about our games (with your consent)</li>
            </ul>
          </section>

          <section>
            <h2>Third-Party Services</h2>
            <p>
              Our apps may use third-party services such as Google Play Services, Google Analytics,
              and advertising networks. These services have their own privacy policies governing the
              use of your information.
            </p>
          </section>

          <section>
            <h2>Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information.
              However, no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section>
            <h2>Children&apos;s Privacy</h2>
            <p>
              Our games are not directed at children under 13. We do not knowingly collect personal
              information from children under 13. If you believe we have collected such information,
              please contact us immediately.
            </p>
          </section>

          <section>
            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at{" "}
              <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
            </p>
          </section>
        </div>
      </div>
    </PageTransition>
  );
}