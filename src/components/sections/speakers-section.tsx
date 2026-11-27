"use client";

import * as React from "react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/language-context";
import { TRANSLATIONS } from "@/constants/translations";
import { Sparkles } from "lucide-react";

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.7a1.63 1.63 0 0 0-1.63 1.63c0 .9.73 1.63 1.63 1.63.9 0 1.63-.73 1.63-1.63 0-.9-.73-1.63-1.63-1.63" />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export function SpeakersSection() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].speakers;

  const speakers = [
    {
      id: "elena-rostova",
      name: "Dr. Elena Rostova",
      role: "Chief AI Scientist & Fellow",
      company: "AetherMind Labs (Zurich)",
      tag: "Opening Keynote",
      tagColor: "#0066FF",
      bio:
        language === "id"
          ? "Pelopor riset arsitektur neural multimodal dan model penalaran otonom skala besar yang telah mempublikasikan 40+ paper di NeurIPS dan ICML."
          : "Pioneer in multimodal neural architectures and large-scale autonomous reasoning systems with 40+ publications in NeurIPS and ICML.",
      socials: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com",
      },
    },
    {
      id: "alex-chen",
      name: "Alex Chen",
      role: "VP of Autonomous Robotics",
      company: "CyberCore Robotics (San Francisco)",
      tag: "Technical Keynote",
      tagColor: "#00B4D8",
      bio:
        language === "id"
          ? "Memimpin rekayasa agen fisik cerdas dan robotika adaptif bertenaga spatial foundation models untuk industri manufaktur presisi."
          : "Leading autonomous physical agents and adaptive robotics powered by spatial foundation models for precision industrial automation.",
      socials: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com",
      },
    },
    {
      id: "priya-sharma",
      name: "Dr. Priya Sharma",
      role: "Director of Quantum Machine Learning",
      company: "QuBit Dynamics (London)",
      tag: "Quantum Track",
      tagColor: "#0066FF",
      bio:
        language === "id"
          ? "Penemu algoritma optimasi kuantum hybrid untuk pemodelan iklim global dan penemuan senyawa material molekuler hemat energi."
          : "Inventor of hybrid quantum optimization algorithms for global climate modeling and energy-efficient molecular compound discovery.",
      socials: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: "marcus-vance",
      name: "Marcus Vance",
      role: "Managing General Partner",
      company: "Horizon AI Ventures (Singapore)",
      tag: "Venture Arena Lead",
      tagColor: "#00B4D8",
      bio:
        language === "id"
          ? "Investor kawakan yang telah membiayai 30+ unicorn AI dan memimpin pendanaan Mualalabs $500K Venture Arena untuk startup masa depan."
          : "Veteran investor who has backed 30+ AI unicorns and leads the Mulalabs $500K Venture Arena funding syndicate.",
      socials: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: "sarah-lindqvist",
      name: "Sarah Lindqvist",
      role: "Head of AI Alignment & Safety",
      company: "OpenEthics Consortium (Stockholm)",
      tag: "Policy & Safety",
      tagColor: "#0066FF",
      bio:
        language === "id"
          ? "Arsitek kerangka kerja internasional untuk audit keamanan AI, verifikasi keandalan model otonom, dan mitigasi risiko eksistensial."
          : "Architect of international AI safety frameworks, autonomous model verification protocols, and systemic existential risk mitigation.",
      socials: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: "kenji-takahashi",
      name: "Kenji Takahashi",
      role: "Chief Silicon Architect",
      company: "NeoSilicon Systems (Tokyo)",
      tag: "Hardware & Edge",
      tagColor: "#00B4D8",
      bio:
        language === "id"
          ? "Perancang prosesor neuromorfik ultra-hemat daya generasi 5nm yang memungkinkan komputasi model AI langsung pada perangkat cerdas."
          : "Lead architect of 5nm ultra-efficient neuromorphic processors enabling real-time edge AI inference without cloud latency.",
      socials: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com",
      },
    },
  ];

  return (
    <section id="speakers" className="relative py-24 md:py-32 border-t border-slate-200 dark:border-white/[0.08] bg-slate-50/50 dark:bg-[#050505] overflow-hidden">
      <div className="absolute top-1/2 left-1/3 w-[700px] h-[500px] bg-[#0066FF]/6 dark:bg-[#087BFF]/7 blur-[180px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20">
          <div className="max-w-2xl">
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
          <div className="mt-6 md:mt-0">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-[#A1A1AA] shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#0066FF] dark:text-[#00D4FF]" />
              {t.announcedCount}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker) => (
            <div
              key={speaker.id}
              className="relative p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0B0D12]/90 border border-slate-200/90 dark:border-white/[0.08] backdrop-blur-xl group hover:border-[#0066FF]/40 dark:hover:border-[#087BFF]/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between shadow-sm hover:shadow-md"
            >
              <div>
                <div className="relative mb-6 flex items-center justify-between">
                  <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0066FF]/20 to-[#00B4D8]/20 p-[1px] border border-slate-200 dark:border-white/10 group-hover:border-[#0066FF]/50 transition-colors overflow-hidden">
                    <div className="w-full h-full bg-slate-50 dark:bg-[#050505] rounded-[15px] flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0066FF]/10 to-transparent pointer-events-none" />
                      <span className="text-2xl font-mono font-bold text-slate-800 dark:text-white/90 group-hover:scale-110 group-hover:text-[#0066FF] dark:group-hover:text-[#00D4FF] transition-all">
                        {speaker.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .slice(-2)}
                      </span>
                    </div>
                  </div>

                  <span
                    className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full border backdrop-blur-md font-semibold"
                    style={{
                      color: speaker.tagColor,
                      borderColor: `${speaker.tagColor}40`,
                      backgroundColor: `${speaker.tagColor}10`,
                    }}
                  >
                    {speaker.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-[#0066FF] dark:group-hover:text-[#00D4FF] transition-colors">
                  {speaker.name}
                </h3>
                <div className="text-xs font-mono text-[#0066FF] dark:text-[#087BFF] mb-1 font-semibold">
                  {speaker.role}
                </div>
                <div className="text-xs font-mono text-slate-500 dark:text-[#A1A1AA] mb-4">
                  {speaker.company}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-[#A1A1AA] leading-relaxed font-light mb-6">
                  {speaker.bio}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-white/[0.06] flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-400 dark:text-white/40 uppercase tracking-widest font-semibold">
                  {t.keynoteBadge}
                </span>
                <div className="flex items-center gap-3">
                  {speaker.socials.twitter && (
                    <a
                      href={speaker.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 dark:text-[#A1A1AA] hover:text-[#0066FF] dark:hover:text-[#00D4FF] transition-colors p-1"
                      aria-label="Twitter profile"
                    >
                      <TwitterIcon className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {speaker.socials.linkedin && (
                    <a
                      href={speaker.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 dark:text-[#A1A1AA] hover:text-[#0066FF] dark:hover:text-[#087BFF] transition-colors p-1"
                      aria-label="LinkedIn profile"
                    >
                      <LinkedinIcon className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {speaker.socials.github && (
                    <a
                      href={speaker.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 dark:text-[#A1A1AA] hover:text-slate-900 dark:hover:text-white transition-colors p-1"
                      aria-label="GitHub profile"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
