"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useToastContext } from "@/components/shared/Providers";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const { addToast } = useToastContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    addToast("Thanks for subscribing! We'll keep you updated.", "success");
    setEmail("");
  };

  return (
    <section className="section-accent py-20" aria-label="Newsletter">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="glass mx-auto max-w-2xl rounded-3xl p-8 text-center sm:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Mail className="mx-auto mb-4 h-10 w-10 text-primary" />
          <h2 className="text-2xl font-bold text-text">Stay in the Loop</h2>
          <p className="mt-2 text-muted">
            Get notified about new game releases, updates, and developer news.
          </p>
          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Email address"
              className="flex-1"
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}