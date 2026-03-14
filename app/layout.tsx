import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";

import "./globals.css";

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display"
});

const monoFont = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono"
});

export const metadata: Metadata = {
  title: "OpenClaw 收入排行榜",
  description: "基于 OpenClaw 构建项目的收入排行榜与提交流程。"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="zh-CN">
      <body
        className={`${displayFont.variable} ${monoFont.variable} font-[family-name:var(--font-display)]`}
      >
        {children}
      </body>
    </html>
  );
}
