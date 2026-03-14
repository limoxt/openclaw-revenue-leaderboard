import { ArrowUpRight, BadgeCheck } from "lucide-react";

import { ProjectCard } from "@/components/project-card";
import { Badge } from "@/components/ui/badge";
import { type Project } from "@/lib/types";
import { formatCurrency, formatPercent } from "@/lib/utils";

type LeaderboardTableProps = {
  projects: Project[];
};

export function LeaderboardTable({ projects }: LeaderboardTableProps) {
  return (
    <div className="space-y-4">
      <div className="hidden overflow-hidden rounded-3xl border border-border/80 bg-card/90 shadow-glow backdrop-blur md:block">
        <table className="w-full border-collapse text-left">
          <thead className="bg-secondary/60 text-xs uppercase tracking-[0.22em] text-muted-foreground">
            <tr>
              <th className="px-6 py-4 font-medium">排名</th>
              <th className="px-6 py-4 font-medium">名称</th>
              <th className="px-6 py-4 font-medium">类别</th>
              <th className="px-6 py-4 font-medium">月收入</th>
              <th className="px-6 py-4 font-medium">MRR</th>
              <th className="px-6 py-4 font-medium">增长率</th>
              <th className="px-6 py-4 font-medium">状态</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr
                key={project.slug}
                className="border-t border-border/70 transition-colors hover:bg-secondary/30"
              >
                <td className="px-6 py-5 text-sm font-medium text-foreground/90">
                  #{project.rank}
                </td>
                <td className="px-6 py-5">
                  <div className="flex items-start gap-4">
                    <a
                      className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-background/70 text-muted-foreground transition-colors hover:text-foreground"
                      href={project.website}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                    <div>
                      <div className="text-sm font-semibold text-foreground">
                        {project.name}
                      </div>
                      <p className="mt-1 max-w-xl text-sm leading-6 text-muted-foreground">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-5 text-sm text-muted-foreground">
                  {project.category}
                </td>
                <td className="px-6 py-5 text-sm font-semibold text-foreground">
                  {formatCurrency(project.revenue30d)}
                </td>
                <td className="px-6 py-5 text-sm text-muted-foreground">
                  {formatCurrency(project.mrr)}
                </td>
                <td className="px-6 py-5 text-sm text-muted-foreground">
                  {formatPercent(project.growth)}
                </td>
                <td className="px-6 py-5">
                  {project.verified ? (
                    <Badge variant="success" className="w-fit gap-1">
                      <BadgeCheck className="h-3.5 w-3.5" />
                      已验证
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="w-fit">
                      待审核
                    </Badge>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid gap-4 md:hidden">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
