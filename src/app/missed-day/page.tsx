"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Flame, Snowflake, HeartPulse, ShieldAlert, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import confetti from "canvas-confetti";

export default function MissedDayPage() {
  const [freezeUsed, setFreezeUsed] = React.useState(false);

  const handleUseFreeze = () => {
    setFreezeUsed(true);
    // Trigger ice confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#38bdf8', '#818cf8', '#e0f2fe']
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-100 font-[family-name:var(--font-geist-sans)] pb-32">
      {/* Top Navigation Bar */}
      <div className="sticky top-0 z-50 flex items-center justify-between p-4 bg-zinc-950/80 backdrop-blur-xl border-b border-white/5">
        <Link href="/dashboard">
          <Button variant="ghost" className="w-10 h-10 p-0 rounded-full border border-white/10 text-zinc-400 hover:text-white">
            <ArrowLeft className="w-5 h-5" />
          </Button>
        </Link>
        <span className="font-bold text-sm tracking-widest uppercase text-zinc-500">
          Streak Status
        </span>
        <div className="w-10 h-10" />
      </div>

      <div className="flex-1 p-6 flex flex-col justify-center max-w-xl mx-auto w-full pt-12">
        
        <AnimatePresence mode="wait">
          {!freezeUsed ? (
            <motion.div
              key="broken"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex flex-col items-center text-center space-y-8"
            >
              {/* Broken Flame Icon */}
              <div className="relative">
                <div className="absolute inset-0 bg-rose-500/20 blur-[50px] rounded-full pointer-events-none" />
                <motion.div 
                  initial={{ rotate: -10 }}
                  animate={{ rotate: 10 }}
                  transition={{ repeat: Infinity, repeatType: "reverse", duration: 2 }}
                  className="w-24 h-24 rounded-full bg-zinc-900 border-2 border-rose-500/30 flex items-center justify-center relative z-10 shadow-[0_0_40px_rgba(244,63,94,0.3)]"
                >
                  <Flame className="w-12 h-12 text-rose-500 opacity-60" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-1 bg-zinc-950 rotate-45 transform" />
                  </div>
                </motion.div>
              </div>

              <div className="space-y-4">
                <h1 className="text-3xl font-extrabold text-white">You missed a day.</h1>
                <p className="text-zinc-400 text-lg max-w-md mx-auto leading-relaxed">
                  Life happens. The most important thing is that you don't let a single missed day stop your entire momentum. Great developers aren't perfect; they are <strong className="text-white">resilient</strong>.
                </p>
              </div>

              <Card className="w-full bg-blue-950/20 border-blue-500/30 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[40px] pointer-events-none" />
                <CardContent className="p-6 sm:p-8 flex flex-col items-center relative z-10">
                  <div className="flex items-center gap-2 mb-4 bg-blue-500/10 px-3 py-1.5 rounded-full border border-blue-500/20">
                    <Snowflake className="w-4 h-4 text-blue-400" />
                    <span className="text-sm font-bold text-blue-400 tracking-wide uppercase">1 Freeze Available</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">Save your 15-Day Streak?</h3>
                  <p className="text-sm text-zinc-400 mb-6 text-center">
                    You earned a streak freeze on Day 7. Use it now to keep your streak alive and jump right back in without losing your progress.
                  </p>

                  <div className="w-full space-y-3">
                    <Button 
                      onClick={handleUseFreeze}
                      className="w-full h-14 bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.3)] text-base font-bold gap-2"
                    >
                      <Snowflake className="w-5 h-5" /> Use Streak Freeze
                    </Button>
                    <Button variant="ghost" className="w-full text-zinc-500 hover:text-white">
                      Accept Loss & Start Over
                    </Button>
                  </div>
                </CardContent>
              </Card>

            </motion.div>
          ) : (
            <motion.div
              key="saved"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center text-center space-y-8"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/30 blur-[60px] rounded-full pointer-events-none" />
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center relative z-10 shadow-[0_0_40px_rgba(59,130,246,0.5)] border-4 border-zinc-950">
                  <Snowflake className="w-12 h-12 text-white" />
                </div>
              </div>

              <div className="space-y-4">
                <h1 className="text-3xl font-extrabold text-white">Streak Saved!</h1>
                <p className="text-blue-200 text-lg max-w-md mx-auto leading-relaxed">
                  Your 15-Day streak is safely frozen in time. Take a deep breath, and let's get back to writing code today.
                </p>
              </div>

              <Link href="/dashboard" className="w-full">
                <Button className="w-full h-14 bg-white hover:bg-zinc-200 text-zinc-950 shadow-[0_0_30px_rgba(255,255,255,0.2)] text-base font-bold gap-2">
                  Return to Dashboard <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
