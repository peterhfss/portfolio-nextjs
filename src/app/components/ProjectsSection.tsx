import projects from "../utils/constants/projects";
import Project from "./Project";

const ProjectsSection = () =>{
  return(
    <section className="h-auto bg-tertiary px-48 py-32 flex flex-col justify-start gap-20" id="projects">
      <h1 className="font-mono text-secundary text-4xl">
        Projects
      </h1>
      <div className="flex flex-col items-center gap-36">
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
    </section>
  )
}

export default ProjectsSection;