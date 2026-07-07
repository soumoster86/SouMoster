import { cn } from "@/lib/utils";

interface BrandIconProps {
  size?: number;
  className?: string;
}

export function BrandIcon({ size = 40, className }: BrandIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="soumoster-bg" x1="10" y1="8" x2="110" y2="112" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8B84FF" />
          <stop offset="0.5" stopColor="#6C63FF" />
          <stop offset="1" stopColor="#5249E0" />
        </linearGradient>
        <linearGradient id="soumoster-body" x1="32" y1="34" x2="88" y2="90" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7A72FF" />
          <stop offset="1" stopColor="#4F46E5" />
        </linearGradient>
        <linearGradient id="soumoster-horn" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#FFD54F" />
          <stop offset="1" stopColor="#FFB703" />
        </linearGradient>
        <filter id="soumoster-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* App icon container */}
      <rect width="120" height="120" rx="28" fill="url(#soumoster-bg)" />
      <rect
        x="4"
        y="4"
        width="112"
        height="112"
        rx="24"
        stroke="white"
        strokeOpacity="0.12"
        strokeWidth="1.5"
      />

      {/* Subtle top shine */}
      <ellipse cx="60" cy="32" rx="38" ry="18" fill="white" fillOpacity="0.1" />

      {/* Horns */}
      <path
        d="M38 46 L32 24 L46 40 Z"
        fill="url(#soumoster-horn)"
        stroke="#E6A200"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <path
        d="M82 46 L88 24 L74 40 Z"
        fill="url(#soumoster-horn)"
        stroke="#E6A200"
        strokeWidth="1"
        strokeLinejoin="round"
      />

      {/* Monster body */}
      <circle cx="60" cy="64" r="30" fill="url(#soumoster-body)" filter="url(#soumoster-glow)" />

      {/* Cheek accents */}
      <circle cx="38" cy="70" r="5" fill="#22C55E" fillOpacity="0.35" />
      <circle cx="82" cy="70" r="5" fill="#22C55E" fillOpacity="0.35" />

      {/* Eyes */}
      <ellipse cx="48" cy="60" rx="9" ry="10" fill="white" />
      <ellipse cx="72" cy="60" rx="9" ry="10" fill="white" />
      <circle cx="49" cy="61" r="5" fill="#0F172A" />
      <circle cx="73" cy="61" r="5" fill="#0F172A" />
      <circle cx="51" cy="58" r="2" fill="white" />
      <circle cx="75" cy="58" r="2" fill="white" />

      {/* Playful smile */}
      <path
        d="M46 76 Q60 86 74 76"
        stroke="#22C55E"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Hop lane dots — Road Hopper motif */}
      <circle cx="30" cy="100" r="5" fill="#22C55E" fillOpacity="0.9" />
      <circle cx="60" cy="100" r="5" fill="#FFB703" fillOpacity="0.95" />
      <circle cx="90" cy="100" r="5" fill="#22C55E" fillOpacity="0.9" />
      <rect x="22" y="98" width="76" height="4" rx="2" fill="white" fillOpacity="0.08" />
    </svg>
  );
}