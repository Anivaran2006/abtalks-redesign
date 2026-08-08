"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Clock, Code2, ArrowRight, Zap } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

interface TaskCardProps {
  dayNumber: number;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  estTime: string;
  skills: string[];
}

export function TaskCard({ dayNumber, title, difficulty, estTime, skills }: TaskCardProps) {
  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case "Easy": return "text-emerald-400 border-emerald-400/30 bg-emerald-400/10";
      case "Medium": return "text-orange-400 border-orange-400/30 bg-orange-400/10";
      case "Hard": return "text-rose-400 border-rose-400/30 bg-rose-400/10";
      default: return "text-zinc-400 border-zinc-400/30 bg-zinc-400/10";
    }
  };

  return (
    <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
      <Card className="bg-gradient-to-br from-indigo-950/80 via-violet-950/60 to-zinc-950 border-indigo-500/30 relative overflow-hidden group shadow-lg shadow-indigo-900/20">
        {/* Glow Effect */}
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-indigo-500/20 blur-[50px] rounded-full pointer-events-none group-hover:bg-indigo-400/30 transition-colors duration-500" />
        
        <CardHeader className="pb-3 relative z-10">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-white/5 border border-white/10">
              <Zap className="w-3.5 h-3.5 text-indigo-400" />
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-300">
                Day {dayNumber}
              </span>
            </div>
            <Badge variant="outline" className={getDifficultyColor(difficulty)}>
              {difficulty}
            </Badge>
          </div>
          <CardTitle className="text-xl font-bold text-white leading-tight">
            {title}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="pb-4 relative z-10 space-y-4">
          <div className="flex items-center gap-4 text-sm text-zinc-400">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-zinc-500" />
              <span>{estTime}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Code2 className="w-4 h-4 text-zinc-500" />
              <span>{skills.length} Skills</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="text-[10px] font-medium px-2 py-1 rounded-md bg-white/5 border border-white/5 text-zinc-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </CardContent>
        
        <CardFooter className="relative z-10">
          <Button className="w-full gap-2 bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/20">
            Continue Challenge
            <ArrowRight className="w-4 h-4" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
