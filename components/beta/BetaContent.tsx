"use client";

import { motion } from "framer-motion";
import {
  AlertCircle,
  CheckCircle2,
  ExternalLink,
  Gamepad2,
  Gift,
  HelpCircle,
  MessageSquare,
  Rocket,
  Sparkles,
  Users,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useToastContext } from "@/components/shared/Providers";
import { GooglePlayBadge } from "@/components/shared/GooglePlayBadge";
import {
  BANK_HOPPER_GOOGLE_GROUP_EMAIL,
  BANK_HOPPER_GOOGLE_GROUP_URL,
  BANK_HOPPER_PLAY_STORE_URL,
  PLAY_STORE_APP_URL,
  YOUTUBE_HANDLE,
  YOUTUBE_URL,
} from "@/lib/constants";

interface GameOption {
  id: string;
  name: string;
  version: string;
  tagline: string;
  icon: string;
  status: "active-testing" | "coming-soon";
  recommended?: boolean;
}

const GAME_OPTIONS: GameOption[] = [
  {
    id: "bank-hopper",
    name: "Bank Hopper",
    version: "v0.8.0",
    tagline: "One-thumb portrait bank heist arcade",
    icon: "/images/bank-hopper-icon.png",
    status: "active-testing",
    recommended: true,
  },
  {
    id: "space-hopper",
    name: "Space Hopper",
    version: "Pre-Alpha",
    tagline: "Cosmic hop-and-dodge arcade amongst the stars",
    icon: "/icon.svg",
    status: "coming-soon",
  },
  {
    id: "all-upcoming",
    name: "All Upcoming Games",
    version: "VIP Access",
    tagline: "Invites to all future prototypes and experimental builds",
    icon: "/icon.svg",
    status: "active-testing",
  },
];

