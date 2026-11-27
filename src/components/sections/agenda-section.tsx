"use client";

import * as React from "react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/language-context";
import { TRANSLATIONS } from "@/constants/translations";
import { Clock, MapPin } from "lucide-react";

interface Session {
  id: string;
  time: string;
  stage: string;
  category: "Keynote" | "Panel" | "Technical" | "Pitch";
  titleId: string;
  titleEn: string;
  descId: string;
  descEn: string;
  speaker: string;
  speakerRole: string;
}

export function AgendaSection() {
  const [activeDay, setActiveDay] = React.useState<1 | 2 | 3>(1);
  const [selectedCategory, setSelectedCategory] = React.useState<string>("All");
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].agenda;

  const schedule: Record<1 | 2 | 3, { date: string; themeId: string; themeEn: string; sessions: Session[] }> = {
    1: {
      date: language === "id" ? "14 Oktober 2027" : "October 14, 2027",
      themeId: "Foundations & The Autonomous Frontier",
      themeEn: "Foundations & The Autonomous Frontier",
      sessions: [
        {
          id: "s1-1",
          time: "09:00 - 10:15 WIB",
          stage: "Main Grand Auditorium",
          category: "Keynote",
          titleId: "Arsitektur Masa Depan: Penalaran Otonom Generasi Baru",
          titleEn: "The Architecture of Tomorrow: Next-Gen Autonomous Reasoning",
          descId: "Keynote pembuka yang membedah transisi ke penalaran model multi-tahap yang mampu memecahkan kalkulasi sains kompleks.",
          descEn: "Opening keynote dissecting the transition into multi-step model reasoning capable of solving complex frontier science.",
          speaker: "Dr. Elena Rostova",
          speakerRole: "Chief AI Scientist, AetherMind Labs",
        },
        {
          id: "s1-2",
          time: "10:45 - 12:00 WIB",
          stage: "Cyber Stage A",
          category: "Technical",
          titleId: "Embodied Intelligence: Agen Fisik dalam Realitas Spasial",
          titleEn: "Embodied Intelligence: Physical Agents in Spatial Reality",
          descId: "Deep dive teknis integrasi model fondasi spasial ke dalam robotika dan kendaraan tanpa awak dengan latensi ultra-rendah.",
          descEn: "Technical deep dive into spatial foundation models for robotics and autonomous drones with sub-millisecond edge latency.",
          speaker: "Alex Chen",
          speakerRole: "VP of Autonomous Robotics, CyberCore",
        },
        {
          id: "s1-3",
          time: "13:30 - 15:00 WIB",
          stage: "Panel Hall 1",
          category: "Panel",
          titleId: "Agensi Manusia & Simbiosis: Merancang Ruang Kerja Kolaboratif",
          titleEn: "Human Agency & The Symbiosis: Designing the Cooperative Workspace",
          descId: "Diskusi panel multidisiplin tentang batas tanggung jawab etika dan sinergi kecerdasan buatan dalam pekerjaan masa depan.",
          descEn: "Multidisciplinary panel exploring ethical responsibility and cognitive amplification in the future workplace.",
          speaker: "Sarah Lindqvist & Industry Leaders",
          speakerRole: "OpenEthics Consortium Panel",
        },
      ],
    },
    2: {
      date: language === "id" ? "15 Oktober 2027" : "October 15, 2027",
      themeId: "Neuromorphic, Quantum & Enterprise Scale",
      themeEn: "Neuromorphic, Quantum & Enterprise Scale",
      sessions: [
        {
          id: "s2-1",
          time: "09:30 - 10:45 WIB",
          stage: "Main Grand Auditorium",
          category: "Keynote",
          titleId: "AI Terakselerasi Kuantum: Melampaui Batas Silikon Klasik",
          titleEn: "Quantum Accelerated AI: Beyond Classical Silicon Limits",
          descId: "Pemaparan hasil uji coba algoritma machine learning kuantum hybrid untuk penemuan obat-obatan molekuler dan material baru.",
          descEn: "Unveiling hybrid quantum ML benchmarks revolutionizing molecular medicine and next-generation battery chemistry.",
          speaker: "Dr. Priya Sharma",
          speakerRole: "Director of Quantum ML, QuBit Dynamics",
        },
        {
          id: "s2-2",
          time: "11:15 - 12:30 WIB",
          stage: "Hardware Hall B",
          category: "Technical",
          titleId: "Kecerdasan Sub-Watt: Prosesor Neuromorfik di Edge Device",
          titleEn: "Sub-Watt Intelligence: Neuromorphic Processors at the Edge",
          descId: "Bedah arsitektur chip peniru neuron biologis untuk penglihatan mesin dan inferensi real-time tanpa cloud.",
          descEn: "Hardware deep dive into bio-inspired spiking neuromorphic chips for real-time edge computer vision without cloud dependency.",
          speaker: "Kenji Takahashi",
          speakerRole: "Chief Silicon Architect, NeoSilicon",
        },
      ],
    },
    3: {
      date: language === "id" ? "16 Oktober 2027" : "October 16, 2027",
      themeId: "Venture Arena, Safety & Closing Gala",
      themeEn: "Venture Arena, Safety & Closing Gala",
      sessions: [
        {
          id: "s3-1",
          time: "09:00 - 12:30 WIB",
          stage: "Arena Stage",
          category: "Pitch",
          titleId: "Mulalabs $500K Venture Arena: Live Startup Finals",
          titleEn: "Mulalabs $500K Venture Arena: Live Startup Finals",
          descId: "15 startup AI terpilih mempresentasikan inovasi langsung di hadapan dewan juri modal ventura tier-1 dunia.",
          descEn: "15 breakthrough AI startups pitch live before global tier-1 venture capital syndicates for $500K seed allocation.",
          speaker: "Marcus Vance & 40+ VCs",
          speakerRole: "Horizon AI Ventures & Partner Syndicate",
        },
        {
          id: "s3-2",
          time: "16:00 - 18:00 WIB",
          stage: "Sky Lounge & Exhibition",
          category: "Keynote",
          titleId: "Upacara Penutupan & Global AI Innovation Awards Gala",
          titleEn: "Closing Ceremony & Global AI Innovation Awards Gala",
          descId: "Penganugerahan piala inovasi AI terbaik, pengumuman pemenang pendanaan, dan resepsi penutupan resmi.",
          descEn: "Presenting global AI innovation trophies, funding winners announcement, and exclusive farewell networking gala.",
          speaker: "Summit Executive Committee",
          speakerRole: "Mulalabs AI Summit 2027",
        },
      ],
    },
  };

  const categories = ["All", "Keynote", "Technical", "Panel", "Pitch"];
  const currentDayData = schedule[activeDay];
  const filteredSessions =
    selectedCategory === "All"
      ? currentDayData.sessions
      : currentDayData.sessions.filter((s) => s.category === selectedCategory);

  const getCategoryBadgeClass = (category: Session["category"]) => {
    switch (category) {
      case "Keynote":
        return "bg-blue-50 dark:bg-[#087BFF]/15 text-[#0066FF] dark:text-[#087BFF] border-blue-200 dark:border-[#087BFF]/30";
      case "Technical":
        return "bg-cyan-50 dark:bg-[#00D4FF]/15 text-[#00A3FF] dark:text-[#00D4FF] border-cyan-200 dark:border-[#00D4FF]/30";
      case "Panel":
        return "bg-purple-50 dark:bg-purple-500/15 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-500/30";
      case "Pitch":
        return "bg-emerald-50 dark:bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/30";
      default:
        return "bg-slate-100 dark:bg-white/10 text-slate-800 dark:text-white border-slate-200 dark:border-white/20";
    }
  };

  return (
    <section id="agenda" className="relative py-24 md:py-32 border-t border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#050505] overflow-hidden">
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#00B4D8]/6 dark:bg-[#00D4FF]/8 blur-[160px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-3xl mb-14 md:mb-16">
          <Badge variant="cyan" className="mb-4">
            <span className="font-mono text-[11px] tracking-wider uppercase">
              {t.kicker}
            </span>
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15] mb-4">
            {t.title}
          </h2>
          <p className="text-slate-600 dark:text-[#A1A1AA] text-base sm:text-lg font-light leading-relaxed">
            {t.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10 p-2 rounded-2xl bg-slate-100 dark:bg-[#0B0D12] border border-slate-200 dark:border-white/[0.08]">
          {[1, 2, 3].map((dayNum) => {
            const dayKey = dayNum as 1 | 2 | 3;
            const item = schedule[dayKey];
            const isActive = activeDay === dayNum;

            return (
              <button
                key={dayNum}
                onClick={() => setActiveDay(dayKey)}
                className={`p-4 sm:p-5 rounded-xl text-left transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? "bg-white dark:bg-[#087BFF]/15 border border-slate-300 dark:border-[#087BFF]/50 shadow-sm dark:shadow-[0_0_25px_rgba(8,123,255,0.25)] text-slate-900 dark:text-white"
                    : "bg-transparent border border-transparent text-slate-600 dark:text-[#A1A1AA] hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/[0.02]"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-mono text-xs font-bold uppercase tracking-wider ${
                    isActive ? "text-[#0066FF] dark:text-[#00D4FF]" : "text-slate-500 dark:text-[#A1A1AA]"
                  }`}>
                    Day 0{dayNum}
                  </span>
                  <span className="text-[11px] font-mono opacity-80">{item.date}</span>
                </div>
                <div className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white tracking-tight line-clamp-1">
                  {language === "id" ? item.themeId : item.themeEn}
                </div>
              </button>
            );
          })}
        </div>

        <div className="flex flex-wrap items-center gap-2 mb-10">
          <span className="text-xs font-mono text-slate-500 dark:text-[#A1A1AA] mr-2">{t.filterLabel}</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer border ${
                selectedCategory === cat
                  ? "bg-[#0066FF] text-white border-[#0066FF] font-semibold shadow-sm"
                  : "bg-white dark:bg-white/[0.04] text-slate-600 dark:text-[#A1A1AA] border-slate-200 dark:border-white/[0.08] hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-white/20"
              }`}
            >
              {cat === "All" ? t.all : cat}
            </button>
          ))}
        </div>

        <div className="space-y-6">
          {filteredSessions.map((session) => (
            <div
              key={session.id}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0B0D12]/80 border border-slate-200/90 dark:border-white/[0.08] backdrop-blur-xl hover:border-slate-300 dark:hover:border-white/20 transition-all duration-300 group shadow-sm hover:shadow-md"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                <div className="lg:w-64 shrink-0 flex flex-col gap-2.5">
                  <div className="inline-flex items-center gap-2 text-sm font-mono text-slate-900 dark:text-white font-semibold">
                    <Clock className="w-4 h-4 text-[#0066FF] dark:text-[#00D4FF]" />
                    <span>{session.time}</span>
                  </div>
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-[#A1A1AA]">
                    <MapPin className="w-3.5 h-3.5 text-[#0066FF]" />
                    <span>{session.stage}</span>
                  </div>
                  <div>
                    <span
                      className={`inline-block text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${getCategoryBadgeClass(
                        session.category
                      )}`}
                    >
                      {session.category}
                    </span>
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-[#0066FF] dark:group-hover:text-[#00D4FF] transition-colors">
                    {language === "id" ? session.titleId : session.titleEn}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-[#A1A1AA] leading-relaxed mb-6 font-light">
                    {language === "id" ? session.descId : session.descEn}
                  </p>

                  <div className="inline-flex items-center gap-3 p-2.5 px-4 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08]">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#0066FF] to-[#00B4D8] flex items-center justify-center font-mono font-bold text-white text-xs">
                      {session.speaker.slice(0, 1)}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-900 dark:text-white">{session.speaker}</div>
                      <div className="text-[11px] font-mono text-slate-500 dark:text-[#A1A1AA]">{session.speakerRole}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
