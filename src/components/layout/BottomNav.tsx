"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Home, Search, MessageSquare, User } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "home", icon: Home, label: "Home" },
  { id: "search", icon: Search, label: "Search" },
  { id: "chat", icon: MessageSquare, label: "Chat" },
  { id: "profile", icon: User, label: "Profile" },
];

interface BottomNavProps extends React.HTMLAttributes<HTMLElement> {}

export function BottomNav({ className, ...props }: BottomNavProps) {
  const [activeTab, setActiveTab] = React.useState(tabs[0].id);

  return (
    <nav
      className={cn(
        "fixed bottom-0 z-50 w-full max-w-[390px] backdrop-blur-2xl bg-zinc-950/80 border-t border-white/10 px-6 py-4 pb-8 flex items-center justify-between rounded-t-3xl",
        className
      )}
      {...props}
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        const Icon = tab.icon;
        
        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className="relative flex flex-col items-center justify-center w-12 h-12"
          >
            {isActive && (
              <motion.div
                layoutId="bottom-nav-active"
                className="absolute inset-0 bg-indigo-500/15 rounded-2xl"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            
            <Icon 
              className={cn(
                "w-6 h-6 mb-1 relative z-10 transition-colors duration-300", 
                isActive ? "text-indigo-400" : "text-zinc-500"
              )} 
            />
            
            <span 
              className={cn(
                "text-[10px] font-medium relative z-10 transition-colors duration-300",
                isActive ? "text-indigo-300" : "text-zinc-600"
              )}
            >
              {tab.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
