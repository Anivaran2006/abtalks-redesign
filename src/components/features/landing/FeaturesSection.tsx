"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Flame, CalendarDays, Eye, Repeat, BookOpen, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";

export function FeaturesSection() {
  return (
    <section className="w-full py-12 relative z-10 flex flex-col space-y-6">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold text-white mb-2">Everything You Need</h2>
        <p className="text-sm text-zinc-400">Tools designed to keep you accountable.</p>
      </div>

      <div className="flex flex-col space-y-4">
        {/* Large Feature: Streak Tracking */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-br from-orange-500/10 to-red-500/5 border-orange-500/20 overflow-hidden">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-orange-500/20 rounded-2xl text-orange-400">
                  <Flame className="w-6 h-6" />
                </div>
                <div className="bg-zinc-950/50 px-3 py-1 rounded-full border border-white/10 text-xs font-bold text-orange-400 flex items-center gap-1">
                  14 Day Streak!
                </div>
              </div>
              <h3 className="text-xl font-bold text-zinc-100 mb-2">Streak Tracking</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Visualizing your daily progress is the ultimate motivation. Don&apos;t break the chain.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Bento Row: Daily Challenges & Consistency */}
        <div className="grid grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Card className="h-full bg-white/5 border-white/10">
              <CardContent className="p-5">
                <CalendarDays className="w-6 h-6 text-indigo-400 mb-4" />
                <h3 className="font-semibold text-zinc-100 mb-1 text-sm">Daily Tasks</h3>
                <p className="text-xs text-zinc-400">Real-world coding challenges.</p>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="h-full bg-white/5 border-white/10">
              <CardContent className="p-5">
                <Repeat className="w-6 h-6 text-emerald-400 mb-4" />
                <h3 className="font-semibold text-zinc-100 mb-1 text-sm">Consistency</h3>
                <p className="text-xs text-zinc-400">Build habits that last a lifetime.</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Medium Feature: Recruiter Visibility */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Card className="bg-gradient-to-tr from-violet-500/10 to-indigo-500/10 border-indigo-500/20">
            <CardContent className="p-6 relative overflow-hidden">
              <div className="absolute right-[-20px] top-[-20px] w-32 h-32 bg-indigo-500/20 blur-[40px] rounded-full" />
              <Eye className="w-6 h-6 text-indigo-400 mb-4 relative z-10" />
              <h3 className="text-lg font-bold text-zinc-100 mb-2 relative z-10">Recruiter Visibility</h3>
              <p className="text-sm text-zinc-400 mb-4 relative z-10">
                Top companies actively scout our leaderboards. Your streak is your resume.
              </p>
              <div className="flex -space-x-3 relative z-10">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-zinc-800 border-2 border-zinc-950 flex items-center justify-center overflow-hidden">
                    <Image src={`https://api.dicebear.com/7.x/notionists/svg?seed=${i}&backgroundColor=transparent`} alt="avatar" width={32} height={32} unoptimized />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Bento Row: Learning & Community */}
        <div className="grid grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Card className="h-full bg-white/5 border-white/10 text-center flex flex-col items-center justify-center">
              <CardContent className="p-5 flex flex-col items-center">
                <BookOpen className="w-6 h-6 text-pink-400 mb-3" />
                <h3 className="font-semibold text-zinc-100 text-sm">Deep Learning</h3>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Card className="h-full bg-white/5 border-white/10 text-center flex flex-col items-center justify-center">
              <CardContent className="p-5 flex flex-col items-center">
                <Users className="w-6 h-6 text-cyan-400 mb-3" />
                <h3 className="font-semibold text-zinc-100 text-sm">Vibrant Community</h3>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
