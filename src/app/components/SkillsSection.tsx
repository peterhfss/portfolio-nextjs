import Image from "next/image";
import skills from "../utils/constants/info-skills";
import SkillCard from "./SkillCard";
import { NextJSLogo, NodeJSLogo, PythonLogo, ReactLogo, ReactNativeLogo } from ".";

const SkillsSection = () =>{
  return(
    <section className="h-screen bg-primary px-60 py-24" id="skills">
      <div className="flex flex-col items-end gap-14">
        <h1 className="font-mono text-secundary text-4xl">
          Skills
        </h1>
      </div>
      <div className="flex mt-14 justify-between">
      {skills.map((skill) => <SkillCard key={skill.id} title={skill.title} description={skill.description} />)}
      </div>
      <h4 className="text-4xl text-primary-600 font-medium w-[480px] pt-32 text-center m-auto h-20 ">
        The tech stacks behind my projects
      </h4>
      <div className="flex relative mt-60 p-10  justify-between">
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
    </section>
  )
}

export default SkillsSection;