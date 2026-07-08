export interface App {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  genre: string;
  category: string;
  version: string;
  playStoreUrl: string;
  icon: string;
  banner: string;
  screenshots: string[];
  gameplayVideo?: string;
  features: string[];
  howToPlay: string[];
  versionHistory: VersionEntry[];
  knownIssues: string[];
  faq: FAQItem[];
  featured?: boolean;
  releaseDate: string;
  downloads?: string;
  rating?: number;
}

export interface VersionEntry {
  version: string;
  date: string;
  changes: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: "Developer Diary" | "Release Notes" | "Patch Notes" | "Announcement";
  content: string;
  author: string;
}

export interface Stat {
  label: string;
  value: string;
  icon: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating?: number;
  avatar?: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}