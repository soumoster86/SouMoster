import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
  title: "Support",
  description: "Get help with SouMoster games. Report bugs, request features, or browse our FAQ.",
  path: "/support",
});

export default function SupportLayout({ children }: { children: React.ReactNode }) {
  return children;
}