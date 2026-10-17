import type { App } from "@/types";
import {
  TIME_HOPPER_GOOGLE_GROUP_URL,
  TIME_HOPPER_PLAY_STORE_URL,
} from "@/lib/constants";

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
      "One-thumb portrait arcade bank heist, now live on Google Play! Hop lane-by-lane out of the bank with your cash and balance greed against the security meter.",
    longDescription:
      "Bank Hopper is a one-thumb portrait arcade heist from SouMoster, now live on Google Play. Hop lane-by-lane out of the bank with your cash: tap forward, swipe left or right, and hold to unleash character abilities. Dodge laser grids and patrolling security drones, tap to bank at lit deposit booths, or run past and push deeper for greed multipliers while the Security meter escalates the chase. Play Endless, handcrafted heists and Full Heist runs across eight floors, unlock characters, gadgets, perks and getaway rides, and climb the leaderboards. No account needed, and it plays offline.",
    genre: "Arcade",
    category: "Arcade",
    version: "1.0.0",
    status: "live",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.bankhopper",
    youtubeUrl: "https://www.youtube.com/@SouMosterGames",
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
      "Live on Google Play: free to download, rated 7+",
      "One-thumb portrait controls: tap forward, swipe lateral, hold for ability",
      "Tap to bank: booths light up as you near them; lock cash in or run past",
      "Risk vs. reward Greed and Security meter that escalates the pursuit",
      "Full Heist mode: all eight floors in one run as security rises",
      "Endless mode, handcrafted heists and special challenge runs",
      "Heist Rush combos, laser grids, security drones and environments including Security Floor, Subway and Escape Zone",
      "Characters: Rookie, Grabber, Insurance and Black Limo",
      "Gadgets, perks, bag cosmetics and getaway rides",
      "Vault of Honors: relics, mastery crests, badges and reputation titles",
      "No account required; play offline anywhere",
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
        version: "1.0.0",
        date: "2026-10-06",
        changes: [
          "Public release: Bank Hopper is live on Google Play",
          "Endless, handcrafted heists and challenge runs",
          "Thank you to every Closed Testing tester who helped polish it",
        ],
      },
      {
        version: "0.8.7",
        date: "2026-10-02",
        changes: [
          "Painted icons across the Vault of Honors: relics, crests, badges and street rep",
          "Reputation titles get their own marks, from a hood up to a crown",
          "A painted icon for each Daily mutator",
        ],
      },
      {
        version: "0.8.0",
        date: "2026-09-20",
        changes: [
          "Closed Testing build on Google Play",
          "Shorter start: two coached runs instead of four; the rest is taught in play",
          "Global leaderboards sign-in on Play Store installs",
        ],
      },
      {
        version: "0.7.9",
        date: "2026-09-19",
        changes: [
          "Tap to bank: booths light up as you near them",
          "Six bag styles, Pickup and Crew Van getaways, new hazard art",
          "Global Play Games leaderboards on Boards",
        ],
      },
    ],
    knownIssues: [],
    faq: [
      {
        question: "Is Bank Hopper free to play?",
        answer:
          "Yes. Bank Hopper is free to download on Google Play. It contains ads and optional in-app purchases, and everything that affects gameplay can be earned by playing.",
      },
      {
        question: "Does it work offline?",
        answer:
          "Yes. No account is needed and heists save on your device. Leaderboards and purchases need an internet connection when you use them.",
      },
      {
        question: "What age rating is it?",
        answer: "Rated 7+ on Google Play.",
      },
      {
        question: "What devices does it support?",
        answer:
          "Bank Hopper is built natively in Kotlin for Android 8.0 and newer, optimized for 60 FPS on phones and tablets.",
      },
      {
        question: "How do I report a bug?",
        answer:
          "Use our Support page or email soumoster@gmail.com with details about the issue.",
      },
      {
        question: "Where can I watch Bank Hopper trailers?",
        answer:
          "Gameplay and trailers are on the SouMosterGames YouTube channel at youtube.com/@SouMosterGames.",
      },
    ],
    featured: false,
    releaseDate: "2026-10-06",
    downloads: "10+",
  },
  {
    slug: "time-hopper",
    name: "Time Hopper",
    tagline: "Hop Through Time. Break History. Fix the Timeline.",
    description:
      "A time-travel runner across seven eras, each with two worlds. Dodge what's ahead, or Time Hop into the alternate timeline. Now in Google Play Closed Testing.",
    longDescription:
      "Time Hopper is a native Kotlin time-travel runner from SouMoster, now in Google Play Closed Testing. Sprint through seven eras: Prehistoric, Ancient Kingdom, Medieval, Industrial Age, Modern City, Cyber Future and the Chrono Void. Every era has two worlds. When the road closes in, spend energy to Time Hop into the alternate timeline, where purple echoes show what's waiting, then prepare for your return. Pick Stable, Relic or Paradox portals, outrun each era's pursuit, and at every Chrono Gate extract with your discoveries or go deeper. Play the 21-level Chronicle story campaign, Classic and Endless runs, Paradox, Relic Hunt and Hardcore twists, Boss Gauntlet, Timeline Puzzles, weekly events and a Daily Timeline with a ghost to race. Unlock travelers with active abilities and recover 65 illustrated artifacts for your museum.",
    genre: "Arcade",
    category: "Arcade",
    version: "1.13.2",
    status: "closed-testing",
    playStoreUrl: TIME_HOPPER_PLAY_STORE_URL,
    googleGroupUrl: TIME_HOPPER_GOOGLE_GROUP_URL,
    youtubeUrl: "https://www.youtube.com/@SouMosterGames",
    icon: "/images/time-hopper/icon.png",
    banner: "/images/time-hopper/banner.webp",
    screenshots: [
      "/images/time-hopper/screen-echo-world.webp",
      "/images/time-hopper/screen-chrono-gate.webp",
      "/images/time-hopper/screen-time-hop.webp",
      "/images/time-hopper/screen-junction.webp",
      "/images/time-hopper/screen-perfect-jump.webp",
      "/images/time-hopper/screen-home.webp",
      "/images/time-hopper/screen-game-modes.webp",
      "/images/time-hopper/screen-characters.webp",
      "/images/time-hopper/screen-loadout.webp",
    ],
    features: [
      "Now in Google Play Closed Testing: join the tester Google Group, then opt in on Play",
      "Time Hop: every era has two worlds; slip into the alternate timeline when the road closes in",
      "Seven eras, each with its own scenery, hazards and pursuit",
      "Chronicle: a 21-level story campaign with three star goals per level",
      "Score runs, twists and challenges: Classic, Endless, Paradox, Relic Hunt, Hardcore, Boss Gauntlet, Timeline Puzzles and weekly events",
      "Daily Timeline with a daily twist, a streak and a ghost of your best run to race",
      "Stable, Relic and Paradox portals, and gate anomalies when you go deeper",
      "Seven travelers, each with an active ability, plus gadgets and trait upgrades",
      "Museum of 65 illustrated artifacts across nine rooms",
      "Google Play Games sign-in, leaderboards and cloud save backup",
      "Swipe and tap or on-screen buttons; handedness, contrast and effects settings",
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
        version: "1.13.2",
        changes: ["Closed Testing build on Google Play"],
      },
      {
        version: "1.13.0",
        date: "2026-10-09",
        changes: [
          "Google Play Games sign-in and leaderboards",
          "Manual cloud save backup and restore",
          "Optional Remove Ads and shard packs; shard cosmetics in the shop (1.13.1)",
        ],
      },
      {
        version: "1.12.0",
        date: "2026-10-07",
        changes: [
          "Ghost time trial, Boss Gauntlet, Timeline Puzzles and weekly events",
          "Daily twist and streak, the Chrono Pass and the time machine",
          "First internal test on Google Play",
        ],
      },
      {
        version: "1.11.0",
        changes: ["Every runner gets an active ability on a charge meter"],
      },
      {
        version: "1.10.0",
        changes: ["Chronicle: a 21-level story campaign with star goals"],
      },
      {
        version: "1.9.0",
        changes: ["Gate anomalies: stacking rule changes when you go deeper"],
      },
      {
        version: "1.8.0",
        changes: [
          "Nine museum rooms with lore for all 65 artifacts",
          "Illustrated artifacts on shelves and as gameplay pickups (1.8.1–1.8.2)",
        ],
      },
      {
        version: "1.2–1.7",
        changes: [
          "Long-jump ramps, alternate worlds for every era, trait upgrades",
          "Staged pursuits, era mastery goals, illustrated obstacles and moving hazards",
        ],
      },
      {
        version: "1.0–1.1",
        changes: [
          "All seven eras, seven characters, six gadgets and the core modes",
          "Animated characters and pursuers, and an original soundtrack",
        ],
      },
    ],
    knownIssues: [
      "Invite-only Google Play Closed Testing: join https://groups.google.com/g/timehoppergame, then opt in on Play to install",
    ],
    faq: [
      {
        question: "How do I play Time Hopper right now?",
        answer:
          "Time Hopper is in Google Play Closed Testing. Join the tester Google Group at https://groups.google.com/g/timehoppergame (timehoppergame@googlegroups.com) with your Google Play account, opt in on Play, then install from the Play Store listing.",
      },
      {
        question: "What is a Time Hop?",
        answer:
          "Every era has two worlds. Time Hop spends energy to move you into the alternate timeline for a few seconds. Hazards there are different, and purple echoes show them before you hop, so you choose whether dodging or hopping is safer.",
      },
      {
        question: "When will Time Hopper launch publicly?",
        answer:
          "A worldwide launch follows Closed Testing and Google Play's production review. Testers help us tune difficulty, ads and performance before that.",
      },
      {
        question: "Is Time Hopper free?",
        answer:
          "Yes. It's free to play with ads. Optional purchases (Remove Ads and shard packs) never sell exclusive characters or gameplay powers, and shards can be earned by playing.",
      },
      {
        question: "Does it work offline?",
        answer:
          "Core gameplay and local progression work offline. Ads, leaderboards and cloud save need an internet connection.",
      },
      {
        question: "What devices does it support?",
        answer: "Android 8.0 (API 26) and newer, in portrait.",
      },
    ],
    featured: false,
    releaseDate: "2026-10-16",
  },
  {
    slug: "space-hopper",
    name: "Space Hopper",
    tagline: "The Warp Gates are damaged. Hop across the galaxy to restore them.",
    description:
      "A tap-to-hop arcade adventure across eight planets. Collect Star Cores, dodge drones and collapsing tiles, and restore the galaxy's Warp Gates.",
    longDescription:
      "Space Hopper is a casual arcade hopper from SouMoster, built in Unity 6 and now in development. The galaxy's Warp Gates are damaged: hop lane by lane across eight planets, from Terra Prime and the Moon to Volcanis, Gaia, the Asteroid Belt, Cyber Nexus, Nebula X and the Black Hole, collecting Star Cores to bring them back online. Each world adds its own twist, from lava vents and spring pads to drone traffic, conveyors, fog and gravity pulls. Play Endless Orbit, Adventure Journey with bosses, Speed Run or Galaxy Explorer, with seven heroes and five pets that each bring a real ability. Progress is saved on your device.",
    genre: "Arcade",
    category: "Arcade",
    version: "1.0.0",
    status: "in-development",
    playStoreUrl: "",
    youtubeUrl: "https://www.youtube.com/@SouMosterGames",
    icon: "/images/space-hopper/icon.png",
    banner: "/images/space-hopper/banner.webp",
    screenshots: [
      "/images/space-hopper/screen-combo.webp",
      "/images/space-hopper/screen-collapse.webp",
      "/images/space-hopper/screen-main-menu.webp",
      "/images/space-hopper/screen-worlds.webp",
      "/images/space-hopper/screen-tap-to-hop.webp",
      "/images/space-hopper/screen-results.webp",
    ],
    features: [
      "Four modes: Endless Orbit, Adventure Journey, Speed Run and Galaxy Explorer",
      "Eight planets, each with its own hazards: long void hops, lava vents, spring pads, drone traffic, conveyors, fog and a black hole's pull",
      "Adventure Journey: restore Warp Gates and face mini-bosses and world bosses",
      "Seven heroes with one ability each: Comet, Talon, Ember, Dash, Rivet, Zix and Frost",
      "Five companion pets: Bolt, Blip, Kit, Goo and Nebula",
      "Collect Star Cores and Star Shards; earn Velocity Tokens in Speed Run",
      "Combos, near-miss bonuses and a collapse that chases you from behind",
      "Museum of treasures and relics, quests, ranks, upgrades and suit skins",
      "Progress saved on your device; no account needed",
    ],
    howToPlay: [
      "Tap to hop forward",
      "Swipe left or right to change lane",
      "Keep moving: the track collapses behind you",
      "Collect Star Cores and shards, and chain hops for combos",
      "Dodge drones and avoid open void",
      "Clear a planet in Adventure Journey to unlock the next one",
    ],
    versionHistory: [
      {
        version: "1.0.0",
        date: "2026-09-27",
        changes: [
          "Development build with all four modes and eight planets",
          "Seven heroes and five pets",
          "Being prepared for Google Play Closed Testing",
        ],
      },
    ],
    knownIssues: [
      "Development build: not yet on Google Play",
    ],
    faq: [
      {
        question: "When will Space Hopper be available?",
        answer:
          "Space Hopper is being prepared for Google Play Closed Testing. There is no public release date yet. Sign up on our Beta page to be invited when testing opens.",
      },
      {
        question: "How is it different from Road Hopper?",
        answer:
          "Space Hopper keeps the simple tap-to-hop controls but moves to space: eight planets with their own hazards, Warp Gates to restore, bosses, and heroes and pets with unique abilities.",
      },
      {
        question: "Will it be free?",
        answer:
          "Yes. Space Hopper will be free to play. Purchases, if added, are cosmetic or convenience only, never extra power.",
      },
      {
        question: "What devices will it support?",
        answer: "Android 7.0 (API 24) and newer, in portrait.",
      },
    ],
    featured: false,
    releaseDate: "2026-07-08",
  },
  {
    slug: "arena-legends",
    name: "Arena Legends",
    tagline: "Gladiator Wars. Fight, and earn your freedom.",
    description:
      "SouMoster's first action game: a gladiator brawler with combos, parries and boss fights across a five-chapter campaign. Now in development.",
    longDescription:
      "Arena Legends: Gladiator Wars is SouMoster's first action game, built in Kotlin with libGDX and now in development. You wake beneath the arena, and the pitmaster offers one bargain: fight, and earn your freedom. Battle through a five-chapter campaign, from the Blood Pits and the Coliseum to the Wild Trials, the Ashen Arena and the Hall of Champions, against raiders, lancers, brutes, shield guardians, beasts and five bosses, ending with the three-stance Imperial Champion. Chain directional combos, charge heavy attacks, block, parry and counter, dodge, and break shields and armor. Choose Sword & Shield, Spear, Dual Blades or Great Axe, each with its own moves and special skill, and upgrade your gear in the Armory. Survival, Training and a timed Boss Rush round it out. Plays in landscape, fully offline.",
    genre: "Action",
    category: "Action",
    version: "0.1.0",
    status: "in-development",
    playStoreUrl: "",
    youtubeUrl: "https://www.youtube.com/@SouMosterGames",
    icon: "/images/arena-legends/icon.svg",
    banner: "/images/arena-legends/banner.webp",
    screenshotOrientation: "landscape",
    screenshots: [
      "/images/arena-legends/screen-boss-brutus.webp",
      "/images/arena-legends/screen-combo.webp",
      "/images/arena-legends/screen-inferno-champion.webp",
      "/images/arena-legends/screen-imperial-champion.webp",
      "/images/arena-legends/screen-beast-master.webp",
      "/images/arena-legends/screen-shield-bash.webp",
      "/images/arena-legends/screen-weapons.webp",
      "/images/arena-legends/screen-campaign.webp",
      "/images/arena-legends/screen-modes.webp",
      "/images/arena-legends/screen-chapter-intro.webp",
      "/images/arena-legends/screen-title.webp",
    ],
    features: [
      "SouMoster's first action game: real-time gladiator combat in landscape",
      "Five-chapter campaign: the Blood Pits, the Coliseum, the Wild Trials, the Ashen Arena and the Hall of Champions",
      "Five bosses: Brutus the Iron Wall, Vex, the Beast Master, the Inferno Champion and the three-stance Imperial Champion",
      "Directional combos, charged heavy attacks, block, parry and counter, dodge and finishers, all on a shared stamina bar",
      "Four weapon classes with their own combos and skills: Sword & Shield (Shield Bash), Spear (Piercing Thrust), Dual Blades (Cross Cut) and Great Axe (Whirlwind)",
      "Raiders, lancers, brutes, shield guardians, berserkers, net fighters and pouncing lions",
      "Break enemy shields and armor; avoid spinning blades, snares and fire vents",
      "Survival waves, hands-on Training lessons and a timed Boss Rush",
      "Armory upgrades, talents, gold, XP and reputation unlocks",
      "Painted arenas, animated fighters, hit-stop, impact sound and adjustable screen shake",
      "Offline play; options for automatic facing, large text and controls, and reduced motion",
    ],
    howToPlay: [
      "Move with the floating joystick on the left",
      "Tap Strike to chain a three-hit combo; hold Strike to charge a heavy attack",
      "Hold Block to guard your front, or block just before impact to parry and open a counter",
      "Tap Dodge to roll out of marked attack zones",
      "Use your weapon's skill, like Shield Bash, to stagger enemies",
      "Watch your stamina: attacks, guard and dodge all share it",
      "Break shields and armor with heavy attacks, then punish the opening",
      "Clear every trial to face the chapter's boss and earn your freedom",
    ],
    versionHistory: [
      {
        version: "0.1.0",
        date: "2026-10-15",
        changes: [
          "Five-chapter campaign playable through the Imperial Champion",
          "Wild Trials, Ashen Arena and Hall of Champions with beasts, snares and fire vents",
          "Boss Rush, Survival and Training modes; four weapon classes",
        ],
      },
    ],
    knownIssues: ["Development build: not yet on Google Play"],
    faq: [
      {
        question: "When will Arena Legends be available?",
        answer:
          "Arena Legends is in development and has no release date yet. Sign up on our Beta page to hear first when testing opens.",
      },
      {
        question: "Is it different from the Hopper games?",
        answer:
          "Yes. Arena Legends is SouMoster's first action game: real-time melee combat with combos, parries, stamina and boss fights, played in landscape with a joystick and action buttons.",
      },
      {
        question: "Will it work offline?",
        answer: "Yes. Arena Legends is built for offline play, with progress saved on your device.",
      },
      {
        question: "What devices will it support?",
        answer: "Android 6.0 (API 23) and newer, in landscape.",
      },
    ],
    featured: false,
    releaseDate: "2026-10-16",
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
