"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Flame, Trophy, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { AuthGuard } from "@/components/auth/AuthGuard";
import { useRouter } from "next/navigation";

export default function NotificationsPage() {
  const router = useRouter();

  return (
    <AuthGuard>
      <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-100 font-[family-name:var(--font-geist-sans)] pb-32">
        {/* Top Navigation Bar */}
        <div className="sticky top-0 z-50 flex items-center justify-between p-4 bg-zinc-950/80 backdrop-blur-xl border-b border-white/5">
          <Button onClick={() => router.back()} variant="ghost" className="w-10 h-10 p-0 rounded-full border border-white/10 text-zinc-400 hover:text-white">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <span className="font-bold text-sm tracking-widest uppercase text-zinc-500">
            Notifications
          </span>
          <div className="w-10 h-10" />
        </div>

        <div className="flex-1 p-4 sm:p-5 flex flex-col max-w-md mx-auto w-full pt-8 space-y-4">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <Card className="bg-zinc-900/50 border-white/5 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-500" />
              <CardContent className="p-4 flex gap-4">
                <div className="mt-1">
                  <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center">
                    <Trophy className="w-4 h-4 text-indigo-400" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">Welcome to AbTalks</h3>
                  <p className="text-zinc-400 text-sm mt-1">You have successfully joined the 60-day challenge. Your journey starts now!</p>
                  <p className="text-zinc-600 text-xs mt-2">Just now</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <Card className="bg-zinc-900/50 border-white/5">
              <CardContent className="p-4 flex gap-4">
                <div className="mt-1">
                  <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center">
                    <Flame className="w-4 h-4 text-orange-400" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">Streak Milestone</h3>
                  <p className="text-zinc-400 text-sm mt-1">You hit a 10-day streak! Keep the momentum going.</p>
                  <p className="text-zinc-600 text-xs mt-2">2 days ago</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <Card className="bg-zinc-900/50 border-white/5">
              <CardContent className="p-4 flex gap-4">
                <div className="mt-1">
                  <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center">
                    <Star className="w-4 h-4 text-yellow-400" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">Level Up!</h3>
                  <p className="text-zinc-400 text-sm mt-1">You earned 500 XP and climbed the leaderboard.</p>
                  <p className="text-zinc-600 text-xs mt-2">5 days ago</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </AuthGuard>
  );
}
