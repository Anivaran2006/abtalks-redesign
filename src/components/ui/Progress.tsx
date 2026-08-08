"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  max?: number;
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value = 0, max = 100, ...props }, ref) => {
    const percentage = Math.min(100, Math.max(0, (value / max) * 100));

    return (
      <div
        ref={ref}
        className={cn(
          "relative h-2 w-full overflow-hidden rounded-full bg-white/10 backdrop-blur-sm",
          className
        )}
        {...props}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-indigo-500 via-violet-400 to-indigo-500 relative overflow-hidden"
          style={{ backgroundSize: "200% 100%" }}
          animate={{ 
            width: `${percentage}%`,
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
          }}
          transition={{ 
            width: { duration: 0.8, type: "spring", bounce: 0.2 },
            backgroundPosition: { duration: 3, repeat: Infinity, ease: "linear" }
          }}
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-white/20 w-1/3 blur-[4px] -skew-x-12 translate-x-[-150%] animate-[shimmer_2s_infinite]" />
        </motion.div>
      </div>
    );
  }
);
Progress.displayName = "Progress";

export { Progress };
