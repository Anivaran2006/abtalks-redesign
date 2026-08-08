"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, Link as LinkIcon, Send, Trophy, Flame, Zap } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card, CardContent } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import { useSubmissionForm } from "@/hooks/useSubmissionForm";

export function SubmissionForm() {
  const {
    githubUrl, setGithubUrl,
    commitUrl, setCommitUrl,
    linkedinUrl, setLinkedinUrl,
    isSubmitting,
    isSuccess, setIsSuccess,
    errors, setErrors,
    handleSubmit
  } = useSubmissionForm();

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center text-center p-8 bg-zinc-950/80 backdrop-blur-xl border border-indigo-500/30 rounded-3xl shadow-2xl shadow-indigo-500/10 relative overflow-hidden w-full max-w-xl mx-auto"
      >
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-indigo-500/20 blur-[60px] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center">
          {/* Badge Unlock Animation */}
          <motion.div 
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", damping: 12, delay: 0.2 }}
            className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 p-1 mb-6 shadow-[0_0_30px_rgba(99,102,241,0.6)]"
          >
            <div className="w-full h-full bg-zinc-950 rounded-full flex items-center justify-center border-2 border-indigo-500/50">
              <Trophy className="w-8 h-8 text-indigo-400" />
            </div>
          </motion.div>

          <h3 className="text-3xl font-extrabold text-white mb-2">Proof Accepted!</h3>
          <p className="text-zinc-400 mb-8 max-w-sm">
            Incredible work today. You are building habits that will change your career trajectory.
          </p>

          <div className="grid grid-cols-2 gap-4 w-full mb-8">
            {/* Streak Counter */}
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center justify-center p-4 bg-orange-500/10 border border-orange-500/20 rounded-2xl"
            >
              <Flame className="w-6 h-6 text-orange-500 mb-2" />
              <div className="flex items-baseline gap-1 text-2xl font-black text-white">
                <span className="text-zinc-500 line-through text-lg">15</span>
                <span className="text-orange-400">16</span>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-orange-500 mt-1">Day Streak</span>
            </motion.div>

            {/* XP Reward */}
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col items-center justify-center p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl"
            >
              <Zap className="w-6 h-6 text-emerald-500 mb-2" />
              <div className="text-2xl font-black text-emerald-400">
                +500
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-500 mt-1">XP Earned</span>
            </motion.div>
          </div>

          <Button 
            onClick={() => setIsSuccess(false)} 
            className="w-full bg-white text-indigo-950 hover:bg-zinc-200 h-12 text-base font-semibold shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            Return to Dashboard
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <Card className="w-full max-w-xl mx-auto bg-white/5 border-white/10">
      <CardContent className="p-6 sm:p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-white">Submit Proof of Work</h2>
            <p className="text-sm text-zinc-400">Share your progress to maintain your streak.</p>
          </div>

          <div className="space-y-5">
            {/* GitHub Repo Field */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-zinc-300 flex items-center gap-2">
                <FaGithub className="w-4 h-4" /> GitHub Repository
              </label>
              <Input 
                placeholder="https://github.com/username/repo" 
                value={githubUrl}
                onChange={(e) => { setGithubUrl(e.target.value); setErrors(prev => ({...prev, github: ""})); }}
                className={cn(errors.github && "border-rose-500/50 focus:ring-rose-500/20")}
              />
              <AnimatePresence>
                {errors.github ? (
                  <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="text-xs text-rose-400 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3 h-3" /> {errors.github}
                  </motion.p>
                ) : (
                  <p className="text-xs text-zinc-500 mt-1">The public repository containing today's code.</p>
                )}
              </AnimatePresence>
            </div>

            {/* Commit URL Field */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-zinc-300 flex items-center gap-2">
                <LinkIcon className="w-4 h-4" /> Commit URL
              </label>
              <Input 
                placeholder="https://github.com/username/repo/commit/..." 
                value={commitUrl}
                onChange={(e) => { setCommitUrl(e.target.value); setErrors(prev => ({...prev, commit: ""})); }}
                className={cn(errors.commit && "border-rose-500/50 focus:ring-rose-500/20")}
              />
              <AnimatePresence>
                {errors.commit ? (
                  <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="text-xs text-rose-400 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3 h-3" /> {errors.commit}
                  </motion.p>
                ) : (
                  <p className="text-xs text-zinc-500 mt-1">Direct link to the specific commit for this challenge.</p>
                )}
              </AnimatePresence>
            </div>

            {/* LinkedIn Post Field */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-zinc-300 flex items-center gap-2">
                <FaLinkedin className="w-4 h-4" /> LinkedIn Post URL
              </label>
              <Input 
                placeholder="https://www.linkedin.com/posts/..." 
                value={linkedinUrl}
                onChange={(e) => { setLinkedinUrl(e.target.value); setErrors(prev => ({...prev, linkedin: ""})); }}
                className={cn(errors.linkedin && "border-rose-500/50 focus:ring-rose-500/20")}
              />
              <AnimatePresence>
                {errors.linkedin ? (
                  <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="text-xs text-rose-400 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3 h-3" /> {errors.linkedin}
                  </motion.p>
                ) : (
                  <p className="text-xs text-zinc-500 mt-1">Share your learnings publicly to build your network.</p>
                )}
              </AnimatePresence>
            </div>
          </div>

          <Button 
            type="submit" 
            disabled={isSubmitting} 
            className="w-full gap-2 bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/20 h-12 text-base"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Verifying...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                Submit Proof <Send className="w-4 h-4" />
              </span>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
