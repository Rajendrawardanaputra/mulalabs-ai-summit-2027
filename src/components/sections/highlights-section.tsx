"use client";

import * as React from "react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/language-context";
import { TRANSLATIONS } from "@/constants/translations";
import {
  BrainCircuit,
  Orbit,
  Network,
  Binary,
  Rocket,
} from "lucide-react";

export function HighlightsSection() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].highlights;

  const trackIcons = [BrainCircuit, Orbit, Network, Binary, Rocket];
  const accents = ["#0066FF", "#00B4D8", "#0066FF", "#00B4D8", "#0066FF"];

  const topicLists = [
    ["Multimodal Neural Synthesis", "Autonomous Reasoning Systems", "Sparse Mixture of Experts"],
    ["Quantum-Assisted Machine Learning", "Ultra-low Power Edge Neuromorphic", "Spatial AR Interfaces"],
    ["Human-in-the-Loop Co-pilots", "Creative Generative Synthesis", "Safety & Alignment Standards"],
    ["Autonomous Enterprise Workflows", "Resilient Adaptive Supply Chains", "Cybersecurity Predictive Defense"],
    ["$500K Global Startup Arena", "AI Unit Economics & Monetization", "Seed-to-Series B Roundtables"],
  ];

  return (
    <section id="highlights" className="relative py-24 md:py-32 border-t border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#050505] overflow-hidden">
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#0066FF]/6 dark:bg-[#087BFF]/8 blur-[160px] rounded-full pointer-events-none" />

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
            {t.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.tracks.map((track, index) => {
            const Icon = trackIcons[index];
            const accent = accents[index];
            const isFeatured = index === 0 || index === 4;

            return (
              <div
                key={track.title}
                className={`relative p-8 rounded-2xl bg-slate-50/80 dark:bg-[#0B0D12]/80 border border-slate-200/90 dark:border-white/[0.08] backdrop-blur-xl flex flex-col justify-between transition-all duration-300 hover:border-[#0066FF]/40 dark:hover:border-white/20 group hover:-translate-y-1.5 shadow-sm hover:shadow-md ${
                  isFeatured ? "md:col-span-2 lg:col-span-1 border-blue-200/80 dark:border-white/[0.12] bg-white dark:bg-[#0B0D12]" : ""
                }`}
              >
                <div
                  className="absolute top-0 left-8 right-8 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
                  }}
                />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm"
                      style={{
                        backgroundColor: `${accent}12`,
                        borderColor: `${accent}30`,
                        borderWidth: "1px",
                        color: accent,
                      }}
                    >
                      <Icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-xs font-mono text-slate-400 dark:text-[#A1A1AA]">
                      [TRACK 0{index + 1}]
                    </span>
                  </div>

                  <span
                    className="text-xs font-mono uppercase tracking-wider block mb-2 font-semibold"
                    style={{ color: accent }}
                  >
                    {track.tagline}
                  </span>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    {track.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-[#A1A1AA] leading-relaxed mb-6 font-light">
                    {track.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-200 dark:border-white/[0.06]">
                  <span className="text-[10px] font-mono uppercase text-slate-400 dark:text-[#A1A1AA] tracking-wider block mb-3 font-semibold">
                    {t.keyTopicsLabel}
                  </span>
                  <ul className="space-y-2">
                    {topicLists[index].map((topic) => (
                      <li
                        key={topic}
                        className="flex items-center gap-2 text-xs text-slate-700 dark:text-white/80 font-mono"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: accent }}
                        />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
