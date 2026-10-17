"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Code, Download, RefreshCw, Smartphone } from "lucide-react";
import { AnimatedStatValue } from "@/components/home/AnimatedStatValue";
import { stats } from "@/data/stats";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  smartphone: Smartphone,
  download: Download,
  refresh: RefreshCw,
  code: Code,
};

export function Stats() {
  const t = useTranslations("home.stats");
  return (
    <section id="stats" className="section-muted py-12 sm:py-16" aria-label={t("sectionLabel")}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = iconMap[stat.icon] || Smartphone;
            return (
              <motion.div
                key={stat.key}
                className="glass rounded-2xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Icon className="mx-auto mb-3 h-8 w-8 text-primary" />
                <p className="text-3xl font-bold text-text">
                  <AnimatedStatValue value={stat.value} />
                </p>
                <p className="mt-1 text-sm text-muted">{t(stat.key)}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}