
// Images
import shopOnline from "@/Data/Images/projects/shop-online.png"
import libraryOnline from "@/Data/Images/projects/library-online.png"

// Components

// Custom Components
import ProjectCard from "@/components/myUi/ProjectCard";

//import Types 
import { projectType } from "@/types/Projects";












const projectData: projectType[] = [
  {
    image: shopOnline,
    category: "Mern Stack",
    name: "shope-Online ",
    description:
      "E-commerce site developed with React,Nodejs,Mongoose,Expressjs ,TailwindCss,Shadcn/ui ,typeScript and more",
    link: "",
    github: "https://github.com/Azhar-lone/shop-online.git",
  },

  {
    image: libraryOnline,
    category: "Library-Online",
    name: "Library-Online ",
    description:
      "Library Management site developed with React,Nodejs,Mongoose,Expressjs ,TailwindCss, and more ",
    link: "",
    github: "https://github.com/Azhar-lone/library-Online.git",
  }



];







const Projects: React.FC = () => {



  return (
    < div className="w-full   ">
      <h2 className="text-4xl p-4">
        My Projects
      </h2>

      <div className="flex  gap-5 flex-wrap  flex-row ">
        {projectData.map((project: projectType, index: number) => {
          return (
            <ProjectCard project={project} key={index} />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;







