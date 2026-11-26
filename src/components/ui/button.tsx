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
        "bg-gradient-to-r from-[#087BFF] to-[#00D4FF] text-black font-semibold shadow-[0_0_25px_rgba(8,123,255,0.4)] hover:shadow-[0_0_35px_rgba(0,212,255,0.65)] hover:scale-[1.02] active:scale-[0.98]",
      secondary:
        "bg-[#0B0D12] text-white border border-white/10 hover:border-[#00D4FF]/50 hover:bg-[#121622] hover:text-[#00D4FF] hover:shadow-[0_0_20px_rgba(0,212,255,0.2)]",
      outline:
        "bg-transparent text-white border border-white/20 hover:border-[#087BFF] hover:bg-[#087BFF]/10 hover:shadow-[0_0_20px_rgba(8,123,255,0.25)]",
      ghost:
        "bg-transparent text-[#A1A1AA] hover:text-white hover:bg-white/[0.04]",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
        {...props}
      >
        {variant === "primary" && (
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/35 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />
        )}
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </button>
    );
  }
);

Button.displayName = "Button";
