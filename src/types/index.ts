import * as React from "react";
import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";

export type Rarity = "Common" | "Rare" | "Epic" | "Legendary";

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon | IconType | React.ElementType;
  rarity: Rarity;
  unlocked: boolean;
}

export interface LeaderboardEntry {
  rank: number;
  name: string;
  xp: number;
  trend: "up" | "down" | "flat";
  isCurrentUser?: boolean;
}

export interface Challenge {
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  estTime: string;
  skills: string[];
}

export interface DashboardData {
  streak: number;
  totalDays: number;
  completedDays: number;
  todayChallenge: Challenge;
  achievements: {
    name: string;
    icon: LucideIcon | IconType | React.ElementType;
    color: string;
  }[];
}

export interface StatItem {
  label: string;
  value: string;
  icon: LucideIcon | IconType | React.ElementType;
  color: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
}