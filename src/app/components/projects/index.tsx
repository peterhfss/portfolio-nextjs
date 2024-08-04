import projects from "../../utils/constants/projects";
import { Project } from "./project";
import { Locale } from "@/config/i18n.config";
import  { getDictionaryUseClient } from '@/dictionaries//default-dictionary-use-client';
interface IProjectsProps{
  lang: Locale;
}

export const Projects = ({lang}:IProjectsProps) =>{

  const dict = getDictionaryUseClient(lang);
  return(
    <section className="bg-tertiary h-auto px-6 py-24 lg:px-32 lg:py-36 snap-start " id="projects">
      <div className="flex flex-col h-full p-6 gap-6 lg:gap-12 w-full">
        <h1 className="font-mono text-secundary text-2xl lg:text-[32px] text-left w-full">
          {dict.projetcs.title}
        </h1>
        
        <div className="grid grid-cols-1 2xl:grid-cols-2 items-center p-4 m-auto gap-16 overflow-auto">
          {projects.map((project) =>
            <Project key={project.id}
              id={project.id}
              title={project.title} 
              image={project.image_preview} 
              description={lang  === 'en-US' ? project.description : project.translate}
              tags={project.tags}
              url_github={project.url_github}
              url_deploy={project.url_deploy}
            />
          )}
        </div>
        
      </div>
    </section>
  )
}
