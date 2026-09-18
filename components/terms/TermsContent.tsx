"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Coins,
  Copy,
  FileCheck,
  Gamepad2,
  Globe,
  Lock,
  Mail,
  Printer,
  Scale,
  ShieldAlert,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  PLAY_STORE_DEVELOPER_URL,
  RESPONSE_TIME,
  SITE_NAME,
  SITE_URL,
  SUPPORT_EMAIL,
} from "@/lib/constants";

interface SectionItem {
  id: string;
  title: string;
  badge?: string;
}

const SECTIONS: SectionItem[] = [
  { id: "introduction", title: "1. Introduction, Acceptance & Scope" },
  { id: "summary", title: "2. Terms at a Glance" },
  { id: "eligibility", title: "3. Eligibility & Minors", badge: "PEGI 3" },
  { id: "license", title: "4. End User License Agreement (EULA)" },
  {
    id: "virtual-goods",
    title: "5. Virtual Goods, Currency & Purchases",
    badge: "IAP",
  },
  {
    id: "eu-consumer-rights",
    title: "6. EU Consumer Rights & Withdrawal",
    badge: "EU Law",
  },
  { id: "fair-play", title: "7. Fair Play, Conduct & Anti-Cheat" },
  { id: "accounts-cloud", title: "8. Accounts & Google Play Games" },
  {
    id: "intellectual-property",
    title: "9. Intellectual Property & Trademarks",
  },
  { id: "user-content", title: "10. User Submissions & Support Conduct" },
  {
    id: "advertising",
    title: "11. Advertisements & Third Parties",
    badge: "AdMob",
  },
  { id: "updates-availability", title: "12. Updates & Offline Play" },
  { id: "termination", title: "13. Termination & Enforcement" },
  { id: "disclaimer", title: "14. Disclaimer of Warranties ('As Is')" },
  { id: "limitation-liability", title: "15. Limitation of Liability" },
  { id: "indemnification", title: "16. Indemnification" },
  {
    id: "dispute-resolution",
    title: "17. Dispute Resolution & EU ODR",
    badge: "Disputes",
  },
  { id: "contact-notices", title: "18. Contact Information & Legal Notices" },
];

