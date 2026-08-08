"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Trophy, ArrowUp, ArrowDown, Minus, Crown } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

interface LeaderboardEntry {
  rank: number;
  name: string;
  xp: number;
  trend: "up" | "down" | "flat";
  isCurrentUser?: boolean;
}

const mockLeaderboard: LeaderboardEntry[] = [
  { rank: 40, name: "Sarah J.", xp: 14850, trend: "up" },
  { rank: 41, name: "Michael C.", xp: 14620, trend: "down" },
  { rank: 42, name: "You", xp: 14500, trend: "up", isCurrentUser: true },
  { rank: 43, name: "David K.", xp: 14100, trend: "flat" },
  { rank: 44, name: "Emma W.", xp: 13950, trend: "up" },
];

export function Leaderboard() {
  return (
    <Card className="bg-gradient-to-br from-indigo-950/40 to-zinc-950 border-indigo-500/20 w-full relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-[40px] pointer-events-none rounded-full" />
      
      <CardHeader className="pb-4 relative z-10 border-b border-white/5">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg flex items-center gap-2">
              <Trophy className="w-5 h-5 text-indigo-400" />
              Global Leaderboard
            </CardTitle>
            <p className="text-xs text-zinc-400 mt-1">You are in the top 5% of active students.</p>
          </div>
          <div className="px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 font-bold text-sm flex items-center gap-1.5 shadow-[0_0_10px_rgba(99,102,241,0.3)]">
            <Crown className="w-4 h-4" />
            Rank #42
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-4 relative z-10 p-0">
        <div className="flex flex-col">
          {mockLeaderboard.map((user, idx) => (
            <motion.div
              key={user.rank}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={cn(
                "flex items-center justify-between p-4 transition-colors",
                user.isCurrentUser 
                  ? "bg-indigo-500/10 border-y border-indigo-500/20 relative" 
                  : "hover:bg-white/5 border-b border-white/5 last:border-0"
              )}
            >
              {/* Highlight bar for current user */}
              {user.isCurrentUser && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-500 rounded-r-full" />
              )}
              
              <div className="flex items-center gap-4">
                <span className={cn(
                  "font-black text-sm w-6 text-center",
                  user.isCurrentUser ? "text-indigo-400" : "text-zinc-500"
                )}>
                  {user.rank}
                </span>
                
                <div className="flex flex-col">
                  <span className={cn(
                    "font-semibold text-sm",
                    user.isCurrentUser ? "text-white" : "text-zinc-300"
                  )}>
                    {user.name}
                  </span>
                  <span className="text-[10px] text-zinc-500 font-medium">
                    {user.xp.toLocaleString()} XP
                  </span>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                {user.trend === "up" && <ArrowUp className="w-4 h-4 text-emerald-400" />}
                {user.trend === "down" && <ArrowDown className="w-4 h-4 text-rose-400" />}
                {user.trend === "flat" && <Minus className="w-4 h-4 text-zinc-600" />}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="p-4 text-center border-t border-white/5 bg-black/20">
          <p className="text-xs text-indigo-300 font-medium italic">
            "Only 230 XP to surpass Michael C. Keep coding!"
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
