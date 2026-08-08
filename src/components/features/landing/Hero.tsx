"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Rocket, Code2, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full flex flex-col items-center pt-12 pb-8 overflow-hidden rounded-3xl mt-4">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[20%] w-[70%] h-[70%] rounded-full bg-indigo-600/30 blur-[80px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[10%] -right-[10%] w-[60%] h-[60%] rounded-full bg-violet-600/30 blur-[60px]"
        />
      </div>

      {/* Floating Shapes */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-4 bg-white/5 backdrop-blur-md border border-white/10 p-3 rounded-2xl"
      >
        <Code2 className="w-5 h-5 text-indigo-400" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-32 right-4 bg-white/5 backdrop-blur-md border border-white/10 p-3 rounded-2xl"
      >
        <Zap className="w-5 h-5 text-violet-400" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-48 h-48 mb-6 drop-shadow-[0_0_30px_rgba(99,102,241,0.4)]"
        >
          <Image
            src="/hero-illustration.png"
            alt="60 Day Coding Challenge"
            fill
            className="object-contain"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold tracking-wide uppercase mb-4"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Next Cohort Starts Soon
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl font-extrabold tracking-tight text-white mb-4 leading-tight"
        >
          Master Code in <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
            60 Days.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-sm text-zinc-400 mb-8 max-w-[280px]"
        >
          Join an elite cohort. Build real-world projects, conquer algorithms, and level up your career with our intensive, hands-on challenge.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex w-full px-2"
        >
          <Button size="lg" className="w-full gap-2 text-base h-14 rounded-2xl shadow-[0_0_40px_-10px_rgba(99,102,241,0.5)] hover:shadow-[0_0_60px_-15px_rgba(99,102,241,0.7)] transition-shadow">
            Join the Challenge
            <Rocket className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
