"use client";

import * as React from "react";
import { motion, useReducedMotion, Variants } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Rocket, Code2, Zap } from "lucide-react";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";

export function Hero() {
  const { isAuthenticated } = useAppContext();
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemFadeUp: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  const itemScale: Variants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  // Gentle floating effect for the hero image
  const floatingAnimation = shouldReduceMotion
    ? {}
    : {
        y: [-4, 4],
        transition: {
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse" as const,
          ease: "easeInOut" as const,
        },
      };

  return (
    <section className="relative w-full flex flex-col items-center pt-12 pb-8 overflow-hidden rounded-3xl mt-4">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                  rotate: [0, 90, 0],
                }
          }
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[20%] w-[70%] h-[70%] rounded-full bg-indigo-600/30 blur-[80px]"
        />
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  scale: [1, 1.5, 1],
                  opacity: [0.2, 0.4, 0.2],
                  rotate: [0, -90, 0],
                }
          }
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[10%] -right-[10%] w-[60%] h-[60%] rounded-full bg-violet-600/30 blur-[60px]"
        />
      </div>

      {/* Floating Shapes - Hidden on very small screens to avoid clutter */}
      <motion.div
        animate={shouldReduceMotion ? {} : { y: [0, -15, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-4 bg-white/5 backdrop-blur-md border border-white/10 p-3 rounded-2xl hidden sm:block"
      >
        <Code2 className="w-5 h-5 text-indigo-400" />
      </motion.div>

      <motion.div
        animate={shouldReduceMotion ? {} : { y: [0, 15, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-32 right-4 bg-white/5 backdrop-blur-md border border-white/10 p-3 rounded-2xl hidden sm:block"
      >
        <Zap className="w-5 h-5 text-violet-400" />
      </motion.div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-sm mx-auto"
      >
        {/* Hero Image */}
        <motion.div variants={itemFadeUp} className="relative mb-8 drop-shadow-[0_0_30px_rgba(99,102,241,0.3)]">
          <motion.div animate={floatingAnimation} className="relative w-48 h-48">
            <Image
              src="/hero-illustration.png"
              alt="60 Day Coding Challenge"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Cohort Badge */}
        <motion.div
          variants={itemScale}
          className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[11px] sm:text-xs font-semibold tracking-wide uppercase mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Next Cohort Starts Soon
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemFadeUp}
          className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-5 leading-tight"
        >
          Master Code in <br />
          <span className="relative inline-block mt-1">
            {/* Shimmer/Pulse effect behind the text */}
            <motion.span
              animate={shouldReduceMotion ? {} : { opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-violet-500 blur-xl mix-blend-screen rounded-lg"
            ></motion.span>
            
            {/* Animated Gradient Text */}
            <motion.span
              animate={shouldReduceMotion ? {} : { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              className="relative text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-400 bg-[length:200%_auto]"
            >
              60 Days.
            </motion.span>
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemFadeUp}
          className="text-sm sm:text-base text-zinc-400 mb-8 max-w-[320px] leading-relaxed"
        >
          Join an elite cohort. Build real-world projects, conquer algorithms, and level up your career with our intensive, hands-on challenge.
        </motion.p>

        {/* CTA */}
        <motion.div variants={itemFadeUp} className="w-full flex justify-center">
          <Link href={isAuthenticated ? "/dashboard" : "/signup"} className="w-full relative group block">
            {/* Subtle animated glow behind the button */}
            <motion.div
              animate={shouldReduceMotion ? {} : { opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-2xl blur-md group-hover:opacity-70 group-hover:blur-lg transition-all duration-500"
            ></motion.div>

            {/* Button */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                className="relative w-full h-14 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-base shadow-[0_0_20px_-5px_rgba(99,102,241,0.5)] border border-indigo-400/30 flex flex-row items-center justify-center flex-nowrap whitespace-nowrap overflow-hidden transition-colors"
              >
                <span>{isAuthenticated ? "Go to Dashboard" : "Join the Challenge"}</span>
                <Rocket className="w-5 h-5 shrink-0 ml-2" />
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
