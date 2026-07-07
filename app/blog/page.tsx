import { BlogCard } from "@/components/blog/BlogCard";
import { PageTransition } from "@/components/shared/PageTransition";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getAllPosts } from "@/lib/blog";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Blog",
  description: "Developer diaries, release notes, patch notes, and announcements from SouMoster.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <PageTransition>
      <div className="mx-auto max-w-7xl px-4 pt-28 pb-20 sm:px-6 lg:px-8">
        <SectionHeading
          title="Blog"
          subtitle="Developer diaries, release notes, and announcements"
        />

        {posts.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <p className="py-12 text-center text-muted">No blog posts yet. Check back soon!</p>
        )}
      </div>
    </PageTransition>
  );
}