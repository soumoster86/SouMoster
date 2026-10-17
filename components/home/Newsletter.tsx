"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useToastContext } from "@/components/shared/Providers";
import { submitNewsletter } from "@/lib/api";
import { getFormErrorMessage } from "@/lib/form-errors";

export function Newsletter() {
  const t = useTranslations("home.newsletter");
  const tForms = useTranslations("common.forms");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const { addToast } = useToastContext();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitting(true);

    try {
      await submitNewsletter({ email });
      addToast(t("success"), "success");
      setEmail("");
    } catch (error) {
      const result = getFormErrorMessage(error, t("failed"), tForms("activationNeeded"));
      addToast(result.message, result.type);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="section-accent py-20" aria-label={t("sectionLabel")}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="glass mx-auto max-w-2xl rounded-3xl p-8 text-center sm:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Mail className="mx-auto mb-4 h-10 w-10 text-primary" />
          <h2 className="text-2xl font-bold text-text">{t("title")}</h2>
          <p className="mt-2 text-muted">
            {t("subtitle")}
          </p>
          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Input
              type="email"
              placeholder={t("placeholder")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={submitting}
              aria-label={t("emailLabel")}
              className="flex-1"
            />
            <Button type="submit" disabled={submitting}>
              {submitting ? t("subscribing") : t("subscribe")}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}