import Link from "next/link";
import { ArrowRight, BarChart3, ShieldCheck, Sparkles } from "lucide-react";

import { CategoryFilter } from "@/components/category-filter";
import { LeaderboardTable } from "@/components/leaderboard-table";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import leaderboardData from "@/data/projects.json";
import { categories, type Project } from "@/lib/types";
import { formatCurrency, formatDateLabel } from "@/lib/utils";

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

  const categoryTotals = categories.map((category) => ({
    category,
    count: leaderboardData.projects.filter((project) => project.category === category).length
  }));

  return (
    <main className="min-h-screen overflow-hidden">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <section className="relative overflow-hidden rounded-[2rem] border border-border/80 bg-card/80 p-8 shadow-glow backdrop-blur sm:p-10 lg:p-14">
          <div className="absolute inset-0 -z-10 bg-grid-fade bg-[size:48px_48px] opacity-[0.14]" />
          <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr] lg:items-end">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                TrustMRR-inspired signal board
              </div>
              <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                OpenClaw 收入排行榜
              </h1>
              <p className="mt-5 max-w-2xl text-balance text-base leading-7 text-muted-foreground sm:text-lg">
                追踪 OpenClaw 生态中已验证项目的收入表现、增长速度与类别分布，帮助创始人快速看到真正跑出收入的模式。
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <div className="rounded-3xl border border-primary/20 bg-primary/10 px-5 py-4">
                  <div className="text-xs uppercase tracking-[0.22em] text-primary/80">
                    已验证月收入
                  </div>
                  <div className="mt-2 text-3xl font-semibold text-foreground sm:text-4xl">
                    {formatCurrency(leaderboardData.totalRevenue)}/月
                  </div>
                </div>
                <div className="rounded-3xl border border-border bg-background/60 px-5 py-4">
                  <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                    数据更新时间
                  </div>
                  <div className="mt-2 text-lg font-medium text-foreground">
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
              <Card className="border-primary/20 bg-background/75">
                <CardHeader className="pb-3">
                  <CardDescription className="flex items-center gap-2 uppercase tracking-[0.22em]">
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
                    {categoryTotals.slice(0, 6).map((item) => (
                      <div
                        key={item.category}
                        className="rounded-2xl border border-border/70 bg-secondary/40 px-4 py-3"
                      >
                        <div className="text-muted-foreground">{item.category}</div>
                        <div className="mt-1 font-medium text-foreground">{item.count}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-background/70">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="rounded-2xl bg-emerald-500/10 p-3 text-emerald-300">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">人工审核验证</div>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      收入截图与项目背景会在上线前经过人工复核，未验证项目不会进入正式榜单。
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end" id="leaderboard">
          <div>
            <p className="text-xs uppercase tracking-[0.26em] text-primary">Leaderboard</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
              按收入排序的 OpenClaw 项目
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
              使用静态 JSON 数据渲染，支持按类别筛选，适合作为 Vercel 上线的 MVP 榜单首页。
            </p>
          </div>
          <CategoryFilter activeCategory={activeCategory} />
        </section>

        <section>
          <LeaderboardTable projects={projects} />
          {projects.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-border p-8 text-center text-muted-foreground">
              当前类别暂无项目。
            </div>
          ) : null}
        </section>

        <section className="rounded-[2rem] border border-border/80 bg-card/80 p-8 shadow-glow backdrop-blur sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.24em] text-accent">Submit Pipeline</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                你的项目已经有收入了？
              </h2>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                现在就提交项目、收入区间和证明材料。通过审核后会进入公开榜单，并在后续版本中展示更多增长与历史数据。
              </p>
            </div>
            <Button asChild size="lg">
              <Link href="/submit">
                提交你的项目
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}
