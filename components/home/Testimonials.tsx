"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="py-20" aria-label="Testimonials">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="What Players Say" subtitle="Feedback from our community" />

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              className="glass rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Quote className="mb-4 h-8 w-8 text-primary/40" />
              <p className="mb-4 leading-relaxed text-muted">&ldquo;{item.content}&rdquo;</p>
              <div>
                <p className="font-semibold text-text">{item.name}</p>
                <p className="text-sm text-muted">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}