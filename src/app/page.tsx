'use client';

import { Navbar, SidebarSocialLinks, HeroSection, AboutSection, ProjectsSection, SkillsSection, ContactSection } from "./components";

export default function Home() {
  return (
    <main className="bg-tertiary  min-h-screen flex flex-col">
      <SidebarSocialLinks />
      <Navbar />
      <div className="h-screen">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </div>
    </main>
  );
}
