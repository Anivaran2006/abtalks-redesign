"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Flame, Snowflake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";

interface StreakCardProps {
  streak: number;
  freezesAvailable?: number;
}

export function StreakCard({ streak, freezesAvailable = 1 }: StreakCardProps) {
  // Generate random particles for the background effect
  const particles = React.useMemo(() => {
    return Array.from({ length: 7 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      scale: Math.random() * 0.5 + 0.5,
      duration: Math.random() * 3 + 2,
    }));
  }, []);

  return (
    <Card className="relative overflow-hidden bg-gradient-to-br from-orange-600/20 via-red-950/40 to-zinc-950 border-orange-500/30 h-full">
      {/* Particle Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: `${p.y}%`, x: `${p.x}%` }}
            animate={{
              opacity: [0, 0.4, 0],
              y: [`${p.y}%`, `${p.y - 20}%`],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "easeOut",
              delay: Math.random() * 2,
            }}
            className="absolute w-1.5 h-1.5 rounded-full bg-orange-400 blur-[1px]"
            style={{ left: `${p.x}%`, top: `${p.y}%`, transform: `scale(${p.scale})` }}
          />
        ))}
      </div>

      <CardContent className="p-5 relative z-10 flex flex-col items-center justify-center text-center h-full">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [-2, 2, -2],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative mb-3"
        >
          <div className="absolute inset-0 bg-orange-500 blur-xl opacity-40 rounded-full animate-pulse" />
          <Flame className="w-10 h-10 text-orange-500 drop-shadow-[0_0_15px_rgba(249,115,22,0.8)] relative z-10" />
        </motion.div>

        <h2 className="text-3xl font-black text-white drop-shadow-md mb-1">{streak}</h2>
        <p className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-3">Day Streak</p>
        
        <p className="text-[11px] text-zinc-300 font-medium mb-4 max-w-[140px] leading-tight">
          {streak >= 7 ? "You're on fire! Keep the momentum going." : "Great start! Don't break the chain now."}
        </p>

        {freezesAvailable > 0 && (
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-semibold">
            <Snowflake className="w-3 h-3" />
            {freezesAvailable} Freeze Available
          </div>
        )}
      </CardContent>
    </Card>
  );
}
