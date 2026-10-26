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
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useToastContext } from "@/components/shared/Providers";
import { GooglePlayBadge } from "@/components/shared/GooglePlayBadge";
import { Link } from "@/i18n/navigation";
import {
  ARENA_LEGENDS_PLAY_STORE_URL,
  BANK_HOPPER_PLAY_STORE_URL,
  PLAY_STORE_APP_URL,
  SUPPORT_EMAIL,
  TIME_HOPPER_PLAY_STORE_URL,
  YOUTUBE_HANDLE,
  YOUTUBE_URL,
} from "@/lib/constants";

interface GameOption {
  id: string;
  name: string;
  version: string;
  /** Translation key under beta.games for the tagline. */
  taglineKey: string;
  icon: string;
  status: "active-testing" | "coming-soon";
  recommended?: boolean;
}

const GAME_OPTIONS: GameOption[] = [
  {
    id: "arena-legends",
    name: "Arena Legends",
    version: "v0.1.11",
    taglineKey: "arenaLegends",
    icon: "/images/arena-legends/icon.svg",
    status: "active-testing",
    recommended: true,
  },
  {
    id: "nitro-racer",
    name: "Nitro Racer",
    version: "Dev build 0.1.0",
    taglineKey: "nitroRacer",
    icon: "/images/nitro-racer/icon.png",
    status: "coming-soon",
  },
  {
    id: "space-hopper",
    name: "Space Hopper",
    version: "Dev build 1.0.0",
    taglineKey: "spaceHopper",
    icon: "/images/space-hopper/icon.png",
    status: "coming-soon",
  },
  {
    id: "all-upcoming",
    name: "All Upcoming Games",
    version: "VIP Access",
    taglineKey: "allUpcoming.tagline",
    icon: "/icon.svg",
    status: "active-testing",
  },
];

const externalLink = (href: string, className: string) =>
  function ExternalChunk(chunks: ReactNode) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {chunks}
      </a>
    );
  };

