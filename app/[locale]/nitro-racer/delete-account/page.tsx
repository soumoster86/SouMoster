import Link from "next/link";
import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "Delete Nitro Racer Cloud Account | SouMoster",
  description: "Request deletion of a Nitro Racer cloud account, cloud backups and parent-consent records.",
  alternates: { canonical: "https://sou-moster.vercel.app/nitro-racer/delete-account" },
};
export default async function DeleteNitroAccount({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <main lang="en" className="mx-auto max-w-3xl px-6 py-16 leading-relaxed">
    <p className="mb-3 text-sm font-medium text-amber-600">SouMoster · Nitro Racer</p>
    <h1 className="mb-6 text-4xl font-bold">Delete your Nitro Racer cloud account</h1>
    <p className="mb-6">Cloud accounts are optional. You can request deletion without reinstalling the game. For a parent-managed account, the parent or guardian should make the request.</p>
    <h2 className="mb-3 text-2xl font-semibold">Delete from the game</h2>
    <p className="mb-6">Open Settings → About → Cloud Save &amp; Restore → Account &amp; Recovery → Delete Cloud Account. Confirm your password. This deletes the Firebase account, its debug and release cloud saves, and its parent-consent record. Your local game progress stays on the device.</p>
    <h2 className="mb-3 text-2xl font-semibold">Request deletion without the app</h2>
    <p className="mb-5">Email soumoster@gmail.com from the email address used for the cloud account with the subject “Delete Nitro Racer cloud account”. Tell us that you want the account and cloud backups deleted. We verify account ownership before acting and respond within applicable legal time limits.</p>
    <p className="mb-6"><a className="rounded bg-amber-500 px-5 py-3 font-semibold text-black" href="mailto:soumoster@gmail.com?subject=Delete%20Nitro%20Racer%20cloud%20account">Request account deletion by email</a></p>
    <p className="mb-6">Do not send your password, purchase tokens, a child’s name, date of birth or identity documents. Support may arrange a safer verification process if necessary.</p>
    <h2 className="mb-3 text-2xl font-semibold">Other choices and retained information</h2>
    <p className="mb-6">Delete Cloud Backup removes the current build’s backup and turns automatic backup off, while keeping the account and local progress. Disconnect only signs out. Uninstalling or clearing phone storage does not delete the cloud account. Google may separately retain security or legal records under its policies. Support requests and the minimum evidence needed to fulfil a legal obligation may be retained only as reasonably necessary.</p>
    <p><Link className="underline" href="/privacy/nitro-racer">Read the Nitro Racer privacy policy</Link></p>
  </main>;
}
