"use client";

import * as React from "react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";
import { TRANSLATIONS } from "@/constants/translations";
import { Sparkles, FileText, Mail, ShieldCheck } from "lucide-react";

export function SponsorsSection() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].sponsors;

  const mainSponsors = [
    {
      name: "NEXA COMPUTING",
      category: language === "id" ? "Infrastruktur Cloud & Kuantum Global" : "Global Cloud & Quantum Infrastructure",
      desc:
        language === "id"
          ? "Penyedia superkomputer AI kluster terdistribusi dengan kapasitas komputasi exaflop."
          : "Exaflop-scale distributed cluster supercomputing infrastructure for frontier AI foundation models.",
      accent: "#087BFF",
      code: "NX-GLOBAL",
    },
    {
      name: "CYBERCORE SYSTEMS",
      category: language === "id" ? "Robotika Fisik Otonom & Model Fondasi" : "Autonomous Physical Robotics & Foundation Models",
      desc:
        language === "id"
          ? "Pengembang arsitektur spasial kecerdasan buatan untuk sistem robotika industri presisi."
          : "Pioneering spatial artificial intelligence architectures for high-precision autonomous industrial systems.",
      accent: "#00D4FF",
      code: "CC-SYSTEMS",
    },
  ];

  const goldSponsors = [
    { name: "QUANTUM HYPERDRIVE", domain: "Quantum AI Accelerators" },
    { name: "NEOSILICON AI", domain: "Neuromorphic 5nm Edge Silicon" },
    { name: "AETHERMIND LABS", domain: "Autonomous Reasoning Models" },
    { name: "SYNAPSE VENTURES", domain: "Global AI Fund & Seed Syndicate" },
  ];

  const silverSponsors = [
    "Vektor Cloud",
    "TensorEdge Systems",
    "DeepLogic Engines",
    "AeroVision Spatials",
    "NovaMatrix Labs",
    "OmniAgentics Enterprise",
  ];

  const communityPartners = [
    "AI Research Guild Asia",
    "Global Tech Founders Alliance",
    "Jakarta AI Collective",
    "OpenEthics International",
  ];

  return (
    <section id="sponsors" className="relative py-24 md:py-32 border-t border-white/[0.08] bg-[#050505] overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#087BFF]/7 blur-[180px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-3xl mb-16 md:mb-20">
          <Badge variant="cyan" className="mb-4">
            <span className="font-mono text-[11px] tracking-wider uppercase">
              {t.kicker}
            </span>
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-4">
            {t.title}
          </h2>
          <p className="text-[#A1A1AA] text-base sm:text-lg font-light leading-relaxed">
            {t.desc}
          </p>
        </div>

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#087BFF] animate-pulse" />
            <span className="text-xs font-mono text-[#00D4FF] uppercase tracking-widest font-semibold">
              {t.headlinePartners}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mainSponsors.map((sponsor) => (
              <div
                key={sponsor.name}
                className="relative p-8 sm:p-10 rounded-2xl bg-[#0B0D12]/90 border border-white/[0.12] backdrop-blur-xl group hover:border-[#087BFF]/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div
                  className="absolute top-0 right-0 w-44 h-44 rounded-full blur-3xl opacity-20 pointer-events-none"
                  style={{ backgroundColor: sponsor.accent }}
                />

                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-xs px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.08] text-[#A1A1AA]">
                    {sponsor.code}
                  </span>
                  <span className="text-xs font-mono text-[#00D4FF] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Tier 01 Partner
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2 group-hover:text-[#00D4FF] transition-colors">
                  {sponsor.name}
                </h3>
                <div className="text-xs font-mono text-[#087BFF] mb-4 uppercase tracking-wider">
                  {sponsor.category}
                </div>
                <p className="text-sm text-[#A1A1AA] leading-relaxed font-light">
                  {sponsor.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
            <span className="text-xs font-mono text-[#A1A1AA] uppercase tracking-widest font-semibold">
              {t.goldTier}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {goldSponsors.map((gold) => (
              <div
                key={gold.name}
                className="p-6 rounded-xl bg-[#0B0D12]/70 border border-white/[0.08] hover:border-[#00D4FF]/30 transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono text-[#00D4FF] uppercase tracking-wider block mb-2">
                    Gold Partner
                  </span>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-white transition-colors">
                    {gold.name}
                  </h4>
                </div>
                <p className="text-xs font-mono text-[#A1A1AA] pt-4 border-t border-white/[0.05]">
                  {gold.domain}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-mono text-[#A1A1AA] uppercase tracking-widest font-semibold">
              {t.silverTier}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {silverSponsors.map((silver) => (
              <div
                key={silver}
                className="p-4 rounded-lg bg-black/40 border border-white/[0.06] text-center hover:border-white/20 transition-colors"
              >
                <span className="text-xs font-mono text-white/90 font-medium">
                  {silver}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-mono text-[#A1A1AA] uppercase tracking-widest font-semibold">
              {t.researchCommunity}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {communityPartners.map((partner) => (
              <div
                key={partner}
                className="p-4 px-5 rounded-lg bg-[#0B0D12]/40 border border-white/[0.05] flex items-center gap-3 text-xs font-mono text-[#A1A1AA]"
              >
                <ShieldCheck className="w-4 h-4 text-[#087BFF]" />
                <span className="text-white/80">{partner}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-[#0B0D12] via-[#0D111A] to-[#0B0D12] border border-[#087BFF]/30 backdrop-blur-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              {t.ctaTitle}
            </h3>
            <p className="text-sm text-[#A1A1AA] max-w-xl font-light">
              {t.ctaDesc}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a href="mailto:partnerships@mulalabs.ai">
              <Button size="md" variant="primary">
                <Mail className="w-4 h-4 mr-1.5" />
                {t.contactBtn}
              </Button>
            </a>
            <Button size="md" variant="secondary">
              <FileText className="w-4 h-4 mr-1.5 text-[#00D4FF]" />
              {t.prospectusBtn}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
