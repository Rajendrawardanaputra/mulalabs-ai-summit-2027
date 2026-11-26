"use client";

import * as React from "react";
import { EVENT_DETAILS } from "@/constants/theme";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HeroVisual } from "@/components/visuals/hero-visual";
import { useLanguage } from "@/contexts/language-context";
import { TRANSLATIONS } from "@/constants/translations";
import {
  Calendar,
  MapPin,
  Sparkles,
  ArrowRight,
  Play,
  Users,
  Mic,
  Presentation,
  Globe2,
} from "lucide-react";

export function HeroSection() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].hero;

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden flex flex-col justify-center">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-[#087BFF]/12 via-[#00D4FF]/6 to-transparent blur-3xl rounded-full pointer-events-none" />
      
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="flex flex-wrap items-center gap-2.5 mb-6">
              <Badge variant="cyan" className="gap-1.5 font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                {t.theme}
              </Badge>
              <Badge variant="muted" className="font-mono text-white/80">
                {t.dateLocationBadge}
              </Badge>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
              <span>{EVENT_DETAILS.name.split(" ")[0]} </span>
              <span className="gradient-text-accent">
                {EVENT_DETAILS.name.split(" ").slice(1).join(" ")}
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-[#00D4FF] font-mono tracking-wide mb-4">
              {t.tagline}
            </p>

            <p className="text-base sm:text-lg text-[#A1A1AA] max-w-xl leading-relaxed mb-8 font-light">
              {t.desc}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#A1A1AA] mb-8 p-3 rounded-xl bg-[#0B0D12]/80 border border-white/[0.08] backdrop-blur-md">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#00D4FF]" />
                <span>{t.date}</span>
              </div>
              <span className="text-white/20 hidden sm:inline">•</span>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#087BFF]" />
                <span>{t.location}</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a href="#register" className="w-full sm:w-auto">
                <Button size="lg" variant="primary" className="w-full sm:w-auto shadow-[0_0_30px_rgba(8,123,255,0.4)]">
                  {t.ctaRegister}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
              <a href="#about" className="w-full sm:w-auto">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  <Play className="w-3.5 h-3.5 fill-current text-[#00D4FF]" />
                  {t.ctaExplore}
                </Button>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative flex items-center justify-center">
            <HeroVisual />
          </div>
        </div>

        <div className="mt-16 pt-10 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-4 p-4 rounded-xl bg-[#0B0D12]/40 border border-white/[0.05]">
            <div className="w-10 h-10 rounded-lg bg-[#087BFF]/10 border border-[#087BFF]/20 flex items-center justify-center text-[#087BFF]">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl font-bold font-mono text-white">{EVENT_DETAILS.expectedAttendees}</div>
              <div className="text-xs text-[#A1A1AA] uppercase tracking-wider font-mono">{t.statAttendees}</div>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-xl bg-[#0B0D12]/40 border border-white/[0.05]">
            <div className="w-10 h-10 rounded-lg bg-[#00D4FF]/10 border border-[#00D4FF]/20 flex items-center justify-center text-[#00D4FF]">
              <Mic className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl font-bold font-mono text-white">{EVENT_DETAILS.speakersCount}</div>
              <div className="text-xs text-[#A1A1AA] uppercase tracking-wider font-mono">{t.statSpeakers}</div>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-xl bg-[#0B0D12]/40 border border-white/[0.05]">
            <div className="w-10 h-10 rounded-lg bg-[#087BFF]/10 border border-[#087BFF]/20 flex items-center justify-center text-[#087BFF]">
              <Presentation className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl font-bold font-mono text-white">{EVENT_DETAILS.sessionsCount}</div>
              <div className="text-xs text-[#A1A1AA] uppercase tracking-wider font-mono">{t.statSessions}</div>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-xl bg-[#0B0D12]/40 border border-white/[0.05]">
            <div className="w-10 h-10 rounded-lg bg-[#00D4FF]/10 border border-[#00D4FF]/20 flex items-center justify-center text-[#00D4FF]">
              <Globe2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl font-bold font-mono text-white">{EVENT_DETAILS.countriesCount}</div>
              <div className="text-xs text-[#A1A1AA] uppercase tracking-wider font-mono">{t.statCountries}</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
