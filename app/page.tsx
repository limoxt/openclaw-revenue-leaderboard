import Link from "next/link";
import { ArrowRight, BarChart3, ShieldCheck } from "lucide-react";

import { CategoryFilter } from "@/components/category-filter";
import { LeaderboardTable } from "@/components/leaderboard-table";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import leaderboardData from "@/data/projects.json";
import { categories, type Project } from "@/lib/types";
import { formatCompactNumber, formatCurrency, formatDateLabel } from "@/lib/utils";

type HomeProps = {
  searchParams?: {
    category?: string;
  };
};

export default function Home({ searchParams }: HomeProps) {
  const activeCategory = searchParams?.category;
  const projects = leaderboardData.projects.filter((project) =>
    activeCategory ? project.category === activeCategory : true
  ) as Project[];

  const categoryTotals = categories.reduce<Record<string, number>>((totals, category) => {
    totals[category] = leaderboardData.projects.filter(
      (project) => project.category === category
    ).length;
    return totals;
  }, {});
  const topProject = leaderboardData.projects[0] as Project | undefined;
  const verifiedProjects = leaderboardData.projects.filter(
    (project) => project.verified
  ).length;
  const filteredRevenue = projects.reduce((total, project) => total + project.revenue30d, 0);

  return (
    <main className="min-h-screen overflow-hidden">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <section className="rounded-xl border border-border bg-card p-8 sm:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr] lg:items-end">
            <div className="max-w-3xl">
              <p className="text-sm text-muted-foreground">
                OpenClaw 收入信号板
              </p>
              <h1 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl lg:text-5xl">
                OpenClaw 收入排行榜
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
                追踪 OpenClaw 生态中已验证项目的收入表现、增长速度与类别分布，帮助创始人快速看到真正跑出收入的模式。
              </p>

              <div className="mt-5 flex flex-wrap gap-2 text-sm text-muted-foreground">
                <span className="rounded-md border border-border bg-background px-3 py-1.5">
                  {verifiedProjects} 个已验证项目
                </span>
                <span className="rounded-md border border-border bg-background px-3 py-1.5">
                  {Object.keys(categoryTotals).length} 个类别
                </span>
                <span className="rounded-md border border-border bg-background px-3 py-1.5">
                  静态数据 MVP
                </span>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <div className="rounded-lg border border-primary/30 bg-primary/5 px-5 py-4">
                  <div className="text-sm text-primary/80">
                    已验证月收入
                  </div>
                  <div className="mt-1 text-3xl font-semibold text-foreground">
                    {formatCurrency(leaderboardData.totalRevenue)}/月
                  </div>
                </div>
                <div className="rounded-lg border border-border bg-background px-5 py-4">
                  <div className="text-sm text-muted-foreground">
                    数据更新时间
                  </div>
                  <div className="mt-1 text-lg font-medium text-foreground">
                    {formatDateLabel(leaderboardData.lastUpdated)}
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link href="/submit">
                    提交你的项目
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <Link href="#leaderboard">查看排行榜</Link>
                </Button>
              </div>
            </div>

            <div className="grid gap-4">
              <Card className="border-border">
                <CardHeader className="pb-3">
                  <CardDescription className="flex items-center gap-2">
                    <BarChart3 className="h-4 w-4 text-primary" />
                    生态概览
                  </CardDescription>
                  <CardTitle className="text-4xl">{leaderboardData.totalProjects}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm leading-6 text-muted-foreground">
                    当前共收录 {leaderboardData.totalProjects} 个项目，榜单页展示的是已同步的头部样本。
                  </p>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    {categories.slice(0, 6).map((category) => (
                      <div
                        key={category}
                        className="rounded-md border border-border bg-secondary/30 px-3 py-2"
                      >
                        <div className="text-muted-foreground">{category}</div>
                        <div className="mt-1 font-medium text-foreground">
                          {categoryTotals[category]}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-start gap-4 p-5">
                  <div className="rounded-lg bg-emerald-500/10 p-2.5 text-emerald-400">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">人工审核验证</div>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      收入截图与项目背景会在上线前经过人工复核，未验证项目不会进入正式榜单。
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-5">
                  <div className="text-sm text-muted-foreground">最高收入</div>
                  <div className="mt-2 text-xl font-semibold text-foreground">
                    {topProject?.name ?? "待定"}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {topProject
                      ? `${formatCurrency(topProject.revenue30d)}（近 30 天）`
                      : "暂无数据"}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end" id="leaderboard">
          <div>
            <h2 className="text-2xl font-semibold text-foreground">
              排行榜
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
              按收入排序的 OpenClaw 项目，支持按类别筛选。
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-muted-foreground">
              <span className="rounded-md border border-border bg-background px-3 py-1.5">
                当前筛选项目 {projects.length}
              </span>
              <span className="rounded-md border border-border bg-background px-3 py-1.5">
                当前筛选收入 {formatCurrency(filteredRevenue)}
              </span>
              <span className="rounded-md border border-border bg-background px-3 py-1.5">
                平均单项{" "}
                {projects.length
                  ? formatCurrency(Math.round(filteredRevenue / projects.length))
                  : "$0"}
              </span>
            </div>
          </div>
          <CategoryFilter activeCategory={activeCategory} counts={categoryTotals} />
        </section>

        <section>
          <LeaderboardTable projects={projects} />
          {projects.length === 0 ? (
            <div className="rounded-lg border border-dashed border-border p-8 text-center text-muted-foreground">
              当前类别暂无项目。
            </div>
          ) : null}
        </section>

        <section className="rounded-xl border border-border bg-card p-8 sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold text-foreground">
                你的项目已经有收入了？
              </h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                现在就提交项目、收入区间和证明材料。通过审核后会进入公开榜单，并在后续版本中展示更多增长与历史数据。
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <div className="rounded-md border border-border bg-background px-4 py-3 text-sm text-muted-foreground">
                总 30 天收入样本约 {formatCompactNumber(leaderboardData.totalRevenue)}
              </div>
              <Button asChild size="lg">
                <Link href="/submit">
                  提交你的项目
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
