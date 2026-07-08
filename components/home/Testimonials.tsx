"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function StarRating({ rating = 5 }: { rating?: number }) {
  return (
    <div className="mb-4 flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? "fill-secondary text-secondary" : "text-muted/30"}`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="section-gradient py-20" aria-label="Testimonials">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Community"
          title="What Players Say"
          subtitle="Feedback from our community"
        />

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
              <StarRating rating={item.rating ?? 5} />
              <p className="mb-4 leading-relaxed text-muted">&ldquo;{item.content}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/20 text-sm font-bold text-primary"
                  aria-hidden="true"
                >
                  {getInitials(item.name)}
                </div>
                <div>
                  <p className="font-semibold text-text">{item.name}</p>
                  <p className="text-sm text-muted">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}