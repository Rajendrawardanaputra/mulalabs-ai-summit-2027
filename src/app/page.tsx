import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { HighlightsSection } from "@/components/sections/highlights-section";
import { SpeakersSection } from "@/components/sections/speakers-section";
import { AgendaSection } from "@/components/sections/agenda-section";
import { SponsorsSection } from "@/components/sections/sponsors-section";
import { VenueSection } from "@/components/sections/venue-section";
import { RegisterSection } from "@/components/sections/register-section";
import { Footer } from "@/components/layout/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#087BFF]/30 selection:text-[#00D4FF] bg-grid-cyber relative">
      <Navbar />

      <main id="main-content" tabIndex={-1} className="outline-none">
        <HeroSection />
        <AboutSection />
        <HighlightsSection />
        <SpeakersSection />
        <AgendaSection />
        <SponsorsSection />
        <VenueSection />
        <RegisterSection />
      </main>

      <Footer />
    </div>
  );
}
