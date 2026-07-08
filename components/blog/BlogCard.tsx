import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { cn, formatDate } from "@/lib/utils";
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

const categoryCover: Record<BlogPost["category"], string> = {
  "Developer Diary": "from-primary/80 via-primary/50 to-[#5249E0]/60",
  "Release Notes": "from-accent/80 via-accent/50 to-emerald-700/50",
  "Patch Notes": "from-secondary/80 via-secondary/50 to-amber-700/50",
  Announcement: "from-muted/60 via-primary/30 to-card",
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <Card className="flex h-full flex-col overflow-hidden p-0">
        <div
          className={cn(
            "relative flex h-36 items-end overflow-hidden bg-gradient-to-br p-4",
            categoryCover[post.category],
          )}
        >
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
            aria-hidden="true"
          />
          <Badge
            variant={categoryVariant[post.category]}
            className="relative border-white/20 bg-black/20 text-white backdrop-blur-sm"
          >
            {post.category}
          </Badge>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="mb-2 text-lg font-semibold text-text transition-colors group-hover:text-primary">
            {post.title}
          </h3>
          <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
          <div className="flex items-center justify-between text-xs text-muted">
            <span>{formatDate(post.date)}</span>
            <span>{post.author}</span>
          </div>
        </div>
      </Card>
    </Link>
  );
}