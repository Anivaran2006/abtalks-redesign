"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, SlidersHorizontal, X, Clock, ChevronRight, Lock } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import { CHALLENGES, TOPICS, type Topic } from "@/lib/challenges";
import { AuthGuard } from "@/components/auth/AuthGuard";
import { useAppContext } from "@/context/AppContext";

const DIFFICULTY_COLORS = {
  Easy: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
  Medium: "text-orange-400 border-orange-400/30 bg-orange-400/10",
  Hard: "text-rose-400 border-rose-400/30 bg-rose-400/10",
};

export default function ExplorePage() {
  const { submittedDays } = useAppContext();
  const currentActiveDay = submittedDays.length + 1;

  const [query, setQuery] = React.useState("");
  const [selectedTopic, setSelectedTopic] = React.useState<Topic>("All");
  const [selectedDifficulty, setSelectedDifficulty] = React.useState<string>("All");
  const [showFilters, setShowFilters] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const filteredChallenges = React.useMemo(() => {
    return CHALLENGES.filter((c) => {
      const matchesQuery =
        !query ||
        c.title.toLowerCase().includes(query.toLowerCase()) ||
        c.tags.some((t) => t.toLowerCase().includes(query.toLowerCase())) ||
        c.description.toLowerCase().includes(query.toLowerCase());

      const matchesTopic = selectedTopic === "All" || c.topic === selectedTopic;
      const matchesDifficulty = selectedDifficulty === "All" || c.difficulty === selectedDifficulty;

      return matchesQuery && matchesTopic && matchesDifficulty;
    });
  }, [query, selectedTopic, selectedDifficulty]);

  const clearFilters = () => {
    setQuery("");
    setSelectedTopic("All");
    setSelectedDifficulty("All");
  };

  const hasActiveFilters = query || selectedTopic !== "All" || selectedDifficulty !== "All";

  return (
    <AuthGuard>
      <div className="flex flex-col min-h-screen bg-[#09090b] text-zinc-100 font-[family-name:var(--font-geist-sans)] pb-32 lg:pb-8">

        {/* Sticky Search Header */}
        <div className="sticky top-0 z-50 bg-[#09090b]/80 backdrop-blur-xl border-b border-white/5">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-3">
            {/* Title Row */}
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-bold tracking-tight">Explore 60-Day Challenges</h1>
              <Button
                onClick={() => setShowFilters((v) => !v)}
                variant="ghost"
                className={cn(
                  "w-10 h-10 p-0 rounded-full border border-white/10 text-zinc-400 hover:text-white relative",
                  showFilters && "border-indigo-500/50 text-indigo-400"
                )}
              >
                <SlidersHorizontal className="w-4 h-4" />
                {hasActiveFilters && (
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-indigo-500 rounded-full" />
                )}
              </Button>
            </div>

            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search challenges, tags, topics..."
                className="w-full bg-zinc-900/60 border border-white/10 rounded-xl pl-10 pr-10 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-white placeholder:text-zinc-600"
              />
              {query && (
                <button
                  onClick={() => { setQuery(""); inputRef.current?.focus(); }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Expandable Filters */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden space-y-3"
                >
                  {/* Topic Filter */}
                  <div>
                    <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Topic</p>
                    <div className="flex flex-wrap gap-2">
                      {TOPICS.map((topic) => (
                        <button
                          key={topic}
                          onClick={() => setSelectedTopic(topic)}
                          className={cn(
                            "text-xs px-3 py-1.5 rounded-full border font-medium transition-all",
                            selectedTopic === topic
                              ? "bg-indigo-500/20 border-indigo-500/60 text-indigo-300"
                              : "border-white/10 text-zinc-400 hover:border-white/20 hover:text-white"
                          )}
                        >
                          {topic}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Difficulty Filter */}
                  <div>
                    <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Difficulty</p>
                    <div className="flex gap-2">
                      {["All", "Easy", "Medium", "Hard"].map((d) => (
                        <button
                          key={d}
                          onClick={() => setSelectedDifficulty(d)}
                          className={cn(
                            "text-xs px-3 py-1.5 rounded-full border font-medium transition-all",
                            selectedDifficulty === d
                              ? "bg-indigo-500/20 border-indigo-500/60 text-indigo-300"
                              : "border-white/10 text-zinc-400 hover:border-white/20 hover:text-white"
                          )}
                        >
                          {d}
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Active Filter Badges + Count */}
            <div className="flex items-center justify-between">
              <p className="text-xs text-zinc-500">
                <span className="text-white font-semibold">{filteredChallenges.length}</span> challenges
              </p>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
                >
                  <X className="w-3 h-3" /> Clear filters
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Challenge List / Grid */}
        <div className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-4">
          {filteredChallenges.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center justify-center py-24 text-center"
            >
              <Search className="w-12 h-12 text-zinc-700 mb-4" />
              <h3 className="text-lg font-bold text-zinc-300 mb-1">No results found</h3>
              <p className="text-sm text-zinc-500 mb-4">Try different keywords or clear your filters.</p>
              <Button onClick={clearFilters} variant="secondary" className="border-white/10">
                Clear filters
              </Button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              <AnimatePresence mode="popLayout">
                {filteredChallenges.map((challenge, i) => {
                  const isCompleted = submittedDays.includes(challenge.day);
                  const isActive = challenge.day === currentActiveDay;
                  const isLocked = challenge.day > currentActiveDay;

                  return (
                    <motion.div
                      key={challenge.day}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.97 }}
                      transition={{ delay: Math.min(i * 0.03, 0.3) }}
                      layout
                    >
                      <Link href={isLocked ? "#" : `/day/${challenge.day}`} onClick={(e) => isLocked && e.preventDefault()}>
                        <Card
                          className={cn(
                            "border transition-all duration-200 overflow-hidden group",
                            isCompleted && "bg-emerald-950/20 border-emerald-500/20 hover:border-emerald-500/40",
                            isActive && "bg-indigo-950/30 border-indigo-500/40 hover:border-indigo-500/70 shadow-lg shadow-indigo-500/10",
                            isLocked && "bg-zinc-900/30 border-white/5 opacity-60 cursor-not-allowed",
                            !isCompleted && !isActive && !isLocked && "bg-zinc-900/40 border-white/8 hover:border-white/20 hover:bg-zinc-900/60"
                          )}
                        >
                          <CardContent className="p-4 flex items-start gap-3">
                            {/* Day Badge */}
                            <div
                              className={cn(
                                "w-10 h-10 rounded-xl flex items-center justify-center text-xs font-black shrink-0",
                                isCompleted && "bg-emerald-500/20 text-emerald-400",
                                isActive && "bg-indigo-500/30 text-indigo-300",
                                isLocked && "bg-zinc-800 text-zinc-600",
                                !isCompleted && !isActive && !isLocked && "bg-white/5 text-zinc-400"
                              )}
                            >
                              {isCompleted ? "✓" : isLocked ? <Lock className="w-4 h-4" /> : challenge.day}
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1 flex-wrap">
                                <span className={cn("text-[10px] font-bold px-2 py-0.5 rounded-full border", DIFFICULTY_COLORS[challenge.difficulty])}>
                                  {challenge.difficulty}
                                </span>
                                {isActive && (
                                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 animate-pulse">
                                    CURRENT
                                  </span>
                                )}
                                {isCompleted && (
                                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                                    COMPLETED
                                  </span>
                                )}
                                {isLocked && (
                                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-zinc-500">
                                    LOCKED
                                  </span>
                                )}
                              </div>

                              <h3 className={cn(
                                "font-bold text-sm leading-tight mb-1",
                                isCompleted ? "text-emerald-100" : isLocked ? "text-zinc-500" : "text-white"
                              )}>
                                {challenge.title}
                              </h3>

                              <p className="text-xs text-zinc-500 line-clamp-1 mb-2">{challenge.description}</p>

                              <div className="flex items-center gap-3 text-[10px] text-zinc-600 font-medium">
                                <span className="flex items-center gap-1">
                                  <Clock className="w-3 h-3" /> {challenge.estTime}
                                </span>
                                <span className="text-zinc-700">·</span>
                                <span>{challenge.topic}</span>
                                <span className="text-zinc-700">·</span>
                                <span>Day {challenge.day}</span>
                              </div>
                            </div>

                            {/* Arrow */}
                            {!isLocked && (
                              <ChevronRight className={cn(
                                "w-4 h-4 shrink-0 transition-all mt-1",
                                isCompleted ? "text-emerald-500/50" : "text-zinc-600 group-hover:text-white group-hover:translate-x-0.5"
                              )} />
                            )}
                          </CardContent>
                        </Card>
                      </Link>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </AuthGuard>
  );
}
