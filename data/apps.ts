import type { App } from "@/types";

export const apps: App[] = [
  {
    slug: "road-hopper",
    name: "Road Hopper",
    tagline: "Hop, dodge, and survive the endless road!",
    description:
      "An addictive arcade runner where you hop across lanes, dodge obstacles, and chase high scores on an endless highway.",
    longDescription:
      "Road Hopper is a fast-paced arcade runner that puts your reflexes to the test. Navigate through busy highways, dodge speeding vehicles, collect power-ups, and compete for the highest score. With simple one-tap controls and increasingly challenging gameplay, Road Hopper delivers the perfect pick-up-and-play experience for casual and hardcore gamers alike.",
    genre: "Arcade Runner",
    category: "Arcade",
    version: "1.2.0",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.soumoster.roadhopper",
    icon: "/images/screenshots/roadhopper_icon_1024.png",
    banner: "/images/screenshots/Screenshot_20260704_103339.png",
    screenshots: [
      "/images/screenshots/Screenshot_20260704_103339.png",
      "/images/screenshots/Screenshot_20260704_103428.png",
      "/images/screenshots/Screenshot_20260704_103448.png",
      "/images/screenshots/Screenshot_20260704_103506.png",
    ],
    features: [
      "One-tap intuitive controls",
      "Endless procedurally generated roads",
      "Multiple vehicle types and obstacles",
      "Power-ups: shields, magnets, and speed boosts",
      "Daily challenges and achievements",
      "Global leaderboard integration",
      "Offline play support",
      "Regular content updates",
    ],
    howToPlay: [
      "Tap the screen to hop to the next lane",
      "Avoid oncoming vehicles and obstacles",
      "Collect coins and power-ups along the way",
      "Use shields to survive collisions",
      "Chain hops for combo multipliers",
      "Beat your high score and climb the leaderboard",
    ],
    versionHistory: [
      {
        version: "1.2.0",
        date: "2026-03-01",
        changes: [
          "Added daily challenge mode",
          "New night-time road theme",
          "Performance optimizations",
          "Bug fixes for collision detection",
        ],
      },
      {
        version: "1.1.0",
        date: "2025-11-15",
        changes: [
          "Introduced power-up system",
          "Added global leaderboards",
          "New vehicle skins",
          "Improved UI animations",
        ],
      },
      {
        version: "1.0.0",
        date: "2025-08-01",
        changes: ["Initial release on Google Play", "Core endless runner gameplay", "5 road themes"],
      },
    ],
    knownIssues: [
      "Rare frame drops on older devices with 2GB RAM",
      "Leaderboard sync may delay on slow connections",
    ],
    faq: [
      {
        question: "Is Road Hopper free to play?",
        answer:
          "Yes! Road Hopper is completely free to download and play. Optional in-app purchases are available for cosmetic items.",
      },
      {
        question: "Does it work offline?",
        answer:
          "Yes, you can play Road Hopper offline. Leaderboard sync requires an internet connection.",
      },
      {
        question: "What are the minimum requirements?",
        answer: "Android 7.0 (API 24) or higher with at least 2GB of RAM.",
      },
      {
        question: "How do I report a bug?",
        answer:
          "Visit our Support page or email support@soumoster.com with details about the issue.",
      },
    ],
    featured: true,
    releaseDate: "2025-08-01",
    downloads: "10K+",
    rating: 4.5,
  },
];

export function getAppBySlug(slug: string): App | undefined {
  return apps.find((app) => app.slug === slug);
}

export function getFeaturedApp(): App | undefined {
  return apps.find((app) => app.featured);
}

export function getRelatedApps(currentSlug: string): App[] {
  return apps.filter((app) => app.slug !== currentSlug).slice(0, 3);
}