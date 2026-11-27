"use client";

import * as React from "react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/language-context";
import { TRANSLATIONS } from "@/constants/translations";
import {
  Compass,
  Target,
  Users2,
  Cpu,
  Coins,
  ShieldCheck,
} from "lucide-react";

export function AboutSection() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].about;

  const pillarIcons = [Users2, Cpu, Coins, ShieldCheck];
  const accentColors = ["#0066FF", "#00B4D8", "#0066FF", "#00B4D8"];

  return (
    <section id="about" className="relative py-24 md:py-32 border-t border-slate-200 dark:border-white/[0.08] overflow-hidden bg-slate-50/50 dark:bg-[#050505]">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#0066FF]/8 dark:bg-[#087BFF]/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#00B4D8]/8 dark:bg-[#00D4FF]/10 blur-[140px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-3xl mb-16 md:mb-20">
          <Badge variant="cyan" className="mb-4">
            <span className="font-mono text-[11px] tracking-wider uppercase">
              {t.kicker}
            </span>
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15] mb-6">
            {t.title}
          </h2>
          <p className="text-slate-600 dark:text-[#A1A1AA] text-base sm:text-lg leading-relaxed font-light">
            {t.desc1}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="relative p-8 md:p-10 rounded-2xl bg-white dark:bg-[#0B0D12]/90 border border-slate-200/90 dark:border-white/[0.08] backdrop-blur-xl group hover:border-[#0066FF]/50 transition-all duration-300 shadow-sm hover:shadow-md">
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-[#087BFF]/10 border border-blue-200 dark:border-[#087BFF]/30 flex items-center justify-center text-[#0066FF] dark:text-[#087BFF] mb-6 shadow-sm">
              <Compass className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-xs font-mono text-[#0066FF] dark:text-[#087BFF] uppercase tracking-wider block mb-2 font-semibold">
              {t.visionKicker}
            </span>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              {t.visionTitle}
            </h3>
            <p className="text-slate-600 dark:text-[#A1A1AA] leading-relaxed text-sm md:text-base font-light">
              {t.visionDesc}
            </p>
          </div>

          <div className="relative p-8 md:p-10 rounded-2xl bg-white dark:bg-[#0B0D12]/90 border border-slate-200/90 dark:border-white/[0.08] backdrop-blur-xl group hover:border-[#00B4D8]/50 transition-all duration-300 shadow-sm hover:shadow-md">
            <div className="w-12 h-12 rounded-xl bg-cyan-50 dark:bg-[#00D4FF]/10 border border-cyan-200 dark:border-[#00D4FF]/30 flex items-center justify-center text-[#00A3FF] dark:text-[#00D4FF] mb-6 shadow-sm">
              <Target className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-xs font-mono text-[#00A3FF] dark:text-[#00D4FF] uppercase tracking-wider block mb-2 font-semibold">
              {t.missionKicker}
            </span>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              {t.missionTitle}
            </h3>
            <p className="text-slate-600 dark:text-[#A1A1AA] leading-relaxed text-sm md:text-base font-light">
              {t.missionDesc}
            </p>
          </div>
        </div>

        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-mono text-[#0066FF] dark:text-[#00D4FF] uppercase tracking-widest block mb-2 font-semibold">
                {t.whyAttendKicker}
              </span>
              <h3 className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
                {t.whyAttendTitle}
              </h3>
            </div>
            <p className="text-sm font-mono text-slate-500 dark:text-[#A1A1AA] mt-2 md:mt-0">
              {t.whyAttendSub}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.pillars.map((pillar, index) => {
              const IconComponent = pillarIcons[index];
              const accentColor = accentColors[index];
              return (
                <div
                  key={pillar.title}
                  className="p-6 rounded-xl bg-white dark:bg-[#0B0D12]/50 border border-slate-200/80 dark:border-white/[0.06] hover:border-slate-300 dark:hover:border-white/20 transition-all duration-300 hover:-translate-y-1 group shadow-sm hover:shadow-md"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-5"
                    style={{
                      backgroundColor: `${accentColor}15`,
                      borderColor: `${accentColor}35`,
                      borderWidth: "1px",
                      color: accentColor,
                    }}
                  >
                    <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 dark:text-[#A1A1AA] uppercase tracking-widest block mb-1">
                    0{index + 1} // Track
                  </span>
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-xs md:text-sm text-slate-600 dark:text-[#A1A1AA] leading-relaxed font-light">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
