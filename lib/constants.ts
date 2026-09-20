import type { NavLink, SocialLink } from "@/types";

export const SITE_NAME = "SouMoster";
export const SITE_TAGLINE =
  "Building fun, addictive and high-quality Android games.";
export const SITE_URL = "https://sou-moster.vercel.app";
export const SITE_DESCRIPTION =
  "SouMoster is an independent Android game developer. Download Road Hopper free on Google Play. Bank Hopper is in Google Play Closed Testing. Space Hopper is in development. Watch trailers on YouTube @SouMosterGames.";
export const PLAY_STORE_APP_URL =
  "https://play.google.com/store/apps/details?id=com.roadohopper.game";
export const BANK_HOPPER_PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.bankhopper";
/** @deprecated Use PLAY_STORE_APP_URL — kept as alias for existing imports */
export const PLAY_STORE_DEV_URL = PLAY_STORE_APP_URL;
export const PLAY_STORE_DEVELOPER_URL =
  "https://play.google.com/store/apps/dev?id=9220341090582575849";
export const BANK_HOPPER_GOOGLE_GROUP_URL =
  "https://groups.google.com/g/bank-hopper-game";
export const BANK_HOPPER_GOOGLE_GROUP_EMAIL =
  "bank-hopper-game@googlegroups.com";
export const YOUTUBE_URL = "https://www.youtube.com/@SouMosterGames";
export const YOUTUBE_HANDLE = "@SouMosterGames";
export const SUPPORT_EMAIL = "soumoster@gmail.com";
export const SUPPORT_PHONE = "+918981495361";
export const RESPONSE_TIME = "24–48 hours";

export const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/apps", label: "Apps" },
  { href: "/about", label: "About" },
  { href: "/beta", label: "Beta" },
  { href: "/support", label: "Support" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "Google Play",
    href: PLAY_STORE_DEVELOPER_URL,
    icon: "play",
  },
  {
    name: "YouTube",
    href: YOUTUBE_URL,
    icon: "youtube",
  },
  {
    name: "GitHub",
    href: "https://github.com/soumoster86",
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
  { href: BANK_HOPPER_GOOGLE_GROUP_URL, label: "Join Tester Google Group" },
  { href: "/beta", label: "Closed Testing Signup" },
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
