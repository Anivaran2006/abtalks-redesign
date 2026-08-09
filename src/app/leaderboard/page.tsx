"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { 
  Trophy, Crown, ArrowUp, ArrowDown, Minus, 
  ArrowLeft, Medal, Flame, Star 
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import { useAppContext } from "@/context/AppContext";
import { AuthGuard } from "@/components/auth/AuthGuard";

type LeaderboardStudent = {
  id: string;
  name: string;
  xp: number;
  streak: number;
  trend: "up" | "down" | "flat";
  isCurrentUser?: boolean;
};

const BASE_LEADERBOARD: LeaderboardStudent[] = [
  { id: "top-1", name: "Sophia Lin", xp: 32400, streak: 58, trend: "up" },
  { id: "top-2", name: "Marcus Vance", xp: 28900, streak: 52, trend: "up" },
  { id: "top-3", name: "Elena Rostova", xp: 25200, streak: 45, trend: "flat" },
  { id: "top-4", name: "David Chen", xp: 21500, streak: 38, trend: "up" },
  { id: "top-5", name: "Aisha Patel", xp: 19800, streak: 35, trend: "down" },
  { id: "top-6", name: "Ryan Cooper", xp: 18100, streak: 30, trend: "up" },
  { id: "top-7", name: "Sarah Jenkins", xp: 14850, streak: 22, trend: "up" },
  { id: "top-8", name: "Michael Chen", xp: 14620, streak: 19, trend: "down" },
  { id: "top-9", name: "David Kim", xp: 14100, streak: 14, trend: "flat" },
  { id: "top-10", name: "Emma Watson", xp: 13950, streak: 12, trend: "up" },
  { id: "top-11", name: "Lucas Meyer", xp: 12500, streak: 10, trend: "up" },
  { id: "top-12", name: "Kaito Tanaka", xp: 9800, streak: 8, trend: "flat" },
  { id: "top-13", name: "DevCoder", xp: 500, streak: 1, trend: "up" },
];

