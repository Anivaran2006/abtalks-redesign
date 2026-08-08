"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Rocket, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <section className="w-full py-16 relative z-10 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative w-full overflow-hidden rounded-3xl bg-gradient-to-b from-indigo-500/20 to-violet-900/40 border border-indigo-500/30 p-8 flex flex-col items-center text-center shadow-2xl shadow-indigo-500/10"
      >
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-indigo-500/30 blur-[60px] rounded-full pointer-events-none" />
        
        <h2 className="text-3xl font-extrabold text-white mb-4 relative z-10 leading-tight">
          Ready to change <br /> your trajectory?
        </h2>
        
        <p className="text-sm text-indigo-200 mb-8 max-w-[280px] relative z-10">
          Stop watching tutorials. Start building real projects and join 5,000+ developers leveling up their careers.
        </p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full relative z-10"
        >
          <Button size="lg" className="w-full gap-2 h-14 text-base bg-white text-indigo-950 hover:bg-zinc-200 shadow-[0_0_40px_-10px_rgba(255,255,255,0.4)]">
            Start Your 60 Days
            <Rocket className="w-5 h-5" />
          </Button>
        </motion.div>

        {/* Social Proof */}
        <div className="flex flex-col items-center mt-8 space-y-3 relative z-10">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full bg-zinc-800 border-2 border-indigo-900 flex items-center justify-center overflow-hidden">
                <Image src={`https://api.dicebear.com/7.x/notionists/svg?seed=${i + 10}&backgroundColor=transparent`} alt="avatar" width={32} height={32} unoptimized />
              </div>
            ))}
          </div>
          <div className="flex items-center gap-1.5 text-xs text-indigo-300 font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            Join 5,200+ active students
          </div>
        </div>
      </motion.div>
    </section>
  );
}
