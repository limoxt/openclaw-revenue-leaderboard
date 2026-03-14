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
          <CardContent className="p-6 sm:p-8">
            <SubmitForm />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
