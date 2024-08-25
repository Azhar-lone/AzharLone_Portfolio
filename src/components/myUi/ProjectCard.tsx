"use client";
import Link from "next/link";
import Image from "next/image";
import { Link2Icon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { RiGithubFill } from "react-icons/ri";
import { useRouter } from "next/navigation";

// components
import { ScrollArea } from "../ui/scroll-area";
//import Types
import { projectType } from "@/types/Projects";

interface propsType {
  project: projectType;
}

const ProjectCard: React.FC<propsType> = ({ project }) => {
  let router = useRouter();

  return (
    <div className="h-96 mt-5 border rounded-2xl  shadow-2xl  shadow-primary md:ml-1 group w-96 relative">
      <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5 ">
        {project.category}
      </Badge>

      <Image
        className=" w-full h-[70%] rounded-2xl hover:cursor-pointer "
        src={project.image}
        alt=""
        priority
        onClick={() => router.push("/projects/" + project.id)}
      />

      <div className="flex top-[40%] left-[35%] absolute">
        <Link
          target="_blank"
          href={project.link}
          className=" w-16 h-14 rounded-full flex  bg-secondary/80 justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 hover:bg-secondary/50"
        >
          <Link2Icon className="text-primary" />
        </Link>
        <Link
          target="_blank"
          href={project.github}
          className=" text-primary w-16 h-14 bg-secondary/80 rounded-full flex  justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 hover:bg-secondary/50"
        >
          <RiGithubFill className="text-primary size-10" />
        </Link>
      </div>

      <div className="   p-6 ">
        <h4 className="h4 mb-1">{project.name}</h4>
        <ScrollArea className=" overflow-y-auto h-10 text-light">
          {project.description}
        </ScrollArea>
      </div>
    </div>
  );
};
export default ProjectCard;
