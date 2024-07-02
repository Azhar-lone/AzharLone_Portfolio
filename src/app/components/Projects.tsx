"use client";
import React, { useState } from "react";


// Images
import shopOnline from "@/Data/Images/projects/shop-online.png"


// Components

import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";

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
      "E-commerce site developed with React,Nodejs,Mongoose,Expressjs ,TailwindCss,Shadcn/ui and more",
    link: "",
    github: "https://github.com/Azhar-lone/shop-online.git",
  },

  {
    image: shopOnline,
    category: "Mern Stack",
    name: "Library-Online ",
    description:
      "Library Management site developed with React,Nodejs,Mongoose,Expressjs ,TailwindCss,Shadcn/ui and more",
    link: "",
    github: "https://github.com/Azhar-lone/library-Online.git",
  }



];





//  remove category duplicates
const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects: React.FC = () => {
  const [categories, setCategories] = useState<string[]>(uniqueCategories);
  const [category, setCategory] = useState<string>("all projects");

  const filteredProjects = projectData.filter((project) => {
    // if category is all projects then return all projects , else filter by category.
    return category === "all projects"
      ? project
      : project.category === category;
  });

  return (
    < div  className="w-full h-fit">
      <h2 className="text-4xl border-b-2 border-foreground p-4">
        My Projects
      </h2>
      {/* tabs  */}
      <Tabs defaultValue={category} >
        <TabsList className="flex flex-wrap gap-2 h-fit">
          {categories.map((category, index) => {
            return (
              <TabsTrigger
                onClick={() => setCategory(category)}
                value={category}
                key={index}
                className="capitalize"
              >
                {category}
              </TabsTrigger>
            );
          })}
        </TabsList>
        {/* tabs content  */}
        <div className="flex   flex-wrap md:w-[40%]">
          {filteredProjects.map((project, index) => {
            return (
              <TabsContent value={category} key={index}>
                <ProjectCard project={project} />
              </TabsContent>
            );
          })}
        </div>
      </Tabs>
    </div>
  );
};

export default Projects;







