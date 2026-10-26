"use client";

import { motion } from "framer-motion";
import { FlaskConical, Users } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { PhoneFrame } from "@/components/shared/PhoneFrame";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { closedTestingJoinUrl } from "@/data/apps";
import { useLocalizedApps } from "@/hooks/useLocalizedApps";

/** Highlights the game currently in closed testing and invites testers. */
export function Spotlight() {
  const t = useTranslations("home.spotlight");
  const tc = useTranslations("common");
  const app = useLocalizedApps().find((item) => item.status === "closed-testing");
  if (!app) return null;

  const landscape = app.screenshotOrientation === "landscape";
  const shot = app.screenshots[0] ?? app.banner;

  return (
    <section className="section-gradient relative overflow-hidden py-20" aria-label={t("sectionLabel")}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="glass grid items-center gap-10 overflow-hidden rounded-3xl p-6 sm:p-10 lg:grid-cols-[1.25fr_1fr] lg:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="order-2 lg:order-1">
            <PhoneFrame
              src={shot}
              alt={t("screenshotAlt", { name: app.name })}
              orientation={landscape ? "landscape" : "portrait"}
              size={landscape ? "md" : "lg"}
            />
          </div>

          <div className="order-1 space-y-6 lg:order-2">
            <p className="text-secondary inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase">
              <FlaskConical className="h-4 w-4" />
              {t("eyebrow")}
            </p>
            <div className="flex items-center gap-4">
              <Image
                src={app.icon}
                alt={tc("a11y.appIcon", { name: app.name })}
                width={64}
                height={64}
                className="rounded-2xl"
              />
              <div>
                <h2 className="text-text text-2xl font-bold sm:text-3xl">{app.name}</h2>
                <p className="text-muted">{app.tagline}</p>
              </div>
            </div>
            <p className="text-muted leading-relaxed">{t("lead")}</p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="primary">{tc(`genre.${app.genre}`)}</Badge>
              <Badge variant="secondary">{tc("status.closedTesting")}</Badge>
              <Badge>{tc("badge.version", { version: app.version })}</Badge>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button href={closedTestingJoinUrl(app)} size="md">
                <Users className="h-4 w-4" />
                {tc("actions.joinClosedTesting")}
              </Button>
              <Button href={`/apps/${app.slug}`} variant="outline" size="md">
                {tc("actions.learnMore")}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
