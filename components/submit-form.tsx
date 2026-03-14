"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { UploadCloud } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { categories } from "@/lib/types";

export function SubmitForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 600));
    router.push("/submit/success");
  };

  return (
    <form className="grid gap-6" onSubmit={handleSubmit}>
      <div className="grid gap-2">
        <Label htmlFor="name">项目名称</Label>
        <Input id="name" name="name" placeholder="例如 OpenClaw Studio" required />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="website">网站 URL</Label>
        <Input
          id="website"
          name="website"
          placeholder="https://yourproject.com"
          required
          type="url"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="description">项目描述</Label>
        <Textarea
          id="description"
          name="description"
          placeholder="简述你的产品、目标用户和核心成果。"
          required
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="category">类别</Label>
        <select
          className="flex h-11 w-full rounded-2xl border border-input bg-background/80 px-4 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          defaultValue=""
          id="category"
          name="category"
          required
        >
          <option disabled value="">
            选择一个类别
          </option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="revenue">月收入美元</Label>
        <Input
          id="revenue"
          min="0"
          name="revenue"
          placeholder="12000"
          required
          type="number"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="proof">证明方式：截图上传</Label>
        <label
          className="flex cursor-pointer items-center gap-3 rounded-2xl border border-dashed border-border bg-background/50 px-4 py-4 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
          htmlFor="proof"
        >
          <UploadCloud className="h-5 w-5 text-primary" />
          <span>可选：上传 Stripe、Paddle 或后台截图</span>
        </label>
        <Input
          accept="image/*"
          className="hidden"
          id="proof"
          name="proof"
          type="file"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="email">联系邮箱</Label>
        <Input
          id="email"
          name="email"
          placeholder="founder@yourproject.com"
          required
          type="email"
        />
      </div>

      <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          提交后不会立即公开，所有数据会进入人工审核流程。
        </p>
        <Button disabled={isSubmitting} size="lg" type="submit">
          {isSubmitting ? "提交中..." : "提交项目"}
        </Button>
      </div>
    </form>
  );
}
