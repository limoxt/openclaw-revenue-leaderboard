import { ArrowUpRight, BadgeCheck, Star } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { type Project } from "@/lib/types";
import { formatCurrency, formatPercent } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden md:hidden">
      <CardContent className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-sm text-muted-foreground">
              #{project.rank}
            </div>
            <div className="mt-2 flex items-center gap-2">
              <h3 className="text-lg font-semibold">{project.name}</h3>
              {project.stars ? (
                <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                  <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                  {project.stars.toLocaleString()}
                </span>
              ) : null}
              {project.verified ? (
                <Badge variant="success" className="gap-1">
                  <BadgeCheck className="h-3.5 w-3.5" />
                  已验证
                </Badge>
              ) : null}
            </div>
          </div>
          <a
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-secondary/70 text-muted-foreground transition-colors hover:text-foreground"
            href={project.website}
            rel="noreferrer"
            target="_blank"
          >
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <p className="text-sm leading-6 text-muted-foreground">{project.description}</p>

        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="rounded-md border border-border bg-background p-3">
            <div className="text-xs text-muted-foreground">
              类别
            </div>
            <div className="mt-2 font-medium">{project.category}</div>
          </div>
          <div className="rounded-md border border-border bg-background p-3">
            <div className="text-xs text-muted-foreground">
              30天收入
            </div>
            <div className="mt-2 font-medium">{formatCurrency(project.revenue30d)}</div>
          </div>
          <div className="rounded-md border border-border bg-background p-3">
            <div className="text-xs text-muted-foreground">
              MRR
            </div>
            <div className="mt-2 font-medium">{formatCurrency(project.mrr)}</div>
          </div>
          <div className="rounded-md border border-border bg-background p-3">
            <div className="text-xs text-muted-foreground">
              增长率
            </div>
            <div className="mt-2 font-medium">{formatPercent(project.growth)}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
