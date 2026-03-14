# 任务：完成中文翻译 + 改进设计风格

## 问题
1. 前端有很多英文文本没翻译成中文
2. 设计风格太"AI感"，需要更自然、更专业

## 需要翻译的文本（示例）
在 app/page.tsx 和其他组件中：
- "TrustMRR-inspired signal board" → "TrustMRR 风格信号板"
- "Verified Launches" → "已验证项目"
- "Categories" → "类别"
- "Static JSON MVP" → "静态数据 MVP"
- "Top Revenue" → "最高收入"
- "in the last 30 days" → "近 30 天"
- "Leaderboard" → "排行榜"
- "Submit Pipeline" → "提交流程"

检查所有组件文件：
- app/page.tsx
- app/submit/page.tsx
- components/leaderboard-table.tsx
- components/category-filter.tsx
- components/project-card.tsx
- components/submit-form.tsx

## 设计风格改进
当前问题：
- 太多 uppercase tracking-[0.2Xem] 样式（典型AI生成风格）
- 颜色搭配太"科技感"（过多 primary/accent 渐变）
- 间距和圆角过于统一和机械化

改进方向：
- 减少 uppercase 样式，正常大小写更自然
- 简化颜色，使用更克制的配色
- 让布局更透气，不要所有元素都用 rounded-3xl
- 标题和正文要有明显区分，不要都是 tracking-tight

参考 TrustMRR 的风格：
- 简洁、数据密度高
- 表格为主，不要太多装饰性卡片
- 文字颜色对比度高，易读
- 不要太多 emoji 和 icon 装饰

## 执行要求
1. 遍历所有前端文件，翻译所有英文到中文
2. 调整设计风格，减少"AI感"
3. 保持功能不变
4. 完成后运行 npm run build 确保没有错误