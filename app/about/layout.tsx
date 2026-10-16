import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
  title: "About",
  description:
    "Learn about SouMoster — independent Android games including Road Hopper and Bank Hopper (live), Time Hopper (Google Play Closed Testing), Space Hopper and Arena Legends (in development). YouTube @SouMosterGames.",
  path: "/about",
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}