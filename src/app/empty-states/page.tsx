"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowLeft, Rocket, AlertTriangle, Flame, UserCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";
export default function EmptyStatesShowcase() {
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
          Empty States
        </span>
        <div className="w-10 h-10" />
      </div>

      <div className="flex-1 p-4 sm:p-5 space-y-12 max-w-2xl mx-auto w-full pt-8">
        
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white mb-2 border-b border-white/10 pb-2">1. New Student (No Data)</h2>
          <EmptyState 
            icon={Rocket}
            title="Welcome to the Challenge!"
            description="You are at the starting line. Your 60-day journey to mastering code begins today. Complete your first challenge to ignite your streak."
            actionLabel="Start Day 1 Challenge"
            variant="indigo"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white mb-2 border-b border-white/10 pb-2">2. Missing Submissions</h2>
          <EmptyState 
            icon={AlertTriangle}
            title="Waiting for Proof"
            description="You have completed the challenge, but haven't submitted your proof of work yet. Submit your GitHub link to lock in today's progress."
            actionLabel="Submit Proof Now"
            variant="warning"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white mb-2 border-b border-white/10 pb-2">3. No Streak (Streak Broken)</h2>
          <EmptyState 
            icon={Flame}
            title="Streak Reset"
            description="Consistency is hard, but bouncing back is what makes a great developer. Dust yourself off and start a new streak today."
            actionLabel="Reignite Streak"
            variant="default"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white mb-2 border-b border-white/10 pb-2">4. Incomplete Profile</h2>
          <EmptyState 
            icon={UserCircle2}
            title="Profile Incomplete"
            description="Recruiters can't see your awesome progress! Add your LinkedIn and GitHub profiles to get discovered."
            actionLabel="Complete Profile"
            variant="indigo"
          />
        </section>

      </div>
    </div>
  );
}
