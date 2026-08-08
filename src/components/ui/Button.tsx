"use client";

import * as React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", isLoading, children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        aria-disabled={isLoading || props.disabled}
        whileHover={!isLoading && !props.disabled ? { scale: 1.02 } : {}}
        whileTap={!isLoading && !props.disabled ? { scale: 0.98 } : {}}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        disabled={isLoading || props.disabled}
        className={cn(
          "relative inline-flex items-center justify-center whitespace-nowrap rounded-2xl text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 disabled:pointer-events-none disabled:opacity-50 overflow-hidden",
          {
            "bg-gradient-to-b from-indigo-500 to-violet-600 text-white shadow-[0_8px_30px_rgb(99,102,241,0.25)] hover:shadow-[0_8px_30px_rgb(99,102,241,0.4)] border border-indigo-400/30":
              variant === "primary",
            "bg-white/5 border border-white/10 backdrop-blur-md text-white hover:bg-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.1)]":
              variant === "secondary",
            "hover:bg-white/10 text-zinc-300 hover:text-white": variant === "ghost",
            "h-9 px-4 text-xs": size === "sm",
            "h-11 px-6": size === "md",
            "h-14 px-8 text-base": size === "lg",
          },
          className
        )}
        {...props}
      >
        {isLoading && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="absolute inset-0 flex items-center justify-center bg-black/10"
          >
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          </motion.div>
        )}
        <span className={cn(isLoading && "opacity-0")}>{children as React.ReactNode}</span>
      </motion.button>
    );
  }
);
Button.displayName = "Button";

export { Button };
