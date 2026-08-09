"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Bot, Sparkles, Lightbulb, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

import { CHALLENGES } from "@/lib/challenges";

interface AIMentorProps {
  studentName?: string;
  streak?: number;
  completedDays?: number;
}

export function AIMentorCard({ studentName = "Coder", streak = 0, completedDays = 0 }: AIMentorProps) {
  const currentDay = completedDays + 1;
  const currentChallenge = CHALLENGES.find(c => c.day === currentDay);
  const challengeTitle = currentChallenge ? currentChallenge.title : `Day ${currentDay} Challenge`;

  const getMentorMessage = () => {
    if (streak > 0) {
      return {
        greeting: `Great momentum, ${studentName}!`,
        tip: `🔥 ${streak}-day streak. Today (Day ${currentDay}): ${challengeTitle}. Consistency beats intensity!`,
        action: `Go to Day ${currentDay} Challenge`,
      };
    }
    return {
      greeting: `Let's go, ${studentName}!`,
      tip: `Every expert was once a beginner. Your coding journey starts with Day ${currentDay}: ${challengeTitle}.`,
      action: `Start Day ${currentDay} Challenge`,
    };
  };

  const message = getMentorMessage();

  return (
    <Card className="bg-gradient-to-r from-violet-600/20 via-indigo-600/10 to-fuchsia-600/20 border-indigo-500/30 relative overflow-hidden group">
      {/* Animated Gradient Orbs */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-fuchsia-500/15 blur-[50px] rounded-full group-hover:bg-fuchsia-400/25 transition-colors duration-700" />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-500/15 blur-[50px] rounded-full group-hover:bg-indigo-400/25 transition-colors duration-700" />

      <CardContent className="p-5 relative z-10">
        {/* Header row: bot icon + greeting */}
        <div className="flex items-center gap-3 mb-3">
          <motion.div
            whileHover={{ rotate: 15, scale: 1.1 }}
            className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 p-0.5 shrink-0 shadow-lg shadow-indigo-500/25"
          >
            <div className="w-full h-full bg-zinc-950 rounded-xl flex items-center justify-center border border-white/10">
              <Bot className="w-5 h-5 text-fuchsia-300" />
            </div>
          </motion.div>

          <div className="flex items-center gap-1.5 min-w-0">
            <Sparkles className="w-3.5 h-3.5 text-fuchsia-400 shrink-0" />
            <h3 className="font-bold text-white text-sm tracking-tight truncate">{message.greeting}</h3>
          </div>
        </div>

        {/* Tip text — full width, uncluttered */}
        <div className="flex gap-2 mb-3">
          <Lightbulb className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
          <p className="text-sm text-zinc-300 leading-relaxed">{message.tip}</p>
        </div>

        <Link href={`/day/${currentDay}`}>
          <Button
            variant="ghost"
            className="h-8 px-3 text-xs text-fuchsia-300 hover:text-fuchsia-200 hover:bg-fuchsia-500/10 gap-1.5 -ml-3 flex items-center"
          >
            {message.action}
            <ArrowRight className="w-3.5 h-3.5 shrink-0" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
