import { Mail, ShieldCheck, Smartphone, Trophy } from "lucide-react";
import Link from "next/link";
import { PageTransition } from "@/components/shared/PageTransition";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { apps } from "@/data/apps";
import { SITE_NAME, SUPPORT_EMAIL } from "@/lib/constants";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Delete Your Data",
  description: `How to request deletion of your data from ${SITE_NAME} games, including Road Hopper and Bank Hopper. Covers on-device saves, Google Play Games data, and support records.`,
  path: "/delete-data",
});

const releasedGames = apps
  .filter((app) => app.status === "live" || app.status === "closed-testing")
  .map((app) => app.name);

const deletionEmailHref = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(
  "Data Deletion Request",
)}&body=${encodeURIComponent(
  `Hello ${SITE_NAME},\n\nPlease delete all personal data associated with me.\n\nGame(s): \nEmail address I contacted you from (if any): \n\nThank you.`,
)}`;

const deleted = [
  "Support emails and form submissions you sent us (bug reports, feature requests, contact and beta signup forms)",
  "Closed testing and newsletter signup records, including your email address",
  "Any diagnostic or crash data we can link to you",
];

const kept = [
  {
    item: "Google Play purchase records",
    reason: "Kept by Google Play and as required by tax law. We never receive your payment details.",
  },
  {
    item: "Anonymous, aggregated analytics",
    reason: "Cannot be linked back to you; expires automatically within 14 months.",
  },
  {
    item: "Crash reports not linked to you",
    reason: "Deleted automatically after 90 days.",
  },
];

export default function DeleteDataPage() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-4xl px-4 pt-28 pb-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Account & Data Deletion"
          title="Delete Your Data"
          subtitle={`How to delete data from ${SITE_NAME} games: ${releasedGames.join(", ")}, and any future ${SITE_NAME} titles.`}
        />

        <div className="glass mb-10 rounded-2xl p-6 text-sm leading-relaxed sm:p-8">
          <p className="text-muted">
            <strong className="text-text">{SITE_NAME} games do not require an account.</strong>{" "}
            Game progress, currency, and settings are stored on your device.
            Leaderboards and achievements are stored by Google Play Games under
            your Google account. The only personal data we hold ourselves is
            what you send us, such as support emails and signup forms. You can
            delete any of it using the options below.
          </p>
        </div>

        <div className="space-y-6">
          <section className="glass rounded-2xl p-6 sm:p-8">
            <h2 className="text-text mb-3 flex items-center gap-3 text-xl font-bold">
              <Smartphone className="text-primary h-6 w-6" />
              1. Delete game progress on your device
            </h2>
            <ol className="text-muted list-decimal space-y-1 pl-5 text-sm">
              <li>
                Open your phone&apos;s <strong className="text-text">Settings</strong> →{" "}
                <strong className="text-text">Apps</strong> and select the game.
              </li>
              <li>
                Tap <strong className="text-text">Storage &amp; cache</strong>.
              </li>
              <li>
                Tap <strong className="text-text">Clear storage</strong>. Uninstalling the game also deletes this data.
              </li>
            </ol>
            <p className="text-muted mt-3 text-xs">Takes effect immediately.</p>
          </section>

          <section className="glass rounded-2xl p-6 sm:p-8">
            <h2 className="text-text mb-3 flex items-center gap-3 text-xl font-bold">
              <Trophy className="text-primary h-6 w-6" />
              2. Delete leaderboard scores and achievements
            </h2>
            <ol className="text-muted list-decimal space-y-1 pl-5 text-sm">
              <li>
                Open the <strong className="text-text">Google Play Games</strong> app or Play Games settings on your device.
              </li>
              <li>
                Go to <strong className="text-text">Settings</strong> →{" "}
                <strong className="text-text">Delete Play Games account &amp; data</strong>.
              </li>
              <li>
                Under <strong className="text-text">Delete individual game data</strong>, find the game and tap{" "}
                <strong className="text-text">Delete</strong>.
              </li>
            </ol>
            <p className="text-muted mt-3 text-xs">This data is held and deleted by Google.</p>
          </section>

          <section className="glass border-primary/30 rounded-2xl border p-6 sm:p-8">
            <h2 className="text-text mb-3 flex items-center gap-3 text-xl font-bold">
              <Mail className="text-primary h-6 w-6" />
              3. Ask us to delete data we hold
            </h2>
            <p className="text-muted mb-4 text-sm">
              Email{" "}
              <a href={`mailto:${SUPPORT_EMAIL}`} className="text-primary font-medium hover:underline">
                {SUPPORT_EMAIL}
              </a>{" "}
              with the subject <strong className="text-text">Data Deletion Request</strong>. Tell us which game(s)
              and the email address you used to contact us. We confirm by email and complete deletion within
              30 days.
            </p>
            <Button href={deletionEmailHref} size="sm">
              <Mail className="h-4 w-4" />
              Send deletion request
            </Button>
          </section>

          <section className="glass rounded-2xl p-6 sm:p-8">
            <h2 className="text-text mb-4 flex items-center gap-3 text-xl font-bold">
              <ShieldCheck className="text-primary h-6 w-6" />
              What gets deleted, and what is kept
            </h2>
            <h3 className="text-text mb-2 text-sm font-semibold">Deleted on request</h3>
            <ul className="text-muted mb-6 list-disc space-y-1 pl-5 text-sm">
              {deleted.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h3 className="text-text mb-2 text-sm font-semibold">Kept, and for how long</h3>
            <div className="space-y-2">
              {kept.map((row) => (
                <div key={row.item} className="border-border bg-card/40 rounded-xl border p-3 text-sm">
                  <p className="text-text font-medium">{row.item}</p>
                  <p className="text-muted text-xs">{row.reason}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <p className="text-muted mt-10 text-center text-sm">
          Full details are in our{" "}
          <Link href="/privacy#data-deletion" className="text-primary font-medium hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </PageTransition>
  );
}