function BetaForm() {
  const t = useTranslations("beta");
  const tc = useTranslations("common.playBadge");
  const searchParams = useSearchParams();
  const initialGameParam = searchParams.get("game");
  const { addToast } = useToastContext();

  const gameName = (game: GameOption) =>
    game.id === "all-upcoming" ? t("games.allUpcoming.name") : game.name;
  const gameVersion = (game: GameOption) =>
    game.id === "all-upcoming" ? t("games.allUpcoming.version") : game.version;

  const [selectedGames, setSelectedGames] = useState<string[]>(() => {
    if (
      initialGameParam &&
      GAME_OPTIONS.some((g) => g.id === initialGameParam)
    ) {
      return [initialGameParam];
    }
    return ["arena-legends"];
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
      addToast(t("form.emailRequired"), "error");
      return;
    }

    if (!agreedToTerms) {
      addToast(t("form.consentRequired"), "error");
      return;
    }

    setSubmitting(true);

    try {
      // Game names are sent in English so the signup email reads the same in every language.
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
        throw new Error(data.error || t("form.failed"));
      }

      setSubmittedEmail(formData.email);
      addToast(t("form.success"), "success");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : t("form.failed");
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
          {t("success.badge")}
        </span>

        <h2 className="font-heading text-text mt-4 text-3xl font-bold sm:text-4xl">
          {t("success.title")}
        </h2>

        <p className="text-muted mx-auto mt-3 max-w-xl text-base">
          {t.rich("success.registered", {
            email: submittedEmail,
            strong: (chunks) => (
              <strong className="text-text font-semibold">{chunks}</strong>
            ),
          })}
        </p>

        <div className="border-border bg-card/60 mx-auto mt-8 max-w-lg rounded-2xl border p-6 text-left">
          <h3 className="font-heading text-text flex items-center gap-2 text-base font-semibold">
            <HelpCircle className="text-primary h-4 w-4" />
            {t("success.nextTitle")}
          </h3>
          <ol className="text-muted mt-3 space-y-3 text-sm">
            {(["step1", "step2", "step3"] as const).map((step, index) => (
              <li key={step} className="flex items-start gap-2.5">
                <span className="bg-primary/20 text-primary flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold">
                  {index + 1}
                </span>
                <span>
                  {t.rich(`success.${step}`, {
                    em: (chunks) => <em>{chunks}</em>,
                    play: (chunks) => (
                      <a
                        href={ARENA_LEGENDS_PLAY_STORE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary inline-flex items-center gap-1 font-semibold hover:underline"
                      >
                        <span>{chunks}</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    ),
                  })}
                </span>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <GooglePlayBadge
            href={ARENA_LEGENDS_PLAY_STORE_URL}
            size="md"
            subtext={tc("testBuildOn")}
            title="Google Play"
            ariaLabel={tc("downloadTestBuild", { name: "Arena Legends" })}
          />
          <GooglePlayBadge
            href={TIME_HOPPER_PLAY_STORE_URL}
            size="md"
            subtext={tc("nowLive")}
            title="Time Hopper"
            ariaLabel={tc("downloadApp", { name: "Time Hopper" })}
          />
          <GooglePlayBadge
            href={BANK_HOPPER_PLAY_STORE_URL}
            size="md"
            subtext={tc("nowLive")}
            title="Bank Hopper"
            ariaLabel={tc("downloadApp", { name: "Bank Hopper" })}
          />
          <GooglePlayBadge
            href={PLAY_STORE_APP_URL}
            size="md"
            subtext={tc("nowLive")}
            title="Road Hopper"
            ariaLabel={tc("downloadApp", { name: "Road Hopper" })}
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
            {t("success.registerAnother")}
          </Button>
        </div>
      </motion.div>
    );
  }

  const optional = <span className="text-muted text-xs">{t("form.optional")}</span>;

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Game Selection */}
      <div>
        <label className="text-text mb-2 block text-sm font-semibold">
          {t("form.step1")} <span className="text-primary">*</span>
        </label>
        <p className="text-muted mb-4 text-xs">{t("form.step1Hint")}</p>

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
                    {t("form.activeTesting")}
                  </span>
                )}
                <div className="mb-3 flex items-center gap-3">
                  <div className="bg-background/50 relative h-10 w-10 shrink-0 overflow-hidden rounded-xl border border-white/10">
                    <Image
                      src={game.icon}
                      alt={t("form.gameIcon", { name: gameName(game) })}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-heading text-text text-sm font-bold">
                      {gameName(game)}
                    </h4>
                    <span className="text-muted rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-medium">
                      {gameVersion(game)}
                    </span>
                  </div>
                </div>
                <p className="text-muted mt-auto text-xs leading-relaxed">
                  {t(`games.${game.taglineKey}`)}
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
                    {isSelected ? t("form.selected") : t("form.clickToAdd")}
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
          {t("form.step2")} <span className="text-primary">*</span>
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
          <span>{t("form.emailHint")}</span>
        </p>
      </div>

      {/* Optional Details Grid */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <label
            htmlFor="beta-name"
            className="text-text block text-sm font-medium"
          >
            {t("form.name")} {optional}
          </label>
          <Input
            id="beta-name"
            placeholder={t("form.namePlaceholder")}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <p className="text-muted text-xs">{t("form.nameHint")}</p>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="beta-device"
            className="text-text block text-sm font-medium"
          >
            {t("form.device")} {optional}
          </label>
          <Input
            id="beta-device"
            placeholder={t("form.devicePlaceholder")}
            value={formData.device}
            onChange={(e) =>
              setFormData({ ...formData, device: e.target.value })
            }
          />
          <p className="text-muted text-xs">{t("form.deviceHint")}</p>
        </div>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="beta-discord"
          className="text-text block text-sm font-medium"
        >
          {t("form.community")} {optional}
        </label>
        <Input
          id="beta-discord"
          placeholder={t("form.communityPlaceholder")}
          value={formData.discord}
          onChange={(e) =>
            setFormData({ ...formData, discord: e.target.value })
          }
        />
        <p className="text-muted text-xs">{t("form.communityHint")}</p>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="beta-notes"
          className="text-text block text-sm font-medium"
        >
          {t("form.notes")} {optional}
        </label>
        <Textarea
          id="beta-notes"
          rows={3}
          placeholder={t("form.notesPlaceholder")}
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
          {t.rich("form.consent", {
            privacy: (chunks) => (
              <Link href="/privacy" className="text-primary hover:underline">
                {chunks}
              </Link>
            ),
            terms: (chunks) => (
              <Link href="/terms" className="text-primary hover:underline">
                {chunks}
              </Link>
            ),
          })}
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
            {t("form.submitting")}
          </>
        ) : (
          <>
            <Rocket className="mr-2 h-5 w-5" />
            {t("form.submit")}
          </>
        )}
      </Button>
    </form>
  );
}

