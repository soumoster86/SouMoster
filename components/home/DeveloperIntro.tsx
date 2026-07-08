"use client";

import { motion } from "framer-motion";
import { Code2, Heart, Rocket } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const values = [
  {
    icon: Heart,
    title: "Player First",
    description: "Every design decision starts with the player experience in mind.",
  },
  {
    icon: Code2,
    title: "Quality Code",
    description: "Clean architecture and performance optimization in every release.",
  },
  {
    icon: Rocket,
    title: "Always Improving",
    description: "Regular updates, new features, and community-driven development.",
  },
];

export function DeveloperIntro() {
  return (
    <section className="section-muted py-20" aria-label="Developer introduction">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About"
          title="Meet SouMoster"
          subtitle="An independent Android developer passionate about creating memorable gaming experiences"
        />

        <div className="grid gap-8 md:grid-cols-3">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="glass rounded-2xl p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
            >
              <value.icon className="mx-auto mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 text-lg font-semibold text-text">{value.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}