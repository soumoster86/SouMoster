"use client";

import { ExternalLink } from "lucide-react";
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
    <Card className="flex flex-col">
      <div className="mb-4 flex items-start gap-4">
        <Image
          src={app.icon}
          alt={`${app.name} icon`}
          width={56}
          height={56}
          className="rounded-xl"
        />
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-text">{app.name}</h3>
          <p className="text-sm text-muted">{app.genre}</p>
        </div>
      </div>

      <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">{app.description}</p>

      <div className="mb-4 flex flex-wrap gap-2">
        <Badge variant="primary">{app.category}</Badge>
        <Badge>v{app.version}</Badge>
      </div>

      <div className="flex gap-2">
        <Button href={app.playStoreUrl} size="sm" className="flex-1">
          <ExternalLink className="h-4 w-4" />
          Play Store
        </Button>
        <Link href={`/apps/${app.slug}`} className="flex-1">
          <Button variant="outline" size="sm" className="w-full">
            Learn More
          </Button>
        </Link>
      </div>
    </Card>
  );
}