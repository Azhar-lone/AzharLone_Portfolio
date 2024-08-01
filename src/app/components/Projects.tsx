// Components
import { Button } from "@/components/ui/button";
// Custom Components
import ProjectCard from "@/components/myUi/ProjectCard";

//import Types
import { projectType } from "@/types/Projects";

//Data
import { projectData } from "@/Data/Images/projects";

const Projects: React.FC = () => {
  return (
    <div className="w-full   " id="projects">
      <h2 className="text-4xl p-4">My Projects</h2>
      <div className="flex gap-2 items-center justify-center">
        <Button>MERN</Button>
        <Button variant={"outline"}>NextJs</Button>
        <Button variant={"outline"}>Fastify</Button>
        <Button variant={"outline"}>React</Button>
      </div>
      <div className="flex  gap-5 flex-wrap  flex-row ">
        {projectData.map((project: projectType, index: number) => {
          return <ProjectCard project={project} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
