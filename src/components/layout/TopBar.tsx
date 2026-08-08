"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Bell, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

type TopBarProps = React.HTMLAttributes<HTMLElement>;

export function TopBar({ className, ...props }: TopBarProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full backdrop-blur-2xl bg-[#09090b]/80 border-b border-white/5 px-6 py-4 flex items-center justify-between shadow-[0_10px_30px_rgba(0,0,0,0.5)]",
        className
      )}
      {...props}
    >
      <Link href="/dashboard" className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg">
        <div className="bg-gradient-to-tr from-indigo-500 to-violet-500 p-1.5 rounded-lg shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform">
          <Sparkles className="w-4 h-4 text-white" />
        </div>
        <span className="font-bold text-lg tracking-tight text-zinc-100">AbTalks</span>
      </Link>
      <Link href="/notifications">
        <motion.button 
          aria-label="View Notifications"
          whileHover={{ scale: 1.1, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          className="relative p-2 text-zinc-400 hover:text-zinc-100 transition-colors rounded-full hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
        >
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2.5 w-2 h-2 bg-indigo-500 rounded-full border border-zinc-950" />
        </motion.button>
      </Link>
    </header>
  );
}
