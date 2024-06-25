'use client';
import { Locale } from '@/config/i18n.config';
import { Navbar, HeroSection, AboutSection, ProjectsSection, SkillsSection, ContactSection } from "../components";


export default function Home({params}:{params:{lang:Locale}}) {

  return (
    <div className="bg-tertiary flex flex-col overflow-x-hidden snap-mandatory scroll-smooth snap-y">
      <header>
        <Navbar lang={params.lang} />
      </header>
      <main className="h-screen">
         <HeroSection lang={params.lang}  />
         <AboutSection lang={params.lang} />
         <ProjectsSection lang={params.lang} />
         <SkillsSection lang={params.lang} />
         <ContactSection lang={params.lang} />
      </main>
    </div>
  );
}
