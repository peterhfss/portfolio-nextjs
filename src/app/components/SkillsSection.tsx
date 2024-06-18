import Image from "next/image";
import skills from "../utils/constants/info-skills";
import SkillCard from "./SkillCard";
import { NextJSLogo, NodeJSLogo, PythonLogo, ReactLogo, ReactNativeLogo } from ".";
import { Locale } from "@/config/i18n.config";
import  { getDictionaryUseClient } from '@/dictionaries//default-dictionary-use-client';

interface ISkillsProps{
  lang: Locale;
}

const SkillsSection = ({lang}:ISkillsProps) =>{

  const dict = getDictionaryUseClient(lang);

  return(
    <section className="bg-primary h-auto py-28 px-6 lg:px-32 lg:py-36 md:h-screen snap-start" id="skills">
      <div className="flex flex-col gap-9 lg:justify-center lg:items-center md:gap-28 lg:gap-20">
        <div className="w-full text-right lg:px-44">
          <h1 className="font-mono text-secundary text-2xl lg:text-[32px] ">
            Skills
          </h1>
        </div>
        <div className="flex flex-col gap-4 items-center md:flex-row md:justify-center">
        {skills.map((skill) => <SkillCard key={skill.id} title={lang  === 'en-US' ? skill.title : skill.title_translate} description={lang  === 'en-US' ? skill.description : skill.description_translate} icon={<skill.icon className="stroke-secundary w-8 h-8"/>} />)}
        </div>
        <h4 className="text-primary-600 font-medium text-center text-base md:text-2xl lg:text-4xl">
          {dict.skills.subtitle}
        </h4>
        <div className="flex flex-col items-center gap-10 md:flex-row lg:gap-20 md:justify-center">
          <Image 
            src={ReactLogo}
            alt="React"
          />
          <Image 
            src={PythonLogo}
            alt="Python"
          />
          <Image 
            src={NodeJSLogo}
            alt="NodeJS"
          />
          <Image 
            src={NextJSLogo}
            alt="NextJS"
          />
          <Image 
            src={ReactNativeLogo}
            alt="React Native"
          />
        </div>
      </div>
    </section>
  )
}

export default SkillsSection;