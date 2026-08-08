"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Sparkles, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { Progress } from "@/components/ui/Progress";
import { Hero } from "@/components/ui/Hero";
import { TrustSection } from "@/components/ui/TrustSection";
import { TimelineSection } from "@/components/ui/TimelineSection";

export default function Home() {
  const [progress, setProgress] = React.useState(15);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(85), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col p-6 font-[family-name:var(--font-geist-sans)] text-zinc-100 overflow-x-hidden">
      <Hero />
      <TrustSection />
      <TimelineSection />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full flex flex-col space-y-8 mt-8"
      >
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-indigo-400" />
              AbTalks
            </h1>
            <p className="text-sm text-zinc-400 mt-1">Premium Design System</p>
          </div>
          <Badge>v1.0</Badge>
        </div>

        <section className="space-y-4">
          <h2 className="text-sm font-semibold tracking-wider text-zinc-500 uppercase">Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-sm font-semibold tracking-wider text-zinc-500 uppercase">Inputs</h2>
          <div className="relative">
            <Mail className="absolute left-3 top-3.5 h-5 w-5 text-zinc-500" />
            <Input placeholder="Email address" className="pl-10" />
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-sm font-semibold tracking-wider text-zinc-500 uppercase">Progress</h2>
          <Card className="p-6">
            <div className="flex justify-between text-sm mb-3">
              <span className="text-zinc-300">System initialization</span>
              <span className="text-indigo-400 font-medium">{progress}%</span>
            </div>
            <Progress value={progress} />
          </Card>
        </section>

        <section className="space-y-4">
          <h2 className="text-sm font-semibold tracking-wider text-zinc-500 uppercase">Cards</h2>
          <Card>
            <CardHeader>
              <CardTitle>Glassmorphic Card</CardTitle>
              <CardDescription>
                Features 2xl rounded corners, subtle backdrop blur, and semi-transparent borders.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-xl bg-zinc-950/50 p-4 border border-white/5">
                <p className="text-sm text-zinc-300">
                  Perfect for highlighting premium content and keeping the UI feeling deep and layered.
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Continue</Button>
            </CardFooter>
          </Card>
        </section>

      </motion.div>
    </div>
  );
}
