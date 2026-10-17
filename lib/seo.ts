import type { Metadata } from "next";
import type { App } from "@/types";
import { LOCALE_TAGS, localizedPath, routing, type Locale } from "@/i18n/routing";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "./constants";

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  locale?: string;
  /** Complete page title, used as-is instead of "<title> | SouMoster". */
  fullTitle?: string;
  /** Content exists only in English: canonical points to the English URL, no hreflang alternates. */
  englishOnly?: boolean;
}

export function generateSEO({
  title,
  description = SITE_DESCRIPTION,
  path = "",
  image = "/opengraph-image",
  type = "website",
  publishedTime,
  locale = routing.defaultLocale,
  englishOnly = false,
  fullTitle,
}: SEOProps = {}): Metadata {
  const pageTitle =
    fullTitle ??
    (title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} — Android Game Developer`);
  const basePath = path || "/";
  const url = `${SITE_URL}${localizedPath(locale, basePath)}`;
  const canonical = englishOnly ? `${SITE_URL}${basePath}` : url;
  const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;
  const ogLocale = (LOCALE_TAGS[locale as Locale] ?? "en").replace("-", "_");

  const languages = englishOnly
    ? undefined
    : {
        ...Object.fromEntries(
          routing.locales.map((l) => [
            LOCALE_TAGS[l],
            `${SITE_URL}${localizedPath(l, basePath)}`,
          ]),
        ),
        "x-default": `${SITE_URL}${basePath}`,
      };

  return {
    title: pageTitle,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical,
      ...(languages && { languages }),
    },
    openGraph: {
      title: pageTitle,
      description,
      url,
      siteName: SITE_NAME,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: pageTitle }],
      locale: ogLocale,
      type,
      ...(publishedTime && { publishedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.svg`,
    description: SITE_DESCRIPTION,
    sameAs: [
      "https://play.google.com/store/apps/dev?id=9220341090582575849",
      "https://play.google.com/store/apps/details?id=com.roadohopper.game",
      "https://play.google.com/store/apps/details?id=com.bankhopper",
      "https://www.youtube.com/@SouMosterGames",
      "https://github.com/soumoster86",
    ],
  };
}

export function generateSoftwareAppSchema(app: App) {
  const isReleased = app.status === "live" || app.status === "closed-testing";
  const image = app.icon.startsWith("http") ? app.icon : `${SITE_URL}${app.icon}`;

  return {
    "@context": "https://schema.org",
    "@type": ["VideoGame", "MobileApplication"],
    name: app.name,
    description: app.longDescription,
    url: `${SITE_URL}/apps/${app.slug}`,
    image,
    genre: app.genre,
    gamePlatform: "Android",
    operatingSystem: "Android",
    applicationCategory: "GameApplication",
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    ...(isReleased && {
      softwareVersion: app.version,
      installUrl: app.playStoreUrl,
      datePublished: app.releaseDate,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability:
          app.status === "live"
            ? "https://schema.org/InStock"
            : "https://schema.org/LimitedAvailability",
      },
    }),
    ...(app.youtubeUrl && { sameAs: [app.youtubeUrl] }),
  };
}

export function generateArticleSchema(post: {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  author: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    image: `${SITE_URL}/opengraph-image`,
    author: {
      "@type": "Organization",
      name: post.author,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.svg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
  };
}
