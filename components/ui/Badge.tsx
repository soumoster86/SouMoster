import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent" | "default";
  className?: string;
}

const variants = {
  primary: "bg-primary/20 text-primary border-primary/30",
  secondary: "bg-secondary/20 text-secondary border-secondary/40",
  accent: "bg-accent/20 text-accent border-accent/30",
  default: "bg-card text-muted border-border",
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}