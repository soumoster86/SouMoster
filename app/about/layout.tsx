import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
  title: "About",
  description:
    "Learn about SouMoster — independent Android games including Road Hopper (live), Bank Hopper (Google Play Closed Testing), and Space Hopper (in development). YouTube @SouMosterGames.",
  path: "/about",
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}