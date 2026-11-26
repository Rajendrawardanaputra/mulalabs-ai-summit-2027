"use client";

import * as React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { EVENT_DETAILS } from "@/constants/theme";
import { useLanguage } from "@/contexts/language-context";
import { TRANSLATIONS } from "@/constants/translations";
import {
  Cpu,
  Mail,
  MapPin,
} from "lucide-react";

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

export function Footer() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].footer;
  const navT = TRANSLATIONS[language].nav;

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#020202] pt-20 pb-12 overflow-hidden text-[#A1A1AA]">
      <div className="absolute inset-0 bg-grid-cyber opacity-20 pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <Link href="/" className="flex items-center gap-3 mb-6 group inline-block">
                <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#087BFF] to-[#00D4FF] p-[1px] shadow-[0_0_20px_rgba(8,123,255,0.4)]">
                  <div className="w-full h-full bg-[#050505] rounded-[11px] flex items-center justify-center">
                    <Cpu className="w-5 h-5 text-[#00D4FF]" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-base tracking-wider text-white font-mono flex items-center gap-1.5">
                    MULALABS
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#087BFF]/20 text-[#00D4FF] border border-[#087BFF]/40 font-mono">
                      2027
                    </span>
                  </span>
                  <span className="text-[10px] text-[#A1A1AA] tracking-widest uppercase font-mono">
                    AI Summit
                  </span>
                </div>
              </Link>

              <p className="text-sm text-[#A1A1AA] font-light leading-relaxed max-w-sm mb-6">
                {t.desc}
              </p>

              <div className="flex items-center gap-3">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#A1A1AA] hover:text-[#00D4FF] hover:border-[#00D4FF]/40 transition-all"
                  aria-label="Twitter X"
                >
                  <TwitterIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#A1A1AA] hover:text-[#087BFF] hover:border-[#087BFF]/40 transition-all"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#A1A1AA] hover:text-white hover:border-white/20 transition-all"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="mt-8 text-xs font-mono text-[#00D4FF] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{t.themeLabel}</span>
            </div>
          </div>

          <div className="lg:col-span-2">
            <span className="text-xs font-mono text-white uppercase tracking-wider block mb-4 font-semibold">
              {t.exploreCol}
            </span>
            <ul className="space-y-2.5 text-xs font-mono">
              <li>
                <a href="#about" className="text-[#A1A1AA] hover:text-[#00D4FF] transition-colors">
                  {navT.about}
                </a>
              </li>
              <li>
                <a href="#highlights" className="text-[#A1A1AA] hover:text-[#00D4FF] transition-colors">
                  {navT.highlights}
                </a>
              </li>
              <li>
                <a href="#speakers" className="text-[#A1A1AA] hover:text-[#00D4FF] transition-colors">
                  {navT.speakers}
                </a>
              </li>
              <li>
                <a href="#agenda" className="text-[#A1A1AA] hover:text-[#00D4FF] transition-colors">
                  {navT.agenda}
                </a>
              </li>
              <li>
                <a href="#sponsors" className="text-[#A1A1AA] hover:text-[#00D4FF] transition-colors">
                  {navT.sponsors}
                </a>
              </li>
              <li>
                <a href="#venue" className="text-[#A1A1AA] hover:text-[#00D4FF] transition-colors">
                  {navT.venue}
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <span className="text-xs font-mono text-white uppercase tracking-wider block mb-4 font-semibold">
              {t.governanceCol}
            </span>
            <ul className="space-y-2.5 text-xs font-mono">
              <li>
                <a href="#about" className="text-[#A1A1AA] hover:text-white transition-colors">
                  AI Ethics Charter
                </a>
              </li>
              <li>
                <a href="#about" className="text-[#A1A1AA] hover:text-white transition-colors">
                  Terms of Attendance
                </a>
              </li>
              <li>
                <a href="#about" className="text-[#A1A1AA] hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#about" className="text-[#A1A1AA] hover:text-white transition-colors">
                  Code of Conduct
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <span className="text-xs font-mono text-white uppercase tracking-wider block mb-4 font-semibold">
              {t.secretariatCol}
            </span>
            <div className="space-y-3 text-xs font-mono text-[#A1A1AA]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#087BFF] shrink-0 mt-0.5" />
                <span>JIExpo Kemayoran, Jakarta Utara, DKI Jakarta 10620</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#00D4FF] shrink-0" />
                <a href="mailto:summit@mulalabs.ai" className="hover:text-white">
                  summit@mulalabs.ai
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#087BFF] shrink-0" />
                <a href="mailto:partnerships@mulalabs.ai" className="hover:text-white">
                  partnerships@mulalabs.ai
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#A1A1AA]/80">
          <div>
            © 2027 {EVENT_DETAILS.name}. {t.copyright}
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Jakarta, October 14-16, 2027</span>
            <span>•</span>
            <span className="text-white/40">Co-authored-by: OpenBot</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
