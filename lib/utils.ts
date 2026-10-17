import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const DATE_LOCALES: Record<string, string> = { en: "en-US", zh: "zh-CN" };

export function formatDate(date: string, locale = "en"): string {
  return new Date(date).toLocaleDateString(DATE_LOCALES[locale] ?? locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function videoMimeType(src: string): string {
  if (src.endsWith(".webm")) return "video/webm";
  if (src.endsWith(".ogg") || src.endsWith(".ogv")) return "video/ogg";
  return "video/mp4";
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/--+/g, "-")
    .trim();
}