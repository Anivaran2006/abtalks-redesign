"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, Lock, User, Sparkles, Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { useAppContext } from "@/context/AppContext";
import { GuestGuard } from "@/components/auth/GuestGuard";

export default function SignupPage() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const { signup } = useAppContext();
  const router = useRouter();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password) return;
    setIsSubmitting(true);
    // Mock API call
    setTimeout(() => {
      signup(name, email);
      router.push("/dashboard");
    }, 1000);
  };

  return (
    <GuestGuard>
      <div className="flex flex-col min-h-screen bg-[#09090b] text-zinc-100 font-[family-name:var(--font-geist-sans)]">
        <div className="p-6">
          <Link href="/">
            <Button variant="ghost" className="w-10 h-10 p-0 rounded-full border border-white/10 text-zinc-400 hover:text-white">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center p-6 w-full max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full"
          >
            <div className="flex items-center gap-2 mb-8 justify-center">
              <div className="bg-gradient-to-tr from-indigo-500 to-violet-500 p-2 rounded-xl shadow-lg shadow-indigo-500/25">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-2xl tracking-tight">AbTalks</span>
            </div>

            <Card className="bg-zinc-900/50 border-white/5 backdrop-blur-xl">
              <CardContent className="p-6 sm:p-8">
                <div className="mb-8">
                  <h1 className="text-2xl font-bold mb-2">Create an account</h1>
                  <p className="text-sm text-zinc-400">Join the 60-day challenge and level up your skills</p>
                </div>

                <form onSubmit={handleSignup} className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                      <input 
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full bg-zinc-950 border border-white/10 rounded-xl px-10 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-white placeholder:text-zinc-600"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                      <input 
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="w-full bg-zinc-950 border border-white/10 rounded-xl px-10 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-white placeholder:text-zinc-600"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                      <input 
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full bg-zinc-950 border border-white/10 rounded-xl px-10 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-white placeholder:text-zinc-600"
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full mt-4 h-12 bg-indigo-600 hover:bg-indigo-500 text-white shadow-[0_0_20px_rgba(79,70,229,0.3)] font-semibold rounded-xl"
                  >
                    {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : "Create Account"}
                  </Button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-sm text-zinc-400">
                    Already have an account?{" "}
                    <Link href="/login" className="text-indigo-400 hover:text-indigo-300 font-medium">
                      Sign in
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </GuestGuard>
  );
}
