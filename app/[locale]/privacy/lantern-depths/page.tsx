import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "Lantern Depths Privacy Policy | SouMoster Games",
  description: "How Lantern Depths handles local saves and optional email feedback.",
  alternates: { canonical: "https://sou-moster.vercel.app/privacy/lantern-depths" },
};

export default async function LanternDepthsPrivacy({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main lang="en" className="mx-auto max-w-3xl px-6 py-16 leading-relaxed">
      <p className="mb-3 text-sm font-medium text-amber-600">SouMoster Games LLC</p>
      <h1 className="mb-4 text-4xl font-bold">Lantern Depths Privacy Policy</h1>
      <p className="mb-8 text-sm opacity-75">Effective 22 November 2026</p>
      <p className="mb-8">
        This policy applies to Lantern Depths (com.lanterndepths.game), an offline game published by SouMoster Games LLC.
        You can play without an account. The game contains no ads, analytics, or in-app purchases and does not send
        gameplay or device data to SouMoster Games.
      </p>
      <section className="mb-8">
        <h2 className="mb-3 text-2xl font-semibold">Saves and settings</h2>
        <p>
          The game stores your progress, run history, and preferences in private app storage on your device so you can
          resume playing. Clear the game’s storage in Android settings or uninstall it to delete this data.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="mb-3 text-2xl font-semibold">Optional email feedback</h2>
        <p>
          The feedback button opens a draft in your email app. If you send it, SouMoster Games receives your email address and
          the information you include. We use this information to respond and investigate the issue. We keep support
          correspondence in our email account for as long as needed for those purposes. The mail services involved in
          sending and receiving the message also process it.
        </p>
      </section>
      <section>
        <h2 className="mb-3 text-2xl font-semibold">Privacy contact</h2>
        <p>
          For privacy questions or to request deletion of your support correspondence, email{" "}
          <a className="underline" href="mailto:soumoster@gmail.com">soumoster@gmail.com</a>.
        </p>
      </section>
    </main>
  );
}
