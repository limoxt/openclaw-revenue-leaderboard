import Link from "next/link";

import { categories } from "@/lib/types";
import { cn } from "@/lib/utils";

type CategoryFilterProps = {
  activeCategory?: string;
  counts?: Record<string, number>;
};

export function CategoryFilter({ activeCategory, counts = {} }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <Link
        className={cn(
          "inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm transition-colors",
          !activeCategory
            ? "border-primary/50 bg-primary/15 text-primary"
            : "border-border bg-secondary/40 text-muted-foreground hover:text-foreground"
        )}
        href="/"
      >
        全部
        <span className="rounded-lg bg-background/70 px-2 py-0.5 text-xs text-muted-foreground">
          {Object.values(counts).reduce((total, count) => total + count, 0)}
        </span>
      </Link>
      {categories.map((category) => {
        const isActive = activeCategory === category;

        return (
          <Link
            key={category}
            className={cn(
              "inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm transition-colors",
              isActive
                ? "border-primary/50 bg-primary/15 text-primary"
                : "border-border bg-secondary/40 text-muted-foreground hover:text-foreground"
            )}
            href={`/?category=${encodeURIComponent(category)}`}
          >
            {category}
            <span className="rounded-lg bg-background/70 px-2 py-0.5 text-xs text-muted-foreground">
              {counts[category] ?? 0}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
