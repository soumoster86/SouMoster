import Link from "next/link";
import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "Nitro Racer Privacy Policy | SouMoster",
  description: "Privacy information for Nitro Racer: local progress, optional cloud accounts, parent-managed recovery, family advertising and privacy choices.",
  alternates: { canonical: "https://sou-moster.vercel.app/privacy/nitro-racer" },
};

const sections = [
  [
    "Scope and publisher",
    "This policy applies specifically to Nitro Racer (Android package com.soumo.nitrohopper), published by SouMoster. It explains this game's practices and takes precedence over descriptions of other games in our general website policy. Effective and last updated: 23 October 2026. Contact: soumoster@gmail.com."
  ],
  [
    "Offline play and local saves",
    "No account, sign-in or internet connection is required to race. Career progress, gold, cars, upgrades, cosmetics, driver statistics, daily challenges, settings and best-lap ghosts are stored in Android's private app storage. Sponsor rewards and completed-race ad counters are stored locally to prevent duplicate rewards and limit ad frequency. An optional cloud account and backup feature is available in the cloud-save build prepared on 23 October 2026. No save is uploaded unless cloud backup is chosen. The game has no online chat, player messaging, public leaderboard or Google Play Games sign-in. Racing nicknames and number-plate text remain on the device and are excluded from cloud exports. Driver Profile appearance is separate from the optional cloud account."
  ],
  [
    "Children and age groups",
    "Nitro Racer is intended for school-age children, teenagers and adults. It is not designed specifically for preschool children. Before requesting ads, the updated family build asks for a broad age group (under 13, 13–15, or 16 and older), with a Skip option and no preselected answer or incentive to choose an older age. The answer is stored only on the device; we do not ask for a date of birth. All groups, including skipped or unknown ages, receive the same child-directed advertising protections: no personalised or interest-based advertising and a maximum requested ad content rating of G. The app removes Android advertising-ID permission and does not request access to precise location, contacts, camera, microphone, photos or SMS. This policy describes the family configuration prepared on 23 October 2026; older development builds must be replaced before distribution to children. Younger-player cloud saves must be managed through a parent or guardian's account. A child's email, real name or date of birth is not requested for cloud sign-in. The parent receives the account and privacy notice, verifies their own email, and arranges a separate parent-verification and consent review with support. Email verification or an in-app adult-area button alone is not treated as verified parental consent. Before approval, no child progress can be uploaded. Only the operator can issue the server-side approval record; the child-facing app cannot approve itself. Choosing a parent-managed account turns optional usage/crash reports off. Parents can withdraw permission by deleting the cloud account or contacting support."
  ],
  [
    "Ads and Google services",
    "The game uses Google Mobile Ads (AdMob) and Google's User Messaging Platform (UMP). Ads require a network connection. Rewarded ads are optional offers for the gold amount shown before viewing. An interstitial can appear after every fourth completed race, after the finish cinematic and before Results, subject to a cooldown and availability. Ordinary race winnings are saved before the ad. There are no ads during racing or the finish cinematic. Google SDKs can collect and share IP addresses (which may indicate approximate location), ad and app interactions such as views and taps, diagnostic and performance information, and permitted device or app identifiers such as an app-set ID. Data may be used for contextual advertising, measurement, security and fraud prevention. Child-directed configuration restricts identifiers and ad personalisation; it does not mean that no technical data is processed. Only Google Mobile Ads is integrated; no third-party mediation adapters are included. We use Google's consent platform where applicable and do not request ads if it does not permit requests. Available privacy choices can be reopened in Settings > Audio & Display > Ad Privacy Choices when Google requires this entry point."
  ],
  [
    "Optional adult usage and crash reports",
    "Starting with the Firebase build prepared on 23 October 2026, debug and release builds include Google Analytics for Firebase and Firebase Crashlytics. Both remain off by default. The default Firebase reporting app is not initialised for children or unknown ages. Optional cloud accounts use a separate named Firebase app after adult or parent account consent and do not enable reporting. In Settings > About > Usage & Crash Reports, a person who selects 18 or older can explicitly opt in; under-18 and skipped choices cannot enable it. The age choice and reporting preference remain on the device. Optional reports can include installation identifiers, device and operating-system details, app interactions, crash stack traces, diagnostics and IP-derived approximate location. Custom gameplay events describe race starts and finishes with race mode and track ID. For consenting adults, Firebase may also automatically record in-app purchase events, including product ID, price and currency. Debug and release are labelled separately. We do not send your email, number plate, gold balance, saved progress or ghost contents in optional reports. Cloud backup data is handled separately as described below. Analytics advertising-ID collection and ad personalisation are disabled, and advertising consent signals remain denied. Turning reports off stops new Analytics collection and Crashlytics uploads, resets local Analytics data and requests deletion of unsent crash reports; it does not automatically erase reports Google already received. Firebase uses encrypted transport. See https://firebase.google.com/support/privacy and https://firebase.google.com/docs/android/play-data-disclosure. Optional reporting choices are separate from ads and do not change their child-directed treatment."
  ],
  [
    "Gold purchases and online services",
    "The billing-enabled build offers optional one-time gold packs through Google Play. Google Play handles checkout, payment methods and any parental purchase approval. The app receives product IDs, purchase state, quantity, a purchase token and a signed purchase record to verify and deliver gold. We store a hash of the token and the product ID in the local save to prevent duplicate delivery; we do not receive your card or bank details or send purchase records to a developer server. Gold is saved before the purchase is consumed. Unfinished purchases can be checked again in the Gold Shop. Consumed packs and spent or lost gold cannot be restored through that check. Purchased gold stays on the device; uninstalling, clearing storage or resetting progress loses the balance. Refund requests follow Google Play rules. The game has no subscriptions, external payment links, purchase-verification server, Google Play Games sign-in, chat or online leaderboard."
  ],
  [
    "Optional cloud accounts and cross-device restore",
    "Adults aged 18 or older may connect their own account. For younger players, a parent or guardian manages the account and must complete the parent-verification process before progress access is approved. Firebase Authentication processes the account email and password for sign-in, email verification and password recovery; passwords are not stored in game saves or available to us in plaintext. Firebase Cloud Firestore stores a copy keyed by the account's Firebase user ID. The optional backup includes gold, car and cosmetic ownership, upgrades, stars, championships, lap records, daily/reward records, driver choices and statistics, and hashed purchase-receipt records used to prevent duplicate delivery. Nicknames and number-plate text are replaced with neutral values before export. Ghost recordings, device settings and consent choices are not uploaded. Firebase also processes request/network information for authentication, security and service operation. Only choose cloud backup if you want these data stored with Firebase. Manual backup and restore require a comparison and confirmation. Automatic backup is optional and pauses when another device has changed the cloud copy. Debug and release save collections are separate. On another device, sign into the same account, compare saves and choose Restore Cloud Save. A restore replaces progress rather than combining wallets; unsaved changes on the receiving device can be lost. This is a recovery feature, not a purchase-verification server or an online competitive economy."
  ],
  [
    "Motion sensor and Android backup",
    "Tilt steering uses the accelerometer on your device. Motion readings are used during play and are not saved or transmitted by the game. Android may back up local game files to your Google account under device backup settings. The cloud-save build excludes shared preferences, including authentication sessions, cloud revision markers, age/reporting choices and device settings, from Android cloud backup and device transfer. Android backup is separate from the optional Nitro Racer cloud account and cannot be managed through that account."
  ],
  [
    "Security, retention and third parties",
    "Cloud account and backup traffic uses encrypted transport. Firestore provides Google-managed encryption at rest; these backups are not end-to-end encrypted against the publisher. The Firestore database is in Mumbai (asia-south1); Google separately handles authentication and service security data under its policies, which may involve other countries. Each verified account can access only its own saves; parent-managed access also requires an unexpired operator-approved consent record. Cloud backups are retained for account recovery until deleted by the account owner or through an approved support request. Parent approval has an expiry and can be withdrawn; expiry blocks access and triggers an operator retention review rather than an immediate automatic deletion. We limit operator access to service administration and support. Local saves remain until removed or replaced. Google separately controls retention of its security, advertising and diagnostic records. We do not sell personal information or use cloud progress for advertising. See Google's Privacy Policy (https://policies.google.com/privacy), Firebase privacy information (https://firebase.google.com/support/privacy), advertising information (https://policies.google.com/technologies/ads), and Mobile Ads data disclosure (https://developers.google.com/admob/android/privacy/play-data-disclosure)."
  ],
  [
    "Deleting information and privacy requests",
    "In Settings > About > Cloud Save & Restore, Delete Cloud Backup removes the current build's backup and turns automatic backup off while keeping local progress. Account & Recovery > Delete Cloud Account asks for your password again and deletes the Firebase account, its debug and release backups, and its parent-consent record. This also withdraws parent-managed cloud permission. Disconnect signs out without deleting the backup. Reset Progress clears local racing progress and ghosts, keeps driver identity/cosmetics and settings, turns automatic cloud backup off, and leaves any cloud copy intact. A restore keeps a local recovery copy that can be recovered from the cloud screen. For a complete local reset, clear Android app storage or uninstall; these actions do not delete your Firebase account or cloud backup. Account-deletion requests without the app can be made at https://sou-moster.vercel.app/nitro-racer/delete-account or by emailing soumoster@gmail.com from the account email. Do not send passwords or a child's identity documents. We verify ownership before acting. Parents may request access, withdrawal and deletion of parent-managed data. Depending on location, you may also have rights to correction, restriction, objection or complaint to a regulator. These controls do not erase information Google separately retains or reset advertising consent choices."
  ],
  [
    "Support and updates",
    "If you choose to email us, we receive your email address, message and any attachments you send. We use these to respond and investigate the issue, retaining them only as reasonably needed for support and applicable obligations. We do not send marketing from a support request. Parents or guardians can contact us for their child's privacy questions or deletion requests. We will update this page and the store disclosures when the game's data practices change."
  ]
];

export default async function NitroRacerPrivacy({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <main lang="en" className="mx-auto max-w-3xl px-6 py-16 leading-relaxed">
      <p className="mb-3 text-sm font-medium text-amber-600">SouMoster · Nitro Racer</p>
      <h1 className="mb-4 text-4xl font-bold">Nitro Racer — Privacy Policy</h1>
      <p className="mb-10 text-sm opacity-75">Effective 23 October 2026 · Official English version</p>
      {sections.map(([heading, body]) => (
        <section key={heading} className="mb-9">
          <h2 className="mb-3 text-2xl font-semibold">{heading}</h2>
          <p className="break-words">{body}</p>
        </section>
      ))}
      <p className="mb-5"><Link className="underline" href="/nitro-racer/delete-account">Request cloud account and data deletion</Link></p>
      <p>Privacy and support: <a className="underline" href="mailto:soumoster@gmail.com">soumoster@gmail.com</a></p>
    </main>
  );
}
