import { useId } from "react";
import type { Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

/** Points for a five-pointed star centred on (cx, cy), first point rotated by `rotation` degrees. */
function star(cx: number, cy: number, r: number, rotation = 0): string {
  return Array.from({ length: 10 }, (_, i) => {
    const radius = i % 2 === 0 ? r : r * 0.382;
    const angle = ((rotation - 90 + i * 36) * Math.PI) / 180;
    return `${(cx + radius * Math.cos(angle)).toFixed(2)},${(cy + radius * Math.sin(angle)).toFixed(2)}`;
  }).join(" ");
}

function UnitedKingdom() {
  // Clip id must be unique per instance: the flag renders in both the button and the list.
  const clip = useId();
  return (
    <svg viewBox="0 0 60 30" preserveAspectRatio="xMidYMid slice">
      <clipPath id={clip}>
        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
      </clipPath>
      <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
      <path d="M0,0 L60,30 M60,0 L0,30" clipPath={`url(#${clip})`} stroke="#C8102E" strokeWidth="4" />
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
    </svg>
  );
}

const FLAGS: Record<Locale, () => React.ReactElement> = {
  en: UnitedKingdom,
  fr: () => (
    <svg viewBox="0 0 3 2">
      <rect width="1" height="2" fill="#002654" />
      <rect x="1" width="1" height="2" fill="#fff" />
      <rect x="2" width="1" height="2" fill="#CE1126" />
    </svg>
  ),
  es: () => (
    <svg viewBox="0 0 3 2">
      <rect width="3" height="2" fill="#AA151B" />
      <rect y="0.5" width="3" height="1" fill="#F1BF00" />
    </svg>
  ),
  "pt-BR": () => (
    <svg viewBox="0 0 30 20">
      <rect width="30" height="20" fill="#009B3A" />
      <polygon points="3,10 15,2.2 27,10 15,17.8" fill="#FEDF00" />
      <circle cx="15" cy="10" r="4.6" fill="#002776" />
      <path d="M10.6,9.1 Q15,8 19.4,11" stroke="#fff" strokeWidth="0.8" fill="none" />
    </svg>
  ),
  hi: () => (
    <svg viewBox="0 0 30 20">
      <rect width="30" height="20" fill="#fff" />
      <rect width="30" height="6.67" fill="#FF9933" />
      <rect y="13.33" width="30" height="6.67" fill="#138808" />
      <circle cx="15" cy="10" r="2.6" fill="none" stroke="#000080" strokeWidth="0.7" />
      <circle cx="15" cy="10" r="0.7" fill="#000080" />
    </svg>
  ),
  zh: () => (
    <svg viewBox="0 0 30 20">
      <rect width="30" height="20" fill="#DE2910" />
      <polygon points={star(5, 5, 3)} fill="#FFDE00" />
      <polygon points={star(10, 2, 1, 23)} fill="#FFDE00" />
      <polygon points={star(12, 4, 1, 46)} fill="#FFDE00" />
      <polygon points={star(12, 7, 1, 70)} fill="#FFDE00" />
      <polygon points={star(10, 9, 1, 21)} fill="#FFDE00" />
    </svg>
  ),
};

/** Small 3:2 flag for a site language (decorative; the language name is the label). */
export function LocaleFlag({ locale, className }: { locale: Locale; className?: string }) {
  const Flag = FLAGS[locale];
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-block h-3.5 w-5 shrink-0 overflow-hidden rounded-[3px] ring-1 ring-black/15 [&>svg]:h-full [&>svg]:w-full",
        className,
      )}
    >
      <Flag />
    </span>
  );
}
