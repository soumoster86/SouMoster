"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Baby,
  Check,
  CheckCircle2,
  Copy,
  Globe,
  Lock,
  Mail,
  Printer,
  Scale,
  Shield,
  Trash2,
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
  { id: "introduction", title: "1. Introduction & Scope" },
  { id: "summary", title: "2. Privacy at a Glance" },
  { id: "data-controller", title: "3. Data Controller Information" },
  { id: "data-collected", title: "4. Information We Collect" },
  {
    id: "gdpr-legal-bases",
    title: "5. Legal Bases for Processing (GDPR)",
    badge: "EU / UK",
  },
  { id: "advertising", title: "6. Advertising & Monetization", badge: "AdMob" },
  { id: "analytics", title: "7. Analytics & Crash Diagnostics" },
  { id: "in-app-purchases", title: "8. In-App Purchases & Billing" },
  {
    id: "international-transfers",
    title: "9. International Data Transfers",
    badge: "EU / UK",
  },
  {
    id: "user-rights-gdpr",
    title: "10. Your Rights Under EU & UK GDPR",
    badge: "GDPR",
  },
  {
    id: "us-state-rights",
    title: "11. United States Privacy Rights",
    badge: "CCPA / CPRA",
  },
  {
    id: "childrens-privacy",
    title: "12. Children's Privacy & Families Policy",
    badge: "COPPA / PEGI 3",
  },
  { id: "data-retention", title: "13. Data Retention Policy" },
  {
    id: "data-deletion",
    title: "14. Data & Account Deletion Process",
    badge: "Google Play",
  },
  { id: "third-party-services", title: "15. Third-Party Service Providers" },
  { id: "cookies-website", title: "16. Website Visitors & Cookies" },
  { id: "security", title: "17. Technical & Security Safeguards" },
  { id: "changes", title: "18. Updates to This Policy" },
  { id: "contact", title: "19. Contact & Supervisory Authority" },
];

