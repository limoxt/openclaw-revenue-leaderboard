# OpenClaw Revenue Leaderboard MVP

## 项目目标
创建一个 OpenClaw 生态收入排行榜网站，展示基于 OpenClaw 构建的项目及其收入数据。

## 技术栈
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- Vercel 部署

## 页面结构

### 1. 首页 (/)
- Hero 区域：标题 "OpenClaw 收入排行榜" + 总验证收入数字 ($380,795/月)
- 排行榜表格：排名、名称、类别、月收入(MRR)、增长率、验证状态
- 类别筛选：AI Agent / SaaS / Service / Developer Tools / Marketplace / Hosting / Education
- 底部 CTA: "提交你的项目" 链接到 /submit

### 2. 提交页 (/submit)
- 表单字段：
  - 项目名称 (必填)
  - 网站 URL (必填)
  - 项目描述 (必填)
  - 类别选择 (下拉)
  - 月收入美元 (必填)
  - 证明方式：截图上传 (可选)
  - 联系邮箱 (必填)
- 提交后显示感谢页，说明人工审核中

## 设计风格
- 参考 TrustMRR 的简洁风格
- 深色主题为主
- 数据密度高，表格清晰
- 响应式设计

## 数据源
- 使用 `data/projects.json` 静态数据
- 不需要数据库，V1 使用静态 JSON

## 部署
- 推送到 GitHub
- 使用 Vercel 部署
- 先用 Vercel 默认域名

## 注意事项
- 使用 App Router (app/ 目录)
- 组件使用 shadcn/ui
- 样式使用 Tailwind CSS
- 类型安全 (TypeScript)

## 文件结构建议
```
/app
  /page.tsx (首页)
  /submit/page.tsx (提交页)
  /layout.tsx
/components
  /leaderboard-table.tsx
  /project-card.tsx
  /submit-form.tsx
  /category-filter.tsx
/data
  /projects.json
/lib
  /types.ts
  /utils.ts
```

## 立即执行
1. 初始化 Next.js 项目
2. 安装依赖 (shadcn/ui, tailwind)
3. 创建页面和组件
4. 导入数据
5. 测试构建
6. 提交到 git