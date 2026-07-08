import {
  Gamepad2,
  Globe,
  Palette,
  RefreshCw,
  Shield,
  Trophy,
  WifiOff,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const featureIcons: LucideIcon[] = [Zap, Shield, Trophy, WifiOff, RefreshCw, Globe, Palette, Gamepad2];

interface FeatureGridProps {
  features: string[];
}

export function FeatureGrid({ features }: FeatureGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {features.map((feature, index) => {
        const Icon = featureIcons[index % featureIcons.length];
        return (
          <div key={feature} className="glass flex items-start gap-4 rounded-xl p-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
              <Icon className="h-5 w-5" />
            </div>
            <p className="pt-1.5 text-sm leading-relaxed text-muted">{feature}</p>
          </div>
        );
      })}
    </div>
  );
}