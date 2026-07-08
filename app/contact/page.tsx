"use client";

import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";
import { useToastContext } from "@/components/shared/Providers";
import { PageTransition } from "@/components/shared/PageTransition";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Textarea } from "@/components/ui/Textarea";
import { submitContact } from "@/lib/api";
import { getFormErrorMessage } from "@/lib/form-errors";
import { openContactMailto } from "@/lib/mailto";
import { PLAY_STORE_DEV_URL, SOCIAL_LINKS, SUPPORT_EMAIL } from "@/lib/constants";

export default function ContactPage() {
  const { addToast } = useToastContext();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await submitContact(form);
      addToast("Message sent! We'll get back to you soon.", "success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      const result = getFormErrorMessage(error, "Failed to send message. Please try again.");
      addToast(result.message, result.type);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <PageTransition>
      <div className="mx-auto max-w-7xl px-4 pt-28 pb-20 sm:px-6 lg:px-8">
        <SectionHeading
          title="Contact Us"
          subtitle="Have a question or want to collaborate? We'd love to hear from you."
        />

        <p className="mb-8 text-center text-sm text-muted">
          Messages go to{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="text-primary hover:underline">
            {SUPPORT_EMAIL}
          </a>
          . First web submission requires a one-time activation email (check spam), or use Open in
          email app below.
        </p>

        <div className="grid gap-12 lg:grid-cols-2">
          <form onSubmit={handleSubmit} className="glass space-y-4 rounded-2xl p-8">
            <Input
              label="Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              disabled={submitting}
            />
            <Input
              label="Email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              disabled={submitting}
            />
            <Input
              label="Subject"
              required
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              disabled={submitting}
            />
            <Textarea
              label="Message"
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              disabled={submitting}
            />
            <div className="flex flex-col gap-2 sm:flex-row">
              <Button type="submit" disabled={submitting} className="flex-1">
                <Send className="h-4 w-4" />
                {submitting ? "Sending..." : "Send Message"}
              </Button>
              <Button
                type="button"
                variant="outline"
                className="flex-1"
                onClick={() => {
                  if (!form.name || !form.email || !form.subject || !form.message) {
                    addToast("Please fill in all fields first.", "error");
                    return;
                  }
                  openContactMailto(form);
                  addToast("Your email app will open — press Send to deliver the message.", "info");
                }}
              >
                Open in email app
              </Button>
            </div>
          </form>

          <div className="space-y-8">
            <div className="glass rounded-2xl p-8">
              <Mail className="mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-2 text-lg font-semibold text-text">Email</h3>
              <a href={`mailto:${SUPPORT_EMAIL}`} className="text-muted hover:text-primary">
                {SUPPORT_EMAIL}
              </a>
            </div>

            <div className="glass rounded-2xl p-8">
              <h3 className="mb-4 text-lg font-semibold text-text">Connect With Us</h3>
              <div className="space-y-3">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted transition-colors hover:text-primary"
                  >
                    {social.icon === "github" && <Github className="h-5 w-5" />}
                    {social.icon === "linkedin" && <Linkedin className="h-5 w-5" />}
                    {social.icon === "play" && (
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3.609 1.814L13.792 12 3.61 22.186a1.003 1.003 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                      </svg>
                    )}
                    {social.name}
                  </a>
                ))}
                <a
                  href={PLAY_STORE_DEV_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted transition-colors hover:text-primary"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a1.003 1.003 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                  </svg>
                  Google Play Developer Page
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}