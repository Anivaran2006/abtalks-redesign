"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { 
  ArrowLeft, Clock, Zap, BookOpen, 
  CheckCircle2, Circle, ExternalLink, Code2 
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import { useAppContext } from "@/context/AppContext";
import { Lock } from "lucide-react";
import { AuthGuard } from "@/components/auth/AuthGuard";

import { CHALLENGES } from "@/lib/challenges";

export default function ChallengePage() {
  const params = useParams();
  const day = parseInt(params.day as string) || 12;
  const { submittedDays } = useAppContext();
  
  const currentActiveDay = submittedDays.length + 1;
  const isSubmitted = submittedDays.includes(day);
  const isLocked = day > currentActiveDay;

  // Find the challenge from catalog
  const challenge = React.useMemo(() => {
    return CHALLENGES.find(c => c.day === day) || {
      day,
      title: `Day ${day} Challenge`,
      description: `Complete your daily challenge for Day ${day}.`,
      difficulty: "Medium" as const,
      topic: "Core Engineering",
      estTime: "1 Hour",
      tags: ["Coding", "Problem Solving"]
    };
  }, [day]);

  // Derived tasks & resources
  const initialTasks = React.useMemo(() => [
    { id: 1, text: `Review topic: ${challenge.topic}`, completed: isSubmitted },
    { id: 2, text: `Read problem specs for ${challenge.title}`, completed: isSubmitted },
    { id: 3, text: `Implement core logic using ${challenge.tags[0] || 'best practices'}`, completed: isSubmitted },
    { id: 4, text: `Pass local test cases & verify performance`, completed: isSubmitted },
    { id: 5, text: `Submit proof of work on GitHub`, completed: isSubmitted },
  ], [challenge, isSubmitted]);

  const [tasks, setTasks] = React.useState(initialTasks);

  React.useEffect(() => {
    setTasks(initialTasks);
  }, [initialTasks]);

  const objectives = React.useMemo(() => [
    `Understand core concepts behind ${challenge.title}`,
    `Apply ${challenge.tags.join(", ")} patterns cleanly`,
    `Optimize solution for speed and maintainability`,
    `Build strong daily consistency toward the 60-day goal`
  ], [challenge]);

  const resources = React.useMemo(() => [
    { title: `Documentation: ${challenge.topic}`, url: "#", type: "Reading" },
    { title: `Deep Dive: ${challenge.title}`, url: "#", type: "Article" },
    { title: `Day ${challenge.day} Video Walkthrough`, url: "#", type: "Video" }
  ], [challenge]);

  const toggleTask = (id: number) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case "Easy": return "text-emerald-400 border-emerald-400/30 bg-emerald-400/10";
      case "Medium": return "text-orange-400 border-orange-400/30 bg-orange-400/10";
      case "Hard": return "text-rose-400 border-rose-400/30 bg-rose-400/10";
      default: return "text-zinc-400 border-zinc-400/30 bg-zinc-400/10";
    }
  };

  if (isLocked) {
    return (
      <AuthGuard>
        <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-100 font-[family-name:var(--font-geist-sans)] pb-32">
          <div className="sticky top-0 z-50 flex items-center p-4 bg-zinc-950/80 backdrop-blur-xl border-b border-white/5">
            <Link href="/dashboard">
              <Button variant="ghost" className="w-10 h-10 p-0 rounded-full border border-white/10 text-zinc-400 hover:text-white">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center max-w-md mx-auto w-full">
            <div className="w-20 h-20 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center mb-6 shadow-2xl">
              <Lock className="w-8 h-8 text-zinc-500" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Day Locked</h2>
            <p className="text-zinc-400 mb-8 leading-relaxed">
              You cannot access Day {day} yet. You are currently on Day {currentActiveDay}. Complete your active challenge first!
            </p>
            <Link href={`/day/${currentActiveDay}`}>
              <Button className="w-full bg-white text-indigo-950 hover:bg-zinc-200 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                Go to Day {currentActiveDay}
              </Button>
            </Link>
          </div>
        </div>
      </AuthGuard>
    );
  }

  return (
    <AuthGuard>
      <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-100 font-[family-name:var(--font-geist-sans)] pb-72 lg:pb-16">
        {/* Top Navigation Bar */}
        <div className="sticky top-0 z-50 flex items-center justify-between p-4 bg-zinc-950/80 backdrop-blur-xl border-b border-white/5">
          <Link href="/dashboard">
            <Button variant="ghost" className="w-10 h-10 p-0 rounded-full border border-white/10 text-zinc-400 hover:text-white">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <span className="font-bold text-sm tracking-widest uppercase text-indigo-400">
            Day {day}
          </span>
          <div className="w-10 h-10" /> {/* Spacer for centering */}
        </div>

        <div className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 space-y-8">
          
          {/* Header Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-5"
          >
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="outline" className={getDifficultyColor(challenge.difficulty)}>
                {challenge.difficulty}
              </Badge>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                <Clock className="w-3.5 h-3.5" />
                {challenge.estTime}
              </div>
            </div>

            <h1 className="text-2xl md:text-4xl font-extrabold text-white leading-tight">
              {challenge.title}
            </h1>

            <p className="text-base md:text-lg text-zinc-400 leading-relaxed max-w-3xl">
              {challenge.description}
            </p>
          </motion.section>

          {/* Two-column on desktop: Objectives left, Tasks right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Learning Objectives */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-4"
            >
              <h2 className="text-xl font-bold flex items-center gap-2 text-white">
                <Zap className="w-5 h-5 text-yellow-400" />
                Learning Objectives
              </h2>
              <Card className="bg-white/5 border-white/10 h-fit">
                <CardContent className="p-5">
                  <ul className="space-y-3">
                    {objectives.map((obj, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                        <span className="leading-relaxed">{obj}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.section>

            {/* Action Checklist */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold flex items-center gap-2 text-white">
                  <Code2 className="w-5 h-5 text-emerald-400" />
                  Your Tasks
                </h2>
                <span className="text-xs font-bold text-zinc-500">
                  {tasks.filter(t => t.completed).length} / {tasks.length} Done
                </span>
              </div>
              
              <div className="space-y-2">
                {tasks.map((task) => (
                  <div 
                    key={task.id}
                    onClick={() => toggleTask(task.id)}
                    className={cn(
                      "flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all border",
                      task.completed 
                        ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-100" 
                        : "bg-white/5 border-white/5 hover:border-white/10 hover:bg-white/10 text-zinc-300"
                    )}
                  >
                    {task.completed ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    ) : (
                      <Circle className="w-5 h-5 text-zinc-500 shrink-0" />
                    )}
                    <span className={cn("text-sm font-medium", task.completed && "line-through text-emerald-400/50")}>
                      {task.text}
                    </span>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Resources */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h2 className="text-xl font-bold flex items-center gap-2 text-white">
              <BookOpen className="w-5 h-5 text-blue-400" />
              Resources
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {resources.map((res, i) => (
                <a href={res.url} key={i} className="group">
                  <Card className="bg-white/5 border-white/10 transition-colors group-hover:bg-white/10 group-hover:border-white/20 h-full">
                    <CardContent className="p-4 flex items-center justify-between gap-3 h-full">
                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400">
                          {res.type}
                        </span>
                        <span className="text-sm font-semibold text-zinc-200 line-clamp-2">
                          {res.title}
                        </span>
                      </div>
                      <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-white shrink-0" />
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </motion.section>

        </div>

        {/* Fixed CTA Bar */}
        <motion.div 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 20 }}
          className="fixed bottom-20 left-0 right-0 px-4 pb-2 z-50 flex justify-center"
        >
          <div className="w-full max-w-4xl bg-zinc-900/95 backdrop-blur-xl border border-white/10 p-3 rounded-2xl shadow-2xl">
            {isSubmitted ? (
              <div className="flex items-center justify-between gap-3">
                <div className="text-sm font-medium text-emerald-400 flex items-center gap-2 shrink-0">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Proof Accepted</span>
                </div>
                <Link href="/dashboard">
                  <Button className="bg-zinc-800 hover:bg-zinc-700 text-white shadow-lg border border-white/10 px-4 text-sm">
                    Back to Dashboard
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs font-medium text-zinc-400 hidden sm:block">Done with the code?</p>
                <Link href="/submit" className="w-full sm:w-auto">
                  <Button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/20 text-sm">
                    Submit Proof of Work
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AuthGuard>
  );
}
