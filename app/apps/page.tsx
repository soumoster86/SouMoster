"use client";

import { useMemo, useState } from "react";
import { AppCard } from "@/components/apps/AppCard";
import { AppFilter } from "@/components/apps/AppFilter";
import { PageTransition } from "@/components/shared/PageTransition";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { apps } from "@/data/apps";

export default function AppsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    return apps.filter((app) => {
      const matchesSearch =
        search === "" ||
        app.name.toLowerCase().includes(search.toLowerCase()) ||
        app.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === "All" || app.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <PageTransition>
      <div className="mx-auto max-w-7xl px-4 pt-28 pb-20 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Apps"
          subtitle="Explore our collection of fun and addictive Android games"
        />
        <AppFilter
          search={search}
          onSearchChange={setSearch}
          category={category}
          onCategoryChange={setCategory}
        />
        {filtered.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((app) => (
              <AppCard key={app.slug} app={app} />
            ))}
          </div>
        ) : (
          <p className="py-12 text-center text-muted">No apps found matching your criteria.</p>
        )}
      </div>
    </PageTransition>
  );
}