import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { CompetenciesSection } from "@/components/sections/CompetenciesSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />

      <div className="section-divider" />
      <AboutSection />

      <div className="section-divider" />
      <CaseStudiesSection />

      <div className="section-divider" />
      <TimelineSection />

      <div className="section-divider" />
      <CompetenciesSection />

      <div className="section-divider" />
      <ContactSection />
    </>
  );
}
