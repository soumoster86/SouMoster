import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
  title: "Apps",
  description: "Browse all SouMoster Android games. Download Road Hopper and more on Google Play.",
  path: "/apps",
});

export default function AppsLayout({ children }: { children: React.ReactNode }) {
  return children;
}