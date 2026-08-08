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

// Mock Data for Day 12
const CHALLENGE_DATA = {
  day: 12,
  title: "Building a Global State Manager",
  description: "Stop prop drilling. Today we will build a robust global state management solution from scratch using React Context and the useReducer hook. This pattern is the foundation for libraries like Redux.",
  difficulty: "Hard",
  estTime: "1.5 Hours",
  objectives: [
    "Understand when to use Context vs local state",
    "Implement the useReducer hook for complex state logic",
    "Create a custom provider component",
    "Consume context cleanly using a custom hook"
  ],
  tasks: [
    { id: 1, text: "Read the official React docs on Context", completed: true },
    { id: 2, text: "Scaffold the AuthContext provider", completed: true },
    { id: 3, text: "Implement the login/logout reducer logic", completed: false },
    { id: 4, text: "Wrap the application tree", completed: false },
    { id: 5, text: "Submit proof of work on GitHub", completed: false },
  ],
  resources: [
    { title: "React Docs: Passing Data Deeply", url: "#", type: "Reading" },
    { title: "Kent C. Dodds: How to use React Context effectively", url: "#", type: "Article" },
    { title: "Video Walkthrough", url: "#", type: "Video" }
  ]
};

export default function ChallengePage() {
  const params = useParams();
  const day = parseInt(params.day as string) || CHALLENGE_DATA.day;
  const { submittedDays } = useAppContext();
  
  const currentActiveDay = submittedDays.length + 1;
  const isSubmitted = submittedDays.includes(day);
  const isLocked = day > currentActiveDay;

  // Local state for the checklist
  const [tasks, setTasks] = React.useState(CHALLENGE_DATA.tasks);

  const toggleTask = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
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
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-100 font-[family-name:var(--font-geist-sans)] pb-32">
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

      <div className="flex-1 p-4 sm:p-5 space-y-8 max-w-2xl mx-auto w-full">
        
        {/* Header Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="outline" className={getDifficultyColor(CHALLENGE_DATA.difficulty)}>
              {CHALLENGE_DATA.difficulty}
            </Badge>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
              <Clock className="w-3.5 h-3.5" />
              {CHALLENGE_DATA.estTime}
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
            {CHALLENGE_DATA.title}
          </h1>

          <p className="text-lg text-zinc-400 leading-relaxed">
            {CHALLENGE_DATA.description}
          </p>
        </motion.section>

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
          <Card className="bg-white/5 border-white/10">
            <CardContent className="p-5">
              <ul className="space-y-3">
                {CHALLENGE_DATA.objectives.map((obj, i) => (
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
          <div className="grid gap-3 sm:grid-cols-2">
            {CHALLENGE_DATA.resources.map((res, i) => (
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

      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 20 }}
        className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-zinc-950 via-zinc-950 to-transparent z-50 flex justify-center"
      >
        <div className="w-full max-w-2xl bg-zinc-900/90 backdrop-blur-xl border border-white/10 p-3 rounded-2xl flex items-center justify-between shadow-2xl">
          {isSubmitted ? (
            <>
              <div className="text-sm font-medium text-emerald-400 ml-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> Proof Accepted
              </div>
              <Link href="/dashboard" className="w-full sm:w-auto">
                <Button className="w-full bg-zinc-800 hover:bg-zinc-700 text-white shadow-lg border border-white/10 px-8">
                  Back to Dashboard
                </Button>
              </Link>
            </>
          ) : (
            <>
              <div className="hidden sm:block text-sm font-medium text-zinc-400 ml-2">
                Done with the code?
              </div>
              <Link href="/submit" className="w-full sm:w-auto">
                <Button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/20 px-8">
                  Submit Proof of Work
                </Button>
              </Link>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
}
