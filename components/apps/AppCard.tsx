"use client";

import { ExternalLink, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import type { App } from "@/types";

interface AppCardProps {
  app: App;
}

export function AppCard({ app }: AppCardProps) {
  return (
    <Card className="group flex flex-col overflow-hidden p-0">
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={app.banner}
          alt={`${app.name} preview`}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="from-card via-card/20 absolute inset-0 bg-gradient-to-t to-transparent" />
        <div className="absolute bottom-3 left-3 flex items-center gap-3">
          <Image
            src={app.icon}
            alt=""
            width={40}
            height={40}
            className="rounded-xl shadow-lg ring-2 ring-white/20"
            aria-hidden="true"
          />
          <div>
            <h3 className="text-text text-base font-semibold drop-shadow-sm">
              {app.name}
            </h3>
            <p className="text-muted/90 text-xs">{app.genre}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-muted mb-4 flex-1 text-sm leading-relaxed">
          {app.description}
        </p>

        <div className="mb-4 flex flex-wrap gap-2">
          <Badge variant="primary">{app.category}</Badge>
          {app.status === "in-development" ? (
            <Badge variant="secondary">In Development</Badge>
          ) : (
            <Badge>v{app.version}</Badge>
          )}
        </div>

        <div className="flex gap-2">
          {app.status === "in-development" ? (
            <Button
              href={`/beta?game=${app.slug}`}
              size="sm"
              variant="primary"
              className="flex-1"
            >
              <Users className="h-4 w-4" />
              Join Beta
            </Button>
          ) : (
            <Button href={app.playStoreUrl} size="sm" className="flex-1">
              <ExternalLink className="h-4 w-4" />
              Play Store
            </Button>
          )}
          <Link href={`/apps/${app.slug}`} className="flex-1">
            <Button variant="outline" size="sm" className="w-full">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}
