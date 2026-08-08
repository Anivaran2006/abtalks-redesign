import { Flame, Upload, Clock, Zap, Crown, Award, Code2, Rocket, Trophy, Target, Briefcase, Users } from "lucide-react";
import { Achievement, DashboardData, LeaderboardEntry, StatItem, Testimonial } from "@/types";

export const MOCK_DASHBOARD_DATA: DashboardData = {
  streak: 15,
  totalDays: 60,
  completedDays: 15,
  todayChallenge: {
    title: "Build a Rate Limiter Middleware",
    difficulty: "Hard",
    estTime: "45 mins",
    skills: ["Node.js", "Redis", "Express"],
  },
  achievements: [
    { name: "7-Day Warrior", icon: Flame, color: "text-orange-400" },
    { name: "First Merge", icon: Upload, color: "text-indigo-400" },
    { name: "Early Bird", icon: Clock, color: "text-emerald-400" },
  ]
};

export const MOCK_ACHIEVEMENTS: Achievement[] = [
  { id: "1", name: "First Merge", description: "Successfully push your first commit to the challenge repo.", icon: Upload, rarity: "Common", unlocked: true },
  { id: "2", name: "7-Day Warrior", description: "Complete a full week of daily challenges without a freeze.", icon: Flame, rarity: "Rare", unlocked: true },
  { id: "3", name: "Early Bird", description: "Submit your proof of work before 9 AM local time.", icon: Clock, rarity: "Common", unlocked: true },
  { id: "4", name: "Speed Coder", description: "Complete a Hard challenge in under 30 minutes.", icon: Zap, rarity: "Epic", unlocked: false },
  { id: "5", name: "Bug Squasher", description: "Resolve 10 consecutive challenges perfectly on the first try.", icon: Code2, rarity: "Epic", unlocked: false },
  { id: "6", name: "Top 1%", description: "Reach the top 1% of the global leaderboard for the week.", icon: Crown, rarity: "Legendary", unlocked: false },
  { id: "7", name: "30-Day Master", description: "Hit the halfway mark! 30 days of relentless consistency.", icon: Award, rarity: "Legendary", unlocked: false },
  { id: "8", name: "Launch Ready", description: "Complete all 60 days. You are ready to get hired.", icon: Rocket, rarity: "Legendary", unlocked: false },
];

export const MOCK_LEADERBOARD: LeaderboardEntry[] = [
  { rank: 40, name: "Sarah J.", xp: 14850, trend: "up" },
  { rank: 41, name: "Michael C.", xp: 14620, trend: "down" },
  { rank: 42, name: "You", xp: 14500, trend: "up", isCurrentUser: true },
  { rank: 43, name: "David K.", xp: 14100, trend: "flat" },
  { rank: 44, name: "Emma W.", xp: 13950, trend: "up" },
];

export const MOCK_TRUST_STATS: StatItem[] = [
  { label: "Active Students", value: "5,200+", icon: Users, color: "text-indigo-400" },
  { label: "Projects Built", value: "15,000+", icon: Trophy, color: "text-violet-400" },
  { label: "Avg Placement", value: "$95k", icon: Target, color: "text-emerald-400" },
];

export const MOCK_TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah Jenkins",
    role: "Frontend Developer @ TechCorp",
    quote: "The 60-day challenge completely transformed my portfolio. I went from tutorial hell to building production-ready apps.",
  },
  {
    name: "Michael Chen",
    role: "Software Engineer",
    quote: "The rigor of the daily commits forced me to build a real habit. Got hired exactly 3 weeks after finishing.",
  },
];