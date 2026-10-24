import type { Metadata } from "next";
import Link from "next/link";
import { setRequestLocale } from "next-intl/server";

export const metadata: Metadata = { title: "Delete Arena Legends Data | SouMoster" };

export default async function DeleteArenaData({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <main lang="en" className="mx-auto max-w-3xl px-6 py-16 leading-relaxed">
      <p className="mb-3 text-sm text-amber-600">SouMoster · com.arenalegends.game</p>
      <h1 className="mb-6 text-4xl font-bold">Delete Arena Legends: Gladiator Wars data</h1>
      <p className="mb-8">Arena Legends has no developer-hosted game account or cloud save. Version 0.1.4 adds optional adult Google Play Games achievement linking. The following steps apply specifically to this game. Updated 24 October 2026.</p>
      <section className="mb-9">
        <h2 className="mb-3 text-2xl font-semibold">1. Delete local game information</h2>
        <ol className="list-decimal space-y-2 pl-6">
          <li>Open Android Settings, then Apps, then Arena Legends.</li>
          <li>Open Storage (or Storage &amp; cache).</li>
          <li>Choose Clear storage or Clear data and confirm. Uninstalling also removes the app&apos;s local data.</li>
        </ol>
        <p className="mt-4">This permanently removes campaign progress, earned and purchased gold, experience, reputation, equipment, talents, personal records, local achievement progress, settings, local economy events, purchase receipt hashes and locally stored ad preferences. Clearing cache alone does not remove saves. The game has no cloud restore; no developer-hosted copy of these saves is kept. Already consumed gold packs are not restored by Google Play after reinstalling or clearing data. An in-game progress reset may not clear all Android preferences, so use Clear storage for a full local reset.</p>
      </section>
      <section className="mb-9">
        <h2 className="mb-3 text-2xl font-semibold">2. Request deletion of support information</h2>
        <p>Email <a className="underline" href="mailto:soumoster@gmail.com?subject=Arena%20Legends%20data%20deletion%20request">soumoster@gmail.com</a> with the subject &quot;Arena Legends data deletion request&quot;. Identify the support email or conversation you want removed. Do not send passwords, identity documents or your game save.</p>
        <p className="mt-4">We can remove support messages, your email address and diagnostic attachments you sent to us. We retain information only where reasonably needed to handle an unresolved request, prevent abuse or meet an applicable legal obligation; if an exception applies, we will explain it in our response. We respond to privacy requests within the period required by applicable law. There is no game account database. Optional Firebase reports introduced in version code 3 do not include a player name, email or local save, so we may be unable to identify a particular installation from an email alone. Contact us to discuss available privacy requests without sending your save or identity documents.</p>
      </section>
      <section className="mb-9">
        <h2 className="mb-3 text-2xl font-semibold">3. Firebase, Google advertising and platform information</h2>
        <p>In version code 3 and later builds containing Firebase, turn off Settings &gt; About &gt; Usage &amp; reports to stop new Analytics events and automatic crash uploads. The app also requests deletion of pending crash reports. This does not erase reports already uploaded. Clearing app storage resets local identifiers and preferences; the reporting preference returns to its default on a new installation.</p>
        <p className="mt-4">The closed-test releases disable live ads but include Google advertising libraries. Google may separately process SDK or Play platform information under its policies. Clearing local storage does not erase information held by Google. Manage your advertising ID in Android Settings and use <a className="underline" href="https://myaccount.google.com/data-and-privacy">Google&apos;s Data &amp; privacy controls</a> for relevant Google account information. Firebase reports are installation-based and are not necessarily linked to your Google account; those account controls do not guarantee deletion of Firebase reports. Google&apos;s retention rules apply to those records; we do not promise a deletion period for data outside our control.</p>
      </section>
      <section className="mb-9">
        <h2 className="mb-3 text-2xl font-semibold">4. Optional Play Games identity and achievements</h2>
        <p>Turn linking off in Achievements &gt; Linking settings and restart the game to end its SDK session. This stops achievement synchronization but does not erase badges already held by Google. Use Android Play Games settings or your Google account controls to manage or delete the game&apos;s Play Games data and profile. Clearing Arena Legends storage deletes local badges and the linking preference, but does not delete Google&apos;s copy. Conversely, deleting Google badges does not erase your local game save. The developer does not store a Google account email or player ID in your save. Play Games linking cannot restore your local progress, equipment or gold.</p>
      </section>
      <p>Read the <Link className="underline" href="/privacy/arena-legends">Arena Legends privacy policy</Link> for the full data practices.</p>
      <p className="mt-4">Google Play purchase and payment records are held separately by Google. Clearing app data does not delete Play order history or request a refund. Manage transactions and refund requests through Google Play. The game does not store your card number or banking credentials.</p>
    </main>
  );
}
