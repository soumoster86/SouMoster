"use client";

import { Mail, Send } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useToastContext } from "@/components/shared/Providers";
import { PageTransition } from "@/components/shared/PageTransition";
import { SocialIcon } from "@/components/shared/SocialIcon";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Textarea } from "@/components/ui/Textarea";
import { submitContact } from "@/lib/api";
import { getFormErrorMessage } from "@/lib/form-errors";
import { openContactMailto } from "@/lib/mailto";
import {
  PLAY_STORE_DEVELOPER_URL,
  SOCIAL_LINKS,
  SUPPORT_EMAIL,
} from "@/lib/constants";

export default function ContactPage() {
  const t = useTranslations("contact");
  const tForms = useTranslations("common.forms");
  const { addToast } = useToastContext();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await submitContact(form);
      addToast(t("sent"), "success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      const result = getFormErrorMessage(error, t("failed"), tForms("activationNeeded"));
      addToast(result.message, result.type);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <PageTransition>
      <div className="mx-auto max-w-7xl px-4 pt-28 pb-20 sm:px-6 lg:px-8">
        <SectionHeading
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <p className="mb-8 text-center text-sm text-muted">
          {t.rich("note", {
            address: SUPPORT_EMAIL,
            email: (chunks) => (
              <a href={`mailto:${SUPPORT_EMAIL}`} className="text-primary hover:underline">
                {chunks}
              </a>
            ),
          })}
        </p>

        <div className="grid gap-12 lg:grid-cols-2">
          <form onSubmit={handleSubmit} className="glass space-y-4 rounded-2xl p-8">
            <Input
              label={t("name")}
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              disabled={submitting}
            />
            <Input
              label={t("email")}
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              disabled={submitting}
            />
            <Input
              label={t("subject")}
              required
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              disabled={submitting}
            />
            <Textarea
              label={t("message")}
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              disabled={submitting}
            />
            <div className="flex flex-col gap-2 sm:flex-row">
              <Button type="submit" disabled={submitting} className="flex-1">
                <Send className="h-4 w-4" />
                {submitting ? t("sending") : t("send")}
              </Button>
              <Button
                type="button"
                variant="outline"
                className="flex-1"
                onClick={() => {
                  if (!form.name || !form.email || !form.subject || !form.message) {
                    addToast(t("fillAllFields"), "error");
                    return;
                  }
                  openContactMailto(form);
                  addToast(t("mailtoOpening"), "info");
                }}
              >
                {t("openInEmailApp")}
              </Button>
            </div>
          </form>

          <div className="space-y-8">
            <div className="glass rounded-2xl p-8">
              <Mail className="mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-2 text-lg font-semibold text-text">{t("emailCard")}</h3>
              <a href={`mailto:${SUPPORT_EMAIL}`} className="text-muted hover:text-primary">
                {SUPPORT_EMAIL}
              </a>
            </div>

            <div className="glass rounded-2xl p-8">
              <h3 className="mb-4 text-lg font-semibold text-text">{t("connect")}</h3>
              <div className="space-y-3">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted transition-colors hover:text-primary"
                  >
                    <SocialIcon icon={social.icon} />
                    {social.name}
                  </a>
                ))}
                <a
                  href={PLAY_STORE_DEVELOPER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted transition-colors hover:text-primary"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a1.003 1.003 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                  </svg>
                  {t("playDeveloperPage")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}