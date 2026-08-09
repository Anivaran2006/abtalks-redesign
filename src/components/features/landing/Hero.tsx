"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Rocket, Code2, Zap } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3], rotate: [0, 90, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[20%] w-[70%] h-[70%] rounded-full bg-indigo-600/30 blur-[80px]"
        />
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2], rotate: [0, -90, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[10%] -right-[10%] w-[60%] h-[60%] rounded-full bg-violet-600/30 blur-[60px]"
        />
      </div>

      {/* Floating Shapes */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-8 left-4 lg:left-12 bg-white/5 backdrop-blur-md border border-white/10 p-3 rounded-2xl z-10"
      >
        <Code2 className="w-5 h-5 text-indigo-400" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-28 right-4 lg:right-12 bg-white/5 backdrop-blur-md border border-white/10 p-3 rounded-2xl z-10"
      >
        <Zap className="w-5 h-5 text-violet-400" />
      </motion.div>

      {/* ── Responsive Hero Layout ── */}
      {/* Mobile: single column centered. Desktop: two-column with image right */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16 pt-8 pb-8 lg:pt-20 lg:pb-20">

          {/* Text + CTA column */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1">
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
              60-Day Coding Challenge
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-tight"
            >
              Master Code in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
                60 Days.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-sm sm:text-base text-zinc-400 mb-8 max-w-[360px] lg:max-w-[480px] leading-relaxed"
            >
              An intensive 60-day coding challenge to build real projects, master algorithms, and level up your career.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="w-full max-w-[320px] lg:max-w-xs"
            >
              <Link href="/dashboard" className="w-full block">
                <Button size="lg" className="w-full gap-2 text-base h-14 rounded-2xl shadow-[0_0_40px_-10px_rgba(99,102,241,0.5)] hover:shadow-[0_0_60px_-15px_rgba(99,102,241,0.7)] transition-shadow font-bold">
                  Start 60-Day Challenge
                  <Rocket className="w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Image column — always shown, right side on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative flex justify-center mt-8 lg:mt-0 lg:flex-1"
          >
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-80 lg:h-80 drop-shadow-[0_0_40px_rgba(99,102,241,0.4)]">
              <Image
                src="/hero-illustration.png"
                alt="60 Day Coding Challenge"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
