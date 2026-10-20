import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

export const metadata: Metadata = { title: "Delete Arena Legends Data | SouMoster" };

export default async function DeleteArenaData({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <main lang="en" className="mx-auto max-w-3xl px-6 py-16 leading-relaxed">
      <p className="mb-3 text-sm text-amber-600">SouMoster · com.arenalegends.game</p>
      <h1 className="mb-6 text-4xl font-bold">Delete Arena Legends: Gladiator Wars data</h1>
      <p className="mb-8">Arena Legends has no game account or cloud save. The following steps apply specifically to this game. Updated 20 October 2026.</p>
      <section className="mb-9">
        <h2 className="mb-3 text-2xl font-semibold">1. Delete local game information</h2>
        <ol className="list-decimal space-y-2 pl-6">
          <li>Open Android Settings, then Apps, then Arena Legends.</li>
          <li>Open Storage (or Storage &amp; cache).</li>
          <li>Choose Clear storage or Clear data and confirm. Uninstalling also removes the app&apos;s local data.</li>
        </ol>
        <p className="mt-4">This permanently removes campaign progress, gold, experience, reputation, equipment, talents, personal records, settings, local economy events and locally stored ad preferences. Clearing cache alone does not remove saves. The game has no cloud restore; no developer-hosted copy of these saves is kept. An in-game progress reset may not clear all Android preferences, so use Clear storage for a full local reset.</p>
      </section>
      <section className="mb-9">
        <h2 className="mb-3 text-2xl font-semibold">2. Request deletion of support information</h2>
        <p>Email <a className="underline" href="mailto:soumoster@gmail.com?subject=Arena%20Legends%20data%20deletion%20request">soumoster@gmail.com</a> with the subject &quot;Arena Legends data deletion request&quot;. Identify the support email or conversation you want removed. Do not send passwords, identity documents or your game save.</p>
        <p className="mt-4">We can remove support messages, your email address and diagnostic attachments you sent to us. We retain information only where reasonably needed to handle an unresolved request, prevent abuse or meet an applicable legal obligation; if an exception applies, we will explain it in our response. We respond to privacy requests within the period required by applicable law. There is no routine developer collection of gameplay analytics or game account database to delete.</p>
      </section>
      <section className="mb-9">
        <h2 className="mb-3 text-2xl font-semibold">3. Google advertising and platform information</h2>
        <p>The first closed-test release disables live ads but includes Google advertising libraries. Google may separately process SDK or Play platform information under its policies. Clearing local storage does not erase information held by Google. Manage your advertising ID in Android Settings and use <a className="underline" href="https://myaccount.google.com/data-and-privacy">Google&apos;s Data &amp; privacy controls</a> for information Google holds. Google&apos;s retention rules apply to those records; we do not promise a deletion period for data outside our control.</p>
      </section>
      <p>Read the <a className="underline" href="/privacy/arena-legends">Arena Legends privacy policy</a> for the full data practices.</p>
    </main>
  );
}
