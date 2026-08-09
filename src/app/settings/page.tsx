"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Bell, Lock, LogOut, Moon, User } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { useAppContext } from "@/context/AppContext";
import { AuthGuard } from "@/components/auth/AuthGuard";
import { useRouter } from "next/navigation";

export default function SettingsPage() {
  const { logout } = useAppContext();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <AuthGuard>
      <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-100 font-[family-name:var(--font-geist-sans)] pb-32 lg:pb-10">
        {/* Top Navigation Bar */}
        <div className="sticky top-0 z-50 flex items-center justify-between p-4 bg-zinc-950/80 backdrop-blur-xl border-b border-white/5">
          <Button onClick={() => router.back()} variant="ghost" className="w-10 h-10 p-0 rounded-full border border-white/10 text-zinc-400 hover:text-white">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <span className="font-bold text-sm tracking-widest uppercase text-zinc-500">
            Settings
          </span>
          <div className="w-10 h-10" />
        </div>

        <div className="flex-1 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full space-y-6">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <h2 className="text-lg font-bold mb-3 px-1">Account</h2>
            <Card className="bg-zinc-900/50 border-white/5 divide-y divide-white/5">
              <CardContent className="p-0">
                <button className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors text-left">
                  <div className="flex items-center gap-3">
                    <User className="w-5 h-5 text-zinc-400" />
                    <span>Personal Information</span>
                  </div>
                </button>
                <button className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors text-left">
                  <div className="flex items-center gap-3">
                    <Lock className="w-5 h-5 text-zinc-400" />
                    <span>Password & Security</span>
                  </div>
                </button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <h2 className="text-lg font-bold mb-3 px-1">Preferences</h2>
            <Card className="bg-zinc-900/50 border-white/5 divide-y divide-white/5">
              <CardContent className="p-0">
                <button className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors text-left">
                  <div className="flex items-center gap-3">
                    <Bell className="w-5 h-5 text-zinc-400" />
                    <span>Notifications</span>
                  </div>
                </button>
                <button className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors text-left">
                  <div className="flex items-center gap-3">
                    <Moon className="w-5 h-5 text-zinc-400" />
                    <span>Appearance</span>
                  </div>
                  <span className="text-xs text-zinc-500">Dark</span>
                </button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="pt-6">
            <Button onClick={handleLogout} variant="ghost" className="w-full text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 h-14 rounded-xl">
              <LogOut className="w-5 h-5 mr-2" /> Sign Out completely
            </Button>
          </motion.div>
        </div>
      </div>
    </AuthGuard>
  );
}
