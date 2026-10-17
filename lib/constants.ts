import type { NavLink, SocialLink } from "@/types";

export const SITE_NAME = "SouMoster";
export const SITE_TAGLINE =
  "Building fun, addictive and high-quality Android games.";
export const SITE_URL = "https://sou-moster.vercel.app";
export const SITE_DESCRIPTION =
  "SouMoster is an independent Android game developer. Download Road Hopper and Bank Hopper free on Google Play. Time Hopper is in Google Play Closed Testing. Space Hopper and Arena Legends, our first action game, are in development. Watch trailers on YouTube @SouMosterGames.";
export const PLAY_STORE_APP_URL =
  "https://play.google.com/store/apps/details?id=com.roadohopper.game";
export const BANK_HOPPER_PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.bankhopper";
/** @deprecated Use PLAY_STORE_APP_URL — kept as alias for existing imports */
export const PLAY_STORE_DEV_URL = PLAY_STORE_APP_URL;
export const PLAY_STORE_DEVELOPER_URL =
  "https://play.google.com/store/apps/dev?id=9220341090582575849";
export const TIME_HOPPER_PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.soumster.timehopper";
export const TIME_HOPPER_GOOGLE_GROUP_URL =
  "https://groups.google.com/g/timehoppergame";
export const TIME_HOPPER_GOOGLE_GROUP_EMAIL = "timehoppergame@googlegroups.com";
export const YOUTUBE_URL = "https://www.youtube.com/@SouMosterGames";
export const YOUTUBE_HANDLE = "@SouMosterGames";
export const SUPPORT_EMAIL = "soumoster@gmail.com";
export const SUPPORT_PHONE = "+918981495361";
export const RESPONSE_TIME = "24–48 hours";

/** `key` is a translation key under common.nav. */
export const NAV_LINKS: NavLink[] = [
  { href: "/", key: "home" },
  { href: "/apps", key: "apps" },
  { href: "/about", key: "about" },
  { href: "/beta", key: "beta" },
  { href: "/support", key: "support" },
  { href: "/blog", key: "blog" },
  { href: "/contact", key: "contact" },
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

/** `key` is a translation key under common.footer.links. */
export const FOOTER_LINKS: NavLink[] = [
  { href: TIME_HOPPER_GOOGLE_GROUP_URL, key: "testerGroup" },
  { href: "/beta", key: "betaSignup" },
  { href: "/privacy", key: "privacy" },
  { href: "/terms", key: "terms" },
  { href: "/delete-data", key: "deleteData" },
  { href: "/press", key: "press" },
  { href: "/contact", key: "contact" },
  { href: "/support", key: "support" },
];

export const APP_CATEGORIES = [
  "All",
  "Arcade",
  "Action",
  "Puzzle",
  "Casual",
  "Racing",
] as const;
