import Image from "next/image";
import skills from "../utils/constants/info-skills";
import SkillCard from "./SkillCard";
import { NextJSLogo, NodeJSLogo, PythonLogo, ReactLogo, ReactNativeLogo } from ".";

const SkillsSection = () =>{
  return(
    <section className="bg-primary w-full" id="skills">
      <div className="flex flex-col gap-9 p-6">
        <div className="w-full text-right">
          <h1 className="font-mono text-secundary text-[32px]">
            Skills
          </h1>
        </div>
        <div className="flex flex-col gap-4 items-center">
        {skills.map((skill) => <SkillCard key={skill.id} title={skill.title} description={skill.description} />)}
        </div>
        <h4 className="text-primary-600 font-medium text-center text-base">
          The tech stacks behind my projects
        </h4>
        <div className="flex flex-col items-center gap-10">
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