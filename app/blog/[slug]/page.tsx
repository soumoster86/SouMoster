import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageTransition } from "@/components/shared/PageTransition";
import { Badge } from "@/components/ui/Badge";
import { getAllPosts, getPostBySlug, markdownToHtml } from "@/lib/blog";
import { formatDate } from "@/lib/utils";
import { generateArticleSchema, generateSEO } from "@/lib/seo";
import type { BlogPost } from "@/types";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

const categoryVariant: Record<BlogPost["category"], "primary" | "secondary" | "accent" | "default"> = {
  "Developer Diary": "primary",
  "Release Notes": "accent",
  "Patch Notes": "secondary",
  Announcement: "default",
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return generateSEO({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.date,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const contentHtml = await markdownToHtml(post.content);
  const schema = generateArticleSchema(post);

  return (
    <PageTransition>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <article className="mx-auto max-w-3xl px-4 pt-28 pb-20 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        <Badge variant={categoryVariant[post.category]} className="mb-4">
          {post.category}
        </Badge>

        <h1 className="text-3xl font-bold text-text sm:text-4xl">{post.title}</h1>

        <div className="mt-4 flex items-center gap-4 text-sm text-muted">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span>by {post.author}</span>
        </div>

        <div
          className="prose-blog mt-10"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>
    </PageTransition>
  );
}