"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Flame, Trophy, Star, Bell, BellOff } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { AuthGuard } from "@/components/auth/AuthGuard";
import { useRouter } from "next/navigation";
import { useAppContext, NotificationType } from "@/context/AppContext";
import { cn } from "@/lib/utils";

const typeConfig: Record<NotificationType, { icon: React.ElementType, bg: string, color: string, border: string }> = {
  welcome: { icon: Trophy, bg: "bg-indigo-500/20", color: "text-indigo-400", border: "bg-indigo-500" },
  streak: { icon: Flame, bg: "bg-orange-500/20", color: "text-orange-400", border: "bg-orange-500" },
  xp: { icon: Star, bg: "bg-yellow-500/20", color: "text-yellow-400", border: "bg-yellow-500" },
  info: { icon: Bell, bg: "bg-zinc-500/20", color: "text-zinc-400", border: "bg-zinc-500" },
};

function formatTimeAgo(timestamp: number) {
  const diff = Date.now() - timestamp;
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (minutes < 1) return "Just now";
  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  if (days === 1) return "Yesterday";
  return `${days}d ago`;
}

export default function NotificationsPage() {
  const router = useRouter();
  const { notifications, isHydrated } = useAppContext();

  return (
    <AuthGuard>
      <div className="flex flex-col min-h-screen bg-[#09090b] text-zinc-100 font-[family-name:var(--font-geist-sans)] pb-32">
        {/* Top Navigation Bar */}
        <div className="sticky top-0 z-50 flex items-center justify-between p-4 bg-zinc-950/80 backdrop-blur-xl border-b border-white/5">
          <Button onClick={() => router.back()} variant="ghost" className="w-10 h-10 p-0 rounded-full border border-white/10 text-zinc-400 hover:text-white">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <span className="font-bold text-sm tracking-widest uppercase text-zinc-500">
            Notifications
          </span>
          <div className="w-10 h-10" />
        </div>

        <div className="flex-1 p-4 sm:p-5 flex flex-col max-w-md mx-auto w-full pt-8 space-y-4">
          <AnimatePresence>
            {notifications.length === 0 ? (
              <motion.div 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center justify-center py-20 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-zinc-900 flex items-center justify-center mb-4">
                  <BellOff className="w-8 h-8 text-zinc-600" />
                </div>
                <h3 className="text-lg font-bold text-zinc-300">No Notifications</h3>
                <p className="text-sm text-zinc-500 mt-2">You&apos;re all caught up! Check back later for updates.</p>
              </motion.div>
            ) : (
              notifications.map((notif, i) => {
                const config = typeConfig[notif.type] || typeConfig.info;
                const Icon = config.icon;
                
                return (
                  <motion.div 
                    key={notif.id}
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ delay: Math.min(i * 0.05, 0.3) }}
                  >
                    <Card className="bg-zinc-900/50 border-white/5 relative overflow-hidden group hover:bg-zinc-900/80 transition-colors">
                      <div className={cn("absolute left-0 top-0 bottom-0 w-1", config.border)} />
                      <CardContent className="p-4 flex gap-4">
                        <div className="mt-1 shrink-0">
                          <div className={cn("w-10 h-10 rounded-full flex items-center justify-center", config.bg)}>
                            <Icon className={cn("w-5 h-5", config.color)} />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start gap-2 mb-1">
                            <h3 className="font-bold text-white text-sm line-clamp-1">{notif.title}</h3>
                            <span className="text-zinc-600 text-[10px] font-medium whitespace-nowrap shrink-0 mt-0.5">
                              {isHydrated ? formatTimeAgo(notif.timestamp) : ""}
                            </span>
                          </div>
                          <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">{notif.message}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })
            )}
          </AnimatePresence>
        </div>
      </div>
    </AuthGuard>
  );
}
