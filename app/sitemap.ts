import type { MetadataRoute } from "next";
import { apps } from "@/data/apps";
import { getAllPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const staticPages = [
    "",
    "/apps",
    "/about",
    "/support",
    "/privacy",
    "/terms",
    "/contact",
    "/blog",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const appPages = apps.map((app) => ({
    url: `${SITE_URL}/apps/${app.slug}`,
    lastModified: new Date(app.releaseDate),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const blogPages = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...appPages, ...blogPages];
}