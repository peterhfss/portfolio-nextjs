'use client';
import { Locale } from '@/config/i18n.config';
import { Navbar, Hero, About, Projects, Skills, Contact } from "../components";


export default function Home({params}:{params:{lang:Locale}}) {

  return (
    <div className="bg-tertiary flex flex-col overflow-x-hidden snap-mandatory scroll-smooth snap-y">
      <header>
        <Navbar lang={params.lang} />
      </header>
      <main className="h-screen">
         <Hero lang={params.lang}  />
         <About lang={params.lang} />
         <Projects lang={params.lang} />
         <Skills lang={params.lang} />
         <Contact lang={params.lang} />
      </main>
    </div>
  );
}
