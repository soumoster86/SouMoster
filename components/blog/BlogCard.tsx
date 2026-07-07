import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { formatDate } from "@/lib/utils";
import type { BlogPost } from "@/types";

interface BlogCardProps {
  post: BlogPost;
}

const categoryVariant: Record<BlogPost["category"], "primary" | "secondary" | "accent" | "default"> = {
  "Developer Diary": "primary",
  "Release Notes": "accent",
  "Patch Notes": "secondary",
  Announcement: "default",
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="h-full">
        <Badge variant={categoryVariant[post.category]} className="mb-3">
          {post.category}
        </Badge>
        <h3 className="mb-2 text-lg font-semibold text-text transition-colors group-hover:text-primary">
          {post.title}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-muted">{post.excerpt}</p>
        <div className="flex items-center justify-between text-xs text-muted">
          <span>{formatDate(post.date)}</span>
          <span>{post.author}</span>
        </div>
      </Card>
    </Link>
  );
}