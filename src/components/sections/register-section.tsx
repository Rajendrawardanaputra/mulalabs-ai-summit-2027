"use client";

import * as React from "react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";
import { TRANSLATIONS } from "@/constants/translations";
import {
  Sparkles,
  Check,
  ArrowRight,
  ShieldCheck,
  Ticket,
} from "lucide-react";

export function RegisterSection() {
  const [email, setEmail] = React.useState("");
  const [selectedPass, setSelectedPass] = React.useState("vip");
  const [submitted, setSubmitted] = React.useState(false);
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].register;

  const passes = [
    {
      id: "standard",
      name: "Delegate Pass",
      tagline: language === "id" ? "Akses Utama Konferensi & Expo" : "Full Conference & Expo Access",
      price: "$299",
      priceIdr: "Rp 4.600.000",
      accent: "#087BFF",
      isPopular: false,
      features:
        language === "id"
          ? [
              "Akses 3 hari seluruh sesi Main Stage & Keynotes",
              "Akses penuh Exhibition Plaza & 100+ Live Demos",
              "Coffee breaks & lunch networking setiap hari",
              "Akses digital ke rekaman video seluruh sesi",
              "Digital Certificate of Attendance resmi",
            ]
          : [
              "Full 3-day access to all Main Stage keynotes",
              "Full access to Exhibition Plaza & 100+ Live Demos",
              "Daily networking coffee breaks & executive lunches",
              "On-demand digital access to all session recordings",
              "Official Digital Certificate of Attendance",
            ],
    },
    {
      id: "vip",
      name: "VIP All-Access",
      tagline: language === "id" ? "Pengalaman Paling Lengkap & Eksklusif" : "The Ultimate Executive Experience",
      price: "$699",
      priceIdr: "Rp 10.800.000",
      accent: "#00D4FF",
      isPopular: true,
      features:
        language === "id"
          ? [
              "Seluruh keuntungan Delegate Pass",
              "Kursi terdepan prioritas VIP di seluruh panggung",
              "Akses eksklusif VIP Investor & Speaker Lounge",
              "Undangan resmi Gala Dinner & Networking Cocktail",
              "Fast-track check-in & dedicated concierge service",
              "Sesi tanya-jawab tertutup bersama pembicara utama",
            ]
          : [
              "All Delegate Pass benefits included",
              "Priority front-row VIP seating across all stages",
              "Exclusive access to VIP Investor & Speaker Lounge",
              "Official invitation to Gala Dinner & Networking Cocktail",
              "Fast-track check-in & dedicated concierge liaison",
              "Closed-door Q&A salon with global keynote speakers",
            ],
    },
    {
      id: "startup",
      name: "Startup & Founder",
      tagline: language === "id" ? "Panggung Khusus Ekosistem & Pitching" : "Startup & Pitching Showcase",
      price: "$499",
      priceIdr: "Rp 7.700.000",
      accent: "#087BFF",
      isPopular: false,
      features:
        language === "id"
          ? [
              "Tiket untuk 2 orang founder tim startup",
              "Peluang seleksi panggung $500K Venture Arena",
              "1-on-1 matchmaking dengan 40+ modal ventura global",
              "Booth mini di Startup Alley (bila lolos kurasi)",
              "Akses seluruh workshop teknis & go-to-market",
            ]
          : [
              "Admission for 2 startup founding team members",
              "Eligibility for the $500K Venture Arena competition",
              "1-on-1 matchmaking with 40+ global venture capitalists",
              "Mini exhibition booth in Startup Alley (if curated)",
              "Full access to technical & go-to-market workshops",
            ],
    },
  ];

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section id="register" className="relative py-24 md:py-32 border-t border-white/[0.08] bg-[#050505] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-r from-[#087BFF]/12 via-[#00D4FF]/10 to-transparent blur-[160px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <Badge variant="cyan" className="mb-4">
            <span className="font-mono text-[11px] tracking-wider uppercase">
              {t.kicker}
            </span>
          </Badge>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            {t.title}
          </h2>
          <p className="text-[#A1A1AA] text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            {t.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {passes.map((pass) => (
            <div
              key={pass.id}
              onClick={() => setSelectedPass(pass.id)}
              className={`relative p-8 rounded-2xl backdrop-blur-xl flex flex-col justify-between transition-all duration-300 cursor-pointer ${
                selectedPass === pass.id
                  ? "bg-[#0B0D12] border-2 border-[#00D4FF] shadow-[0_0_35px_rgba(0,212,255,0.25)] scale-[1.02]"
                  : "bg-[#0B0D12]/70 border border-white/[0.08] hover:border-white/20"
              }`}
            >
              {pass.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#087BFF] to-[#00D4FF] text-black font-mono text-[10px] font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(0,212,255,0.5)]">
                  {t.mostPopular}
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {pass.name}
                  </h3>
                  <Ticket className="w-5 h-5 text-[#00D4FF]" />
                </div>

                <p className="text-xs text-[#A1A1AA] font-mono mb-6">
                  {pass.tagline}
                </p>

                <div className="mb-6 pb-6 border-b border-white/[0.08]">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold text-white font-mono">
                      {pass.price}
                    </span>
                    <span className="text-xs text-[#A1A1AA] font-mono">/ pass</span>
                  </div>
                  <div className="text-xs text-[#A1A1AA] font-mono mt-1">
                    {language === "id" ? `Estimasi ${pass.priceIdr}` : `Approx. ${pass.priceIdr}`}
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <span className="text-[10px] font-mono uppercase text-[#A1A1AA] tracking-wider block">
                    {t.includedLabel}
                  </span>
                  {pass.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2.5 text-xs text-white/90">
                      <Check className="w-4 h-4 text-[#00D4FF] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button
                variant={selectedPass === pass.id ? "primary" : "secondary"}
                className="w-full"
              >
                {selectedPass === pass.id ? t.selectedBtn : t.selectBtn}
              </Button>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-[#0B0D12] border border-white/[0.1] backdrop-blur-xl">
          <div className="flex items-center gap-2 mb-2 text-[#00D4FF] font-mono text-xs">
            <Sparkles className="w-4 h-4" />
            <span>{t.earlyBirdKicker}</span>
          </div>

          <h3 className="text-xl font-bold text-white mb-2">
            {t.boxTitle}
          </h3>
          <p className="text-xs text-[#A1A1AA] mb-6">
            {t.boxDesc}
          </p>

          {submitted ? (
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-mono flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 shrink-0" />
              <div>
                <div className="font-semibold text-white">{t.successTitle}</div>
                <div className="text-xs text-emerald-300/80 mt-0.5">
                  {t.successDesc} ({email})
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleRegister} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.emailPlaceholder}
                className="flex-1 px-4 py-3 rounded-lg bg-black/60 border border-white/10 text-white placeholder-[#A1A1AA]/50 text-sm focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] font-mono"
              />
              <Button type="submit" variant="primary" size="md">
                <span>{t.submitBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </form>
          )}

          <div className="flex items-center justify-between mt-4 text-[11px] font-mono text-[#A1A1AA]">
            <span>{t.guarantee1}</span>
            <span>{t.guarantee2}</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
