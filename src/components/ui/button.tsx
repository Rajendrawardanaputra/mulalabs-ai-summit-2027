"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg cursor-pointer select-none overflow-hidden group disabled:opacity-50 disabled:pointer-events-none";

    const sizeStyles = {
      sm: "text-xs px-3.5 py-1.5 gap-1.5",
      md: "text-sm px-5 py-2.5 gap-2",
      lg: "text-base px-7 py-3.5 gap-2.5 font-semibold",
    };

    const variantStyles = {
      primary:
        "bg-gradient-to-r from-[#0066FF] to-[#00B4D8] text-white font-semibold shadow-[0_4px_20px_rgba(0,102,255,0.35)] hover:shadow-[0_6px_25px_rgba(0,102,255,0.5)] hover:scale-[1.02] active:scale-[0.98]",
      secondary:
        "bg-white dark:bg-[#0B0D12] text-slate-800 dark:text-white border border-slate-200 dark:border-white/10 hover:border-[#0066FF]/50 hover:bg-slate-50 dark:hover:bg-[#121622] hover:text-[#0066FF] dark:hover:text-[#00D4FF] shadow-sm",
      outline:
        "bg-transparent text-slate-800 dark:text-white border border-slate-300 dark:border-white/20 hover:border-[#0066FF] hover:bg-blue-50/50 dark:hover:bg-[#087BFF]/10",
      ghost:
        "bg-transparent text-slate-600 dark:text-[#A1A1AA] hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.04]",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
        {...props}
      >
        {variant === "primary" && (
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />
        )}
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </button>
    );
  }
);

Button.displayName = "Button";
