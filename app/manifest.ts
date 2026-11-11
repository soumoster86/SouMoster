import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SouMoster — Indie Game Studio",
    short_name: "SouMoster",
    description:
      "SouMoster is an independent Android game studio. Discover Road Hopper, Bank Hopper, Time Hopper, Arena Legends, Nitro Racer, Space Hopper and Lantern Depths. Watch trailers on YouTube @SouMosterGames.",
    start_url: "/",
    display: "standalone",
    background_color: "#0F172A",
    theme_color: "#6C63FF",
    orientation: "portrait",
    categories: ["games", "entertainment"],
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/images/bank-hopper-icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
