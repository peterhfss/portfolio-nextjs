import projects from "../utils/constants/projects";
import Project from "./Project";

const ProjectsSection = () =>{
  return(
    <section className="bg-tertiary h-auto px-6 py-24 lg:px-32 lg:py-36 " id="projects">
      <div className="flex flex-col h-full p-6 gap-6 lg:gap-12 w-full">
        <h1 className="font-mono text-secundary text-2xl lg:text-[32px] text-left w-full">
          Projects
        </h1>
        
        <div className="flex flex-col gap-8 items-center p-4 lg:gap-20">
          {projects.map((project) =>
            <Project key={project.id}
              id={project.id}
              title={project.title} 
              image={project.image_preview} 
              description={project.description}
              url_github={project.url_github}
              url_deploy={project.url_deploy}
            />
          )}
        </div>
        
      </div>
    </section>
  )
}

export default ProjectsSection;