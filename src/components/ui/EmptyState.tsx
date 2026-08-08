"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
  variant?: "default" | "warning" | "indigo";
}

export function EmptyState({
  icon: Icon,
  title,
  description,
  actionLabel,
  onAction,
  variant = "default",
}: EmptyStateProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case "warning":
        return {
          wrapper: "border-orange-500/20 bg-orange-500/5",
          iconWrapper: "bg-orange-500/10 text-orange-500",
          button: "bg-orange-500 hover:bg-orange-400 text-white shadow-orange-500/20",
        };
      case "indigo":
        return {
          wrapper: "border-indigo-500/20 bg-indigo-500/5",
          iconWrapper: "bg-indigo-500/10 text-indigo-400",
          button: "bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/20",
        };
      default:
        return {
          wrapper: "border-zinc-800 bg-zinc-900/50",
          iconWrapper: "bg-zinc-800 text-zinc-400",
          button: "bg-zinc-800 hover:bg-zinc-700 text-white",
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className={cn(
        "flex flex-col items-center justify-center text-center p-8 rounded-3xl border-2 border-dashed relative overflow-hidden",
        styles.wrapper
      )}
    >
      <div className={cn("w-16 h-16 rounded-full flex items-center justify-center mb-5", styles.iconWrapper)}>
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-sm text-zinc-400 mb-6 max-w-sm leading-relaxed">
        {description}
      </p>
      {actionLabel && (
        <Button onClick={onAction} className={cn("px-8 shadow-lg", styles.button)}>
          {actionLabel}
        </Button>
      )}
    </motion.div>
  );
}
