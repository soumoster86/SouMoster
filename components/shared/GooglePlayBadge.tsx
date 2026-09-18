import Link from "next/link";
import { cn } from "@/lib/utils";

interface GooglePlayBadgeProps {
  href: string;
  subtext?: string;
  title?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  ariaLabel?: string;
  target?: string;
}

export function GooglePlayBadge({
  href,
  subtext = "GET IT ON",
  title = "Google Play",
  size = "md",
  className,
  ariaLabel,
  target = "_blank",
}: GooglePlayBadgeProps) {
  const isExternal = href.startsWith("http");

  const sizeClasses = {
    sm: "px-3.5 py-1.5 gap-2.5 min-h-[40px] rounded-lg",
    md: "px-4 py-2 gap-3 min-h-[48px] rounded-xl",
    lg: "px-5 py-2.5 gap-3.5 min-h-[54px] rounded-xl",
  };

  const iconSizes = {
    sm: "w-4 h-5",
    md: "w-5 h-6",
    lg: "w-6 h-7",
  };

  const textSizes = {
    sm: {
      sub: "text-[9px] tracking-wider",
      main: "text-xs font-semibold leading-tight",
    },
    md: {
      sub: "text-[10px] tracking-widest",
      main: "text-sm font-bold leading-tight",
    },
    lg: {
      sub: "text-[11px] tracking-widest",
      main: "text-base font-bold leading-tight",
    },
  };

  return (
    <Link
      href={href}
      target={isExternal ? target : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      aria-label={ariaLabel || `${subtext} ${title}`}
      className={cn(
        "group hover:shadow-primary/20 relative inline-flex items-center border border-neutral-700/80 bg-black/90 text-white shadow-lg shadow-black/40 backdrop-blur-sm transition-all duration-200 hover:scale-[1.03] hover:border-neutral-500 hover:bg-black hover:shadow-xl active:scale-[0.98]",
        sizeClasses[size],
        className,
      )}
    >
      {/* Official Google Play multicolor triangle */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(
          "shrink-0 transition-transform duration-200 group-hover:scale-105",
          iconSizes[size],
        )}
        aria-hidden="true"
      >
        <path
          d="M3.609 1.814L13.792 12 3.61 22.186C3.242 22.015 3 21.642 3 21.222V2.778C3 2.358 3.242 1.985 3.609 1.814Z"
          fill="url(#gp-blue)"
        />
        <path
          d="M17.206 8.586L13.792 12 3.609 1.814C3.896 1.681 4.238 1.705 4.512 1.864L17.206 8.586Z"
          fill="url(#gp-green)"
        />
        <path
          d="M17.206 15.414L4.512 22.136C4.238 22.295 3.896 22.319 3.609 22.186L13.792 12L17.206 15.414Z"
          fill="url(#gp-red)"
        />
        <path
          d="M20.899 10.536L17.206 8.586L13.792 12L17.206 15.414L20.899 13.464C21.579 13.104 22 12.404 22 11.636V12.364C22 11.596 21.579 10.896 20.899 10.536Z"
          fill="url(#gp-yellow)"
        />
        <defs>
          <linearGradient
            id="gp-blue"
            x1="10.8"
            y1="3.3"
            x2="-1.2"
            y2="15.3"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#00A0FF" />
            <stop offset="0.007" stopColor="#00A1FF" />
            <stop offset="0.26" stopColor="#00BEFF" />
            <stop offset="0.512" stopColor="#00D2FF" />
            <stop offset="0.76" stopColor="#00DFFF" />
            <stop offset="1" stopColor="#00E3FF" />
          </linearGradient>
          <linearGradient
            id="gp-green"
            x1="18.5"
            y1="7.8"
            x2="3.1"
            y2="7.8"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFE000" />
            <stop offset="0.409" stopColor="#FFBD00" />
            <stop offset="0.775" stopColor="#FFA000" />
            <stop offset="1" stopColor="#FF9C00" />
          </linearGradient>
          <linearGradient
            id="gp-red"
            x1="14.9"
            y1="13.1"
            x2="1.3"
            y2="26.7"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF3A44" />
            <stop offset="1" stopColor="#C31162" />
          </linearGradient>
          <linearGradient
            id="gp-yellow"
            x1="2.2"
            y1="-2.4"
            x2="11.4"
            y2="6.8"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#32A071" />
            <stop offset="0.069" stopColor="#2DA771" />
            <stop offset="0.476" stopColor="#15CF74" />
            <stop offset="0.801" stopColor="#06E775" />
            <stop offset="1" stopColor="#00F076" />
          </linearGradient>
        </defs>
      </svg>

      {/* Official Typography */}
      <div className="flex flex-col text-left">
        <span
          className={cn(
            "font-medium text-neutral-300 uppercase select-none",
            textSizes[size].sub,
          )}
        >
          {subtext}
        </span>
        <span
          className={cn(
            "font-heading tracking-wide text-white select-none",
            textSizes[size].main,
          )}
        >
          {title}
        </span>
      </div>
    </Link>
  );
}
