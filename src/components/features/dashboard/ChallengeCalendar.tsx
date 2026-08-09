"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

interface ChallengeCalendarProps {
  totalDays?: number;
  currentDay?: number; // 1-indexed
  missedDays?: number[]; // Array of 1-indexed days
  submittedDays?: number[]; // Array of submitted day numbers
  submittedToday?: boolean;
}

export function ChallengeCalendar({
  totalDays = 60,
  currentDay = 12,
  missedDays = [],
  submittedDays,
  submittedToday = false,
}: ChallengeCalendarProps) {
  // Generate the 60 days array
  const days = Array.from({ length: totalDays }, (_, i) => {
    const dayNumber = i + 1;
    if (submittedDays?.includes(dayNumber)) return "completed";
    if (dayNumber === currentDay) return submittedToday ? "next_locked" : "current";
    if (missedDays.includes(dayNumber)) return "missed";
    return "upcoming";
  });

  return (
    <Card className="bg-white/5 border-white/10 w-full">
      <CardHeader className="pb-2 flex flex-row items-center justify-between">
        <CardTitle className="text-sm tracking-wider text-zinc-400 uppercase">
          60-Day Progress Map
        </CardTitle>
        <div className="flex items-center gap-3 text-[10px] uppercase font-bold tracking-wider text-zinc-500">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-sm bg-emerald-500/80" /> Done
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-sm bg-rose-500/80" /> Missed
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="grid grid-cols-[repeat(15,minmax(0,1fr))] gap-1.5 sm:gap-2">
          {days.map((status, index) => {
            const dayNumber = index + 1;
            const isCompleted = status === "completed";
            const isMissed = status === "missed";
            const isCurrent = status === "current";
            const isNextLocked = status === "next_locked";
            const isUpcoming = status === "upcoming";
            const isAccessible = isCompleted || isCurrent;

            const box = (
              <div
                className={cn(
                  "w-full h-full rounded-[4px] transition-all duration-300",
                  isCompleted && "bg-emerald-500/80 hover:bg-emerald-400 border border-emerald-400/20 cursor-pointer",
                  isMissed && "bg-rose-500/80 hover:bg-rose-400 border border-rose-400/20 cursor-pointer",
                  isCurrent && "bg-indigo-500 border border-indigo-400 shadow-[0_0_10px_rgba(99,102,241,0.5)] animate-pulse cursor-pointer",
                  isNextLocked && "bg-amber-500/30 border border-amber-400/40 cursor-not-allowed opacity-80",
                  isUpcoming && "bg-zinc-800/50 border border-zinc-700/50 hover:bg-zinc-700 cursor-not-allowed opacity-50"
                )}
              />
            );

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.2,
                  delay: index * 0.01, // Stagger effect
                }}
                className="relative group aspect-square"
              >
                {isAccessible ? (
                  <Link href={`/day/${dayNumber}`} className="block w-full h-full">
                    {box}
                  </Link>
                ) : (
                  box
                )}
                
                {/* Tooltip */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-900 border border-white/10 text-xs font-semibold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
                  Day {dayNumber}
                  {isCompleted && " • Completed"}
                  {isMissed && " • Missed"}
                  {isCurrent && " • Current"}
                  {isNextLocked && " • Unlocks Tomorrow"}
                  {isUpcoming && " • Locked"}
                </div>
              </motion.div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
