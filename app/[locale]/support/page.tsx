"use client";

import { Bug, Clock, Lightbulb, Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useToastContext } from "@/components/shared/Providers";
import { PageTransition } from "@/components/shared/PageTransition";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Textarea } from "@/components/ui/Textarea";
import { submitSupport } from "@/lib/api";
import { getFormErrorMessage } from "@/lib/form-errors";
import { openBugReportMailto, openFeatureRequestMailto } from "@/lib/mailto";
import { SUPPORT_EMAIL } from "@/lib/constants";
import type { FAQItem } from "@/types";

export default function SupportPage() {
  const t = useTranslations("support");
  const tForms = useTranslations("common.forms");
  const faq = t.raw("faq") as FAQItem[];
  const { addToast } = useToastContext();
  const [bugForm, setBugForm] = useState({ email: "", app: "", description: "" });
  const [featureForm, setFeatureForm] = useState({ email: "", app: "", description: "" });
  const [submittingBug, setSubmittingBug] = useState(false);
  const [submittingFeature, setSubmittingFeature] = useState(false);

  const handleBugSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittingBug(true);

    try {
      await submitSupport({ type: "bug", ...bugForm });
      addToast(t("bug.sent"), "success");
      setBugForm({ email: "", app: "", description: "" });
    } catch (error) {
      const result = getFormErrorMessage(error, t("bug.failed"), tForms("activationNeeded"));
      addToast(result.message, result.type);
    } finally {
      setSubmittingBug(false);
    }
  };

  const handleFeatureSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittingFeature(true);

    try {
      await submitSupport({ type: "feature", ...featureForm });
      addToast(t("feature.sent"), "success");
      setFeatureForm({ email: "", app: "", description: "" });
    } catch (error) {
      const result = getFormErrorMessage(
        error,
        t("feature.failed"),
        tForms("activationNeeded"),
      );
      addToast(result.message, result.type);
    } finally {
      setSubmittingFeature(false);
    }
  };

  return (
    <PageTransition>
      <div className="mx-auto max-w-7xl px-4 pt-28 pb-20 sm:px-6 lg:px-8">
        <SectionHeading
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <div className="mb-12 flex flex-wrap gap-6">
          <div className="glass flex items-center gap-3 rounded-xl px-5 py-3">
            <Mail className="h-5 w-5 text-primary" />
            <a href={`mailto:${SUPPORT_EMAIL}`} className="text-sm text-muted hover:text-primary">
              {SUPPORT_EMAIL}
            </a>
          </div>
          <div className="glass flex items-center gap-3 rounded-xl px-5 py-3">
            <Clock className="h-5 w-5 text-secondary" />
            <span className="text-sm text-muted">{t("responseTime")}</span>
          </div>
        </div>

        <section className="mb-20">
          <SectionHeading title={t("faqTitle")} align="left" />
          <Accordion items={faq} />
        </section>

        <div className="mb-8 rounded-2xl border border-primary/20 bg-primary/5 p-4 text-sm text-muted">
          <p>
            {t.rich("formNote", {
              address: SUPPORT_EMAIL,
              email: (chunks) => (
                <a href={`mailto:${SUPPORT_EMAIL}`} className="text-primary hover:underline">
                  {chunks}
                </a>
              ),
              strong: (chunks) => <strong className="text-text">{chunks}</strong>,
            })}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <section>
            <div className="mb-6 flex items-center gap-3">
              <Bug className="h-6 w-6 text-red-400" />
              <h2 className="text-xl font-semibold text-text">{t("bug.title")}</h2>
            </div>
            <form onSubmit={handleBugSubmit} className="glass space-y-4 rounded-2xl p-6">
              <Input
                label={t("email")}
                type="email"
                required
                value={bugForm.email}
                onChange={(e) => setBugForm({ ...bugForm, email: e.target.value })}
                disabled={submittingBug}
              />
              <Input
                label={t("appName")}
                required
                value={bugForm.app}
                onChange={(e) => setBugForm({ ...bugForm, app: e.target.value })}
                disabled={submittingBug}
              />
              <Textarea
                label={t("bug.description")}
                required
                placeholder={t("bug.placeholder")}
                value={bugForm.description}
                onChange={(e) => setBugForm({ ...bugForm, description: e.target.value })}
                disabled={submittingBug}
              />
              <div className="flex flex-col gap-2 sm:flex-row">
                <Button type="submit" disabled={submittingBug} className="flex-1">
                  {submittingBug ? t("submitting") : t("bug.submit")}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1"
                  onClick={() => {
                    if (!bugForm.email || !bugForm.app || !bugForm.description) {
                      addToast(t("fillAllFields"), "error");
                      return;
                    }
                    openBugReportMailto(bugForm);
                    addToast(t("bug.mailtoOpening"), "info");
                  }}
                >
                  {t("openInEmailApp")}
                </Button>
              </div>
            </form>
          </section>

          <section>
            <div className="mb-6 flex items-center gap-3">
              <Lightbulb className="h-6 w-6 text-secondary" />
              <h2 className="text-xl font-semibold text-text">{t("feature.title")}</h2>
            </div>
            <form onSubmit={handleFeatureSubmit} className="glass space-y-4 rounded-2xl p-6">
              <Input
                label={t("email")}
                type="email"
                required
                value={featureForm.email}
                onChange={(e) => setFeatureForm({ ...featureForm, email: e.target.value })}
                disabled={submittingFeature}
              />
              <Input
                label={t("appName")}
                required
                value={featureForm.app}
                onChange={(e) => setFeatureForm({ ...featureForm, app: e.target.value })}
                disabled={submittingFeature}
              />
              <Textarea
                label={t("feature.description")}
                required
                placeholder={t("feature.placeholder")}
                value={featureForm.description}
                onChange={(e) => setFeatureForm({ ...featureForm, description: e.target.value })}
                disabled={submittingFeature}
              />
              <div className="flex flex-col gap-2 sm:flex-row">
                <Button type="submit" variant="secondary" disabled={submittingFeature} className="flex-1">
                  {submittingFeature ? t("submitting") : t("feature.submit")}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1"
                  onClick={() => {
                    if (!featureForm.email || !featureForm.app || !featureForm.description) {
                      addToast(t("fillAllFields"), "error");
                      return;
                    }
                    openFeatureRequestMailto(featureForm);
                    addToast(t("feature.mailtoOpening"), "info");
                  }}
                >
                  {t("openInEmailApp")}
                </Button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </PageTransition>
  );
}