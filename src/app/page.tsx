import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { CompetenciesSection } from "@/components/sections/CompetenciesSection";
import { ApproachSection } from "@/components/sections/ApproachSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />

      <div className="section-divider" />
      <AboutSection />

      <div className="section-divider" />
      <TrustSection />

      <div className="section-divider" />
      <TimelineSection />

      <div className="section-divider" />
      <ResultsSection />

      <div className="section-divider" />
      <CompetenciesSection />

      <div className="section-divider" />
      <ApproachSection />

      <div className="section-divider" />
      <EducationSection />

      <div className="section-divider" />
      <ContactSection />
    </>
  );
}
