import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "@/components/ui/card";
import { useRouter } from 'next/navigation';
import { Link2Icon,Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

//import Types 
import { projectType } from "@/types/Projects";

interface propsType {
  project: projectType
}



const ProjectCard: React.FC<propsType> = ({ project }) => {
  const router = useRouter();

  // Create onClick handler for whole card
  // const handleCardClick = () => {
  //   router.push(`/projectdetails/${project.id}`); // Use ID for unique routing
  // };

  return (
    <Card className="group   relative  ">
      <CardHeader className="p-0">
        {/* image  */}
        <div className="relative bg-secondary">
          <Image
            className=" h-96 pt-10  "
            src={project.image}
            alt=""
            priority
          />
          {/* btn links */}
          <div className="flex top-[50%] left-[35%] absolute">
            <Link
              target="_blank"
              href={project.link}
              className=" w-16 h-14 rounded-full flex  bg-secondary/80 justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 hover:bg-secondary/50"
            >
              <Link2Icon className="text-primary"/>
            </Link>
            <Link
              target="_blank"
              href={project.github}
              className=" text-primary w-16 h-14 bg-secondary/80 rounded-full flex  justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 hover:bg-secondary/50"

            >
              <Github  className="text-primary"/>
            </Link>
          </div>
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">
          {project.category}
        </Badge>
        <h4 className="h4 mb-1">{project.name}</h4>
        <p className="text-muted-foreground text-lg">{project.description}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
