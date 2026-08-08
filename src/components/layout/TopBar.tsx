import * as React from "react";
import { Bell, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface TopBarProps extends React.HTMLAttributes<HTMLElement> {}

export function TopBar({ className, ...props }: TopBarProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full backdrop-blur-xl bg-zinc-950/80 border-b border-white/10 px-6 py-4 flex items-center justify-between",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-2">
        <div className="bg-gradient-to-tr from-indigo-500 to-violet-500 p-1.5 rounded-lg shadow-lg shadow-indigo-500/25">
          <Sparkles className="w-4 h-4 text-white" />
        </div>
        <span className="font-bold text-lg tracking-tight text-zinc-100">AbTalks</span>
      </div>
      <button className="relative p-2 text-zinc-400 hover:text-zinc-100 transition-colors rounded-full hover:bg-white/5">
        <Bell className="w-5 h-5" />
        <span className="absolute top-2 right-2.5 w-2 h-2 bg-indigo-500 rounded-full border border-zinc-950" />
      </button>
    </header>
  );
}
