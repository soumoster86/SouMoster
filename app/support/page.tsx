"use client";

import { Bug, Clock, Lightbulb, Mail } from "lucide-react";
import { useState } from "react";
import { useToastContext } from "@/components/shared/Providers";
import { PageTransition } from "@/components/shared/PageTransition";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Textarea } from "@/components/ui/Textarea";
import { submitSupport } from "@/lib/api";
import { supportFAQ } from "@/data/faq";
import { getFormErrorMessage } from "@/lib/form-errors";
import { openBugReportMailto, openFeatureRequestMailto } from "@/lib/mailto";
import { RESPONSE_TIME, SUPPORT_EMAIL } from "@/lib/constants";

export default function SupportPage() {
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
      addToast("Bug report sent! We'll look into it.", "success");
      setBugForm({ email: "", app: "", description: "" });
    } catch (error) {
      const result = getFormErrorMessage(error, "Failed to submit bug report. Please try again.");
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
      addToast("Feature request sent! Thank you for your feedback.", "success");
      setFeatureForm({ email: "", app: "", description: "" });
    } catch (error) {
      const result = getFormErrorMessage(
        error,
        "Failed to submit feature request. Please try again.",
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
          title="Support"
          subtitle="We're here to help. Find answers or reach out to our team."
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
            <span className="text-sm text-muted">Response time: {RESPONSE_TIME}</span>
          </div>
        </div>

        <section className="mb-20">
          <SectionHeading title="Frequently Asked Questions" align="left" />
          <Accordion items={supportFAQ} />
        </section>

        <div className="mb-8 rounded-2xl border border-primary/20 bg-primary/5 p-4 text-sm text-muted">
          <p>
            Form submissions are sent to{" "}
            <a href={`mailto:${SUPPORT_EMAIL}`} className="text-primary hover:underline">
              {SUPPORT_EMAIL}
            </a>
            . The <strong className="text-text">first submission</strong> sends an activation email
            to that inbox — check spam if you don&apos;t see it. Or use{" "}
            <strong className="text-text">Open in email app</strong> below for instant delivery.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <section>
            <div className="mb-6 flex items-center gap-3">
              <Bug className="h-6 w-6 text-red-400" />
              <h2 className="text-xl font-semibold text-text">Report a Bug</h2>
            </div>
            <form onSubmit={handleBugSubmit} className="glass space-y-4 rounded-2xl p-6">
              <Input
                label="Email"
                type="email"
                required
                value={bugForm.email}
                onChange={(e) => setBugForm({ ...bugForm, email: e.target.value })}
                disabled={submittingBug}
              />
              <Input
                label="App Name"
                required
                value={bugForm.app}
                onChange={(e) => setBugForm({ ...bugForm, app: e.target.value })}
                disabled={submittingBug}
              />
              <Textarea
                label="Bug Description"
                required
                placeholder="Describe the bug, steps to reproduce, and your device info..."
                value={bugForm.description}
                onChange={(e) => setBugForm({ ...bugForm, description: e.target.value })}
                disabled={submittingBug}
              />
              <div className="flex flex-col gap-2 sm:flex-row">
                <Button type="submit" disabled={submittingBug} className="flex-1">
                  {submittingBug ? "Submitting..." : "Submit Bug Report"}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1"
                  onClick={() => {
                    if (!bugForm.email || !bugForm.app || !bugForm.description) {
                      addToast("Please fill in all fields first.", "error");
                      return;
                    }
                    openBugReportMailto(bugForm);
                    addToast("Your email app will open — press Send to deliver the report.", "info");
                  }}
                >
                  Open in email app
                </Button>
              </div>
            </form>
          </section>

          <section>
            <div className="mb-6 flex items-center gap-3">
              <Lightbulb className="h-6 w-6 text-secondary" />
              <h2 className="text-xl font-semibold text-text">Feature Request</h2>
            </div>
            <form onSubmit={handleFeatureSubmit} className="glass space-y-4 rounded-2xl p-6">
              <Input
                label="Email"
                type="email"
                required
                value={featureForm.email}
                onChange={(e) => setFeatureForm({ ...featureForm, email: e.target.value })}
                disabled={submittingFeature}
              />
              <Input
                label="App Name"
                required
                value={featureForm.app}
                onChange={(e) => setFeatureForm({ ...featureForm, app: e.target.value })}
                disabled={submittingFeature}
              />
              <Textarea
                label="Feature Description"
                required
                placeholder="Describe the feature you'd like to see..."
                value={featureForm.description}
                onChange={(e) => setFeatureForm({ ...featureForm, description: e.target.value })}
                disabled={submittingFeature}
              />
              <div className="flex flex-col gap-2 sm:flex-row">
                <Button type="submit" variant="secondary" disabled={submittingFeature} className="flex-1">
                  {submittingFeature ? "Submitting..." : "Submit Feature Request"}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1"
                  onClick={() => {
                    if (!featureForm.email || !featureForm.app || !featureForm.description) {
                      addToast("Please fill in all fields first.", "error");
                      return;
                    }
                    openFeatureRequestMailto(featureForm);
                    addToast("Your email app will open — press Send to deliver the request.", "info");
                  }}
                >
                  Open in email app
                </Button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </PageTransition>
  );
}