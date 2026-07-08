"use client";

import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import Image from "next/image";
import { PhoneFrame } from "@/components/shared/PhoneFrame";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getFeaturedApp } from "@/data/apps";

export function FeaturedApp() {
  const app = getFeaturedApp();
  if (!app) return null;

  return (
    <section className="section-gradient py-20" aria-label="Featured app">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Spotlight"
          title="Featured App"
          subtitle="Our latest and greatest release"
        />

        <motion.div
          className="glass overflow-hidden rounded-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="flex items-center justify-center bg-background/30 py-8 lg:py-12">
              <PhoneFrame
                src={app.screenshots[0] ?? app.banner}
                alt={`${app.name} gameplay screenshot`}
                size="lg"
                priority
              />
            </div>
            <div className="space-y-6 p-8 lg:p-12">
              <div className="flex items-center gap-4">
                <Image
                  src={app.icon}
                  alt={`${app.name} icon`}
                  width={64}
                  height={64}
                  className="rounded-2xl"
                />
                <div>
                  <h3 className="text-2xl font-bold text-text">{app.name}</h3>
                  <p className="text-muted">{app.tagline}</p>
                </div>
              </div>

              <p className="leading-relaxed text-muted">{app.description}</p>

              <div className="flex flex-wrap gap-2">
                <Badge variant="primary">{app.genre}</Badge>
                <Badge>v{app.version}</Badge>
                {app.rating && (
                  <Badge variant="secondary">
                    <Star className="mr-1 h-3 w-3" />
                    {app.rating}
                  </Badge>
                )}
              </div>

              <div className="flex flex-wrap gap-3">
                <Button href={app.playStoreUrl}>
                  <ExternalLink className="h-4 w-4" />
                  Google Play
                </Button>
                <Button href={`/apps/${app.slug}`} variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}