export function BetaContent() {
  const t = useTranslations("beta");

  const perks = [
    { key: "earlyBuilds", icon: Gamepad2, iconClass: "bg-primary/20 text-primary" },
    { key: "devAccess", icon: MessageSquare, iconClass: "bg-secondary/20 text-secondary" },
    { key: "vip", icon: Gift, iconClass: "bg-emerald-500/20 text-emerald-400" },
  ] as const;

  const faqLink = "text-primary font-medium hover:underline";
  const faqs = [
    { key: "howWorks" },
    { key: "isFree" },
    { key: "android" },
    { key: "isOpen" },
    { key: "trailers" },
    { key: "feedback" },
  ] as const;

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
            {t("header.badge")}
          </span>
          <h1 className="font-heading text-text text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {t.rich("header.title", {
              highlight: (chunks) => <span className="gradient-text">{chunks}</span>,
            })}
          </h1>
          <p className="text-muted mx-auto mt-4 max-w-2xl text-base sm:text-lg">
            {t("header.lead")}
          </p>
          <a
            href={YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary mt-4 inline-flex items-center gap-2 text-sm font-medium hover:underline"
          >
            <Youtube className="h-4 w-4" />
            {t("header.watchTrailers", { handle: YOUTUBE_HANDLE })}
          </a>
        </motion.div>
      </div>

      {/* Perks Grid */}
      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {perks.map((perk, index) => (
          <motion.div
            key={perk.key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            className="glass rounded-2xl p-6 text-center"
          >
            <div
              className={`mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${perk.iconClass}`}
            >
              <perk.icon className="h-6 w-6" />
            </div>
            <h3 className="font-heading text-text text-base font-bold">
              {t(`perks.${perk.key}.title`)}
            </h3>
            <p className="text-muted mt-2 text-xs leading-relaxed">
              {t.rich(`perks.${perk.key}.text`, {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>
          </motion.div>
        ))}
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
                {t("formCard.title")}
              </h2>
              <p className="text-muted mt-1 text-sm">{t("formCard.subtitle")}</p>
            </div>
          </div>

          <div className="border-primary/20 bg-primary/5 text-muted mt-4 flex items-start gap-2.5 rounded-xl border px-4 py-3 text-xs">
            <Sparkles className="text-primary mt-0.5 h-4 w-4 shrink-0" />
            <span>
              {t.rich("formCard.tip", {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </span>
          </div>
        </div>

        <Suspense
          fallback={
            <div className="text-muted py-12 text-center">
              {t("formCard.loading")}
            </div>
          }
        >
          <BetaForm />
        </Suspense>
      </motion.div>

      {/* FAQ */}
      <div className="mt-16">
        <SectionHeading
          eyebrow={t("faq.eyebrow")}
          title={t("faq.title")}
          subtitle={t("faq.subtitle")}
        />

        <div className="mt-8 space-y-4">
          {faqs.map(({ key }) => (
            <div key={key} className="glass rounded-2xl p-6">
              <h3 className="font-heading text-text text-base font-semibold">
                {t(`faq.${key}.q`)}
              </h3>
              <p className="text-muted mt-2 text-sm leading-relaxed">
                {t.rich(`faq.${key}.a`, {
                  handle: YOUTUBE_HANDLE,
                  youtube: externalLink(YOUTUBE_URL, faqLink),
                  support: (chunks) => (
                    <Link href="/support" className="text-primary hover:underline">
                      {chunks}
                    </Link>
                  ),
                  mail: (chunks) => (
                    <a href={`mailto:${SUPPORT_EMAIL}`} className="text-primary hover:underline">
                      {chunks}
                    </a>
                  ),
                })}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
