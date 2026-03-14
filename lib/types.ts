export const categories = [
  "AI Agent",
  "SaaS",
  "Service",
  "Developer Tools",
  "Marketplace",
  "Hosting",
  "Education"
] as const;

export type Category = (typeof categories)[number];

export type Project = {
  rank: number;
  name: string;
  slug: string;
  description: string;
  category: Category | string;
  revenue30d: number;
  mrr: number;
  totalRevenue: number;
  growth: number | null;
  verified: boolean;
  website: string;
  stars?: number;
};

export type LeaderboardData = {
  lastUpdated: string;
  totalRevenue: number;
  totalProjects: number;
  projects: Project[];
};
