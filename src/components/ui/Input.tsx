import * as React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export interface InputProps extends HTMLMotionProps<"input"> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <motion.input
        whileFocus={{ scale: 1.01, boxShadow: "0 0 0 2px rgba(99,102,241,0.5)" }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        type={type}
        className={cn(
          "flex h-12 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-100 shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 hover:bg-white/10",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
