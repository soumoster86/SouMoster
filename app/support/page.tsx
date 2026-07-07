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
import { supportFAQ } from "@/data/faq";
import { RESPONSE_TIME, SUPPORT_EMAIL } from "@/lib/constants";

export default function SupportPage() {
  const { addToast } = useToastContext();
  const [bugForm, setBugForm] = useState({ email: "", app: "", description: "" });
  const [featureForm, setFeatureForm] = useState({ email: "", app: "", description: "" });

  const handleBugSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addToast("Bug report submitted! We'll look into it.", "success");
    setBugForm({ email: "", app: "", description: "" });
  };

  const handleFeatureSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addToast("Feature request submitted! Thank you for your feedback.", "success");
    setFeatureForm({ email: "", app: "", description: "" });
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
              />
              <Input
                label="App Name"
                required
                value={bugForm.app}
                onChange={(e) => setBugForm({ ...bugForm, app: e.target.value })}
              />
              <Textarea
                label="Bug Description"
                required
                placeholder="Describe the bug, steps to reproduce, and your device info..."
                value={bugForm.description}
                onChange={(e) => setBugForm({ ...bugForm, description: e.target.value })}
              />
              <Button type="submit">Submit Bug Report</Button>
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
              />
              <Input
                label="App Name"
                required
                value={featureForm.app}
                onChange={(e) => setFeatureForm({ ...featureForm, app: e.target.value })}
              />
              <Textarea
                label="Feature Description"
                required
                placeholder="Describe the feature you'd like to see..."
                value={featureForm.description}
                onChange={(e) => setFeatureForm({ ...featureForm, description: e.target.value })}
              />
              <Button type="submit" variant="secondary">
                Submit Feature Request
              </Button>
            </form>
          </section>
        </div>
      </div>
    </PageTransition>
  );
}