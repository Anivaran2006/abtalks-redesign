"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Terminal, UploadCloud, Flame } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

const steps = [
  {
    title: "Complete Daily Tasks",
    description: "Receive a real-world coding challenge every morning. Solve it using your preferred tech stack and best practices.",
    icon: Terminal,
    color: "text-indigo-400",
    bg: "bg-indigo-500/20",
    border: "border-indigo-500/30",
  },
  {
    title: "Submit Proof of Work",
    description: "Commit your code to GitHub and share your learnings on LinkedIn or Twitter to build your public portfolio.",
    icon: UploadCloud,
    color: "text-violet-400",
    bg: "bg-violet-500/20",
    border: "border-violet-500/30",
  },
  {
    title: "Build a Public Streak",
    description: "Track your progress on our leaderboard. Consistency attracts recruiters and helps you land interviews faster.",
    icon: Flame,
    color: "text-orange-400",
    bg: "bg-orange-500/20",
    border: "border-orange-500/30",
  },
];

export function TimelineSection() {
  return (
    <section className="w-full py-12 relative z-10 flex flex-col space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center"
      >
        <h2 className="text-2xl font-bold text-white mb-2">How It Works</h2>
        <p className="text-sm text-zinc-400">The simplest path from tutorial hell to hired.</p>
      </motion.div>

      <div className="relative pl-6">
        {/* Vertical Timeline Line */}
        <div className="absolute left-[39px] top-6 bottom-6 w-[2px] bg-white/10 rounded-full" />

        <div className="flex flex-col space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative flex items-start gap-6"
              >
                {/* Timeline Node */}
                <div className={cn(
                  "relative z-10 flex items-center justify-center shrink-0 w-10 h-10 rounded-full border-2 bg-zinc-950",
                  step.border,
                  step.color
                )}>
                  <Icon className="w-5 h-5" />
                </div>

                {/* Content Card */}
                <Card className="flex-1 bg-white/5 border-white/10 mt-1">
                  <CardContent className="p-4 flex flex-col gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                      Step 0{index + 1}
                    </span>
                    <h3 className="text-base font-semibold text-zinc-100">{step.title}</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
