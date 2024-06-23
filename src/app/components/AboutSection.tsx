import Image from "next/image";
import Profile from "../../../public/images/Profile.jpg";
import { Locale } from "@/config/i18n.config";
import  { getDictionaryUseClient } from '@/dictionaries//default-dictionary-use-client';
import Link from "next/link";
import resume from "../../../public/Pedro_Henrique-resume.pdf";

interface IAboutProps{
  lang: Locale;
}

const AboutSection = ({lang}:IAboutProps) =>{

  const dict = getDictionaryUseClient(lang);

  return(
    <section className="bg-primary h-auto py-24 px-6 flex justify-center items-center lg:px-32 lg:py-36 snap-start" id="about">
      <div className="flex flex-col lg:w-[1040px] gap-2 px-6 justify-center md:pt-12 lg:h-auto m-auto lg:py-4 lg:gap-20 ">
        <h1 className="font-mono text-secundary text-2xl text-right w-full px-4 lg:text-[32px] md:px-8">
          {dict.about.title}
        </h1>
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-24 lg:justify-center ">
          <div className="w-[60%] mx-auto  md:w-2/5 md:h-2/6 lg:w-[3460px] lg:h-[520px]">
            <Image
              src={Profile}
              alt="Photo"
              className="rounded-2xl w-full h-full"
            />
          </div>
          
          <div className="flex flex-col gap-4 justify-center  md:gap-3 lg:gap-8">
            <p className="text-xs text-primary-700 font-mono md:text-sm">
              {dict.about.intro}
            </p>
            <h2 className="text-2xl text-[#EFEFFF] w-64">
              {dict.about.subtitle}
            </h2>
            <p className="text-primary-500 text-xs font-mono leading-6 text-justify lg:text-base">
              {dict.about.about_me}
            </p>
           <Link download={resume} href={resume} target="_blank">
              <button className="text-primary-300 bg-secundary-800 font-mono h-8 w-2/5 rounded hover:bg-secundary-700">
                Download CV
              </button>
           </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection;