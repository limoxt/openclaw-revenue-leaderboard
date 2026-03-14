import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function SubmitSuccessPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
      <Card className="w-full max-w-2xl overflow-hidden">
        <CardContent className="p-8 sm:p-10">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
            <CheckCircle2 className="h-6 w-6" />
          </div>
          <p className="mt-5 text-sm text-primary">已提交</p>
          <h1 className="mt-2 text-3xl font-semibold text-foreground">
            感谢提交
          </h1>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            你的项目资料已经收到，当前状态为人工审核中。我们会核对收入证明、项目信息与联系方式，再决定是否进入公开榜单。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/">返回首页</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/submit">继续提交</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
