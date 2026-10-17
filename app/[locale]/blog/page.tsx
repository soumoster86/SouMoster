import { Languages } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { BlogCard } from "@/components/blog/BlogCard";
import { PageTransition } from "@/components/shared/PageTransition";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { routing } from "@/i18n/routing";
import { getAllPosts } from "@/lib/blog";
import { pageMetadata } from "@/lib/server-i18n";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  return pageMetadata(locale, "blog", "/blog");
}

export default async function BlogPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("blog");
  const posts = getAllPosts();

  return (
    <PageTransition>
      <div className="mx-auto max-w-7xl px-4 pt-28 pb-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} />

        {locale !== routing.defaultLocale && (
          <p className="-mt-6 mb-10 flex items-center justify-center gap-2 text-sm text-muted">
            <Languages className="h-4 w-4 text-secondary" aria-hidden="true" />
            {t("englishNote")}
          </p>
        )}

        {posts.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <p className="py-12 text-center text-muted">{t("noPosts")}</p>
        )}
      </div>
    </PageTransition>
  );
}
