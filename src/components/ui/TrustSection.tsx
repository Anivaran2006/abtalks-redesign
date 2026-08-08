"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Users, Trophy, Target, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";

const stats = [
  { label: "Active Students", value: "5,200+", icon: Users, color: "text-indigo-400" },
  { label: "Projects Built", value: "15,000+", icon: Trophy, color: "text-violet-400" },
  { label: "Avg Placement", value: "$95k", icon: Target, color: "text-emerald-400" },
];

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Frontend Developer @ TechCorp",
    quote: "The 60-day challenge completely transformed my portfolio. I went from tutorial hell to building production-ready apps.",
  },
  {
    name: "Michael Chen",
    role: "Software Engineer",
    quote: "The rigor of the daily commits forced me to build a real habit. Got hired exactly 3 weeks after finishing.",
  },
];

export function TrustSection() {
  return (
    <section className="w-full flex flex-col space-y-12 py-12 relative z-10">
      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-3">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
            >
              <Icon className={`w-5 h-5 mb-2 ${stat.color}`} />
              <span className="text-xl font-bold tracking-tight text-zinc-100">{stat.value}</span>
              <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-semibold text-center mt-1">{stat.label}</span>
            </motion.div>
          );
        })}
      </div>

      {/* Recruiter Benefits & Branding */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex flex-col space-y-6"
      >
        <div className="flex items-center justify-center gap-6 opacity-60">
          <div className="flex items-center gap-2 text-zinc-400 font-semibold">
            <Github className="w-5 h-5" /> GitHub
          </div>
          <div className="flex items-center gap-2 text-zinc-400 font-semibold">
            <Linkedin className="w-5 h-5" /> LinkedIn
          </div>
        </div>

        <Card className="bg-gradient-to-br from-indigo-500/10 to-violet-500/10 border-indigo-500/20">
          <CardContent className="p-6 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-400">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-zinc-100">Why Recruiters Love Us</h3>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Students graduating from this challenge have demonstrated the consistency, problem-solving skills, and 
              GitHub commit history that top-tier companies actively source for.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Testimonials */}
      <div className="flex flex-col space-y-4">
        <h3 className="text-lg font-bold text-zinc-100">Student Success</h3>
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {testimonials.map((t, i) => (
            <Card key={i} className="min-w-[280px] snap-center shrink-0 bg-white/5 border-white/10">
              <CardContent className="p-5 flex flex-col gap-4 h-full justify-between">
                <p className="text-sm text-zinc-300 leading-relaxed italic">"{t.quote}"</p>
                <div className="flex flex-col">
                  <span className="font-semibold text-zinc-100 text-sm">{t.name}</span>
                  <span className="text-xs text-indigo-400">{t.role}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
