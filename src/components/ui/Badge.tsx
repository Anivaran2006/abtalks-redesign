import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
        {
          "bg-indigo-500/15 text-indigo-300 border border-indigo-500/20": variant === "default",
          "bg-white/10 text-zinc-300 border border-white/5": variant === "secondary",
          "text-zinc-300 border border-white/20": variant === "outline",
        },
        className
      )}
      {...props}
    />
  );
}

export { Badge };
