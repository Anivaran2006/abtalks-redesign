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
import { CHALLENGES } from "@/lib/challenges";
import { useAppContext } from "@/context/AppContext";

const ChallengeCalendar = dynamic(() => import("@/components/features/dashboard/ChallengeCalendar").then(m => m.ChallengeCalendar), {
  loading: () => <div className="h-64 rounded-3xl bg-white/5 animate-pulse" />,
});
const AchievementsSection = dynamic(() => import("@/components/features/dashboard/AchievementsSection").then(m => m.AchievementsSection), {
  loading: () => <div className="h-48 rounded-3xl bg-white/5 animate-pulse" />,
});
const Leaderboard = dynamic(() => import("@/components/features/dashboard/Leaderboard").then(m => m.Leaderboard), {
  loading: () => <div className="h-80 rounded-3xl bg-white/5 animate-pulse" />,
});

export default function DashboardPage() {
  const { streak, submittedDays, totalDays, user } = useAppContext();
  const leaderboardRef = React.useRef<HTMLElement>(null);
  const completedDays = submittedDays.length;
  const progressPercent = (completedDays / totalDays) * 100;

  // Derive today's challenge from the shared CHALLENGES catalog — same source as /day/[day] and Explore
  const currentDayNumber = completedDays + 1;
  const challengeData = CHALLENGES.find(c => c.day === currentDayNumber);
  const todayChallenge = {
    title: challengeData?.title ?? `Day ${currentDayNumber} Challenge`,
    difficulty: (challengeData?.difficulty ?? "Medium") as "Easy" | "Medium" | "Hard",
    estTime: challengeData?.estTime ?? "1 Hour",
    skills: challengeData?.tags ?? [],
  };

  return (
    <AuthGuard>
      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 pb-52 lg:pb-10 font-[family-name:var(--font-geist-sans)] text-zinc-100">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between gap-3 mb-6"
        >
          <div className="min-w-0">
            <h1 className="text-2xl font-extrabold tracking-tight text-white leading-tight">
              Welcome back, {user?.name || "Coder"}! 👋
            </h1>
            <p className="text-sm text-zinc-400 mt-0.5 font-medium">Here&apos;s your progress for today.</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-violet-500 border-2 border-indigo-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
            {user?.name?.charAt(0)?.toUpperCase() || "A"}
          </div>
        </motion.div>

        {/* === RESPONSIVE GRID === */}
        {/* Mobile/tablet: single column stack. Desktop (lg+): two-column layout */}
        <div className="flex flex-col lg:flex-row lg:gap-8 lg:items-start">

          {/* ── LEFT COLUMN (primary content) ── */}
          <div className="flex-1 min-w-0 flex flex-col gap-5">

            {/* Today's Challenge — highest priority */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
            >
              <TaskCard
                dayNumber={currentDayNumber}
                title={todayChallenge.title}
                difficulty={todayChallenge.difficulty}
                estTime={todayChallenge.estTime}
                skills={todayChallenge.skills}
              />
            </motion.div>

            {/* AI Mentor */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              <AIMentorCard
                studentName={user?.name || "Coder"}
                streak={streak}
                completedDays={completedDays}
              />
            </motion.div>

            {/* Quick Actions */}
            <motion.nav
              aria-label="Quick Actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="flex gap-3"
            >
              <Link href="/submit" className="flex-1">
                <Button variant="secondary" className="w-full gap-2 border-white/10 group">
                  <Upload className="w-4 h-4 text-indigo-400 group-hover:scale-110 transition-transform" /> Submit Proof
                </Button>
              </Link>
              <Button
                onClick={() => leaderboardRef.current?.scrollIntoView({ behavior: "smooth" })}
                variant="secondary" className="flex-1 gap-2 border-white/10 group"
              >
                <BarChart3 className="w-4 h-4 text-fuchsia-400 group-hover:scale-110 transition-transform" /> Leaderboard
              </Button>
            </motion.nav>

            {/* Challenge Calendar — below fold on mobile, left column on desktop */}
            <motion.section
              aria-label="Challenge Calendar"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <ChallengeCalendar currentDay={completedDays + 1} missedDays={[]} totalDays={totalDays} />
            </motion.section>

            {/* Achievements */}
            <motion.section
              aria-label="Achievements"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
            >
              <AchievementsSection />
            </motion.section>
          </div>

          {/* ── RIGHT COLUMN (stats + leaderboard) ── */}
          <div className="flex flex-col gap-5 lg:w-80 xl:w-96 shrink-0">

            {/* Streak + Progress (always two-col on mobile, stacked in right col on desktop) */}
            <section aria-label="Overview" className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
              >
                <StreakCard streak={streak} />
              </motion.div>

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

            {/* Leaderboard — in right column on desktop */}
            <motion.section
              ref={leaderboardRef}
              aria-label="Leaderboard"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Leaderboard />
            </motion.section>
          </div>
        </div>
      </div>
    </AuthGuard>
  );
}
