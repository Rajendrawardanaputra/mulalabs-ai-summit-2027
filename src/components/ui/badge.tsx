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
      "bg-[#087BFF]/10 text-[#087BFF] border-[#087BFF]/30 shadow-[0_0_15px_rgba(8,123,255,0.2)]",
    cyan:
      "bg-[#00D4FF]/10 text-[#00D4FF] border-[#00D4FF]/30 shadow-[0_0_15px_rgba(0,212,255,0.2)]",
    muted: "bg-white/[0.04] text-[#A1A1AA] border-white/[0.08]",
    outline: "bg-transparent text-white border-white/20",
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
