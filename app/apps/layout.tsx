import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
  title: "Apps",
  description:
    "Browse SouMoster Android games. Download Road Hopper and Bank Hopper, join Time Hopper Closed Testing on Google Play, see Arena Legends, and follow trailers on YouTube.",
  path: "/apps",
});

export default function AppsLayout({ children }: { children: React.ReactNode }) {
  return children;
}