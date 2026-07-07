import type { NavLink, SocialLink } from "@/types";

export const SITE_NAME = "SouMoster";
export const SITE_TAGLINE = "Building fun, addictive and high-quality Android games.";
export const SITE_URL = "https://soumoster.com";
export const SITE_DESCRIPTION =
  "SouMoster is an independent Android game developer creating fun, addictive, and high-quality mobile games. Download Road Hopper and more on Google Play.";
export const PLAY_STORE_DEV_URL =
  "https://play.google.com/store/apps/developer?id=SouMoster";
export const SUPPORT_EMAIL = "support@soumoster.com";
export const RESPONSE_TIME = "24–48 hours";

export const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/apps", label: "Apps" },
  { href: "/about", label: "About" },
  { href: "/support", label: "Support" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "Google Play",
    href: PLAY_STORE_DEV_URL,
    icon: "play",
  },
  {
    name: "GitHub",
    href: "https://github.com/soumoster",
    icon: "github",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/soumoster",
    icon: "linkedin",
  },
  {
    name: "Reddit",
    href: "https://reddit.com/u/soumoster",
    icon: "reddit",
  },
];

export const FOOTER_LINKS = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/contact", label: "Contact" },
  { href: "/support", label: "Support" },
];

export const APP_CATEGORIES = [
  "All",
  "Arcade",
  "Action",
  "Puzzle",
  "Casual",
  "Racing",
] as const;