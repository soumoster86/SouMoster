import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "Arena Legends Privacy Policy | SouMoster",
  description: "Privacy information for Arena Legends: Gladiator Wars, including local saves, optional ads and support.",
};

const sections = [
  ["Who this policy covers", "This policy applies specifically to Arena Legends: Gladiator Wars (Android package com.arenalegends.game), published by SouMoster. It describes this game's practices rather than the features of our other games. If our general website policy describes a different audience, SDK or feature, this game-specific policy explains what applies to Arena Legends. Contact: soumoster@gmail.com."],
  ["Offline gameplay and local information", "You can play without an account or internet connection. Campaign progress, gold, experience, reputation, equipment, talents, personal records, settings and local economy events are stored in the app's private storage on your device. They are not uploaded to a developer server. The local economy report can be copied or shared only when you choose to do so. Arena Legends does not include Firebase Analytics, Firebase Crashlytics, Google Play Games sign-in, online leaderboards, chat or cloud saves."],
  ["The first closed-test build", "Version 0.1.0 (version code 1) disables live rewarded advertisements and does not offer real-money purchases. Google Mobile Ads and Google's User Messaging Platform (UMP) libraries are included for the optional-ad integration. A disabled ad offer is not a promise that third-party libraries process no technical information; the SDK disclosures below explain their potential processing. Changes that enable ads or introduce another data practice will be reflected here and in the Google Play Data safety declaration before release."],
  ["Optional advertising and Google SDKs", "Where an eligible release enables optional rewarded ads, ads load only after you choose an offer and complete any required age-group and consent steps. Google Mobile Ads may collect and share IP addresses (which can indicate approximate location), app interactions such as ad views and taps, diagnostics such as SDK performance or crash information, and device or other identifiers such as an advertising ID or app-set ID. Google uses this information for advertising, analytics and fraud prevention. UMP may process consent-related technical information and store your consent choices. Non-personalized ads can still involve technical data processing; they do not mean no data is collected. We request non-personalized ads and a maximum ad content rating of T. We do not request precise location, contacts, camera, microphone, photos or SMS access."],
  ["Age groups and consent choices", "Arena Legends is intended for teenagers aged 13 and over and adults, not children under 13. This intended audience is separate from the regional content rating assigned by the store. Where optional ads are enabled, an age-group choice is stored locally; we do not ask for your date of birth. Under-13 selections cannot request ads. Teen selections use under-age-of-consent restrictions. Adults are offered Google's consent flow where required. If the necessary consent cannot be obtained, the ad does not load. You can decline an offer without losing the ordinary battle reward and can revisit available ad privacy choices in Settings > About > Economy & ads. Ad-related data may be processed by Google outside your country."],
  ["Support and information you choose to share", "The feedback action opens your email application with a draft; it does not send mail automatically. You decide whether to include and send it. If you send a message, SouMoster receives your email address, message and anything you attach. An optional diagnostics draft can include the game version, device and Android version, display and renderer details, settings, current screen and recent frame timings. It does not automatically attach save contents, currency, account identifiers or logs. Support messages are used to respond to your request, investigate a problem and meet applicable obligations, not to send marketing. We retain support information only as long as reasonably needed for those purposes; contact us to request access or deletion."],
  ["Third parties, security and retention", "Google's handling of SDK data is described in its Privacy Policy (https://policies.google.com/privacy), advertising information (https://policies.google.com/technologies/ads) and Mobile Ads data disclosure (https://developers.google.com/admob/android/privacy/play-data-disclosure). Google states that data collected by Mobile Ads is encrypted in transit using TLS. SDK data retention and any associated Google privacy controls are governed by Google's policies; we do not promise a fixed retention period for data we do not control. Google Play may separately process store, installation and platform diagnostic information under Google's terms. We do not sell your personal information. We do not operate a game account database or upload gameplay telemetry to our own servers."],
  ["Deleting information and exercising your rights", "To delete the game's local information, use Android Settings > Apps > Arena Legends > Storage > Clear storage, or uninstall the app. This permanently removes local progress; clearing cache alone does not remove saves. Android cloud backup of game data is disabled, and this game has no cloud restore or account to delete. Resetting progress inside the game may not clear every Android preference; use Clear storage for a complete local reset. You can manage the advertising ID and relevant Google account information in Android and Google privacy settings. For support messages or privacy requests, email soumoster@gmail.com. Depending on your location, you may have rights to access, correct, erase, restrict or object to processing, withdraw consent, or contact your data-protection authority. We will respond as required by applicable law; we may need information to verify a request."],
  ["Updates", "Effective and last updated: 20 October 2026. We will update this page when the game's data practices change. The app's Settings provides a link to this policy. Features that are not in the released build are not implied by policies for our other games."],
];

export default async function ArenaLegendsPrivacy({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <main lang="en" className="mx-auto max-w-3xl px-6 py-16 leading-relaxed">
      <p className="mb-3 text-sm font-medium text-amber-600">SouMoster · Arena Legends</p>
      <h1 className="mb-4 text-4xl font-bold">Arena Legends: Gladiator Wars — Privacy Policy</h1>
      <p className="mb-10 text-sm opacity-75">Effective 20 October 2026 · Official English version</p>
      {sections.map(([heading, body]) => (
        <section key={heading} className="mb-9">
          <h2 className="mb-3 text-2xl font-semibold">{heading}</h2>
          <p className="break-words">{body}</p>
        </section>
      ))}
      <p>Privacy and support: <a className="underline" href="mailto:soumoster@gmail.com">soumoster@gmail.com</a></p>
    </main>
  );
}
