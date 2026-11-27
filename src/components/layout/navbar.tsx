"use client";

import * as React from "react";
import Link from "next/link";
import { EVENT_DETAILS } from "@/constants/theme";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { useLanguage } from "@/contexts/language-context";
import { useTheme } from "@/contexts/theme-context";
import { TRANSLATIONS } from "@/constants/translations";
import { Menu, X, ArrowUpRight, Cpu, Globe, Sun, Moon } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const { language, setLanguage, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const t = TRANSLATIONS[language].nav;

  const navItems = [
    { label: t.about, href: "#about" },
    { label: t.highlights, href: "#highlights" },
    { label: t.speakers, href: "#speakers" },
    { label: t.agenda, href: "#agenda" },
    { label: t.sponsors, href: "#sponsors" },
    { label: t.venue, href: "#venue" },
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[100] px-4 py-2 rounded-md bg-[#0066FF] text-white font-mono text-xs focus:ring-2 focus:ring-[#00B4D8] focus:outline-none"
      >
        {t.skipToContent}
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 dark:bg-[#050505]/90 backdrop-blur-xl border-b border-slate-200/80 dark:border-white/[0.08] shadow-[0_4px_25px_rgba(0,0,0,0.05)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div
          className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-[#0066FF] via-[#00B4D8] to-[#0066FF] transition-all duration-150 ease-out z-50"
          style={{ width: `${scrollProgress}%` }}
        />

        <Container>
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-[#0066FF] focus-visible:outline-none rounded-lg p-1"
              aria-label="Mulalabs AI Summit 2027"
            >
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#0066FF] to-[#00B4D8] p-[1px] shadow-[0_0_15px_rgba(0,102,255,0.3)] group-hover:shadow-[0_0_25px_rgba(0,102,255,0.5)] transition-all">
                <div className="w-full h-full bg-white dark:bg-[#050505] rounded-[11px] flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-[#0066FF] dark:text-[#00D4FF] group-hover:scale-110 transition-transform" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-base tracking-wider text-slate-900 dark:text-white font-mono flex items-center gap-1.5">
                  MULALABS
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-100 dark:bg-[#087BFF]/20 text-[#0066FF] dark:text-[#00D4FF] border border-blue-200 dark:border-[#087BFF]/40 font-mono font-semibold">
                    2027
                  </span>
                </span>
                <span className="text-[10px] text-slate-500 dark:text-[#A1A1AA] tracking-widest uppercase font-mono">
                  AI Summit
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Navigasi Utama">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-slate-600 dark:text-[#A1A1AA] hover:text-slate-900 dark:hover:text-white transition-colors font-medium focus-visible:ring-2 focus-visible:ring-[#0066FF] focus-visible:outline-none rounded px-2 py-1"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Theme Toggle, Language Switcher & Action CTA */}
            <div className="hidden md:flex items-center gap-3">
              {/* Theme Switcher Button */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-white hover:text-[#0066FF] dark:hover:text-[#00D4FF] transition-all cursor-pointer"
                aria-label={theme === "light" ? "Ganti ke Tema Gelap" : "Ganti ke Tema Terang"}
                title={theme === "light" ? "Ganti ke Tema Gelap" : "Ganti ke Tema Terang"}
              >
                {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-amber-400" />}
              </button>

              {/* Language Switcher Button */}
              <div className="flex items-center p-0.5 rounded-lg bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08]">
                <button
                  onClick={() => setLanguage("id")}
                  className={`px-2.5 py-1 rounded text-xs font-mono transition-all cursor-pointer ${
                    language === "id"
                      ? "bg-[#0066FF] text-white font-bold shadow-sm"
                      : "text-slate-600 dark:text-[#A1A1AA] hover:text-slate-900 dark:hover:text-white"
                  }`}
                  aria-label="Bahasa Indonesia"
                >
                  ID
                </button>
                <button
                  onClick={() => setLanguage("en")}
                  className={`px-2.5 py-1 rounded text-xs font-mono transition-all cursor-pointer ${
                    language === "en"
                      ? "bg-[#0066FF] text-white font-bold shadow-sm"
                      : "text-slate-600 dark:text-[#A1A1AA] hover:text-slate-900 dark:hover:text-white"
                  }`}
                  aria-label="English"
                >
                  EN
                </button>
              </div>

              <a href="#register">
                <Button size="sm" variant="primary">
                  {t.register}
                  <ArrowUpRight className="w-4 h-4 ml-0.5" />
                </Button>
              </a>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/[0.04] text-slate-700 dark:text-white"
                aria-label="Toggle Theme"
              >
                {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-amber-400" />}
              </button>

              <button
                onClick={toggleLanguage}
                className="px-2 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/[0.04] text-xs font-mono text-[#0066FF] dark:text-[#00D4FF] flex items-center gap-1"
                aria-label="Toggle Language"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>{language.toUpperCase()}</span>
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 dark:text-[#A1A1AA] hover:text-slate-900 dark:hover:text-white rounded-lg border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/[0.02]"
                aria-label={mobileMenuOpen ? "Tutup menu" : "Buka menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </Container>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/98 dark:bg-[#0B0D12]/98 backdrop-blur-2xl border-b border-slate-200 dark:border-white/[0.08] px-6 py-8 flex flex-col gap-5 animate-in slide-in-from-top duration-200 shadow-xl">
            <nav className="flex flex-col gap-4" aria-label="Navigasi Mobile">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base text-slate-700 dark:text-[#A1A1AA] hover:text-[#0066FF] dark:hover:text-[#00D4FF] transition-colors font-medium py-1"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="pt-4 border-t border-slate-200 dark:border-white/[0.08] flex items-center justify-between gap-4">
              <a href="#register" onClick={() => setMobileMenuOpen(false)} className="flex-1">
                <Button className="w-full" variant="primary">
                  {t.register}
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
