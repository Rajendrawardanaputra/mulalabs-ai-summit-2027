import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "accent" | "cyan" | "muted" | "outline";
}

export function Badge({
  className,
  variant = "accent",
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    accent:
      "bg-blue-50 dark:bg-[#087BFF]/10 text-[#0066FF] dark:text-[#087BFF] border-blue-200 dark:border-[#087BFF]/30 shadow-sm",
    cyan:
      "bg-cyan-50 dark:bg-[#00D4FF]/10 text-[#00A3FF] dark:text-[#00D4FF] border-cyan-200 dark:border-[#00D4FF]/30 shadow-sm",
    muted: "bg-slate-100 dark:bg-white/[0.04] text-slate-600 dark:text-[#A1A1AA] border-slate-200 dark:border-white/[0.08]",
    outline: "bg-transparent text-slate-800 dark:text-white border-slate-300 dark:border-white/20",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono border backdrop-blur-md transition-colors",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
