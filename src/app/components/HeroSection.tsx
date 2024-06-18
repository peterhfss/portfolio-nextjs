import SidebarSocialLinks from "./SidebarSocialLinks";
import  { getDictionaryUseClient } from '@/dictionaries//default-dictionary-use-client';
import { Locale } from '@/config/i18n.config';

interface IHeroProps{
  lang: Locale;
}

const HeroSection = ({lang}:IHeroProps) =>{

  const dict = getDictionaryUseClient(lang)

  return(
    <section className="h-screen snap-start" id="hero"> 
        <div className="flex flex-col justify-center p-6 h-full lg:px-64 lg:pb-36 gap-2">
          <h1 className="font-sans text-secundary lg:mb-4 text-3xl lg:text-6xl font-extrabold">
            Pedro Henrique
          </h1>
          <h2 className="text-primary-500 text-sm lg:text-xl font-medium lg:leading-6 lg:w-[560px]">
            {dict.hero.subtitle}
          </h2>
          <SidebarSocialLinks />
      </div>
    </section>
  )
}

export default HeroSection;