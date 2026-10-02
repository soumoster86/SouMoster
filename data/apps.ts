import type { App } from "@/types";
import { BANK_HOPPER_GOOGLE_GROUP_URL } from "@/lib/constants";

/** Live listing: https://play.google.com/store/apps/details?id=com.roadohopper.game */
export const apps: App[] = [
  {
    slug: "road-hopper",
    name: "Road Hopper",
    tagline: "How far can you hop?",
    description:
      "Tap or swipe across busy roads, rivers and rails. Dodge cars and trains, ride logs, grab branded HCoins. Easy to learn, hard to master!",
    longDescription:
      "Road Hopper is a free-to-play arcade hopper from SouMoster. Cross busy roads, rivers, and rails—dodge cars and trains, ride logs, and collect HCoins. Play five modes: Adventure (The Lost Litter campaign with 9 chapters), Endless (a new random world every run), Biomes (lock to classic lands and hunt treasures), Worlds (exclusive lands and hazards), and Sprint (race the clock for Velocity Tokens). Unlock heroes like Hopper, Cluck Norris, and Neil Hopstrong, equip hop trails, complete daily missions and 60+ achievements, and climb Google Play Games leaderboards. Offline play is fully supported; internet is only needed for optional purchases.",
    genre: "Arcade",
    category: "Arcade",
    version: "9.4.9",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.roadohopper.game",
    youtubeUrl: "https://www.youtube.com/@SouMosterGames",
    icon: "https://play-lh.googleusercontent.com/UnIrrHBIzWHySNG_6hXgWrAdo17IrLWBpMlW_buHCyfcYA2m01a4bIPD0JMDNqq-g797I10zO3snKINKrICfng=w240-h480",
    banner:
      "https://play-lh.googleusercontent.com/hwEaMMOpzk-E8K1EGPnanel4dKxtheibLZa96Tsd8-vK9O6_tPoGZjrp0JCumUW2oQqySWF5ju5MMdiaJh_zIg=w526-h296",
    screenshots: [
      "https://play-lh.googleusercontent.com/hwEaMMOpzk-E8K1EGPnanel4dKxtheibLZa96Tsd8-vK9O6_tPoGZjrp0JCumUW2oQqySWF5ju5MMdiaJh_zIg=w526-h296",
      "https://play-lh.googleusercontent.com/LK-wk3K22_XtmsBiC6LuXhpz_v3Nfu8RFx5QNd1jJ1mTM9bKJktLYDsDsNf9QGQqcMyUfzvxxZj_PHTMmP-Q=w526-h296",
      "https://play-lh.googleusercontent.com/99kP6olLgg5PDMhy4OPBXo4pvhrchB-_o9CMlK00RA14zLDVCQmyewioI7IQXWv5QEXXCWypc4-qPbS05unBeA=w526-h296",
      "https://play-lh.googleusercontent.com/tYYbKv3ysaMPwvv9ksaBs1KDe0uVFW_3k6EJXrCqfIP0Qgj4y2Ovfbe0E7Ub2xFFjylGIncosXnIELahZGrzYw=w526-h296",
      "https://play-lh.googleusercontent.com/I5u-UMqMTu2wnAIuwuWL4CL0MOcwE3E3z6nGXHRgrWyT9MGgaUrZcxoqHn2Rgb22S3Aofnn7014kTzo4k0RrMig=w526-h296",
      "https://play-lh.googleusercontent.com/v6msTm-wZER2-6gw3ZLMrf2UX_rjoy6abEPQd0qWKtw-gWcaxqxRa5zsu1lLwDmVjEV2WKpSAhvnBQMYfLet1A=w526-h296",
      "/images/screenshots/Screenshot_20260704_103339.png",
      "/images/screenshots/Screenshot_20260704_103428.png",
    ],
    gameplayVideo: "/videos/road-hopper-gameplay.webm",
    features: [
      "Five modes: Adventure, Endless, Biomes, Worlds & Sprint",
      "Adventure campaign — 9 chapters, stars, gifts & rescues",
      "Endless runs with living biomes, weather & personal bests",
      "Biome treasures (Common → Mythic) and exclusive Worlds relics",
      "Power-ups: Shield, Magnet, Double Coins, Speed Boost, Extra Life, Long Jump",
      "Heroes including Cluck Norris, Neil Hopstrong, Rexy & more",
      "Skins, hop trails, daily gifts, missions & 60+ achievements",
      "Google Play Games leaderboards & offline play",
      "Accessibility: handedness, swipe sensitivity, battery saver, reduce motion",
      "Free to play — everything earnable; optional HCoin / gem packs",
    ],
    howToPlay: [
      "Tap or swipe to hop across roads, rivers, and rails",
      "Dodge cars, trains, and hazards — ride logs when you need to",
      "Grab HCoins and power-ups along the way",
      "Try Adventure for the story campaign, or Endless for high scores",
      "Explore Biomes and Worlds for treasures and exclusive hazards",
      "Race Sprint tracks for Velocity Tokens and Sprint heroes",
      "Unlock heroes, skins, and hop trails in the Shop",
      "Climb personal bests and Google Play Games leaderboards",
    ],
    versionHistory: [
      {
        version: "9.4.9",
        date: "2026-09-23",
        changes: [
          "Latest stable update, live on Google Play for all players worldwide",
          "Continued performance, stability, and polish improvements",
        ],
      },
      {
        version: "9.4.7",
        date: "2026-09-15",
        changes: [
          "Performance and stability enhancements across all game modes",
          "Refined touch responsiveness and hop sensitivity tuning",
          "Bug fixes for Google Play Games leaderboards and achievement tracking",
          "Live on Google Play Store for all players worldwide",
        ],
      },
      {
        version: "9.2.9",
        date: "2026-07-27",
        changes: [
          "Big performance update: GPU rendering for steadier 60fps on budget and older devices",
          "Fixed NEW WORLDS / BIOMES title overlapping the Back & Guides buttons",
          "Less memory churn mid-run",
          "Live on Google Play for everyone",
        ],
      },
      {
        version: "8.1.3",
        date: "2026-07-07",
        changes: [
          "Revive! Watch a short ad after you're hit to continue your run",
          "Fixed a launch crash — the game is now stable",
          "Every character has its own funny name & hop sound",
          "Cleaner arcade launch screen",
          "Performance and polish fixes",
        ],
      },
    ],
    knownIssues: [],
    faq: [
      {
        question: "Is Road Hopper free to play?",
        answer:
          "Yes. Road Hopper is free to download and play. Optional in-app purchases (HCoin packs, gems, and cosmetics) are available, and everything remains earnable free.",
      },
      {
        question: "Does it work offline?",
        answer:
          "Yes. You can play fully offline. Internet is only required for optional purchases.",
      },
      {
        question: "What age rating is it?",
        answer: "Rated 3+ on Google Play.",
      },
      {
        question: "What modes are available?",
        answer:
          "Five modes: Adventure (story campaign), Endless, Biomes, Worlds, and Sprint — each with its own goals, hazards, and rewards.",
      },
      {
        question: "How do I report a bug?",
        answer:
          "Use our Support page or email soumoster@gmail.com with details about the issue.",
      },
      {
        question: "Where can I watch Road Hopper trailers?",
        answer:
          "Gameplay and trailers are on the SouMosterGames YouTube channel at youtube.com/@SouMosterGames.",
      },
    ],
    featured: true,
    status: "live",
    releaseDate: "2026-07-08",
    downloads: "10+",
  },
  {
    slug: "bank-hopper",
    name: "Bank Hopper",
    tagline: "Hop. Grab Cash. Escape the Bank.",
    description:
      "One-thumb portrait arcade bank heist! Hop lane-by-lane out of the bank with your cash. Balance greed versus safety before the security meter catches you!",
    longDescription:
      "Bank Hopper is a one-thumb portrait arcade heist from SouMoster, in Google Play Closed Testing at v0.8.0 and preparing to apply for production access. Hop lane-by-lane out of the bank with your cash: tap forward, swipe left or right, and hold to unleash character abilities. Tap to bank at lit deposit booths, or run past and push deeper for greed multipliers while the Security meter escalates the chase. Play Full Heist across eight floors, chase global Play Games leaderboards, and unlock bag styles, getaways, and characters like Rookie, Grabber, Insurance, and Black Limo. Built natively in Kotlin at 60 FPS, with ethical ads, offline saves, and zero pay-to-win.",
    genre: "Arcade",
    category: "Arcade",
    version: "0.8.0",
    status: "closed-testing",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.bankhopper",
    youtubeUrl: "https://www.youtube.com/@SouMosterGames",
    googleGroupUrl: BANK_HOPPER_GOOGLE_GROUP_URL,
    icon: "/images/bank-hopper-icon.png",
    banner: "/images/bank-hopper-banner.png",
    screenshots: [
      "/images/screenshots/bank-hopper-1.png",
      "/images/screenshots/bank-hopper-2.png",
      "/images/screenshots/bank-hopper-3.png",
      "/images/screenshots/bank-hopper-4.png",
      "/images/screenshots/bank-hopper-5.png",
      "/images/screenshots/bank-hopper-6.png",
    ],
    gameplayVideo: "/videos/bank-hopper-promo.mp4",
    features: [
      "Now in Google Play Closed Testing — join https://groups.google.com/g/bank-hopper-game then install from Play",
      "One-thumb portrait controls — tap forward, swipe lateral, hold for ability",
      "Tap to bank: booths light up as you near them; lock cash in or run past",
      "Risk vs. reward Greed and Security meter that escalates the pursuit",
      "Full Heist mode: all eight floors in one run as security rises",
      "Heist Rush combos, power-ups, and environments including Security Floor, Subway, and Escape Zone",
      "Characters: Rookie, Grabber, Insurance, and Black Limo",
      "Bag cosmetics, Pickup and Crew Van getaways, and themed menus",
      "Global Google Play Games leaderboards: Best Score, Full Heist, Fastest Escape, Lifetime Loot",
      "100% offline saves — pull off heists anywhere without internet",
      "Native Kotlin 60 FPS SurfaceView loop",
    ],
    howToPlay: [
      "Tap to hop forward lane-by-lane out of the bank",
      "Swipe left or right to switch lanes, dodge lasers, and avoid guards",
      "Hold to activate your character's special stealth ability",
      "Pick up Cash Bags to build your score and trigger Greed Multipliers",
      "When a booth lights up, tap to bank your cash — or run past and push your luck",
      "Watch the Security meter — the greedier you get, the faster pursuit closes in",
      "Reach the Extraction Zone to secure your loot, or chain Full Heist floors for a bigger haul",
    ],
    versionHistory: [
      {
        version: "0.8.0",
        date: "2026-09-20",
        changes: [
          "Closed Testing build on Google Play",
          "Shorter start: two coached runs instead of four; the rest is taught in play",
          "Global leaderboards sign-in on Play Store installs",
          "Relic cards now show CONQUERED and count each conquest",
          "Fixes for first-result copy, relic forged spam, tutorial forks, and electric fence art",
        ],
      },
      {
        version: "0.7.9",
        date: "2026-09-19",
        changes: [
          "Tap to bank: booths light up as you near them",
          "Six bag styles, Pickup and Crew Van getaways, new hazard art",
          "Equipped themes colour the menus; shop items drawn as in play",
          "Global Play Games leaderboards on Boards",
          "Startup crash and Large UI HEIST-button fixes",
        ],
      },
      {
        version: "0.7.4",
        date: "2026-09-18",
        changes: [
          "Full Heist mode: all eight floors in one run",
          "Heist Rush combos, beat pulse, and aerial crosshair telegraphs",
          "Rookie's Cool Head passive; Shop Remove Ads and HCoin packs",
          "Native Kotlin 60 FPS SurfaceView loop with Security / Greed escalation",
        ],
      },
    ],
    knownIssues: [
      "Invite-only Google Play Closed Testing — join https://groups.google.com/g/bank-hopper-game then opt in on Play to install",
      "Production access application to Google Play is in progress; the public launch date depends on Google's review",
    ],
    faq: [
      {
        question: "How do I play Bank Hopper right now?",
        answer:
          "Bank Hopper is in Google Play Closed Testing at v0.8.0. Join the tester Google Group at https://groups.google.com/g/bank-hopper-game, opt in on Play, then install from the Play Store listing.",
      },
      {
        question: "When will Bank Hopper be released publicly?",
        answer:
          "Closed Testing is complete and we are applying to Google Play for production access. A worldwide public launch follows once Google approves the application.",
      },
      {
        question: "What platforms will Bank Hopper support?",
        answer:
          "Bank Hopper is developed natively in Kotlin for Android 8.0+ devices, optimized for 60 FPS on phones and tablets.",
      },
      {
        question: "Is Bank Hopper free to play?",
        answer:
          "Yes. Bank Hopper is free to play with earnable rewards, ethical ads, and cosmetic-only in-app purchases.",
      },
      {
        question: "Will it work offline?",
        answer:
          "Yes. Bank Hopper features offline-first local saves so you can pull off bank heists without an internet connection. Leaderboards and purchases need Play when you use them.",
      },
      {
        question: "Where can I watch Bank Hopper trailers?",
        answer:
          "Gameplay and trailers are on the SouMosterGames YouTube channel at youtube.com/@SouMosterGames.",
      },
    ],
    featured: false,
    releaseDate: "2026-09-20",
  },
  {
    slug: "time-hopper",
    name: "Time Hopper",
    tagline: "Hop Through Time. Break History. Fix the Timeline.",
    description:
      "A portrait three-lane runner across seven eras of history. Dodge what's ahead, or Time Hop into an alternate timeline where the hazards are different.",
    longDescription:
      "Time Hopper is a native Kotlin arcade runner from SouMoster, now in development. A traveller with a damaged time device sprints through seven eras: Prehistoric, Ancient Kingdom, Medieval, Industrial Age, Modern City, Cyber Future and the Chrono Void. The signature move is the Time Hop: spend energy to slip into an alternate timeline for three seconds, where the obstacle in front of you may vanish or something worse may wait. Purple echoes show what's on the other side. Every hop raises Paradox, and the higher it climbs, the more unstable the run becomes. Outrun a T-Rex, a collapsing temple, siege fire and a runaway train, collect relics for your museum, and at every Time Gate choose to bank your haul or push deeper into time. Fully offline.",
    genre: "Arcade",
    category: "Arcade",
    version: "1.1.3",
    status: "in-development",
    playStoreUrl: "",
    youtubeUrl: "https://www.youtube.com/@SouMosterGames",
    icon: "/images/time-hopper/icon.png",
    banner: "/images/time-hopper/banner.webp",
    screenshotsTitle: "The Seven Eras",
    screenshots: [
      "/images/time-hopper/era-prehistoric.webp",
      "/images/time-hopper/era-ancient-kingdom.webp",
      "/images/time-hopper/era-medieval.webp",
      "/images/time-hopper/era-industrial-age.webp",
      "/images/time-hopper/era-modern-city.webp",
      "/images/time-hopper/era-cyber-future.webp",
      "/images/time-hopper/era-chrono-void.webp",
    ],
    features: [
      "Time Hop: three seconds in an alternate timeline, with purple echoes showing what's waiting there",
      "Seven eras, each with its own pursuit: T-Rex, temple collapse, siege fire, runaway train, highway collapse, hunter drones and a time storm",
      "Paradox meter: echoes drift above 60%, hazards destabilise above 80%, and a Chrono Guardian hunts you at 100%",
      "Bank or continue: extract at every Time Gate to keep your haul, or risk the next era for more",
      "Timeline junctions: choose the Stable, Relic or Paradox portal",
      "Seven characters with unique abilities: Max Tempo, Dr. Nova, Rex, Lady Epoch, Glitch, Captain Clock and Zero",
      "Six gadgets, including Chrono Shield, Artifact Scanner, Phase Boots and Emergency Portal",
      "Six modes: Classic, Daily Timeline, Endless, Paradox, Relic Hunt and Hardcore",
      "Relic museum, daily and weekly missions, Chrono Rank and a cosmetic shop",
      "Original soundtrack, fully offline, left-handed and high-contrast options",
    ],
    howToPlay: [
      "Swipe left or right to change lanes",
      "Tap or swipe up to jump low rocks and gaps; swipe down to slide under beams",
      "Hold the screen to Temporal Brake and slow the world, at an energy cost",
      "Press Time Hop to spend 35 energy and spend three seconds in the alternate timeline",
      "Read the purple echoes first: the other timeline has hazards of its own",
      "Collect Chrono Shards to refill energy, and grab relics for your museum",
      "Use Time Hop to escape each era's pursuit; its debris only exists in your original timeline",
      "At each Time Gate, extract to bank everything, or continue to the next era for bigger rewards",
    ],
    versionHistory: [
      {
        version: "1.1.3",
        changes: [
          "Animated pursuers chase you down the middle lane",
          "Rift gaps illustrated as broken-stone chasms",
        ],
      },
      {
        version: "1.1.2",
        changes: ["Unique jump and slide animations for all seven characters"],
      },
      {
        version: "1.1.1",
        changes: [
          "Eight-frame run animations for every character",
          "Illustrated pursuit threats and a clockwork Time Hop button",
          "Original soundtrack: Museum Afterglow and Through the Rift",
        ],
      },
      {
        version: "1.1.0",
        changes: [
          "Reworked pursuits, combo and Paradox",
          "In-world junction portals, input buffering and slide fast-fall",
          "Rotating daily and weekly missions",
        ],
      },
      {
        version: "1.0.0",
        changes: [
          "All seven eras, seven characters and six gadgets",
          "Endless, Paradox, Relic Hunt and Hardcore modes",
          "Catalog collections, Chrono Rank, weekly goals and a cosmetic shop",
        ],
      },
      {
        version: "0.2.0",
        changes: ["Daily Timeline: one shared seeded run per day, daily missions and achievements"],
      },
      {
        version: "0.1.0",
        changes: ["First playable build: three eras, Time Hop, Paradox, pursuits and Time Gates"],
      },
    ],
    knownIssues: [
      "Development build: not yet on Google Play. Play Games leaderboards, cloud save, purchases and ads are not in this build",
    ],
    faq: [
      {
        question: "When will Time Hopper be available?",
        answer:
          "Time Hopper is a playable development build (v1.1.3) and is not on Google Play yet. Sign up on our Beta page to hear first when testing opens.",
      },
      {
        question: "What is a Time Hop?",
        answer:
          "Time Hop spends 35 energy to move you into an alternate version of the timeline for three seconds. Hazards there are different, and purple echoes show them before you hop, so you choose whether dodging or hopping is safer.",
      },
      {
        question: "What is Paradox?",
        answer:
          "Bending time raises Paradox. Above 60% echoes start to drift, above 80% some hazards exist in both timelines, and at 100% a Chrono Guardian gives chase. Escaping it drops Paradox back to 70%.",
      },
      {
        question: "Does it work offline?",
        answer:
          "Yes. Time Hopper is built to play fully offline, with progress saved on your device.",
      },
      {
        question: "What devices will it support?",
        answer:
          "Android 8.0 (API 26) and newer, in portrait.",
      },
    ],
    featured: false,
    releaseDate: "2026-10-02",
  },
  {
    slug: "space-hopper",
    name: "Space Hopper",
    tagline: "Take the hop into space.",
    description:
      "A hop-and-dodge adventure among the stars, in development in Unity. Sign up to hear first when testing opens.",
    longDescription:
      "Space Hopper is a new hop-and-dodge experience set in space, in development in Unity. It carries forward the philosophy that shaped Road Hopper: simple controls, addictive runs, and a polished feel. Details, screenshots, and a release window will follow as the game takes shape.",
    genre: "Arcade",
    category: "Arcade",
    version: "In development",
    status: "in-development",
    playStoreUrl: "",
    youtubeUrl: "https://www.youtube.com/@SouMosterGames",
    icon: "/images/space-hopper-icon.svg",
    banner: "/images/space-hopper-banner.svg",
    screenshots: [],
    features: [
      "Familiar hop fun — easy to start, hard to master",
      "A new setting: leave the highway and hop into space",
      "Player-first design — fair, polished, and fun to revisit",
    ],
    howToPlay: [],
    versionHistory: [],
    knownIssues: [],
    faq: [
      {
        question: "When will Space Hopper be available?",
        answer:
          "Space Hopper is in development. There is no release date yet. Sign up on our Beta page to hear first when testing opens.",
      },
    ],
    featured: false,
    releaseDate: "2026-07-08",
  },
];

export function isInviteOnly(app: App): boolean {
  return app.status === "closed-testing" || app.status === "in-development";
}

export function isInDevelopment(app: App): boolean {
  return app.status === "in-development" || app.status === "coming-soon";
}

/** True when `version` is a real build number rather than a label like "In development". */
export function hasBuildVersion(app: App): boolean {
  return /^\d/.test(app.version);
}

export function closedTestingJoinUrl(app: App): string {
  return app.googleGroupUrl ?? `/beta?game=${app.slug}`;
}

export function getAppBySlug(slug: string): App | undefined {
  return apps.find((app) => app.slug === slug);
}

export function getFeaturedApp(): App | undefined {
  return apps.find((app) => app.featured);
}

export function getRelatedApps(currentSlug: string): App[] {
  return apps.filter((app) => app.slug !== currentSlug).slice(0, 3);
}