function BetaForm() {
  const searchParams = useSearchParams();
  const initialGameParam = searchParams.get("game");
  const { addToast } = useToastContext();

  const [selectedGames, setSelectedGames] = useState<string[]>(() => {
    if (initialGameParam === "space-hopper") return ["space-hopper"];
    if (initialGameParam === "bank-hopper") return ["bank-hopper"];
    return ["bank-hopper"];
  });

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    device: "",
    discord: "",
    notes: "",
  });

  const [agreedToTerms, setAgreedToTerms] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState<string | null>(null);

  useEffect(() => {
    if (
      initialGameParam &&
      GAME_OPTIONS.some((g) => g.id === initialGameParam)
    ) {
      setSelectedGames((prev) =>
        prev.includes(initialGameParam) ? prev : [...prev, initialGameParam],
      );
    }
  }, [initialGameParam]);

  const toggleGame = (id: string) => {
    setSelectedGames((prev) => {
      if (prev.includes(id)) {
        if (prev.length === 1) return prev; // keep at least one
        return prev.filter((g) => g !== id);
      }
      return [...prev, id];
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email.trim()) {
      addToast("Please enter your Google Play account email.", "error");
      return;
    }

    if (!agreedToTerms) {
      addToast(
        "Please confirm agreement to receive testing invitations.",
        "error",
      );
      return;
    }

    setSubmitting(true);

    try {
      const selectedGameNames = selectedGames.map(
        (id) => GAME_OPTIONS.find((g) => g.id === id)?.name || id,
      );

      const response = await fetch("/api/beta", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          name: formData.name,
          device: formData.device,
          discord: formData.discord,
          notes: formData.notes,
          games: selectedGameNames,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit application.");
      }

      setSubmittedEmail(formData.email);
      addToast(
        data.message || "Beta application received! Check your inbox soon.",
        "success",
      );
    } catch (err: unknown) {
      const msg =
        err instanceof Error
          ? err.message
          : "Submission failed. Please try again.";
      addToast(msg, "error");
    } finally {
      setSubmitting(false);
    }
  };

  if (submittedEmail) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass relative overflow-hidden rounded-3xl p-8 text-center sm:p-12"
      >
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 ring-8 ring-emerald-500/10">
          <CheckCircle2 className="h-10 w-10" />
        </div>

        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
          <Sparkles className="h-3.5 w-3.5" />
          Application Confirmed
        </span>

        <h2 className="font-heading text-text mt-4 text-3xl font-bold sm:text-4xl">
          Welcome to the Test Track!
        </h2>

        <p className="text-muted mx-auto mt-3 max-w-xl text-base">
          We have registered{" "}
          <strong className="text-text font-semibold">{submittedEmail}</strong>{" "}
          for the SouMoster Google Play Closed Testing track.
        </p>

        <div className="border-border bg-card/60 mx-auto mt-8 max-w-lg rounded-2xl border p-6 text-left">
          <h3 className="font-heading text-text flex items-center gap-2 text-base font-semibold">
            <HelpCircle className="text-primary h-4 w-4" />
            What happens next?
          </h3>
          <ol className="text-muted mt-3 space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <span className="bg-primary/20 text-primary flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold">
                1
              </span>
              <span>
                Our developer console adds your email to the authorized Google
                Play Closed Testers list.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="bg-primary/20 text-primary flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold">
                2
              </span>
              <span>
                You’ll receive an opt-in web link (or email invite). Click{" "}
                <em>&quot;Join on the web / Join on Android&quot;</em> to
                accept.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="bg-primary/20 text-primary flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold">
                3
              </span>
              <span>
                Download exclusive pre-release builds directly from the Google
                Play Store on your device:{" "}
                <a
                  href={BANK_HOPPER_PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary inline-flex items-center gap-1 font-semibold hover:underline"
                >
                  <span>Bank Hopper on Google Play</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </span>
            </li>
          </ol>
        </div>

        {/* Google Group Instant Authorization Callout */}
        <div className="border-primary/40 from-primary/15 via-card to-accent/10 mx-auto mt-6 max-w-lg rounded-2xl border bg-gradient-to-r p-5 text-left">
          <div className="flex items-start gap-3">
            <div className="bg-primary/20 text-primary flex h-9 w-9 shrink-0 items-center justify-center rounded-xl">
              <Users className="h-5 w-5" />
            </div>
            <div className="flex-1 space-y-1">
              <h4 className="font-heading text-text text-sm font-bold">
                Instant Google Play Authorization
              </h4>
              <p className="text-muted text-xs leading-relaxed">
                Join our official Google Group to be automatically synced to the
                Play Store closed testing track:
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-2">
                <a
                  href={BANK_HOPPER_GOOGLE_GROUP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-primary/40 bg-primary/20 text-primary hover:bg-primary inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold transition-colors hover:text-white"
                >
                  <span>Join bank-hopper-game Google Group</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
                <span className="text-muted text-[11px]">
                  (
                  <code className="text-text font-mono">
                    {BANK_HOPPER_GOOGLE_GROUP_EMAIL}
                  </code>
                  )
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <GooglePlayBadge
            href={BANK_HOPPER_PLAY_STORE_URL}
            size="md"
            subtext="TEST BUILD ON"
            title="Google Play"
            ariaLabel="Download Bank Hopper Closed Beta on Google Play"
          />
          <GooglePlayBadge
            href={PLAY_STORE_APP_URL}
            size="md"
            subtext="PLAY OUR LIVE TITLE"
            title="Road Hopper"
            ariaLabel="Download Road Hopper on Google Play"
          />
          <Button
            variant="outline"
            onClick={() => {
              setSubmittedEmail(null);
              setFormData({
                email: "",
                name: "",
                device: "",
                discord: "",
                notes: "",
              });
            }}
          >
            Register Another Device
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Game Selection */}
      <div>
        <label className="text-text mb-2 block text-sm font-semibold">
          1. Select the Games You Want to Test{" "}
          <span className="text-primary">*</span>
        </label>
        <p className="text-muted mb-4 text-xs">
          Select one or multiple games to receive Google Play test track
          invitations.
        </p>

        <div className="grid gap-4 sm:grid-cols-3">
          {GAME_OPTIONS.map((game) => {
            const isSelected = selectedGames.includes(game.id);
            return (
              <button
                key={game.id}
                type="button"
                onClick={() => toggleGame(game.id)}
                className={`relative flex flex-col rounded-2xl border p-4 text-left transition-all duration-200 ${
                  isSelected
                    ? "border-primary bg-primary/10 shadow-primary/20 ring-primary/40 shadow-lg ring-2"
                    : "border-border bg-card/60 hover:border-border hover:bg-card/90"
                }`}
              >
                {game.recommended && (
                  <span className="from-primary to-accent absolute -top-2.5 right-3 rounded-full bg-gradient-to-r px-2 py-0.5 text-[10px] font-bold tracking-wider text-white uppercase shadow-sm">
                    Active Testing
                  </span>
                )}
                <div className="mb-3 flex items-center gap-3">
                  <div className="bg-background/50 relative h-10 w-10 shrink-0 overflow-hidden rounded-xl border border-white/10">
                    <Image
                      src={game.icon}
                      alt={`${game.name} icon`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-heading text-text text-sm font-bold">
                      {game.name}
                    </h4>
                    <span className="text-muted rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-medium">
                      {game.version}
                    </span>
                  </div>
                </div>
                <p className="text-muted mt-auto text-xs leading-relaxed">
                  {game.tagline}
                </p>

                <div className="mt-3 flex items-center gap-2 pt-2 text-xs font-semibold">
                  <span
                    className={`flex h-4 w-4 items-center justify-center rounded-md border text-[10px] ${
                      isSelected
                        ? "border-primary bg-primary text-white"
                        : "border-neutral-600 bg-transparent text-transparent"
                    }`}
                  >
                    ✓
                  </span>
                  <span className={isSelected ? "text-primary" : "text-muted"}>
                    {isSelected ? "Selected" : "Click to add"}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Google Play Email */}
      <div className="space-y-2">
        <label
          htmlFor="beta-email"
          className="text-text block text-sm font-semibold"
        >
          2. Your Google Play Account Email{" "}
          <span className="text-primary">*</span>
        </label>
        <Input
          id="beta-email"
          type="email"
          placeholder="yourname@gmail.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="text-base"
        />
        <p className="text-muted flex items-center gap-1.5 text-xs">
          <AlertCircle className="text-secondary h-3.5 w-3.5 shrink-0" />
          <span>
            Must match the email logged into Google Play on your Android
            phone/tablet so Google can grant access.
          </span>
        </p>
      </div>

      {/* Optional Details Grid */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <label
            htmlFor="beta-name"
            className="text-text block text-sm font-medium"
          >
            Gamer Tag / Name{" "}
            <span className="text-muted text-xs">(Optional)</span>
          </label>
          <Input
            id="beta-name"
            placeholder="e.g. HopperChampion"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <p className="text-muted text-xs">
            To credit you in tester acknowledgments.
          </p>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="beta-device"
            className="text-text block text-sm font-medium"
          >
            Android Device &amp; OS Version{" "}
            <span className="text-muted text-xs">(Optional)</span>
          </label>
          <Input
            id="beta-device"
            placeholder="e.g. Pixel 8 (Android 14) or Galaxy S22"
            value={formData.device}
            onChange={(e) =>
              setFormData({ ...formData, device: e.target.value })
            }
          />
          <p className="text-muted text-xs">
            Helps optimize performance for your device model.
          </p>
        </div>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="beta-discord"
          className="text-text block text-sm font-medium"
        >
          Discord / Reddit Username{" "}
          <span className="text-muted text-xs">(Optional)</span>
        </label>
        <Input
          id="beta-discord"
          placeholder="e.g. username#1234 or u/username"
          value={formData.discord}
          onChange={(e) =>
            setFormData({ ...formData, discord: e.target.value })
          }
        />
        <p className="text-muted text-xs">
          For invitations to private tester chat rooms.
        </p>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="beta-notes"
          className="text-text block text-sm font-medium"
        >
          Tester Notes or Prior Arcade Experience{" "}
          <span className="text-muted text-xs">(Optional)</span>
        </label>
        <Textarea
          id="beta-notes"
          rows={3}
          placeholder="Let us know what games you enjoy or any specific mechanics you'd love to test..."
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
        />
      </div>

      {/* Agreement Checkbox */}
      <div className="border-border/80 bg-card/40 flex items-start gap-3 rounded-xl border p-4">
        <input
          id="beta-terms"
          type="checkbox"
          checked={agreedToTerms}
          onChange={(e) => setAgreedToTerms(e.target.checked)}
          className="border-border text-primary focus:ring-primary mt-1 h-4 w-4 rounded"
        />
        <label
          htmlFor="beta-terms"
          className="text-muted cursor-pointer text-xs leading-relaxed select-none"
        >
          I consent to SouMoster processing my email address strictly to deliver
          Google Play Closed Testing invitations and pre-release communications,
          in full compliance with the{" "}
          <Link href="/privacy" className="text-primary hover:underline">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="/terms" className="text-primary hover:underline">
            Terms &amp; Conditions
          </Link>
          . You can opt out at any time.
        </label>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        size="lg"
        disabled={submitting}
        className="shadow-primary/25 min-h-[52px] w-full text-base shadow-lg"
      >
        {submitting ? (
          <>
            <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
            Registering for Closed Beta...
          </>
        ) : (
          <>
            <Rocket className="mr-2 h-5 w-5" />
            Submit Closed Beta Application
          </>
        )}
      </Button>
    </form>
  );
}

export function BetaContent() {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-28 pb-20 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="border-primary/30 bg-primary/10 text-primary mb-4 inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-xs font-semibold">
            <Users className="h-4 w-4" />
            Google Play Testing Program
          </span>
          <h1 className="font-heading text-text text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Join the <span className="gradient-text">Closed Beta</span>
          </h1>
          <p className="text-muted mx-auto mt-4 max-w-2xl text-base sm:text-lg">
            Bank Hopper v0.8.0 is live on the Google Play Closed Testing track.
            Help us polish heists, leaderboards, and onboarding before worldwide
            launch.
          </p>
          <a
            href={YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary mt-4 inline-flex items-center gap-2 text-sm font-medium hover:underline"
          >
            <Youtube className="h-4 w-4" />
            Watch trailers on YouTube {YOUTUBE_HANDLE}
          </a>
        </motion.div>
      </div>

      {/* Perks Grid */}
      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass rounded-2xl p-6 text-center"
        >
          <div className="bg-primary/20 text-primary mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl">
            <Gamepad2 className="h-6 w-6" />
          </div>
          <h3 className="font-heading text-text text-base font-bold">
            Exclusive Early Builds
          </h3>
          <p className="text-muted mt-2 text-xs leading-relaxed">
            Play <strong>Bank Hopper v0.8.0</strong> Closed Testing builds and
            future titles directly through Google Play before public release.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass rounded-2xl p-6 text-center"
        >
          <div className="bg-secondary/20 text-secondary mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl">
            <MessageSquare className="h-6 w-6" />
          </div>
          <h3 className="font-heading text-text text-base font-bold">
            Direct Developer Access
          </h3>
          <p className="text-muted mt-2 text-xs leading-relaxed">
            Your feedback directly guides physics tuning, balance patches, bug
            squashes, and feature additions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass rounded-2xl p-6 text-center"
        >
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
            <Gift className="h-6 w-6" />
          </div>
          <h3 className="font-heading text-text text-base font-bold">
            VIP Tester Perks
          </h3>
          <p className="text-muted mt-2 text-xs leading-relaxed">
            Receive exclusive in-game cosmetic badges, bonus coin packs, and
            tester credits in the final game release.
          </p>
        </motion.div>
      </div>

      {/* Main Form Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="glass border-border mt-12 rounded-3xl border p-6 sm:p-10"
      >
        <div className="border-border mb-8 border-b pb-6">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h2 className="font-heading text-text text-2xl font-bold">
                Tester Application Form
              </h2>
              <p className="text-muted mt-1 text-sm">
                Fill out the form below. Google Play will email you with your
                opt-in confirmation link once your account is enrolled.
              </p>
            </div>
            <a
              href={BANK_HOPPER_GOOGLE_GROUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border-primary/50 bg-primary/10 text-primary hover:bg-primary inline-flex shrink-0 items-center gap-2 rounded-xl border px-4 py-2.5 text-xs font-semibold shadow-sm transition-all hover:text-white"
            >
              <Users className="h-4 w-4" />
              <span>Join Google Group Directly</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="border-primary/20 bg-primary/5 text-muted mt-4 flex items-start gap-2.5 rounded-xl border px-4 py-3 text-xs">
            <Sparkles className="text-primary mt-0.5 h-4 w-4 shrink-0" />
            <span>
              <strong>Tip:</strong> Joining the official{" "}
              <a
                href={BANK_HOPPER_GOOGLE_GROUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:underline"
              >
                bank-hopper-game Google Group
              </a>{" "}
              (<code>{BANK_HOPPER_GOOGLE_GROUP_EMAIL}</code>) grants instant
              automated closed testing authorization via Google Play Console!
            </span>
          </div>
        </div>

        <Suspense
          fallback={
            <div className="text-muted py-12 text-center">
              Loading tester form...
            </div>
          }
        >
          <BetaForm />
        </Suspense>
      </motion.div>

      {/* FAQ Accordion */}
      <div className="mt-16">
        <SectionHeading
          eyebrow="Need Help?"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about participating in the SouMoster closed beta program"
        />

        <div className="mt-8 space-y-4">
          <div className="glass rounded-2xl p-6">
            <h3 className="font-heading text-text text-base font-semibold">
              How does Google Play Closed Testing work?
            </h3>
            <p className="text-muted mt-2 text-sm leading-relaxed">
              Google Play requires developer accounts to invite trusted testers
              through specific closed testing tracks. Once we add your Google
              Play email, Google generates a private testing link allowing you
              to install the test build through the official Play Store app.
            </p>
          </div>

          <div className="glass rounded-2xl p-6">
            <h3 className="font-heading text-text text-base font-semibold">
              Is testing free? Are there in-app purchases during the beta?
            </h3>
            <p className="text-muted mt-2 text-sm leading-relaxed">
              Yes, testing is 100% free. Any in-app purchases enabled during
              testing use Google Play Test Billing (sandbox mode), which does
              not charge real currency.
            </p>
          </div>

          <div className="glass rounded-2xl p-6">
            <h3 className="font-heading text-text text-base font-semibold">
              What Android version is required?
            </h3>
            <p className="text-muted mt-2 text-sm leading-relaxed">
              Bank Hopper supports Android 8.0 (API 26) and newer devices with
              60 FPS SurfaceView support. Road Hopper supports Android 7.0+.
              Space Hopper is still in development.
            </p>
          </div>

          <div className="glass rounded-2xl p-6">
            <h3 className="font-heading text-text text-base font-semibold">
              Is Bank Hopper Closed Testing open now?
            </h3>
            <p className="text-muted mt-2 text-sm leading-relaxed">
              Yes. Bank Hopper v0.8.0 is on the Google Play Closed Testing
              track. Join{" "}
              <a
                href={BANK_HOPPER_GOOGLE_GROUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium hover:underline"
              >
                groups.google.com/g/bank-hopper-game
              </a>
              , opt in on Play, then install from the listing. Public launch
              follows this testing phase.
            </p>
          </div>

          <div className="glass rounded-2xl p-6">
            <h3 className="font-heading text-text text-base font-semibold">
              Where can I watch gameplay and trailers?
            </h3>
            <p className="text-muted mt-2 text-sm leading-relaxed">
              Trailers and gameplay live on{" "}
              <a
                href={YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium hover:underline"
              >
                YouTube {YOUTUBE_HANDLE}
              </a>
              .
            </p>
          </div>

          <div className="glass rounded-2xl p-6">
            <h3 className="font-heading text-text text-base font-semibold">
              How do I submit bug reports and gameplay feedback?
            </h3>
            <p className="text-muted mt-2 text-sm leading-relaxed">
              You can send feedback directly through the Google Play Store
              private feedback form, visit our{" "}
              <Link href="/support" className="text-primary hover:underline">
                Support Page
              </Link>
              , or email us at{" "}
              <a
                href="mailto:soumoster@gmail.com"
                className="text-primary hover:underline"
              >
                soumoster@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
