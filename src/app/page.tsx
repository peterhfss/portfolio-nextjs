'use client';

import { Navbar, HeroSection, AboutSection, ProjectsSection, SkillsSection, ContactSection } from "./components";

export default function Home() {
  return (
    <div className="bg-tertiary flex flex-col overflow-x-hidden">
      <header>
        <Navbar />
      </header>
      <main className="h-screen">
        <HeroSection />
        <AboutSection />
      </main>
    </div>
    
  );
}
