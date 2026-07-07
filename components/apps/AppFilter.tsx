"use client";

import { Search } from "lucide-react";
import { APP_CATEGORIES } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface AppFilterProps {
  search: string;
  onSearchChange: (value: string) => void;
  category: string;
  onCategoryChange: (value: string) => void;
}

export function AppFilter({ search, onSearchChange, category, onCategoryChange }: AppFilterProps) {
  return (
    <div className="mb-8 space-y-4">
      <div className="relative">
        <Search className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-muted" />
        <input
          type="search"
          placeholder="Search apps..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full rounded-xl border border-border bg-card py-3 pr-4 pl-12 text-text placeholder:text-muted/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          aria-label="Search apps"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {APP_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => onCategoryChange(cat)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              category === cat
                ? "bg-primary text-white"
                : "bg-card text-muted hover:bg-primary/20 hover:text-primary",
            )}
            aria-pressed={category === cat}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}