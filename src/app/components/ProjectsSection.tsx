import projects from "../utils/constants/projects";
import Project from "./Project";

const ProjectsSection = () =>{
  return(
    <section className="bg-tertiary w-full" id="projects">
      <div className="flex flex-col p-6 gap-6">
        <h1 className="font-mono text-secundary text-[32px] text-left w-full">
          Projects
        </h1>
        <div className="flex flex-col items-center gap-8">
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