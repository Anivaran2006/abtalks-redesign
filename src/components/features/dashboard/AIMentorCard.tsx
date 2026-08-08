"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Bot, Sparkles, Lightbulb, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

interface AIMentorProps {
  studentName?: string;
  streak?: number;
  completedDays?: number;
}

export function AIMentorCard({ studentName = "Alex", streak = 15 }: AIMentorProps) {
  // Mock logic to select a message based on progress
  const getMentorMessage = () => {
    if (streak > 10) {
      return {
        greeting: `You're on fire, ${studentName}!`,
        tip: "Your 15-day streak is impressive. Today's challenge on Global State is complex, so take your time reading the React Context docs before jumping into code.",
        action: "Review Context Docs",
      };
    }
    return {
      greeting: `Keep pushing, ${studentName}!`,
      tip: "Consistency is key. Every line of code you write builds your muscle memory.",
      action: "Start Today's Challenge",
    };
  };

  const message = getMentorMessage();

  return (
    <Card className="bg-gradient-to-r from-violet-600/20 via-indigo-600/10 to-fuchsia-600/20 border-indigo-500/30 relative overflow-hidden group">
      {/* Animated Gradient Orb */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-fuchsia-500/20 blur-[50px] rounded-full group-hover:bg-fuchsia-400/30 transition-colors duration-700" />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-500/20 blur-[50px] rounded-full group-hover:bg-indigo-400/30 transition-colors duration-700" />
      
      <CardContent className="p-5 relative z-10">
        <div className="flex items-start gap-4">
          
          <motion.div 
            whileHover={{ rotate: 15, scale: 1.1 }}
            className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 p-0.5 shrink-0 shadow-lg shadow-indigo-500/25"
          >
            <div className="w-full h-full bg-zinc-950 rounded-2xl flex items-center justify-center border border-white/10">
              <Bot className="w-6 h-6 text-fuchsia-300" />
            </div>
          </motion.div>

          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-fuchsia-400" />
              <h3 className="font-bold text-white tracking-tight">{message.greeting}</h3>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-3 rounded-xl">
              <p className="text-sm text-zinc-300 leading-relaxed flex gap-2">
                <Lightbulb className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                <span>{message.tip}</span>
              </p>
            </div>
            
            <div className="pt-1">
              <Button variant="ghost" className="h-8 px-3 text-xs text-fuchsia-300 hover:text-fuchsia-200 hover:bg-fuchsia-500/10 gap-1.5 -ml-3">
                {message.action} <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </div>
          </div>

        </div>
      </CardContent>
    </Card>
  );
}
