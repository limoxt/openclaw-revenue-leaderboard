import Link from "next/link";
import { ChevronLeft } from "lucide-react";

import { SubmitForm } from "@/components/submit-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function SubmitPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <Link
          className="inline-flex w-fit items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          href="/"
        >
          <ChevronLeft className="h-4 w-4" />
          返回排行榜
        </Link>

        <Card className="overflow-hidden">
          <CardHeader className="border-b border-border/70 bg-secondary/30">
            <CardDescription className="uppercase tracking-[0.24em] text-primary">
              Project Intake
            </CardDescription>
            <CardTitle className="text-4xl">提交你的 OpenClaw 项目</CardTitle>
            <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
              填写基础信息、收入数据和联系邮箱。截图为可选字段，提交后会进入人工审核流程。
            </p>
          </CardHeader>
          <CardContent className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.2fr_0.8fr]">
            <SubmitForm />
            <div className="space-y-4 rounded-3xl border border-border/70 bg-background/50 p-5">
              <div>
                <div className="text-xs uppercase tracking-[0.24em] text-primary">
                  Review Flow
                </div>
                <h2 className="mt-3 text-2xl font-semibold text-foreground">
                  审核标准
                </h2>
              </div>
              <div className="space-y-3 text-sm leading-6 text-muted-foreground">
                <p>1. 核对项目是否基于 OpenClaw 构建，并确认网站可访问。</p>
                <p>2. 检查收入截图与填写金额是否一致，必要时会邮件补充确认。</p>
                <p>3. 通过审核后进入榜单，未通过的数据不会公开展示。</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
