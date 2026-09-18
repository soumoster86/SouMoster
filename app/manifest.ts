import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SouMoster — Android Game Developer",
    short_name: "SouMoster",
    description:
      "SouMoster is an independent Android game developer. Discover Road Hopper, Bank Hopper, and upcoming arcade titles.",
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