export function TermsContent() {
  const [activeSection, setActiveSection] = useState<string>("introduction");
  const [copied, setCopied] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(SECTIONS[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyNoticeTemplate = () => {
    const template = `Subject: Formal Notice under SouMoster Terms & Conditions

Dear SouMoster Legal & Support Team,

I am writing to submit an official notice / inquiry regarding the Terms & Conditions for your games and services.

Details:
- App / Game Name: Road Hopper / Bank Hopper (or other title)
- Device Operating System: Android
- Google Play Gamer Tag or Order Number (if applicable): [Insert Here or N/A]
- Detailed Description of Issue / Dispute: [Describe details here]
- Contact Email: [Insert Your Email]

Thank you for your review and response within the standard resolution timeframe.`;

    navigator.clipboard.writeText(template).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return SECTIONS;
    const q = searchQuery.toLowerCase();
    return SECTIONS.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        (s.badge && s.badge.toLowerCase().includes(q)),
    );
  }, [searchQuery]);

  return (
    <div className="mx-auto max-w-7xl px-4 pt-28 pb-24 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="text-center">
        <div className="border-primary/30 bg-primary/10 text-primary mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium">
          <Scale className="h-3.5 w-3.5" />
          End User License Agreement & Terms of Service
        </div>
        <h1 className="text-text text-3xl font-bold tracking-tight sm:text-5xl">
          Terms & Conditions
        </h1>
        <p className="text-muted mx-auto mt-4 max-w-2xl text-base sm:text-lg">
          Please review these Terms carefully before downloading, installing, or
          playing {SITE_NAME} games or using our online services.
        </p>
        <div className="text-muted mt-4 flex flex-wrap items-center justify-center gap-4 text-xs">
          <span>
            <strong>Effective Date:</strong> March 1, 2026
          </span>
          <span>•</span>
          <span>
            <strong>Last Updated:</strong> September 18, 2026
          </span>
          <span>•</span>
          <span>
            <strong>Version:</strong> 2.0 (Global & EU Compliance Edition)
          </span>
        </div>
      </div>

      {/* Highlights / Quick Takeaways */}
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <motion.div
          className="glass rounded-2xl p-5"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
        >
          <div className="bg-primary/20 text-primary flex h-10 w-10 items-center justify-center rounded-xl">
            <Gamepad2 className="h-5 w-5" />
          </div>
          <h3 className="text-text mt-3 text-base font-semibold">
            Entertainment License
          </h3>
          <p className="text-muted mt-1 text-xs leading-relaxed">
            Personal, non-commercial, revocable license to play our games on
            your Android devices.
          </p>
        </motion.div>

        <motion.div
          className="glass rounded-2xl p-5"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="bg-secondary/20 text-secondary flex h-10 w-10 items-center justify-center rounded-xl">
            <Coins className="h-5 w-5" />
          </div>
          <h3 className="text-text mt-3 text-base font-semibold">
            No Real Money Value
          </h3>
          <p className="text-muted mt-1 text-xs leading-relaxed">
            Virtual coins, gems, and cosmetics have zero cash value and cannot
            be traded outside games.
          </p>
        </motion.div>

        <motion.div
          className="glass rounded-2xl p-5"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <div className="bg-accent/20 text-accent flex h-10 w-10 items-center justify-center rounded-xl">
            <Lock className="h-5 w-5" />
          </div>
          <h3 className="text-text mt-3 text-base font-semibold">
            Google Play Billing
          </h3>
          <p className="text-muted mt-1 text-xs leading-relaxed">
            All purchases are processed securely through Google Play subject to
            Google refund rules.
          </p>
        </motion.div>

        <motion.div
          className="glass rounded-2xl p-5"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="bg-primary/20 text-primary flex h-10 w-10 items-center justify-center rounded-xl">
            <ShieldCheckIcon className="h-5 w-5" />
          </div>
          <h3 className="text-text mt-3 text-base font-semibold">
            Fair Play First
          </h3>
          <p className="text-muted mt-1 text-xs leading-relaxed">
            Zero tolerance for cheating, memory tampering, botting, or
            exploiting leaderboard data.
          </p>
        </motion.div>
      </div>

      {/* Main Layout: Sticky Sidebar + Content Body */}
      <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-12">
        {/* Sidebar Table of Contents */}
        <aside className="hidden lg:col-span-4 lg:block">
          <div className="sticky top-28 space-y-4">
            <div className="glass rounded-2xl p-5">
              <div className="border-border flex items-center justify-between border-b pb-3">
                <span className="text-text text-sm font-semibold tracking-wider uppercase">
                  Table of Contents
                </span>
                <span className="text-muted text-xs">
                  {SECTIONS.length} Sections
                </span>
              </div>

              {/* Quick Search */}
              <div className="mt-3 mb-2">
                <input
                  type="text"
                  placeholder="Filter topics (e.g. Refunds, EULA)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="border-border bg-card/60 text-text placeholder-muted focus:border-primary w-full rounded-lg border px-3 py-1.5 text-xs focus:outline-none"
                />
              </div>

              <nav className="max-h-[calc(100vh-320px)] space-y-1 overflow-y-auto pr-1 text-xs">
                {filteredSections.map((section) => {
                  const isActive = activeSection === section.id;
                  return (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className={`group flex items-center justify-between rounded-lg px-2.5 py-2 transition-colors ${
                        isActive
                          ? "bg-primary/15 text-primary font-medium"
                          : "text-muted hover:bg-card hover:text-text"
                      }`}
                    >
                      <span className="truncate">{section.title}</span>
                      {section.badge && (
                        <span
                          className={`ml-1.5 shrink-0 rounded px-1.5 py-0.5 text-[10px] font-medium ${
                            isActive
                              ? "bg-primary/30 text-primary"
                              : "bg-card text-muted border-border border"
                          }`}
                        >
                          {section.badge}
                        </span>
                      )}
                    </a>
                  );
                })}
              </nav>

              <div className="border-border text-muted mt-4 flex items-center justify-between border-t pt-3 text-xs">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="hover:text-text flex cursor-pointer items-center gap-1.5 transition-colors"
                >
                  <Printer className="h-3.5 w-3.5" />
                  Print Terms
                </button>
                <a
                  href={`mailto:${SUPPORT_EMAIL}?subject=Terms%20Inquiry`}
                  className="text-primary flex items-center gap-1.5 hover:underline"
                >
                  <Mail className="h-3.5 w-3.5" />
                  Legal Inquiry
                </a>
              </div>
            </div>
          </div>
        </aside>

        {/* Content Column */}
        <main className="text-muted space-y-12 text-sm leading-relaxed lg:col-span-8">
          {/* Section 1 */}
          <section id="introduction" className="scroll-mt-28">
            <div className="mb-3 flex items-center gap-2">
              <Badge variant="primary">Agreement</Badge>
              <h2 className="text-text text-2xl font-bold">
                1. Introduction, Acceptance & Scope
              </h2>
            </div>
            <div className="glass space-y-4 rounded-2xl p-6 sm:p-8">
              <p>
                These Terms and Conditions (&quot;Terms&quot;,
                &quot;Agreement&quot;) constitute a legally binding contract
                between you (&quot;User&quot;, &quot;Player&quot;, or
                &quot;you&quot;) and <strong>{SITE_NAME}</strong>{" "}
                (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), governing
                your access to and use of our mobile games, applications,
                digital assets, official website located at{" "}
                <a
                  href={SITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium hover:underline"
                >
                  {SITE_URL}
                </a>
                , and related developer services (collectively, the
                &quot;Services&quot;).
              </p>
              <p>Our gaming portfolio includes, without limitation:</p>
              <ul className="list-disc space-y-1 pl-5 text-xs sm:text-sm">
                <li>
                  <strong>Road Hopper</strong> (Google Play Package ID:{" "}
                  <code className="text-primary font-mono font-semibold">
                    com.roadohopper.game
                  </code>
                  ) — our live flagship arcade hopper.
                </li>
                <li>
                  <strong>Bank Hopper</strong> (Google Play Package ID:{" "}
                  <code className="text-primary font-mono font-semibold">
                    com.bankhopper
                  </code>
                  ) — our upcoming cyber vault heist arcade game.
                </li>
                <li>
                  <strong>Space Hopper</strong> and all future titles, betas,
                  updates, patches, and downloadable content published under our
                  Google Play Developer account (ID:{" "}
                  <a
                    href={PLAY_STORE_DEVELOPER_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-mono hover:underline"
                  >
                    9220341090582575849
                  </a>
                  ).
                </li>
              </ul>
              <div className="border-primary/20 bg-primary/5 text-text space-y-2 rounded-xl border p-4 text-xs">
                <strong>Express Acceptance:</strong> By downloading, installing,
                launching, or playing any of our games, or by browsing our
                website, you expressly confirm that you have read, understood,
                and agree to be bound by these Terms and our{" "}
                <a
                  href="/privacy"
                  className="text-primary font-medium underline"
                >
                  Privacy Policy
                </a>
                . If you do not agree with any part of these Terms, you must not
                install, access, or use our Services, and you must promptly
                delete any installed game files from your devices.
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section id="summary" className="scroll-mt-28">
            <div className="mb-3 flex items-center gap-2">
              <Badge variant="secondary">Overview</Badge>
              <h2 className="text-text text-2xl font-bold">
                2. Terms at a Glance
              </h2>
            </div>
            <div className="glass space-y-4 rounded-2xl p-6 sm:p-8">
              <p>
                We believe legal terms should be readable and honest. Here are
                the core pillars of our terms:
              </p>
              <div className="grid gap-3 text-xs sm:grid-cols-2">
                <div className="border-border bg-card/40 space-y-2 rounded-xl border p-4">
                  <div className="text-text flex items-center gap-2 font-semibold">
                    <CheckCircle2 className="text-accent h-4 w-4" />
                    Free-to-Play & Fair
                  </div>
                  <p className="text-muted">
                    Everything in our games can be earned completely free
                    through gameplay without mandatory purchases.
                  </p>
                </div>
                <div className="border-border bg-card/40 space-y-2 rounded-xl border p-4">
                  <div className="text-text flex items-center gap-2 font-semibold">
                    <CheckCircle2 className="text-accent h-4 w-4" />
                    Play Completely Offline
                  </div>
                  <p className="text-muted">
                    No active internet connection is required to enjoy core
                    single-player arcade campaigns and runs.
                  </p>
                </div>
                <div className="border-border bg-card/40 space-y-2 rounded-xl border p-4">
                  <div className="text-text flex items-center gap-2 font-semibold">
                    <CheckCircle2 className="text-accent h-4 w-4" />
                    Transparent In-App Billing
                  </div>
                  <p className="text-muted">
                    Optional virtual items and cosmetic unlocks are processed
                    securely by Google Play. No hidden fees or gambling.
                  </p>
                </div>
                <div className="border-border bg-card/40 space-y-2 rounded-xl border p-4">
                  <div className="text-text flex items-center gap-2 font-semibold">
                    <CheckCircle2 className="text-accent h-4 w-4" />
                    Respectful Community
                  </div>
                  <p className="text-muted">
                    Fair competition on leaderboards with zero tolerance for
                    cheats, memory hacks, or disruptive behavior.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section id="eligibility" className="scroll-mt-28">
            <div className="mb-3 flex items-center gap-2">
              <Badge variant="primary">Eligibility</Badge>
              <h2 className="text-text text-2xl font-bold">
                3. Eligibility, Minors & Parental Responsibility
              </h2>
            </div>
            <div className="glass space-y-4 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="bg-accent/20 text-accent inline-flex h-9 w-9 items-center justify-center rounded-xl text-sm font-bold">
                  3+
                </span>
                <div>
                  <h3 className="text-text text-base font-semibold">
                    Age Rating: PEGI 3 / Google Play 3+ / General Audience
                  </h3>
                  <p className="text-muted text-xs">
                    Our games are rated suitable for general audiences of all
                    ages under international rating frameworks.
                  </p>
                </div>
              </div>
              <p>
                If you are under the legal age of majority in your jurisdiction
                of residence (typically 18 years old):
              </p>
              <ul className="list-disc space-y-1.5 pl-5 text-xs sm:text-sm">
                <li>
                  You represent that your parent or legal guardian has reviewed
                  and agreed to these Terms on your behalf before you install or
                  access our games.
                </li>
                <li>
                  Parents and guardians are entirely responsible for the actions
                  of minors when using our Services, including any optional
                  in-app purchases initiated on their devices through Google
                  Play Family Sharing or payment methods.
                </li>
                <li>
                  We encourage parents to utilize Google Play&apos;s parental
                  control settings to require password authentication for any
                  prospective digital purchases.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 4 */}
          <section id="license" className="scroll-mt-28">
            <div className="mb-3 flex items-center gap-2">
              <Badge variant="accent">EULA</Badge>
              <h2 className="text-text text-2xl font-bold">
                4. End User License Agreement (EULA)
              </h2>
            </div>
            <div className="glass space-y-4 rounded-2xl p-6 sm:p-8">
              <p>
                Subject to your ongoing compliance with these Terms, {SITE_NAME}{" "}
                grants you a limited, personal, non-exclusive, non-transferable,
                non-sublicensable, revocable license to download, install, and
                execute one copy of our games per authorized mobile device
                solely for your personal, non-commercial entertainment.
              </p>

              <div className="border-border bg-card/40 space-y-2 rounded-xl border p-4">
                <h4 className="text-text flex items-center gap-2 text-xs font-semibold sm:text-sm">
                  <ShieldAlert className="text-secondary h-4 w-4" />
                  License Restrictions & Prohibited Acts
                </h4>
                <p className="text-muted text-xs">
                  You agree that you shall NOT, directly or indirectly:
                </p>
                <ul className="text-muted list-disc space-y-1 pl-5 text-xs">
                  <li>
                    Decompile, reverse-engineer, disassemble, decode, or attempt
                    to derive the source code of our applications or underlying
                    algorithms.
                  </li>
                  <li>
                    Modify, adapt, translate, enhance, or create derivative
                    works based upon our games, artwork, audio, or game engines.
                  </li>
                  <li>
                    Distribute, rent, lease, lend, sell, sublicense, or
                    commercially exploit any part of our games or assets without
                    prior written consent.
                  </li>
                  <li>
                    Repackage, clone, or redistribute modified APK or AAB files
                    through third-party app repositories or unauthorized
                    websites.
                  </li>
                  <li>
                    Circumvent or disable any technological protections,
                    security checks, copyright notices, or proprietary labels
                    incorporated into our software.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section id="virtual-goods" className="scroll-mt-28">
            <div className="mb-3 flex items-center gap-2">
              <Badge variant="secondary">In-App Purchases</Badge>
              <h2 className="text-text text-2xl font-bold">
                5. Virtual Goods, Currency & Purchases
              </h2>
            </div>
            <div className="glass space-y-4 rounded-2xl p-6 sm:p-8">
              <p>
                Our games may feature virtual currencies (such as HCoins, gems,
                cash bags, or velocity tokens) and digital cosmetic items (such
                as hero skins, hop trails, or ad-removal upgrades):
              </p>
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="border-border bg-card/40 space-y-1 rounded-xl border p-4">
                  <span className="text-text font-semibold">
                    Zero Real-World Cash Value:
                  </span>
                  <p className="text-muted">
                    Virtual currency and items are digital entertainment
                    licenses and possess{" "}
                    <strong>zero real-world monetary value</strong>. They cannot
                    be redeemed, refunded, exchanged, or converted into fiat
                    currency, cryptocurrency, or tangible property of any kind
                    from SouMoster or any third party.
                  </p>
                </div>
                <div className="border-border bg-card/40 space-y-1 rounded-xl border p-4">
                  <span className="text-text font-semibold">
                    Non-Transferability:
                  </span>
                  <p className="text-muted">
                    Virtual goods and currencies are tied to your personal
                    installation or Google Play account. You may not sell,
                    barter, trade, or transfer virtual goods outside the
                    official in-game mechanics. Any attempted external sale is
                    void and constitutes a material breach resulting in
                    immediate account termination.
                  </p>
                </div>
                <div className="border-border bg-card/40 space-y-1 rounded-xl border p-4">
                  <span className="text-text font-semibold">
                    Google Play Payment Processing:
                  </span>
                  <p className="text-muted">
                    All financial transactions are processed exclusively through
                    Google Play In-App Billing. SouMoster does not collect,
                    receive, or store your credit card details, bank accounts,
                    or payment credentials.
                  </p>
                </div>
                <div className="border-border bg-card/40 space-y-1 rounded-xl border p-4">
                  <span className="text-text font-semibold">
                    Refunds Policy:
                  </span>
                  <p className="text-muted">
                    Because purchases are handled by Google, all refund requests
                    are evaluated exclusively in accordance with Google
                    Play&apos;s published refund policy. You can request a
                    refund directly via your Google Play Order History on the
                    web or through the Google Play app.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section id="eu-consumer-rights" className="scroll-mt-28">
            <div className="mb-3 flex items-center gap-2">
              <Badge variant="primary">EU Consumer Law</Badge>
              <h2 className="text-text text-2xl font-bold">
                6. EU Consumer Rights & Statutory Withdrawal
              </h2>
            </div>
            <div className="glass space-y-4 rounded-2xl p-6 sm:p-8">
              <p>
                If you are a consumer residing within the European Union or
                European Economic Area, Directive 2011/83/EU on Consumer Rights
                provides statutory consumer rights regarding distance contracts:
              </p>
              <div className="border-primary/30 bg-primary/10 text-text space-y-3 rounded-xl border p-5 text-xs sm:text-sm">
                <div className="flex items-center gap-2 font-semibold">
                  <FileCheck className="text-primary h-4 w-4" />
                  Waiver of 14-Day Right of Withdrawal for Digital Content
                </div>
                <p className="text-muted leading-relaxed">
                  Under Article 16(m) of EU Directive 2011/83/EU, the statutory
                  14-day right of withdrawal does not apply to the supply of
                  digital content which is not supplied on a tangible medium if
                  the performance has begun with the consumer&apos;s prior
                  express consent and their acknowledgment that they thereby
                  lose their right of withdrawal.
                </p>
                <p className="text-muted leading-relaxed">
                  When you initiate an in-app purchase in our games, you
                  expressly request immediate delivery of the virtual items upon
                  transaction completion and acknowledge that your statutory
                  right of withdrawal is waived once the digital goods are
                  credited to your game profile.
                </p>
              </div>
              <p className="text-muted text-xs">
                Nothing in these Terms diminishes any non-waivable statutory
                warranty rights you enjoy under the laws of your EU Member State
                regarding the conformity of digital content.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section id="fair-play" className="scroll-mt-28">
            <div className="mb-3 flex items-center gap-2">
              <Badge variant="secondary">Fair Play</Badge>
              <h2 className="text-text text-2xl font-bold">
                7. Fair Play, Rules of Conduct & Anti-Cheat
              </h2>
            </div>
            <div className="glass space-y-4 rounded-2xl p-6 sm:p-8">
              <p>
                To preserve a competitive, enjoyable, and safe environment for
                all players across our Google Play leaderboards and
                achievements, you agree to adhere strictly to our Fair Play
                Code:
              </p>
              <ul className="list-disc space-y-2 pl-5 text-xs sm:text-sm">
                <li>
                  <strong>No Cheating or Exploitation:</strong> You shall not
                  employ cheats, exploits, glitches, automated clickers, bots,
                  macro scripts, or third-party unauthorized software to modify
                  gameplay or automate runs.
                </li>
                <li>
                  <strong>No Memory Modification or Save Tampering:</strong> You
                  shall not use memory editors (such as GameGuardian or Cheat
                  Engine), altered APKs, or local file manipulation to
                  artificially modify coin balances, score values, or unlock
                  states.
                </li>
                <li>
                  <strong>No Leaderboard Manipulation:</strong> Submitting
                  illegitimate, spoofed, or hacked high scores to Google Play
                  Games Services is strictly prohibited. We reserve the right to
                  reset fraudulent leaderboard entries without notice.
                </li>
                <li>
                  <strong>No Disruptive Attacks:</strong> You shall not attempt
                  to overwhelm, probe, or disrupt our website infrastructure,
                  APIs, or gaming services through denial of service attacks or
                  malicious code.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 8 */}
          <section id="accounts-cloud" className="scroll-mt-28">
            <div className="mb-3 flex items-center gap-2">
              <Badge variant="accent">Cloud & Saves</Badge>
              <h2 className="text-text text-2xl font-bold">
                8. Accounts, Cloud Saves & Google Play Games
              </h2>
            </div>
            <div className="glass space-y-4 rounded-2xl p-6 sm:p-8">
              <p>
                We do not require you to create or maintain a proprietary
                SouMoster account with a username or password. Our games are
                designed offline-first:
              </p>
              <ul className="list-disc space-y-1.5 pl-5 text-xs sm:text-sm">
                <li>
                  <strong>Local Device Saves:</strong> By default, your campaign
                  progress, star ratings, unlocked heroes, and coin balances are
                  stored in your device&apos;s private sandbox storage. If you
                  clear app storage or uninstall the game without a backup, your
                  local progress will be permanently reset.
                </li>
                <li>
                  <strong>Google Play Games Sign-In:</strong> You may
                  voluntarily connect your Google Play Games account to sync
                  achievements and compete on global leaderboards. Your
                  relationship with Google Play Games is governed by
                  Google&apos;s Terms of Service.
                </li>
                <li>
                  <strong>Device Security:</strong> You are solely responsible
                  for maintaining the security of your mobile device and Google
                  account credentials.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 9 */}
          <section id="intellectual-property" className="scroll-mt-28">
            <div className="mb-3 flex items-center gap-2">
              <Badge variant="primary">IP Rights</Badge>
              <h2 className="text-text text-2xl font-bold">
                9. Intellectual Property & Trademarks
              </h2>
            </div>
            <div className="glass space-y-4 rounded-2xl p-6 sm:p-8">
              <p>
                All rights, title, and interest in and to our Services—including
                but not limited to game titles (<em>Road Hopper</em>,{" "}
                <em>Bank Hopper</em>, <em>Space Hopper</em>), studio logos,
                computer software, Kotlin and Jetpack Compose code, graphics,
                character designs (Hopper, Cluck Norris, Neil Hopstrong, Bank
                Hopper characters), animation trails, sound effects, musical
                compositions, UI design, and website copy—are the exclusive
                intellectual property of <strong>{SITE_NAME}</strong> and are
                protected by international copyright, trademark, and trade
                secret laws.
              </p>
              <div className="border-border bg-card/40 space-y-1 rounded-xl border p-4 text-xs">
                <span className="text-text font-semibold">
                  Player Feedback & Suggestions:
                </span>
                <p className="text-muted">
                  If you choose to submit feedback, bug reports, feature
                  suggestions, or creative gameplay ideas to us, you grant
                  SouMoster an irrevocable, perpetual, royalty-free, worldwide
                  license to use, adapt, implement, and incorporate your
                  suggestions into our games without obligation of attribution
                  or monetary compensation.
                </p>
              </div>
            </div>
          </section>

          {/* Section 10 */}
          <section id="user-content" className="scroll-mt-28">
            <div className="mb-3 flex items-center gap-2">
              <Badge variant="secondary">Community</Badge>
              <h2 className="text-text text-2xl font-bold">
                10. User Submissions & Support Conduct
              </h2>
            </div>
            <div className="glass space-y-4 rounded-2xl p-6 sm:p-8">
              <p>
                When communicating with our support desk, submitting bug
                reports, or participating in our community channels:
              </p>
              <ul className="list-disc space-y-1.5 pl-5 text-xs sm:text-sm">
                <li>
                  You agree to treat our team and other players with dignity and
                  respect.
                </li>
                <li>
                  You shall not transmit messages that are unlawful, harassing,
                  defamatory, abusive, racist, hateful, sexually explicit, or
                  fraudulent.
                </li>
                <li>
                  We reserve the right to refuse service or cease communication
                  with any individual who engages in abusive or threatening
                  behavior toward our developers.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 11 */}
          <section id="advertising" className="scroll-mt-28">
            <div className="mb-3 flex items-center gap-2">
              <Badge variant="accent">Monetization</Badge>
              <h2 className="text-text text-2xl font-bold">
                11. Advertisements & Third Parties
              </h2>
            </div>
            <div className="glass space-y-4 rounded-2xl p-6 sm:p-8">
              <p>
                Our games may display digital advertisements served by
                third-party ad networks (primarily <strong>Google AdMob</strong>
                ):
              </p>
              <ul className="list-disc space-y-1.5 pl-5 text-xs sm:text-sm">
                <li>
                  <strong>Rewarded Video Ads:</strong> Watching rewarded ads
                  (such as to revive a character after an obstacle hit in Road
                  Hopper or Bank Hopper) is entirely voluntary.
                </li>
                <li>
                  <strong>Third-Party Advertisers:</strong> Advertised products
                  or third-party links are operated by independent entities.{" "}
                  {SITE_NAME} does not endorse, verify, or assume liability for
                  the content, privacy practices, or goods of third-party
                  advertisers.
                </li>
                <li>
                  <strong>Ad Removal:</strong> Some games may offer an optional
                  in-app purchase to remove non-rewarded interstitial and banner
                  advertisements.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 12 */}
          <section id="updates-availability" className="scroll-mt-28">
            <div className="mb-3 flex items-center gap-2">
              <Badge variant="primary">Maintenance</Badge>
              <h2 className="text-text text-2xl font-bold">
                12. Updates, Balancing & Service Availability
              </h2>
            </div>
            <div className="glass space-y-4 rounded-2xl p-6 sm:p-8">
              <p>To provide continuous improvement and maintain balance:</p>
              <ul className="list-disc space-y-1.5 pl-5 text-xs sm:text-sm">
                <li>
                  <strong>Software Updates:</strong> We may release software
                  patches, bug fixes, graphical improvements, and content
                  updates via Google Play. Some updates may be mandatory to
                  continue accessing online features such as leaderboards.
                </li>
                <li>
                  <strong>Gameplay Balancing:</strong> We reserve the right to
                  tune game attributes, score thresholds, hero abilities, and
                  economy balances to ensure fairness and longevity.
                </li>
                <li>
                  <strong>Offline Play Continuity:</strong> While third-party
                  services (like leaderboards or ad networks) may experience
                  scheduled or unscheduled downtime, core single-player arcade
                  modes remain playable offline on your device.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 13 */}
          <section id="termination" className="scroll-mt-28">
            <div className="mb-3 flex items-center gap-2">
              <Badge variant="secondary">Enforcement</Badge>
              <h2 className="text-text text-2xl font-bold">
                13. Termination & Account Cancellation
              </h2>
            </div>
            <div className="glass space-y-4 rounded-2xl p-6 sm:p-8">
              <p>
                <strong>Termination by You:</strong> You may terminate your
                agreement to these Terms at any time simply by uninstalling our
                applications and discontinuing all use of our Services.
              </p>
              <p>
                <strong>Termination by Us:</strong> We reserve the right,
                without prior notice, to suspend or terminate your license,
                block access to online leaderboards, or void illegitimately
                obtained virtual items if you materially breach these Terms,
                engage in confirmed cheating or memory hacking, or commit
                fraudulent activity.
              </p>
              <p className="text-muted text-xs">
                Upon termination for any reason, all licenses granted to you
                herein immediately cease, and you must immediately delete all
                copies of our games from your hardware.
              </p>
            </div>
          </section>

          {/* Section 14 */}
          <section id="disclaimer" className="scroll-mt-28">
            <div className="mb-3 flex items-center gap-2">
              <Badge variant="accent">Warranty</Badge>
              <h2 className="text-text text-2xl font-bold">
                14. Disclaimer of Warranties (&quot;As Is&quot;)
              </h2>
            </div>
            <div className="glass space-y-4 rounded-2xl p-6 sm:p-8">
              <div className="border-secondary/30 bg-secondary/10 text-text space-y-2 rounded-xl border p-5 text-xs sm:text-sm">
                <div className="text-secondary flex items-center gap-2 font-semibold">
                  <AlertTriangle className="h-4 w-4" />
                  Software Provided on an &quot;AS IS&quot; and &quot;AS
                  AVAILABLE&quot; Basis
                </div>
                <p className="text-muted leading-relaxed">
                  TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, {SITE_NAME}{" "}
                  GAMES, WEBSITES, AND SERVICES ARE PROVIDED &quot;AS IS&quot;
                  AND &quot;AS AVAILABLE&quot;, WITHOUT WARRANTY OF ANY KIND,
                  EITHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE.
                </p>
                <p className="text-muted leading-relaxed">
                  WE EXPRESSLY DISCLAIM ALL IMPLIED WARRANTIES, INCLUDING BUT
                  NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                  PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, AND FREEDOM FROM
                  VIRUSES OR DEFECTS. WE DO NOT WARRANT THAT OUR GAMES WILL RUN
                  UNINTERRUPTED OR ERROR-FREE ACROSS EVERY SPECIFIC HARDWARE
                  CONFIGURATION OR OPERATING SYSTEM BUILD.
                </p>
              </div>
            </div>
          </section>

          {/* Section 15 */}
          <section id="limitation-liability" className="scroll-mt-28">
            <div className="mb-3 flex items-center gap-2">
              <Badge variant="primary">Liability</Badge>
              <h2 className="text-text text-2xl font-bold">
                15. Limitation of Liability
              </h2>
            </div>
            <div className="glass space-y-4 rounded-2xl p-6 sm:p-8">
              <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW:</p>
              <ul className="list-disc space-y-2 pl-5 text-xs sm:text-sm">
                <li>
                  IN NO EVENT SHALL {SITE_NAME}, ITS DEVELOPERS, OR CONTRIBUTORS
                  BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY,
                  PUNITIVE, OR CONSEQUENTIAL DAMAGES (INCLUDING LOSS OF DATA,
                  DEVICE MALFUNCTION, LOSS OF GOODWILL, OR WORK STOPPAGE)
                  ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OR THE USE OF
                  OUR SERVICES.
                </li>
                <li>
                  OUR AGGREGATE TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING
                  OUT OF OR RELATING TO OUR GAMES AND SERVICES SHALL NOT EXCEED
                  THE TOTAL AMOUNT ACTUALLY PAID BY YOU TO SOUMOSTER VIA GOOGLE
                  PLAY IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM, OR FIFTY
                  US DOLLARS ($50.00 USD), WHICHEVER IS LESS.
                </li>
              </ul>
              <div className="border-primary/20 bg-primary/5 text-text rounded-xl border p-4 text-xs">
                <strong>Statutory Protections:</strong> Certain jurisdictions
                (including the European Union) do not permit the exclusion of
                certain warranties or the limitation of liability for
                intentional misconduct, gross negligence, or personal injury. In
                such jurisdictions, our liability shall be limited to the
                minimum extent permitted by mandatory applicable law.
              </div>
            </div>
          </section>

          {/* Section 16 */}
          <section id="indemnification" className="scroll-mt-28">
            <div className="mb-3 flex items-center gap-2">
              <Badge variant="secondary">Indemnity</Badge>
              <h2 className="text-text text-2xl font-bold">
                16. Indemnification
              </h2>
            </div>
            <div className="glass space-y-4 rounded-2xl p-6 sm:p-8">
              <p>
                You agree to defend, indemnify, and hold harmless {SITE_NAME},
                its developers, and contractors from and against any third-party
                claims, damages, liabilities, losses, and reasonable legal fees
                arising out of or related to:
              </p>
              <ul className="list-disc space-y-1.5 pl-5 text-xs sm:text-sm">
                <li>
                  Your violation or alleged breach of any provision of these
                  Terms.
                </li>
                <li>
                  Your unlawful, fraudulent, or abusive use of our games and
                  services.
                </li>
                <li>
                  Your violation of any third-party intellectual property or
                  privacy rights.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 17 */}
          <section id="dispute-resolution" className="scroll-mt-28">
            <div className="mb-3 flex items-center gap-2">
              <Badge variant="primary">Dispute Resolution</Badge>
              <h2 className="text-text text-2xl font-bold">
                17. Dispute Resolution, Governing Law & EU ODR
              </h2>
            </div>
            <div className="glass space-y-5 rounded-2xl p-6 sm:p-8">
              <p>
                <strong>Informal Dispute Resolution First:</strong> We are
                committed to player satisfaction and resolving disputes
                amicably. Before initiating any formal legal or arbitration
                proceedings, you agree to contact us at{" "}
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="text-primary font-mono underline"
                >
                  {SUPPORT_EMAIL}
                </a>{" "}
                with a brief description of your grievance. We will attempt in
                good faith to resolve the matter informally within thirty (30)
                days.
              </p>

              {/* Template generator */}
              <div className="border-primary/30 bg-primary/5 space-y-3 rounded-xl border p-4 text-xs sm:text-sm">
                <h4 className="text-text font-semibold">
                  Formal Notice & Dispute Submission Template
                </h4>
                <p className="text-muted text-xs">
                  To submit a formal claim or inquiry regarding these Terms,
                  click below to copy a pre-formatted notice or send an email
                  directly:
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={handleCopyNoticeTemplate}
                    className="text-xs"
                  >
                    {copied ? (
                      <>
                        <Check className="text-accent h-3.5 w-3.5" />
                        Notice Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        Copy Notice Template
                      </>
                    )}
                  </Button>
                  <Button
                    size="sm"
                    variant="primary"
                    href={`mailto:${SUPPORT_EMAIL}?subject=Formal%20Notice%20under%20Terms%20and%20Conditions&body=Dear%20SouMoster%20Legal%20Team%2C%0A%0AI%20am%20submitting%20an%20inquiry%20regarding%20your%20Terms%20and%20Conditions.%0A%0AApp%3A%20%0ADescription%3A%20%0A%0AThank%20you.`}
                    className="text-xs"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    Email Legal Desk
                  </Button>
                </div>
              </div>

              {/* EU Online Dispute Resolution Notice */}
              <div className="border-border bg-card/40 space-y-2 rounded-xl border p-4 text-xs">
                <div className="text-text flex items-center gap-2 font-semibold">
                  <Globe className="text-primary h-4 w-4" />
                  European Union Online Dispute Resolution (ODR) Platform
                </div>
                <p className="text-muted leading-relaxed">
                  Pursuant to Article 14 of Regulation (EU) No 524/2013, the
                  European Commission provides an online dispute resolution
                  platform for consumers residing in the EU to resolve consumer
                  disputes out-of-court. You can access the official EU ODR
                  portal at:
                </p>
                <div className="pt-1">
                  <a
                    href="https://ec.europa.eu/consumers/odr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary inline-flex items-center gap-1 font-medium hover:underline"
                  >
                    https://ec.europa.eu/consumers/odr
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Section 18 */}
          <section id="contact-notices" className="scroll-mt-28">
            <div className="mb-3 flex items-center gap-2">
              <Badge variant="primary">Support & Notices</Badge>
              <h2 className="text-text text-2xl font-bold">
                18. Contact Information & Legal Notices
              </h2>
            </div>
            <div className="glass space-y-4 rounded-2xl p-6 sm:p-8">
              <p>
                If you have questions, comments, or legal notices concerning
                these Terms and Conditions, please contact our legal desk:
              </p>
              <div className="border-border bg-card/60 space-y-3 rounded-xl border p-5 text-xs sm:text-sm">
                <div>
                  <span className="text-text font-semibold">
                    {SITE_NAME} Legal & Developer Operations
                  </span>
                </div>
                <div>
                  Email:{" "}
                  <a
                    href={`mailto:${SUPPORT_EMAIL}`}
                    className="text-primary font-mono font-medium hover:underline"
                  >
                    {SUPPORT_EMAIL}
                  </a>
                </div>
                <div>
                  Estimated Response Window:{" "}
                  <span className="text-text font-medium">{RESPONSE_TIME}</span>
                </div>
                <div>
                  Official Developer Portfolio:{" "}
                  <a
                    href={PLAY_STORE_DEVELOPER_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary inline-flex items-center gap-1 font-medium hover:underline"
                  >
                    Google Play Developer Page
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

function ShieldCheckIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
