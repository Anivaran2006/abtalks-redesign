"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Home, Compass, MessageSquare, User, Bell, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { id: "dashboard", icon: Home, label: "Home", href: "/dashboard" },
  { id: "discover", icon: Compass, label: "Explore", href: "/explore" },
  { id: "chat", icon: MessageSquare, label: "Chat", href: "/chat" },
  { id: "profile", icon: User, label: "Profile", href: "/profile" },
  { id: "notifications", icon: Bell, label: "Notifications", href: "/notifications" },
];

export function DesktopNav() {
  const pathname = usePathname();

  const getActiveId = () => {
    if (pathname?.includes("/explore") || pathname?.includes("/empty-states")) return "discover";
    if (pathname?.includes("/chat")) return "chat";
    if (pathname?.includes("/profile")) return "profile";
    if (pathname?.includes("/notifications")) return "notifications";
    return "dashboard";
  };

  const activeId = getActiveId();

  return (
    <aside className="hidden lg:flex flex-col w-60 shrink-0 sticky top-0 h-screen border-r border-white/5 bg-[#09090b]/90 backdrop-blur-2xl z-40">
      {/* Logo */}
      <div className="px-6 py-6 border-b border-white/5">
        <Link
          href="/dashboard"
          className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg"
        >
          <div className="bg-gradient-to-tr from-indigo-500 to-violet-500 p-2 rounded-xl shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight text-zinc-100">AbTalks</span>
        </Link>
      </div>

      {/* Nav Items */}
      <nav aria-label="Desktop Navigation" className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => {
          const isActive = activeId === item.id;
          const Icon = item.icon;
          return (
            <Link
              key={item.id}
              href={item.href}
              className={cn(
                "relative flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500",
                isActive
                  ? "text-white"
                  : "text-zinc-400 hover:text-zinc-100 hover:bg-white/5"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="desktop-nav-active"
                  className="absolute inset-0 bg-indigo-500/15 border border-indigo-500/20 rounded-xl"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
              <Icon className={cn("w-5 h-5 relative z-10 shrink-0 transition-colors", isActive ? "text-indigo-400" : "text-zinc-500 group-hover:text-zinc-300")} />
              <span className="relative z-10">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-white/5">
        <p className="text-[10px] text-zinc-600 font-medium uppercase tracking-wider">60-Day Challenge</p>
        <p className="text-xs text-zinc-500 mt-0.5">AbTalks © 2025</p>
      </div>
    </aside>
  );
}
