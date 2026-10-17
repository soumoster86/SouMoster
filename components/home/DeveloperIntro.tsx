"use client";

import { motion } from "framer-motion";
import { Code2, Heart, Rocket } from "lucide-react";
import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/SectionHeading";

const values = [
  { icon: Heart, key: "playerFirst" },
  { icon: Code2, key: "qualityCode" },
  { icon: Rocket, key: "alwaysImproving" },
] as const;

export function DeveloperIntro() {
  const t = useTranslations("home.intro");
  return (
    <section className="section-muted py-20" aria-label={t("sectionLabel")}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <div className="grid gap-8 md:grid-cols-3">
          {values.map((value, index) => (
            <motion.div
              key={value.key}
              className="glass rounded-2xl p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
            >
              <value.icon className="mx-auto mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 text-lg font-semibold text-text">{t(`${value.key}.title`)}</h3>
              <p className="text-sm leading-relaxed text-muted">{t(`${value.key}.description`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}