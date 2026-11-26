"use client";

import * as React from "react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";
import { TRANSLATIONS } from "@/constants/translations";
import {
  MapPin,
  Plane,
  Car,
  Navigation,
  Sparkles,
  Train,
  CheckCircle2,
} from "lucide-react";

export function VenueSection() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].venue;

  const venueFeatures = [
    {
      title: language === "id" ? "Auditorium & Halls" : "Auditorium & Tech Halls",
      desc: language === "id"
        ? "5,000+ kursi Main Grand Hall dengan tata suara sinematik & LED wall 360°."
        : "5,000+ capacity Main Grand Hall with cinematic surround acoustics & 360° LED wall.",
    },
    {
      title: language === "id" ? "Konektivitas Siber Gigabit" : "Gigabit Cyber Connectivity",
      desc: language === "id"
        ? "Koneksi nirkabel pita lebar 10 Gbps redundan untuk seluruh demonstrasi AI live."
        : "Redundant 10 Gbps ultra-low latency wireless bandwidth dedicated to live AI showcases.",
    },
    {
      title: language === "id" ? "Exhibition & Startup Arena" : "Exhibition & Startup Arena",
      desc: language === "id"
        ? "Ruang pameran teknologi seluas 2,500 m² yang menampung 100+ demo interaktif."
        : "2,500 m² tech expo pavilion hosting 100+ interactive hardware and software demos.",
    },
    {
      title: language === "id" ? "Executive VIP Lounges" : "Executive VIP Lounges",
      desc: language === "id"
        ? "Ruang privat untuk negosiasi modal ventura dan sesi roundtable investor."
        : "Private executive suites for venture capital syndicate roundtables and deal signings.",
    },
  ];

  const travelGuides = [
    {
      icon: Plane,
      title: language === "id" ? "Dari Bandara Internasional CGK" : "From CGK International Airport",
      desc: language === "id"
        ? "25-35 menit via Tol Bandara Prof. Dr. Sedyatmo langsung menuju Kemayoran. Layanan shuttle bus beroperasi setiap 30 menit."
        : "25-35 minutes via Sedyatmo Airport Expressway to Kemayoran. Official delegate shuttle operates every 30 minutes.",
    },
    {
      icon: Train,
      title: language === "id" ? "Akses Kereta & MRT / LRT" : "Rail & Rapid Transit Access",
      desc: language === "id"
        ? "Terhubung langsung dengan Stasiun Rajawali & Kemayoran, serta akses mudah dari stasiun transit MRT Bundaran HI."
        : "Direct proximity to Rajawali & Kemayoran stations, plus rapid transit connections from Bundaran HI interchange.",
    },
    {
      icon: Car,
      title: language === "id" ? "Parkir & Drop-Off Khusus" : "Dedicated Parking & VIP Drop-off",
      desc: language === "id"
        ? "Area parkir terpadu berkapasitas 4,000+ kendaraan dengan zona fast-track khusus delegasi terdaftar."
        : "Integrated 4,000+ vehicle parking bays with fast-track digital check-in drop-off zones.",
    },
  ];

  return (
    <section id="venue" className="relative py-24 md:py-32 border-t border-white/[0.08] bg-[#050505] overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#00D4FF]/7 blur-[180px] rounded-full pointer-events-none" />

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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-20">
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="p-8 rounded-2xl bg-[#0B0D12]/90 border border-white/[0.08] backdrop-blur-xl mb-8">
              <div className="flex items-center gap-3 text-xs font-mono text-[#00D4FF] mb-4">
                <MapPin className="w-4 h-4 text-[#087BFF]" />
                <span>JIEXPO KEMAYORAN, JAKARTA UTARA, INDONESIA</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Grand Ballroom & Tech Halls A-C
              </h3>
              <p className="text-sm text-[#A1A1AA] leading-relaxed font-light mb-6">
                {language === "id"
                  ? "Dipilih khusus untuk memberikan pengalaman konferensi yang imersif dan nyaman bagi ribuan delegasi dari 25+ negara."
                  : "Chosen deliberately to provide an immersive, world-class conference atmosphere for thousands of delegates from 25+ nations."}
              </p>

              <div className="space-y-4 pt-4 border-t border-white/[0.06]">
                {venueFeatures.map((feat) => (
                  <div key={feat.title} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#00D4FF] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-semibold text-white font-mono">{feat.title}</h4>
                      <p className="text-xs text-[#A1A1AA] font-light mt-0.5">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://maps.google.com/?q=Jakarta+International+Expo+Kemayoran"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="md" variant="primary">
                  <Navigation className="w-4 h-4 mr-1.5" />
                  {t.mapsBtn}
                </Button>
              </a>
              <Button size="md" variant="secondary">
                {t.hotelBtn}
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6 relative p-8 rounded-2xl bg-[#0B0D12] border border-white/[0.1] backdrop-blur-xl flex flex-col justify-between overflow-hidden">
            <div className="absolute inset-0 bg-grid-cyber opacity-40 pointer-events-none" />
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-[#087BFF]/15 blur-3xl rounded-full pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="font-mono text-xs text-white uppercase tracking-wider">
                    {t.blueprintTitle}
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[#A1A1AA]">
                  6.1462° S, 106.8488° E
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-xl bg-black/60 border border-[#087BFF]/30">
                  <span className="text-[10px] font-mono text-[#00D4FF] block mb-1">ZONE 01</span>
                  <div className="text-sm font-bold text-white mb-1">Grand Main Hall</div>
                  <div className="text-[11px] font-mono text-[#A1A1AA]">Keynotes & Opening</div>
                </div>

                <div className="p-4 rounded-xl bg-black/60 border border-[#00D4FF]/30">
                  <span className="text-[10px] font-mono text-[#00D4FF] block mb-1">ZONE 02</span>
                  <div className="text-sm font-bold text-white mb-1">Cyber Tech Stage</div>
                  <div className="text-[11px] font-mono text-[#A1A1AA]">Quantum & Chips Deep Dives</div>
                </div>

                <div className="p-4 rounded-xl bg-black/60 border border-white/10">
                  <span className="text-[10px] font-mono text-[#A1A1AA] block mb-1">ZONE 03</span>
                  <div className="text-sm font-bold text-white mb-1">Venture Arena</div>
                  <div className="text-[11px] font-mono text-[#A1A1AA]">$500K Pitch Competition</div>
                </div>

                <div className="p-4 rounded-xl bg-black/60 border border-white/10">
                  <span className="text-[10px] font-mono text-[#A1A1AA] block mb-1">ZONE 04</span>
                  <div className="text-sm font-bold text-white mb-1">Expo & Demos Plaza</div>
                  <div className="text-[11px] font-mono text-[#A1A1AA]">100+ Hands-on Showcases</div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#087BFF]/10 border border-[#087BFF]/20 flex items-center justify-between text-xs font-mono text-[#00D4FF]">
              <span>{t.simultaneousNote}</span>
              <Sparkles className="w-4 h-4 text-[#00D4FF]" />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-8">
            {t.travelTitle}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {travelGuides.map((guide) => {
              const Icon = guide.icon;
              return (
                <div
                  key={guide.title}
                  className="p-6 rounded-xl bg-[#0B0D12]/60 border border-white/[0.06] hover:border-white/20 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#087BFF]/10 border border-[#087BFF]/30 flex items-center justify-center text-[#087BFF] mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-semibold text-white mb-2">{guide.title}</h4>
                  <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed font-light">
                    {guide.desc}
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
