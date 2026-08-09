"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Clock, Code2, ArrowRight, Zap } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";
import { Lock } from "lucide-react";
import { cn } from "@/lib/utils";

interface TaskCardProps {
  dayNumber: number;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  estTime: string;
  skills: string[];
  isLocked?: boolean;
  lockedReason?: string;
}

export function TaskCard({ dayNumber, title, difficulty, estTime, skills, isLocked = false, lockedReason = "Unlocks Tomorrow" }: TaskCardProps) {
  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case "Easy": return "text-emerald-400 border-emerald-400/30 bg-emerald-400/10";
      case "Medium": return "text-orange-400 border-orange-400/30 bg-orange-400/10";
      case "Hard": return "text-rose-400 border-rose-400/30 bg-rose-400/10";
      default: return "text-zinc-400 border-zinc-400/30 bg-zinc-400/10";
    }
  };

  return (
    <motion.div whileHover={isLocked ? {} : { y: -2 }} transition={{ duration: 0.2 }}>
      <Card className={cn(
        "bg-gradient-to-br border relative overflow-hidden group shadow-lg transition-all",
        isLocked
          ? "from-zinc-900/90 via-zinc-950/80 to-zinc-950 border-amber-500/20 shadow-amber-950/10"
          : "from-indigo-950/80 via-violet-950/60 to-zinc-950 border-indigo-500/30 shadow-indigo-900/20"
      )}>
        {/* Glow Effect */}
        <div className={cn(
          "absolute -right-10 -top-10 w-40 h-40 blur-[50px] rounded-full pointer-events-none transition-colors duration-500",
          isLocked ? "bg-amber-500/10" : "bg-indigo-500/20 group-hover:bg-indigo-400/30"
        )} />
        
        <CardHeader className="pb-3 relative z-10">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-white/5 border border-white/10">
              {isLocked ? <Lock className="w-3.5 h-3.5 text-amber-400" /> : <Zap className="w-3.5 h-3.5 text-indigo-400" />}
              <span className={cn("text-xs font-bold uppercase tracking-widest", isLocked ? "text-amber-300" : "text-indigo-300")}>
                Day {dayNumber}
              </span>
            </div>
            {isLocked ? (
              <Badge variant="outline" className="text-amber-400 border-amber-400/30 bg-amber-400/10 flex items-center gap-1">
                <Lock className="w-3 h-3" /> {lockedReason}
              </Badge>
            ) : (
              <Badge variant="outline" className={getDifficultyColor(difficulty)}>
                {difficulty}
              </Badge>
            )}
          </div>
          <CardTitle className={cn("text-2xl font-extrabold tracking-tight leading-tight", isLocked ? "text-zinc-300" : "text-white")}>
            {title}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="pb-4 relative z-10 space-y-4">
          <div className="flex items-center gap-4 text-sm text-zinc-400">
            <div className="flex items-center gap-1.5 font-medium">
              <Clock className="w-4 h-4 text-zinc-500" />
              <span>{estTime}</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <Code2 className="w-4 h-4 text-zinc-500" />
              <span>{skills.length} Skills</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="text-[10px] font-bold tracking-wide uppercase px-2 py-1 rounded-md bg-white/5 border border-white/5 text-zinc-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </CardContent>
        
        <CardFooter className="relative z-10">
          {isLocked ? (
            <Button disabled variant="secondary" className="w-full gap-2 text-base h-12 border-amber-500/20 bg-amber-500/10 text-amber-300 cursor-not-allowed">
              <Lock className="w-4 h-4" /> Day {dayNumber} — {lockedReason}
            </Button>
          ) : (
            <Link href={`/day/${dayNumber}`} className="w-full">
              <Button variant="primary" className="w-full gap-2 text-base h-12 group">
                {dayNumber === 1 ? "Start Day 1 Challenge" : "Continue Challenge"}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
