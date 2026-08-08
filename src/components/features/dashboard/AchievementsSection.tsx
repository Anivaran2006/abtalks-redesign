"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import { MOCK_ACHIEVEMENTS } from "@/lib/mock-data";
import { Rarity } from "@/types";

const rarityConfig = {
  Common: { color: "text-zinc-400", bg: "bg-zinc-500/20", border: "border-zinc-500/30", badge: "bg-zinc-800 text-zinc-300" },
  Rare: { color: "text-blue-400", bg: "bg-blue-500/20", border: "border-blue-500/30", badge: "bg-blue-900/50 text-blue-300" },
  Epic: { color: "text-purple-400", bg: "bg-purple-500/20", border: "border-purple-500/30", badge: "bg-purple-900/50 text-purple-300 shadow-[0_0_10px_rgba(168,85,247,0.4)]" },
  Legendary: { color: "text-orange-400", bg: "bg-orange-500/20", border: "border-orange-500/30", badge: "bg-orange-900/50 text-orange-300 shadow-[0_0_15px_rgba(249,115,22,0.6)]" },
};

export function AchievementsSection() {
  return (
    <section className="w-full space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold tracking-wider text-zinc-500 uppercase">Your Achievements</h3>
        <span className="text-xs font-bold text-indigo-400">3 / 8 Unlocked</span>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {MOCK_ACHIEVEMENTS.map((acc, i) => {
          const Icon = acc.icon;
          const config = rarityConfig[acc.rarity];
          
          return (
            <motion.div
              key={acc.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={acc.unlocked ? { y: -2, scale: 1.02 } : {}}
            >
              <Card 
                className={cn(
                  "h-full relative overflow-hidden border",
                  acc.unlocked 
                    ? "bg-white/5 border-white/10" 
                    : "bg-zinc-950/50 border-zinc-900 grayscale opacity-60"
                )}
              >
                {/* Glow behind the icon if unlocked */}
                {acc.unlocked && (
                  <div className={cn("absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 blur-2xl rounded-full opacity-40 pointer-events-none", config.bg)} />
                )}

                <CardContent className="p-4 flex flex-col items-center text-center gap-3 relative z-10">
                  <div className={cn("px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-widest absolute top-2 right-2", config.badge)}>
                    {acc.rarity}
                  </div>

                  <div className={cn(
                    "p-3 rounded-full mt-4",
                    acc.unlocked ? config.bg : "bg-zinc-900",
                    acc.unlocked ? config.border : "border-zinc-800 border"
                  )}>
                    <Icon className={cn("w-6 h-6", acc.unlocked ? config.color : "text-zinc-600")} />
                  </div>

                  <div>
                    <h4 className={cn("font-bold text-sm mb-1", acc.unlocked ? "text-zinc-100" : "text-zinc-500")}>
                      {acc.name}
                    </h4>
                    <p className="text-[10px] text-zinc-400 leading-tight">
                      {acc.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
