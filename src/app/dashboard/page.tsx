"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Trophy, Upload, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Progress } from "@/components/ui/Progress";
import { StreakCard } from "@/components/features/dashboard/StreakCard";
import { TaskCard } from "@/components/features/dashboard/TaskCard";
import { AIMentorCard } from "@/components/features/dashboard/AIMentorCard";
import { AuthGuard } from "@/components/auth/AuthGuard";
import dynamic from "next/dynamic";
import Image from "next/image";
import { MOCK_DASHBOARD_DATA } from "@/lib/mock-data";
import { useAppContext } from "@/context/AppContext";

const ChallengeCalendar = dynamic(() => import("@/components/features/dashboard/ChallengeCalendar").then(m => m.ChallengeCalendar), { 
  loading: () => <div className="h-64 rounded-3xl bg-white/5 animate-pulse" /> 
});
const AchievementsSection = dynamic(() => import("@/components/features/dashboard/AchievementsSection").then(m => m.AchievementsSection), { 
  loading: () => <div className="h-48 rounded-3xl bg-white/5 animate-pulse" /> 
});
const Leaderboard = dynamic(() => import("@/components/features/dashboard/Leaderboard").then(m => m.Leaderboard), { 
  loading: () => <div className="h-80 rounded-3xl bg-white/5 animate-pulse" /> 
});

export default function DashboardPage() {
  const { streak, submittedDays, totalDays } = useAppContext();
  const completedDays = submittedDays.length;
  const progressPercent = (completedDays / totalDays) * 100;
  
  // Get today's challenge from mock data (in a real app, this would be fetched based on completedDays + 1)
  const todayChallenge = MOCK_DASHBOARD_DATA.todayChallenge;

  return (
    <AuthGuard>
      <div className="flex flex-col p-4 sm:p-5 pb-32 font-[family-name:var(--font-geist-sans)] text-zinc-100 space-y-5">
        
        {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-extrabold tracking-tighter text-white">Welcome back! 👋</h1>
          <p className="text-sm text-zinc-400 mt-1 font-medium">Here&apos;s your progress for today.</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-zinc-800 border-2 border-indigo-500 overflow-hidden shrink-0 relative">
          <Image 
            src="https://api.dicebear.com/7.x/notionists/svg?seed=Alex&backgroundColor=transparent" 
            alt="Profile" 
            fill
            sizes="40px"
            priority
            unoptimized
            className="object-cover"
          />
        </div>
      </motion.div>

      {/* AI Mentor */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
      >
        <AIMentorCard 
          streak={streak} 
          completedDays={completedDays} 
        />
      </motion.div>

      <section aria-label="Overview" className="grid grid-cols-2 gap-4">
        {/* Current Streak */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          <StreakCard streak={streak} />
        </motion.div>

        {/* Overall Progress */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="h-full bg-white/5 border-white/10">
            <CardContent className="p-5 flex flex-col justify-center h-full gap-3">
              <div className="flex justify-between items-center">
                <Trophy className="w-5 h-5 text-indigo-400" />
                <span className="text-sm font-bold text-zinc-100">{completedDays}/{totalDays}</span>
              </div>
              <Progress value={progressPercent} className="h-1.5" />
              <p className="text-xs text-zinc-400 text-center">{Math.round(progressPercent)}% Completed</p>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Today's Challenge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <TaskCard
          dayNumber={completedDays + 1}
          title={todayChallenge.title}
          difficulty={todayChallenge.difficulty as "Easy" | "Medium" | "Hard"}
          estTime={todayChallenge.estTime}
          skills={todayChallenge.skills}
        />
      </motion.div>

      {/* Quick Actions */}
      <motion.nav
        aria-label="Quick Actions"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex gap-3"
      >
        <Link href="/submit" className="flex-1">
          <Button variant="secondary" className="w-full gap-2 border-white/10 group">
            <Upload className="w-4 h-4 text-indigo-400 group-hover:scale-110 transition-transform" /> Submit Proof
          </Button>
        </Link>
        <Button variant="secondary" className="flex-1 gap-2 border-white/10 group">
          <BarChart3 className="w-4 h-4 text-fuchsia-400 group-hover:scale-110 transition-transform" /> Leaderboard
        </Button>
      </motion.nav>

      {/* Leaderboard */}
      <motion.section
        aria-label="Leaderboard"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.42 }}
      >
        <Leaderboard />
      </motion.section>

      {/* Challenge Calendar */}
      <motion.section
        aria-label="Challenge Calendar"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
      >
        <ChallengeCalendar currentDay={completedDays + 1} missedDays={[]} totalDays={totalDays} />
      </motion.section>

      {/* Achievements */}
      <motion.section
        aria-label="Achievements"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <AchievementsSection />
      </motion.section>
        </div>
    </AuthGuard>
  );
}