export default function LeaderboardPage() {
  const router = useRouter();
  const { xp, streak, user } = useAppContext();

  const currentUserName = user?.name?.trim() || "You";

  // Calculate full dynamic leaderboard with current user inserted by XP
  const fullLeaderboard = React.useMemo(() => {
    const list = [
      ...BASE_LEADERBOARD,
      {
        id: "current-user",
        name: currentUserName,
        xp: xp,
        streak: streak,
        trend: "up" as const,
        isCurrentUser: true,
      }
    ];

    // Sort descending by XP
    list.sort((a, b) => b.xp - a.xp);

    // Map 1-based ranks
    return list.map((s, index) => ({
      ...s,
      rank: index + 1,
    }));
  }, [xp, streak, currentUserName]);

  const currentUser = fullLeaderboard.find(s => s.isCurrentUser);
  const topThree = fullLeaderboard.slice(0, 3);

  return (
    <AuthGuard>
      <div className="flex flex-col min-h-screen bg-[#09090b] text-zinc-100 font-[family-name:var(--font-geist-sans)] pb-32 lg:pb-12">
        {/* Sticky Header */}
        <div className="sticky top-0 z-50 flex items-center justify-between p-4 bg-zinc-950/80 backdrop-blur-xl border-b border-white/5">
          <Button onClick={() => router.push("/dashboard")} variant="ghost" className="w-10 h-10 p-0 rounded-full border border-white/10 text-zinc-400 hover:text-white">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-indigo-400" />
            <span className="font-bold text-base text-white">Global Leaderboard</span>
          </div>
          <div className="px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 font-bold text-xs flex items-center gap-1">
            <Crown className="w-3.5 h-3.5" />
            Rank #{currentUser?.rank || 1}
          </div>
        </div>

        <div className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-6 space-y-8">
          
          {/* Top 3 Podium Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-3 gap-3 pt-2"
          >
            {/* Rank 2 - Silver */}
            {topThree[1] && (
              <Card className="bg-zinc-900/60 border-white/10 text-center p-3 sm:p-4 flex flex-col items-center justify-end relative overflow-hidden mt-4">
                <div className="w-10 h-10 rounded-full bg-zinc-400/20 border border-zinc-400/40 flex items-center justify-center text-zinc-300 mb-2">
                  <Medal className="w-5 h-5 text-zinc-300" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">#2 Silver</span>
                <h3 className="font-bold text-xs sm:text-sm text-white truncate max-w-full mt-1">{topThree[1].name}</h3>
                <span className="text-xs text-indigo-400 font-bold mt-1">{topThree[1].xp.toLocaleString()} XP</span>
              </Card>
            )}

            {/* Rank 1 - Gold */}
            {topThree[0] && (
              <Card className="bg-gradient-to-b from-amber-500/20 to-zinc-900/80 border-amber-500/40 text-center p-4 flex flex-col items-center justify-end relative overflow-hidden shadow-lg shadow-amber-500/10">
                <div className="w-12 h-12 rounded-full bg-amber-500/20 border border-amber-500/50 flex items-center justify-center text-amber-400 mb-2 shadow-[0_0_15px_rgba(245,158,11,0.4)]">
                  <Crown className="w-6 h-6 text-amber-400" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider text-amber-400">#1 Gold Champion</span>
                <h3 className="font-extrabold text-sm sm:text-base text-white truncate max-w-full mt-1">{topThree[0].name}</h3>
                <span className="text-xs sm:text-sm text-amber-300 font-black mt-1">{topThree[0].xp.toLocaleString()} XP</span>
              </Card>
            )}

            {/* Rank 3 - Bronze */}
            {topThree[2] && (
              <Card className="bg-zinc-900/60 border-white/10 text-center p-3 sm:p-4 flex flex-col items-center justify-end relative overflow-hidden mt-6">
                <div className="w-10 h-10 rounded-full bg-amber-700/20 border border-amber-700/40 flex items-center justify-center text-amber-600 mb-2">
                  <Medal className="w-5 h-5 text-amber-600" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600">#3 Bronze</span>
                <h3 className="font-bold text-xs sm:text-sm text-white truncate max-w-full mt-1">{topThree[2].name}</h3>
                <span className="text-xs text-indigo-400 font-bold mt-1">{topThree[2].xp.toLocaleString()} XP</span>
              </Card>
            )}
          </motion.div>

          {/* Full Rankings List */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-3"
          >
            <div className="flex items-center justify-between px-1">
              <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-400">All Rankings</h2>
              <span className="text-xs text-zinc-500">{fullLeaderboard.length} Active Competitors</span>
            </div>

            <Card className="bg-zinc-900/50 border-white/10 divide-y divide-white/5 overflow-hidden">
              <CardContent className="p-0">
                {fullLeaderboard.map((student) => {
                  const isCurrent = student.isCurrentUser;

                  return (
                    <div
                      key={student.id || student.name}
                      className={cn(
                        "flex items-center justify-between p-4 transition-colors relative",
                        isCurrent 
                          ? "bg-indigo-600/20 border-y border-indigo-500/40" 
                          : "hover:bg-white/5"
                      )}
                    >
                      {/* Highlight Left Bar */}
                      {isCurrent && (
                        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-indigo-500" />
                      )}

                      <div className="flex items-center gap-4 min-w-0">
                        {/* Rank Badge */}
                        <div className={cn(
                          "w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black shrink-0",
                          student.rank === 1 && "bg-amber-500/20 text-amber-400 border border-amber-500/30",
                          student.rank === 2 && "bg-zinc-400/20 text-zinc-300 border border-zinc-400/30",
                          student.rank === 3 && "bg-amber-700/20 text-amber-500 border border-amber-700/30",
                          student.rank > 3 && isCurrent && "bg-indigo-500/30 text-indigo-300 border border-indigo-500/40",
                          student.rank > 3 && !isCurrent && "bg-white/5 text-zinc-500"
                        )}>
                          #{student.rank}
                        </div>

                        {/* Name & Streak */}
                        <div className="flex flex-col min-w-0">
                          <div className="flex items-center gap-2">
                            <span className={cn(
                              "font-bold text-sm truncate",
                              isCurrent ? "text-indigo-200" : "text-white"
                            )}>
                              {student.name}
                            </span>
                            {isCurrent && (
                              <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded-full bg-indigo-500/30 border border-indigo-500/40 text-indigo-300">
                                YOU
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-3 text-xs text-zinc-400 mt-0.5">
                            <span className="flex items-center gap-1">
                              <Flame className="w-3.5 h-3.5 text-orange-400" /> {student.streak} Days
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* XP & Trend */}
                      <div className="flex items-center gap-3 shrink-0">
                        <div className="text-right">
                          <div className="font-extrabold text-sm text-indigo-400 flex items-center justify-end gap-1">
                            <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                            {student.xp.toLocaleString()}
                          </div>
                          <span className="text-[10px] text-zinc-500">XP Points</span>
                        </div>

                        <div className="w-5 flex justify-center">
                          {student.trend === "up" && <ArrowUp className="w-4 h-4 text-emerald-400" />}
                          {student.trend === "down" && <ArrowDown className="w-4 h-4 text-rose-400" />}
                          {student.trend === "flat" && <Minus className="w-4 h-4 text-zinc-600" />}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </motion.div>

          {/* Action to Return to Dashboard */}
          <div className="pt-2">
            <Link href="/dashboard" className="block w-full">
              <Button variant="secondary" className="w-full h-12 border-white/10 gap-2 font-bold">
                <ArrowLeft className="w-4 h-4" /> Back to Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </AuthGuard>
  );
}