export function PrivacyContent() {
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

  const handleCopyDeletionTemplate = () => {
    const template = `Subject: Data Deletion Request under GDPR / Google Play Policy

Dear SouMoster Privacy Team,

I am requesting the permanent deletion of all personal data associated with my use of your apps/games under Article 17 of the GDPR and Google Play Data Safety policies.

Details:
- App / Game Name: [Insert game title]
- Device Operating System: Android
- My Google Play Gamer Tag or Anonymous Device/Ad ID (if known): [Insert Here or N/A]
- Contact Email: [Insert Your Email]

Please confirm once the data deletion has been executed within the 30-day statutory timeline.

Thank you.`;

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
          <Shield className="h-3.5 w-3.5" />
          EU GDPR & Worldwide App Store Compliant
        </div>
        <h1 className="text-text text-3xl font-bold tracking-tight sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="text-muted mx-auto mt-4 max-w-2xl text-base sm:text-lg">
          Clear, transparent, and comprehensive information about how{" "}
          {SITE_NAME} handles personal data across all Android apps, games, and
          online services published worldwide.
        </p>
        <div className="text-muted mt-4 flex flex-wrap items-center justify-center gap-4 text-xs">
          <span>
            <strong>Effective Date:</strong> March 1, 2026
          </span>
          <span>•</span>
          <span>
            <strong>Last Updated:</strong> September 20, 2026
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
          <div className="bg-accent/20 text-accent flex h-10 w-10 items-center justify-center rounded-xl">
            <CheckCircle2 className="h-5 w-5" />
          </div>
          <h3 className="text-text mt-3 text-base font-semibold">
            Zero Data Selling
          </h3>
          <p className="text-muted mt-1 text-xs leading-relaxed">
            We never sell, rent, or trade your personal information to data
            brokers or third parties.
          </p>
        </motion.div>

        <motion.div
          className="glass rounded-2xl p-5"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="bg-primary/20 text-primary flex h-10 w-10 items-center justify-center rounded-xl">
            <Scale className="h-5 w-5" />
          </div>
          <h3 className="text-text mt-3 text-base font-semibold">
            GDPR & EU Protected
          </h3>
          <p className="text-muted mt-1 text-xs leading-relaxed">
            Full compliance with Regulation (EU) 2016/679, honoring access,
            portability, and deletion.
          </p>
        </motion.div>

        <motion.div
          className="glass rounded-2xl p-5"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <div className="bg-secondary/20 text-secondary flex h-10 w-10 items-center justify-center rounded-xl">
            <Baby className="h-5 w-5" />
          </div>
          <h3 className="text-text mt-3 text-base font-semibold">
            Family-Safe (PEGI 3)
          </h3>
          <p className="text-muted mt-1 text-xs leading-relaxed">
            No targeted or behavioral advertising aimed at children; strictly
            compliant with COPPA & Google Play Families.
          </p>
        </motion.div>

        <motion.div
          className="glass rounded-2xl p-5"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="bg-primary/20 text-primary flex h-10 w-10 items-center justify-center rounded-xl">
            <Trash2 className="h-5 w-5" />
          </div>
          <h3 className="text-text mt-3 text-base font-semibold">
            Right to Erasure
          </h3>
          <p className="text-muted mt-1 text-xs leading-relaxed">
            Request simple and permanent deletion of telemetry and records
            anytime within 30 days.
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
                  placeholder="Filter topics (e.g. GDPR, Ads)..."
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
                  Print Policy
                </button>
                <a
                  href={`mailto:${SUPPORT_EMAIL}?subject=Privacy%20Inquiry`}
                  className="text-primary flex items-center gap-1.5 hover:underline"
                >
                  <Mail className="h-3.5 w-3.5" />
                  Contact Privacy Team
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
              <Badge variant="primary">Overview</Badge>
              <h2 className="text-text text-2xl font-bold">
                1. Introduction & Scope
              </h2>
            </div>
            <div className="glass space-y-4 rounded-2xl p-6 sm:p-8">
              <p>
                Welcome to <strong>{SITE_NAME}</strong> (&quot;we&quot;,
                &quot;our&quot;, or &quot;us&quot;). We build enjoyable,
                accessible, and high-quality mobile games and applications
                published worldwide on the Google Play Store and related
                platforms. This Privacy Policy applies to all of our current
                and future games, applications, betas, updates, and our
                official website located at{" "}
                <a
                  href={SITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium hover:underline"
                >
                  {SITE_URL}
                </a>
                .
              </p>
              <p>
                We are staunch advocates for digital privacy, transparency, and
                player autonomy. This Privacy Policy provides clear,
                intelligible, and legally comprehensive disclosures regarding
                how we collect, process, share, protect, and retain personal
                information when you download, install, play our games, or
                interact with our services.
              </p>
              <p>
                This policy has been specifically authored to comply with the
                highest international standards, including:
              </p>
              <ul className="list-disc space-y-1.5 pl-5 text-xs sm:text-sm">
                <li>
                  <strong>
                    The European Union General Data Protection Regulation (GDPR)
                  </strong>{" "}
                  (Regulation (EU) 2016/679) and the UK Data Protection Act 2018
                  / UK GDPR.
                </li>
                <li>
                  <strong>The ePrivacy Directive (Directive 2002/58/EC)</strong>{" "}
                  and the IAB Europe Transparency and Consent Framework (TCF
                  v2.2).
                </li>
                <li>
                  <strong>The Google Play Developer Program Policies</strong>,
                  specifically the Data Safety section, Families Policy, and
                  Account/Data Deletion mandates.
                </li>
                <li>
                  <strong>
                    The Children&apos;s Online Privacy Protection Act (COPPA)
                  </strong>{" "}
                  in the United States.
                </li>
                <li>
                  <strong>US State Privacy Laws</strong>, including the
                  California Consumer Privacy Act (CCPA) as amended by the
                  California Privacy Rights Act (CPRA), and the Virginia
                  Consumer Data Protection Act (VCDPA).
                </li>
              </ul>
              <div className="border-primary/20 bg-primary/5 text-text rounded-xl border p-4 text-xs">
                <strong>Applicability:</strong> By installing, accessing, or
                playing our games, you acknowledge the data processing practices
                detailed in this Privacy Policy. If you do not agree with these
                practices, please refrain from using our games and services or
                exercise your opt-out rights described below.
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section id="summary" className="scroll-mt-28">
            <div className="mb-3 flex items-center gap-2">
              <Badge variant="secondary">Quick Guide</Badge>
              <h2 className="text-text text-2xl font-bold">
                2. Privacy at a Glance
              </h2>
            </div>
            <div className="glass space-y-4 rounded-2xl p-6 sm:p-8">
              <p>
                We believe privacy policies should be straightforward. Here is
                an executive summary of our commitments:
              </p>
              <div className="grid gap-3 text-xs sm:grid-cols-2">
                <div className="border-border bg-card/40 space-y-2 rounded-xl border p-4">
                  <div className="text-text flex items-center gap-2 font-semibold">
                    <CheckCircle2 className="text-accent h-4 w-4" />
                    Offline-First Gameplay
                  </div>
                  <p className="text-muted">
                    Core gameplay works 100% offline without requiring an active
                    internet connection or cloud account.
                  </p>
                </div>
                <div className="border-border bg-card/40 space-y-2 rounded-xl border p-4">
                  <div className="text-text flex items-center gap-2 font-semibold">
                    <CheckCircle2 className="text-accent h-4 w-4" />
                    No Invasive Hardware Access
                  </div>
                  <p className="text-muted">
                    Our games do not access your camera, microphone, contacts,
                    location GPS, or photos.
                  </p>
                </div>
                <div className="border-border bg-card/40 space-y-2 rounded-xl border p-4">
                  <div className="text-text flex items-center gap-2 font-semibold">
                    <CheckCircle2 className="text-accent h-4 w-4" />
                    Google Play Secure Payments
                  </div>
                  <p className="text-muted">
                    All optional in-app purchases are handled exclusively by
                    Google Play. We never see or hold your credit card data.
                  </p>
                </div>
                <div className="border-border bg-card/40 space-y-2 rounded-xl border p-4">
                  <div className="text-text flex items-center gap-2 font-semibold">
                    <CheckCircle2 className="text-accent h-4 w-4" />
                    Transparent Consent in EU
                  </div>
                  <p className="text-muted">
                    European players are served a certified Consent Management
                    Platform (Google UMP) to choose between personalized or
                    contextual ads.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section id="data-controller" className="scroll-mt-28">
            <div className="mb-3 flex items-center gap-2">
              <Badge variant="primary">Legal Identity</Badge>
              <h2 className="text-text text-2xl font-bold">
                3. Data Controller Information
              </h2>
            </div>
            <div className="glass space-y-4 rounded-2xl p-6 sm:p-8">
              <p>
                For the purposes of the EU General Data Protection Regulation
                (GDPR Article 4(7)), UK GDPR, and applicable data protection
                legislation, the <strong>Data Controller</strong> responsible
                for your personal data is:
              </p>
              <div className="border-border bg-card/60 space-y-2 rounded-xl border p-5 text-xs sm:text-sm">
                <div className="border-border/50 grid grid-cols-1 gap-2 border-b py-1 sm:grid-cols-3">
                  <span className="text-text font-medium">
                    Developer / Entity Name:
                  </span>
                  <span className="text-muted sm:col-span-2">
                    {SITE_NAME} (Independent Developer)
                  </span>
                </div>
                <div className="border-border/50 grid grid-cols-1 gap-2 border-b py-1 sm:grid-cols-3">
                  <span className="text-text font-medium">
                    Google Play Developer ID:
                  </span>
                  <span className="text-muted sm:col-span-2">
                    9220341090582575849
                  </span>
                </div>
                <div className="border-border/50 grid grid-cols-1 gap-2 border-b py-1 sm:grid-cols-3">
                  <span className="text-text font-medium">
                    Primary Privacy Contact:
                  </span>
                  <span className="text-primary font-mono font-medium sm:col-span-2">
                    {SUPPORT_EMAIL}
                  </span>
                </div>
                <div className="border-border/50 grid grid-cols-1 gap-2 border-b py-1 sm:grid-cols-3">
                  <span className="text-text font-medium">Response Time:</span>
                  <span className="text-muted sm:col-span-2">
                    {RESPONSE_TIME} (Statutory response within 30 days)
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-2 py-1 sm:grid-cols-3">
                  <span className="text-text font-medium">
                    Official Developer Portfolio:
                  </span>
                  <span className="sm:col-span-2">
                    <a
                      href={PLAY_STORE_DEVELOPER_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary inline-flex items-center gap-1 font-medium hover:underline"
                    >
                      Google Play Store Developer Page
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  </span>
                </div>
              </div>
              <p className="text-muted text-xs">
                If you have any questions about this Privacy Policy, wish to
                exercise any statutory rights, or require assistance with data
                deletion, please contact us at{" "}
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="text-primary hover:underline"
                >
                  {SUPPORT_EMAIL}
                </a>
                .
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section id="data-collected" className="scroll-mt-28">
            <div className="mb-3 flex items-center gap-2">
              <Badge variant="accent">Data Classification</Badge>
              <h2 className="text-text text-2xl font-bold">
                4. Information We Collect
              </h2>
            </div>
            <div className="glass space-y-6 rounded-2xl p-6 sm:p-8">
              <p>
                We practice data minimization: we collect only information that
                is strictly necessary to operate our games, diagnose crashes,
                protect against cheating, process purchases, and monetize free
                gameplay via compliant advertising.
              </p>

              {/* Sub-item A */}
              <div className="border-primary space-y-2 border-l-2 pl-4">
                <h3 className="text-text text-base font-semibold">
                  A. Automatically Collected Telemetry & Diagnostics
                </h3>
                <p>
                  When you launch and play our games with internet access
                  enabled, our analytics and crash diagnostics SDKs (Google
                  Analytics for Firebase, Firebase Crashlytics) automatically
                  record:
                </p>
                <ul className="list-disc space-y-1 pl-5 text-xs sm:text-sm">
                  <li>
                    <strong>Device Specifications:</strong> Device model,
                    manufacturer, Android OS build and API level, system
                    language, screen resolution, GPU renderer, and RAM
                    availability (crucial for maintaining 60fps performance and
                    preventing stutter on older chipsets).
                  </li>
                  <li>
                    <strong>Network & General Location:</strong> Approximate
                    location at the country or city level derived from IP
                    address (IP addresses are discarded or truncated and never
                    linked to permanent user records). We never collect GPS or
                    precise geolocation.
                  </li>
                  <li>
                    <strong>Diagnostic Crash Logs:</strong> Stack traces, ANR
                    (Application Not Responding) timestamps, memory footprint at
                    time of crash, and app version number.
                  </li>
                </ul>
              </div>

              {/* Sub-item B */}
              <div className="border-secondary space-y-2 border-l-2 pl-4">
                <h3 className="text-text text-base font-semibold">
                  B. Gameplay & Progression Data
                </h3>
                <p>
                  To provide game mechanics, track missions, and enable
                  leaderboards:
                </p>
                <ul className="list-disc space-y-1 pl-5 text-xs sm:text-sm">
                  <li>
                    <strong>Local Save Files:</strong> High scores, unlocked
                    characters and cosmetics, virtual currencies, collectibles,
                    and campaign or mode progression are stored locally on your
                    device storage by default.
                  </li>
                  <li>
                    <strong>Google Play Games Services:</strong> If you choose
                    to link your Google Play Games account, your public Gamer
                    ID, avatar, and high score entries are transmitted to Google
                    Play Games servers to power global leaderboards and
                    achievements.
                  </li>
                </ul>
              </div>

              {/* Sub-item C */}
              <div className="border-accent space-y-2 border-l-2 pl-4">
                <h3 className="text-text text-base font-semibold">
                  C. Identifiers Used for Advertising
                </h3>
                <p>
                  Our ad partners (Google AdMob) may access the Google
                  Advertising ID (GAID / AAID) subject to user consent:
                </p>
                <ul className="list-disc space-y-1 pl-5 text-xs sm:text-sm">
                  <li>
                    In the European Economic Area (EEA) and the UK, personalized
                    ads and GAID collection are strictly conditional upon
                    explicit opt-in consent gathered through the certified
                    Consent Management Platform.
                  </li>
                  <li>
                    If consent is denied or if the device is identified as
                    belonging to a child, only contextual, non-personalized ads
                    are requested, and the advertising ID is used solely for
                    frequency capping, anti-fraud, and ad delivery verification.
                  </li>
                </ul>
              </div>

              {/* Sub-item D */}
              <div className="border-border space-y-2 border-l-2 pl-4">
                <h3 className="text-text text-base font-semibold">
                  D. Inquiries & Support Communications
                </h3>
                <p>
                  If you contact our support desk at{" "}
                  <code className="text-primary font-mono">
                    {SUPPORT_EMAIL}
                  </code>
                  :
                </p>
                <ul className="list-disc space-y-1 pl-5 text-xs sm:text-sm">
                  <li>
                    We receive your email address, your name or handle (if
                    provided in your email client), the contents of your
                    message, and any attached diagnostic screenshots or log
                    snippets you provide.
                  </li>
                  <li>
                    This information is used solely to troubleshoot your
                    inquiry, resolve bugs, or process data subject requests, and
                    is never shared or reused for marketing.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section id="gdpr-legal-bases" className="scroll-mt-28">
            <div className="mb-3 flex items-center gap-2">
              <Badge variant="primary">EU & UK GDPR</Badge>
              <h2 className="text-text text-2xl font-bold">
                5. Legal Bases for Processing (GDPR)
              </h2>
            </div>
            <div className="glass space-y-4 rounded-2xl p-6 sm:p-8">
              <p>
                Under Article 6 of the General Data Protection Regulation
                (GDPR), every processing activity involving personal data of
                individuals located within the European Union (EU), European
                Economic Area (EEA), or United Kingdom must be justified by an
                established legal basis.
              </p>
              <p>Below is our comprehensive legal basis mapping matrix:</p>

              <div className="border-border overflow-x-auto rounded-xl border">
                <table className="w-full text-left text-xs">
                  <thead className="bg-card/80 text-text border-border border-b font-semibold tracking-wider uppercase">
                    <tr>
                      <th className="p-3">Purpose of Processing</th>
                      <th className="p-3">Data Categories</th>
                      <th className="p-3">GDPR Legal Basis</th>
                    </tr>
                  </thead>
                  <tbody className="divide-border/60 text-muted divide-y">
                    <tr className="hover:bg-card/30">
                      <td className="text-text p-3 font-medium">
                        Core game functionality, mission progression & local
                        saving
                      </td>
                      <td className="p-3">
                        Gameplay stats, score, unlocked cosmetics, virtual
                        currencies
                      </td>
                      <td className="p-3">
                        <span className="bg-primary/20 text-primary inline-block rounded px-2 py-0.5 font-mono font-medium">
                          Art. 6(1)(b) Contract
                        </span>
                        <div className="mt-1 text-[11px]">
                          Necessary to execute the Terms of Service
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-card/30">
                      <td className="text-text p-3 font-medium">
                        In-app purchases (virtual currency packs, cosmetics,
                        ad-free upgrades)
                      </td>
                      <td className="p-3">
                        Google Play purchase token, order ID, product SKU
                      </td>
                      <td className="p-3">
                        <span className="bg-primary/20 text-primary inline-block rounded px-2 py-0.5 font-mono font-medium">
                          Art. 6(1)(b) Contract
                        </span>
                        <div className="mt-1 text-[11px]">
                          Fulfillment of digital goods purchase
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-card/30">
                      <td className="text-text p-3 font-medium">
                        Personalized in-game advertisements & behavioral ad
                        targeting
                      </td>
                      <td className="p-3">
                        Google Advertising ID (GAID), device ad profile
                      </td>
                      <td className="p-3">
                        <span className="bg-accent/20 text-accent inline-block rounded px-2 py-0.5 font-mono font-medium">
                          Art. 6(1)(a) Consent
                        </span>
                        <div className="mt-1 text-[11px]">
                          Obtained via Google UMP consent banner
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-card/30">
                      <td className="text-text p-3 font-medium">
                        Non-personalized / contextual ads & ad frequency capping
                      </td>
                      <td className="p-3">
                        Coarse IP (country), temporary device instance ID
                      </td>
                      <td className="p-3">
                        <span className="bg-secondary/20 text-secondary inline-block rounded px-2 py-0.5 font-mono font-medium">
                          Art. 6(1)(f) Legitimate Interest
                        </span>
                        <div className="mt-1 text-[11px]">
                          Supporting free-to-play game sustainability
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-card/30">
                      <td className="text-text p-3 font-medium">
                        Crash diagnostics, bug fixing & performance optimization
                      </td>
                      <td className="p-3">
                        Crash stack traces, device specs, ANR telemetry
                      </td>
                      <td className="p-3">
                        <span className="bg-secondary/20 text-secondary inline-block rounded px-2 py-0.5 font-mono font-medium">
                          Art. 6(1)(f) Legitimate Interest
                        </span>
                        <div className="mt-1 text-[11px]">
                          Maintaining stability and user experience
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-card/30">
                      <td className="text-text p-3 font-medium">
                        Responding to support tickets & data deletion requests
                      </td>
                      <td className="p-3">
                        Email address, player inquiry, technical details
                      </td>
                      <td className="p-3">
                        <span className="bg-primary/20 text-primary inline-block rounded px-2 py-0.5 font-mono font-medium">
                          Art. 6(1)(c) Legal Obligation
                        </span>
                        <div className="mt-1 text-[11px]">
                          Complying with statutory consumer & privacy laws
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section id="advertising" className="scroll-mt-28">
            <div className="mb-3 flex items-center gap-2">
              <Badge variant="secondary">Monetization</Badge>
              <h2 className="text-text text-2xl font-bold">
                6. Advertising & Monetization
              </h2>
            </div>
            <div className="glass space-y-4 rounded-2xl p-6 sm:p-8">
              <p>
                To keep our games free to download and play for everyone, we
                incorporate digital
                advertising provided by certified third-party ad networks,
                primarily <strong>Google AdMob</strong> (Google LLC).
              </p>
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="border-border bg-card/40 rounded-xl border p-4">
                  <h4 className="text-text font-semibold">
                    Rewarded Video Ads (Player Initiated)
                  </h4>
                  <p className="text-muted mt-1">
                    Players can voluntarily watch a short video ad to revive a
                    character, claim a bonus, or continue a run. Watching
                    rewarded ads is 100% optional and is never forced.
                  </p>
                </div>
                <div className="border-border bg-card/40 rounded-xl border p-4">
                  <h4 className="text-text font-semibold">
                    EU Consent & Google UMP (User Messaging Platform)
                  </h4>
                  <p className="text-muted mt-1">
                    For players located in the EU, EEA, UK, and Switzerland, our
                    games integrate the Google Mobile Ads SDK with the Google
                    User Messaging Platform (UMP), adhering to the{" "}
                    <strong>
                      IAB Europe Transparency & Consent Framework (TCF v2.2)
                    </strong>
                    . When you first open the game, you are presented with a
                    consent dialog allowing you to consent to or reject
                    personalized advertising and data processing vendors.
                  </p>
                </div>
                <div className="border-border bg-card/40 rounded-xl border p-4">
                  <h4 className="text-text font-semibold">
                    How to Opt Out / Reset Advertising ID on Android
                  </h4>
                  <p className="text-muted mt-1">
                    You maintain complete control over ad personalization
                    directly via your Android operating system:
                  </p>
                  <ol className="text-text mt-2 list-decimal space-y-1 pl-5">
                    <li>
                      Open device <strong>Settings</strong>.
                    </li>
                    <li>
                      Navigate to <strong>Google</strong> &rarr;{" "}
                      <strong>All Services</strong> &rarr; <strong>Ads</strong>.
                    </li>
                    <li>
                      Tap <strong>Delete advertising ID</strong> or{" "}
                      <strong>Reset advertising ID</strong>.
                    </li>
                    <li>
                      Toggle off <strong>Enable Personalized Ads</strong> (if
                      running Android 11 or earlier).
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </section>

          {/* Section 7 */}
          <section id="analytics" className="scroll-mt-28">
            <div className="mb-3 flex items-center gap-2">
              <Badge variant="accent">Diagnostics</Badge>
              <h2 className="text-text text-2xl font-bold">
                7. Analytics & Crash Diagnostics
              </h2>
            </div>
            <div className="glass space-y-4 rounded-2xl p-6 sm:p-8">
              <p>
                Mobile games run across thousands of different Android
                smartphone and tablet models, chipsets, and OS flavors. To
                detect crashes, optimize GPU rendering, and ensure fluid 60fps
                frame rates, we rely on:
              </p>
              <ul className="list-disc space-y-2 pl-5 text-xs sm:text-sm">
                <li>
                  <strong>Google Analytics for Firebase:</strong> Measures
                  aggregated player behavior such as level completions, average
                  session duration, and feature adoption. All metrics are
                  pseudonymous and aggregated; they cannot be used to determine
                  your real-world identity.
                </li>
                <li>
                  <strong>Firebase Crashlytics & Google Play Vitals:</strong>{" "}
                  Captures anonymous crash stack traces when a game terminates
                  unexpectedly or stutters. Crash logs include the line of code
                  that triggered the fault, memory pressure, and Android OS
                  version. They contain zero personal communications or personal
                  files.
                </li>
              </ul>
              <p className="text-muted text-xs">
                Retention: Crashlytics raw crash reports are automatically
                purged by Firebase after 90 days. Aggregated game metrics are
                retained for up to 14 months under standard Google Analytics
                retention rules.
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section id="in-app-purchases" className="scroll-mt-28">
            <div className="mb-3 flex items-center gap-2">
              <Badge variant="primary">Payments</Badge>
              <h2 className="text-text text-2xl font-bold">
                8. In-App Purchases & Billing
              </h2>
            </div>
            <div className="glass space-y-4 rounded-2xl p-6 sm:p-8">
              <p>
                Our games may offer optional in-app purchases (such as virtual
                currency bundles, cosmetic items, or ad-removal packages).
              </p>
              <div className="border-accent/20 bg-accent/5 space-y-2 rounded-xl border p-4">
                <div className="text-accent flex items-center gap-2 text-xs font-semibold sm:text-sm">
                  <Lock className="h-4 w-4" />
                  We Never Process or Store Financial Data
                </div>
                <p className="text-muted text-xs">
                  All monetary transactions are processed securely and
                  exclusively through the{" "}
                  <strong>Google Play In-App Billing API</strong> (Google
                  Payment Corp / Google LLC). SouMoster does not receive,
                  process, store, or have access to your credit card number,
                  banking details, or billing address.
                </p>
              </div>
              <p className="text-muted text-xs">
                Google provides our game client with a cryptographic purchase
                verification token, an order ID, a timestamp, and the SKU
                purchased, which our app uses strictly to unlock the digital
                items. All refund requests are governed by the official Google
                Play Refund Policy.
              </p>
            </div>
          </section>

          {/* Section 9 */}
          <section id="international-transfers" className="scroll-mt-28">
            <div className="mb-3 flex items-center gap-2">
              <Badge variant="primary">Transfers</Badge>
              <h2 className="text-text text-2xl font-bold">
                9. International Data Transfers
              </h2>
            </div>
            <div className="glass space-y-4 rounded-2xl p-6 sm:p-8">
              <p>
                SouMoster publishes apps and games globally. Consequently,
                personal data and telemetry collected through integrated SDKs
                (such as Google AdMob, Firebase, and Google Play Games) may be
                transferred to, stored, and processed on servers located outside
                the European Economic Area (EEA), primarily in the United
                States.
              </p>
              <p>
                Whenever personal data is transferred across international
                borders from the EU/EEA or UK, we verify that appropriate
                transfer mechanisms are in place as mandated by Articles 44–49
                of the GDPR:
              </p>
              <ul className="list-disc space-y-1.5 pl-5 text-xs sm:text-sm">
                <li>
                  <strong>Adequacy Decisions:</strong> Transfers to countries
                  recognized by the European Commission as offering an adequate
                  level of data protection.
                </li>
                <li>
                  <strong>Standard Contractual Clauses (SCCs):</strong> Our
                  primary third-party processors, including Google LLC, rely on
                  European Commission-approved Standard Contractual Clauses with
                  supplementary technical and organizational safeguards.
                </li>
                <li>
                  <strong>EU-U.S. Data Privacy Framework:</strong> Where
                  applicable, our service providers maintain active
                  certification under the EU-U.S. Data Privacy Framework and the
                  UK Extension.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 10 */}
          <section id="user-rights-gdpr" className="scroll-mt-28">
            <div className="mb-3 flex items-center gap-2">
              <Badge variant="primary">GDPR Rights</Badge>
              <h2 className="text-text text-2xl font-bold">
                10. Your Rights Under EU & UK GDPR
              </h2>
            </div>
            <div className="glass space-y-4 rounded-2xl p-6 sm:p-8">
              <p>
                If you reside in the European Union, European Economic Area, or
                the United Kingdom, Chapter III (Articles 12–23) of the GDPR
                grants you powerful, enforceable rights regarding your personal
                information:
              </p>

              <div className="grid gap-3 text-xs sm:grid-cols-2">
                <div className="border-border bg-card/40 space-y-1.5 rounded-xl border p-4">
                  <span className="text-text font-semibold">
                    1. Right of Access (Art. 15)
                  </span>
                  <p className="text-muted">
                    You have the right to request confirmation of whether we
                    process your data and receive a readable copy of any
                    personal data we hold.
                  </p>
                </div>
                <div className="border-border bg-card/40 space-y-1.5 rounded-xl border p-4">
                  <span className="text-text font-semibold">
                    2. Right to Rectification (Art. 16)
                  </span>
                  <p className="text-muted">
                    You have the right to demand the correction of inaccurate or
                    incomplete personal data without undue delay.
                  </p>
                </div>
                <div className="border-border bg-card/40 space-y-1.5 rounded-xl border p-4">
                  <span className="text-text font-semibold">
                    3. Right to Erasure / &quot;To Be Forgotten&quot; (Art. 17)
                  </span>
                  <p className="text-muted">
                    You have the right to obtain the permanent erasure of your
                    personal data when it is no longer necessary for the
                    original collection purpose.
                  </p>
                </div>
                <div className="border-border bg-card/40 space-y-1.5 rounded-xl border p-4">
                  <span className="text-text font-semibold">
                    4. Right to Restriction of Processing (Art. 18)
                  </span>
                  <p className="text-muted">
                    You have the right to restrict our processing of your data
                    while an accuracy or legitimacy dispute is being resolved.
                  </p>
                </div>
                <div className="border-border bg-card/40 space-y-1.5 rounded-xl border p-4">
                  <span className="text-text font-semibold">
                    5. Right to Data Portability (Art. 20)
                  </span>
                  <p className="text-muted">
                    You can request to receive your personal data in a
                    structured, commonly used, and machine-readable format (e.g.
                    JSON/CSV).
                  </p>
                </div>
                <div className="border-border bg-card/40 space-y-1.5 rounded-xl border p-4">
                  <span className="text-text font-semibold">
                    6. Right to Object (Art. 21)
                  </span>
                  <p className="text-muted">
                    You have the absolute right to object at any time to
                    processing grounded in legitimate interests or direct
                    advertising.
                  </p>
                </div>
                <div className="border-border bg-card/40 space-y-1.5 rounded-xl border p-4">
                  <span className="text-text font-semibold">
                    7. Right to Withdraw Consent (Art. 7(3))
                  </span>
                  <p className="text-muted">
                    Where processing is based on consent, you may revoke your
                    consent at any time with immediate future effect.
                  </p>
                </div>
                <div className="border-border bg-card/40 space-y-1.5 rounded-xl border p-4">
                  <span className="text-text font-semibold">
                    8. Automated Decision-Making (Art. 22)
                  </span>
                  <p className="text-muted">
                    We do not engage in any automated individual decision-making
                    or profiling that produces legal or similarly significant
                    effects.
                  </p>
                </div>
              </div>

              <div className="border-primary/30 bg-primary/10 text-text space-y-2 rounded-xl border p-4 text-xs">
                <div className="font-semibold">
                  How to Exercise Your GDPR Rights:
                </div>
                <p className="text-muted">
                  To exercise any of the rights listed above, simply send an
                  email to{" "}
                  <a
                    href={`mailto:${SUPPORT_EMAIL}`}
                    className="text-primary font-mono font-medium underline"
                  >
                    {SUPPORT_EMAIL}
                  </a>{" "}
                  with the subject{" "}
                  <em>&quot;GDPR Data Subject Request&quot;</em>. We will
                  acknowledge your request within {RESPONSE_TIME} and execute it
                  completely free of charge within 30 days as required by GDPR
                  Article 12(3).
                </p>
              </div>
            </div>
          </section>

          {/* Section 11 */}
          <section id="us-state-rights" className="scroll-mt-28">
            <div className="mb-3 flex items-center gap-2">
              <Badge variant="secondary">US State Laws</Badge>
              <h2 className="text-text text-2xl font-bold">
                11. United States Privacy Rights
              </h2>
            </div>
            <div className="glass space-y-4 rounded-2xl p-6 sm:p-8">
              <p>
                This section provides mandatory supplemental disclosures for
                residents of California (CCPA/CPRA), Virginia (VCDPA), Colorado
                (CPA), Connecticut (CTDPA), and Utah (UCPA).
              </p>
              <ul className="list-disc space-y-2 pl-5 text-xs sm:text-sm">
                <li>
                  <strong>No Sale of Personal Information:</strong> We do not
                  sell personal information of any player for monetary
                  consideration.
                </li>
                <li>
                  <strong>
                    Sharing for Cross-Context Behavioral Advertising:
                  </strong>{" "}
                  Third-party ad networks (AdMob) may serve targeted ads if
                  authorized. You may opt out by resetting your Android
                  Advertising ID as detailed in Section 6.
                </li>
                <li>
                  <strong>No Sensitive Personal Information Processing:</strong>{" "}
                  We do not collect or process sensitive personal information
                  (such as government IDs, precise geolocation, race, religious
                  beliefs, or health data).
                </li>
                <li>
                  <strong>Non-Discrimination:</strong> We will never
                  discriminate against you, downgrade game performance, or
                  charge different prices because you exercised your privacy
                  rights.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 12 */}
          <section id="childrens-privacy" className="scroll-mt-28">
            <div className="mb-3 flex items-center gap-2">
              <Badge variant="accent">Children & Families</Badge>
              <h2 className="text-text text-2xl font-bold">
                12. Children&apos;s Privacy & Families Policy
              </h2>
            </div>
            <div className="glass space-y-4 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="bg-accent/20 text-accent inline-flex h-9 w-9 items-center justify-center rounded-xl text-sm font-bold">
                  3+
                </span>
                <div>
                  <h3 className="text-text text-base font-semibold">
                    Google Play Rating 3+ / PEGI 3 / General Audience
                  </h3>
                  <p className="text-muted text-xs">
                    Our games are designed to be fun, safe, and suitable for
                    players of all ages.
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <p>
                  We treat children&apos;s privacy with extraordinary care and
                  rigorously enforce the following safeguards:
                </p>
                <ul className="list-disc space-y-1.5 pl-5">
                  <li>
                    <strong>No Behavioral Advertising to Children:</strong> We
                    do not knowingly serve targeted, personalized, or behavioral
                    advertisements to children under 13 in the United States
                    (under COPPA) or under the age of digital consent in the EU
                    (13–16 depending on Member State law).
                  </li>
                  <li>
                    <strong>Contextual / Family-Safe Ad Networks:</strong> Where
                    ads are rendered in family-rated experiences, we mandate
                    that our ad SDKs serve only non-personalized, contextual,
                    and age-appropriate advertisements certified under the
                    Google Play Families Self-Certified Ads SDK Program.
                  </li>
                  <li>
                    <strong>No Social Profiling or Public Chats:</strong> Our
                    games do not provide open chat rooms, private messaging, or
                    social networking features that allow children to publicly
                    broadcast personal details.
                  </li>
                  <li>
                    <strong>Parental Inquiries & Deletion:</strong> If a parent
                    or legal guardian learns that their child has inadvertently
                    transmitted personal data to us, please contact us
                    immediately at{" "}
                    <a
                      href={`mailto:${SUPPORT_EMAIL}`}
                      className="text-primary font-medium hover:underline"
                    >
                      {SUPPORT_EMAIL}
                    </a>
                    . Upon parental verification, we will promptly and
                    permanently purge all such records from our systems.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 13 */}
          <section id="data-retention" className="scroll-mt-28">
            <div className="mb-3 flex items-center gap-2">
              <Badge variant="primary">Storage Periods</Badge>
              <h2 className="text-text text-2xl font-bold">
                13. Data Retention Policy
              </h2>
            </div>
            <div className="glass space-y-4 rounded-2xl p-6 sm:p-8">
              <p>
                In compliance with the GDPR principle of storage limitation
                (Article 5(1)(e)), we retain personal data only for the period
                strictly necessary to fulfill the purposes outlined in this
                policy:
              </p>

              <div className="space-y-2 text-xs sm:text-sm">
                <div className="border-border bg-card/40 flex flex-col justify-between gap-1 rounded-xl border p-3 sm:flex-row sm:items-center">
                  <span className="text-text font-semibold">
                    Local Game Progress & High Scores
                  </span>
                  <span className="text-primary font-mono text-xs">
                    Until uninstalled or cache cleared by user
                  </span>
                </div>
                <div className="border-border bg-card/40 flex flex-col justify-between gap-1 rounded-xl border p-3 sm:flex-row sm:items-center">
                  <span className="text-text font-semibold">
                    Crash Stack Traces (Firebase Crashlytics)
                  </span>
                  <span className="text-primary font-mono text-xs">
                    90 days (rolling deletion)
                  </span>
                </div>
                <div className="border-border bg-card/40 flex flex-col justify-between gap-1 rounded-xl border p-3 sm:flex-row sm:items-center">
                  <span className="text-text font-semibold">
                    Aggregated Analytics (Firebase Analytics)
                  </span>
                  <span className="text-primary font-mono text-xs">
                    Up to 14 months
                  </span>
                </div>
                <div className="border-border bg-card/40 flex flex-col justify-between gap-1 rounded-xl border p-3 sm:flex-row sm:items-center">
                  <span className="text-text font-semibold">
                    Support Inquiries & Email Records
                  </span>
                  <span className="text-primary font-mono text-xs">
                    Up to 24 months (for ongoing support history)
                  </span>
                </div>
                <div className="border-border bg-card/40 flex flex-col justify-between gap-1 rounded-xl border p-3 sm:flex-row sm:items-center">
                  <span className="text-text font-semibold">
                    In-App Purchase Receipts (Google Play)
                  </span>
                  <span className="text-primary font-mono text-xs">
                    Retained as required by statutory tax laws
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 14 */}
          <section id="data-deletion" className="scroll-mt-28">
            <div className="mb-3 flex items-center gap-2">
              <Badge variant="accent">Account & Data Deletion</Badge>
              <h2 className="text-text text-2xl font-bold">
                14. Data & Account Deletion Process
              </h2>
            </div>
            <div className="glass space-y-5 rounded-2xl p-6 sm:p-8">
              <p>
                In strict accordance with the{" "}
                <strong>
                  Google Play App Defense Alliance & Data Safety Guidelines
                </strong>{" "}
                and <strong>GDPR Article 17</strong>, players have the right to
                request the total and permanent deletion of any data tied to
                their gameplay or device.
              </p>

              <div className="space-y-4">
                <div className="border-border bg-card/40 space-y-2 rounded-xl border p-4 text-xs sm:text-sm">
                  <h4 className="text-text flex items-center gap-2 font-semibold">
                    <span className="bg-primary/20 text-primary flex h-5 w-5 items-center justify-center rounded-full text-xs font-bold">
                      1
                    </span>
                    Method 1: Instant Local Device Data Deletion
                  </h4>
                  <p className="text-muted">
                    Because our games store your progress and currency locally:
                  </p>
                  <ol className="text-muted list-decimal space-y-1 pl-5 text-xs">
                    <li>
                      Open device <strong>Settings</strong> &rarr;{" "}
                      <strong>Apps</strong> &rarr; the relevant game.
                    </li>
                    <li>
                      Tap <strong>Storage & cache</strong>.
                    </li>
                    <li>
                      Tap <strong>Clear Storage</strong> (or Clear Data) to
                      instantly purge all game saves.
                    </li>
                  </ol>
                </div>

                <div className="border-border bg-card/40 space-y-2 rounded-xl border p-4 text-xs sm:text-sm">
                  <h4 className="text-text flex items-center gap-2 font-semibold">
                    <span className="bg-primary/20 text-primary flex h-5 w-5 items-center justify-center rounded-full text-xs font-bold">
                      2
                    </span>
                    Method 2: Google Play Games Cloud Data Deletion
                  </h4>
                  <p className="text-muted">
                    To delete leaderboard scores and achievements synced to your
                    Google account:
                  </p>
                  <ol className="text-muted list-decimal space-y-1 pl-5 text-xs">
                    <li>
                      Open the <strong>Play Games</strong> app on your Android
                      device.
                    </li>
                    <li>
                      Tap the <strong>three dots</strong> menu &rarr;{" "}
                      <strong>Settings</strong>.
                    </li>
                    <li>
                      Tap <strong>Delete Play Games account & data</strong>.
                    </li>
                    <li>
                      Under &quot;Delete individual game data&quot;, locate the
                      relevant game and tap <strong>Delete</strong>.
                    </li>
                  </ol>
                </div>

                <div className="border-primary/30 bg-primary/5 space-y-3 rounded-xl border p-4 text-xs sm:text-sm">
                  <h4 className="text-text flex items-center gap-2 font-semibold">
                    <span className="bg-primary/20 text-primary flex h-5 w-5 items-center justify-center rounded-full text-xs font-bold">
                      3
                    </span>
                    Method 3: Direct Controller Deletion Request
                  </h4>
                  <p className="text-muted">
                    If you have emailed our support team or wish to formally
                    erase any diagnostic, support, or telemetry records we hold,
                    you may submit a request using our one-click template below:
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={handleCopyDeletionTemplate}
                      className="text-xs"
                    >
                      {copied ? (
                        <>
                          <Check className="text-accent h-3.5 w-3.5" />
                          Template Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" />
                          Copy Deletion Email Template
                        </>
                      )}
                    </Button>
                    <Button
                      size="sm"
                      variant="primary"
                      href={`mailto:${SUPPORT_EMAIL}?subject=Data%20Deletion%20Request%20under%20GDPR%20%2F%20Google%20Play&body=Dear%20SouMoster%20Privacy%20Team%2C%0A%0AI%20am%20requesting%20the%20permanent%20deletion%20of%20all%20personal%20data%20associated%20with%20my%20use%20of%20your%20apps%2Fgames.%0A%0AApp%20Name%3A%20%5BInsert%20game%20title%5D%0AEmail%3A%20%0A%0AThank%20you.`}
                      className="text-xs"
                    >
                      <Mail className="h-3.5 w-3.5" />
                      Send Deletion Request Email
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 15 */}
          <section id="third-party-services" className="scroll-mt-28">
            <div className="mb-3 flex items-center gap-2">
              <Badge variant="secondary">Partners & SDKs</Badge>
              <h2 className="text-text text-2xl font-bold">
                15. Third-Party Service Providers
              </h2>
            </div>
            <div className="glass space-y-4 rounded-2xl p-6 sm:p-8">
              <p>
                To provide critical gaming infrastructure, distribution,
                diagnostics, and ads, we collaborate with industry-leading
                third-party partners. Each partner operates under its own
                privacy policy:
              </p>

              <div className="space-y-3 text-xs">
                <div className="border-border bg-card/40 flex flex-col justify-between gap-3 rounded-xl border p-4 sm:flex-row sm:items-center">
                  <div>
                    <h4 className="text-text text-sm font-semibold">
                      Google Play Services (Google LLC)
                    </h4>
                    <p className="text-muted mt-0.5">
                      Powers core Android OS services, app updates, in-app
                      billing, and security APIs.
                    </p>
                  </div>
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary inline-flex shrink-0 items-center gap-1 font-medium hover:underline"
                  >
                    Google Privacy Policy <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>

                <div className="border-border bg-card/40 flex flex-col justify-between gap-3 rounded-xl border p-4 sm:flex-row sm:items-center">
                  <div>
                    <h4 className="text-text text-sm font-semibold">
                      Google AdMob (Google LLC)
                    </h4>
                    <p className="text-muted mt-0.5">
                      Delivers banner, interstitial, and rewarded video ads.
                      Implements IAB Europe TCF v2.2 for EU/EEA user consent.
                    </p>
                  </div>
                  <a
                    href="https://policies.google.com/technologies/ads"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary inline-flex shrink-0 items-center gap-1 font-medium hover:underline"
                  >
                    AdMob Advertising Terms <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>

                <div className="border-border bg-card/40 flex flex-col justify-between gap-3 rounded-xl border p-4 sm:flex-row sm:items-center">
                  <div>
                    <h4 className="text-text text-sm font-semibold">
                      Firebase Analytics & Crashlytics (Google LLC)
                    </h4>
                    <p className="text-muted mt-0.5">
                      Collects anonymous telemetry, crash dumps, and performance
                      metrics to debug bugs.
                    </p>
                  </div>
                  <a
                    href="https://firebase.google.com/support/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary inline-flex shrink-0 items-center gap-1 font-medium hover:underline"
                  >
                    Firebase Privacy & Security{" "}
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>

                <div className="border-border bg-card/40 flex flex-col justify-between gap-3 rounded-xl border p-4 sm:flex-row sm:items-center">
                  <div>
                    <h4 className="text-text text-sm font-semibold">
                      Google Play Games Services
                    </h4>
                    <p className="text-muted mt-0.5">
                      Synchronizes game achievements and global player
                      leaderboards.
                    </p>
                  </div>
                  <a
                    href="https://developers.google.com/games/services/terms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary inline-flex shrink-0 items-center gap-1 font-medium hover:underline"
                  >
                    Play Games Services Terms{" "}
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Section 16 */}
          <section id="cookies-website" className="scroll-mt-28">
            <div className="mb-3 flex items-center gap-2">
              <Badge variant="accent">Website & Web</Badge>
              <h2 className="text-text text-2xl font-bold">
                16. Website Visitors & Cookies
              </h2>
            </div>
            <div className="glass space-y-4 rounded-2xl p-6 sm:p-8">
              <p>
                When you visit our developer website (
                <a
                  href={SITE_URL}
                  className="text-primary font-medium hover:underline"
                >
                  {SITE_URL}
                </a>
                ):
              </p>
              <ul className="list-disc space-y-1.5 pl-5 text-xs sm:text-sm">
                <li>
                  <strong>Essential Local Storage:</strong> We store minimal
                  functional preferences directly in your browser&apos;s
                  localStorage, such as <code>cookie-consent</code> (to record
                  whether you closed the cookie notice) and theme preferences
                  (dark/light mode).
                </li>
                <li>
                  <strong>No Cross-Site Tracking:</strong> We do not deploy
                  third-party advertising trackers, Facebook pixels, or invasive
                  profiling cookies on our developer website.
                </li>
                <li>
                  <strong>Browser Controls:</strong> You can configure your web
                  browser at any time to reject or delete stored cookies and
                  localStorage items via browser settings.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 17 */}
          <section id="security" className="scroll-mt-28">
            <div className="mb-3 flex items-center gap-2">
              <Badge variant="primary">Protection</Badge>
              <h2 className="text-text text-2xl font-bold">
                17. Technical & Security Safeguards
              </h2>
            </div>
            <div className="glass space-y-4 rounded-2xl p-6 sm:p-8">
              <p>
                Pursuant to Article 32 of the GDPR, we implement robust
                technical and organizational measures designed to safeguard your
                data against accidental loss, unauthorized access, disclosure,
                or alteration:
              </p>
              <div className="grid gap-3 text-xs sm:grid-cols-2">
                <div className="border-border bg-card/40 space-y-1 rounded-xl border p-4">
                  <span className="text-text font-semibold">
                    Encryption in Transit
                  </span>
                  <p className="text-muted">
                    All network communications with Google Play, Firebase, and
                    our website utilize TLS 1.3 / HTTPS encryption.
                  </p>
                </div>
                <div className="border-border bg-card/40 space-y-1 rounded-xl border p-4">
                  <span className="text-text font-semibold">
                    Access Control
                  </span>
                  <p className="text-muted">
                    Access to developer consoles and support mailboxes is
                    strictly restricted via hardware-backed multi-factor
                    authentication (2FA).
                  </p>
                </div>
                <div className="border-border bg-card/40 space-y-1 rounded-xl border p-4">
                  <span className="text-text font-semibold">
                    Principle of Least Privilege
                  </span>
                  <p className="text-muted">
                    Our apps request zero dangerous Android permissions (no
                    contact, camera, mic, or SMS access).
                  </p>
                </div>
                <div className="border-border bg-card/40 space-y-1 rounded-xl border p-4">
                  <span className="text-text font-semibold">
                    Regular Security Audits
                  </span>
                  <p className="text-muted">
                    We maintain up-to-date dependencies and scan code regularly
                    for vulnerabilities or deprecated APIs.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 18 */}
          <section id="changes" className="scroll-mt-28">
            <div className="mb-3 flex items-center gap-2">
              <Badge variant="secondary">Versioning</Badge>
              <h2 className="text-text text-2xl font-bold">
                18. Updates to This Policy
              </h2>
            </div>
            <div className="glass space-y-4 rounded-2xl p-6 sm:p-8">
              <p>
                We may periodically update this Privacy Policy to reflect
                modifications in our games, app features, technological
                standards, Google Play policies, or international legal
                requirements.
              </p>
              <p>
                When modifications occur, we will update the &quot;Last
                Updated&quot; date at the top of this page. For material changes
                that significantly affect your rights, we will provide prominent
                notice (such as an in-game alert or notice on our website
                homepage).
              </p>
              <p className="text-muted text-xs">
                We encourage you to review this page periodically to stay
                informed about how we continue to protect your privacy.
              </p>
            </div>
          </section>

          {/* Section 19 */}
          <section id="contact" className="scroll-mt-28">
            <div className="mb-3 flex items-center gap-2">
              <Badge variant="primary">Support</Badge>
              <h2 className="text-text text-2xl font-bold">
                19. Contact & Supervisory Authority
              </h2>
            </div>
            <div className="glass space-y-5 rounded-2xl p-6 sm:p-8">
              <p>
                If you have questions, comments, or complaints concerning our
                privacy practices or wish to exercise your legal rights under
                GDPR, please reach out directly:
              </p>
              <div className="border-border bg-card/60 space-y-3 rounded-xl border p-5 text-xs sm:text-sm">
                <div>
                  <span className="text-text font-semibold">
                    SouMoster Privacy & Data Protection Desk
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
                  Estimated Initial Response Time:{" "}
                  <span className="text-text font-medium">{RESPONSE_TIME}</span>
                </div>
                <div>
                  Official Website:{" "}
                  <a
                    href={SITE_URL}
                    className="text-primary font-medium hover:underline"
                  >
                    {SITE_URL}
                  </a>
                </div>
              </div>

              {/* EU Supervisory Authority Link */}
              <div className="border-primary/20 bg-primary/5 space-y-2 rounded-xl border p-4 text-xs">
                <div className="text-text flex items-center gap-2 font-semibold">
                  <Globe className="text-primary h-4 w-4" />
                  Right to Lodge a Complaint with an EU Supervisory Authority
                </div>
                <p className="text-muted leading-relaxed">
                  Under Article 77 of the GDPR, if you reside in the European
                  Union or European Economic Area and believe our processing of
                  your personal data infringes the GDPR, you have the legal
                  right to lodge a complaint with a supervisory data protection
                  authority in the EU Member State of your habitual residence,
                  place of work, or place of the alleged infringement.
                </p>
                <div className="pt-1">
                  <a
                    href="https://edpb.europa.eu/about-edpb/about-edpb/members_en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary inline-flex items-center gap-1 font-medium hover:underline"
                  >
                    Find your National EU Data Protection Authority (EDPB
                    Directory)
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
