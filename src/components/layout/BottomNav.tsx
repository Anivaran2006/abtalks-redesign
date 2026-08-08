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
      aria-label="Main Navigation"
      className={cn(
        "fixed bottom-0 z-50 w-full max-w-[390px] backdrop-blur-2xl bg-[#09090b]/80 border-t border-white/5 px-6 py-4 pb-8 flex items-center justify-between rounded-t-[2.5rem] shadow-[0_-10px_40px_rgba(0,0,0,0.8)]",
        className
      )}
      {...props}
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        const Icon = tab.icon;
        
        return (
          <motion.button
            whileTap={{ scale: 0.9 }}
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            aria-label={tab.label}
            aria-current={isActive ? "page" : undefined}
            className="relative flex flex-col items-center justify-center w-12 h-12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-xl"
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
                isActive ? "text-indigo-400" : "text-zinc-400 group-hover:text-zinc-300"
              )} 
            />
            
            <span 
              className={cn(
                "text-[10px] font-medium relative z-10 transition-colors duration-300",
                isActive ? "text-indigo-300" : "text-zinc-400"
              )}
            >
              {tab.label}
            </span>
          </motion.button>
        );
      })}
    </nav>
  );
}
