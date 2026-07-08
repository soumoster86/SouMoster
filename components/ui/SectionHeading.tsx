"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  title,
  subtitle,
  eyebrow,
  align = "center",
}: SectionHeadingProps) {
  return (
    <motion.div
      className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold tracking-wider text-primary uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-text md:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-lg text-muted">{subtitle}</p>}
    </motion.div>
  );
}