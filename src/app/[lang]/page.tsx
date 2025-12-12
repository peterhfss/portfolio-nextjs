'use client';
import { Locale } from '@/config/i18n.config';
import { Navbar, Hero, About, Projects, Skills, Contact } from "../components";
import {use} from 'react';

type Props = {
  params: Promise<{lang: Locale}>;
}

export default function Home({params}:Props) {

  const {lang} = use(params);

  return (
    <div className="bg-tertiary flex flex-col overflow-x-hidden snap-mandatory scroll-smooth snap-y">
      <header>
        <Navbar lang={lang} />
      </header>
      <main className="h-screen">
         <Hero lang={lang}  />
         <About lang={lang} />
         <Projects lang={lang} />
         <Skills lang={lang} />
         <Contact lang={lang} />
      </main>
    </div>
  );
}
