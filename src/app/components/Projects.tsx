"use client";
import { useState } from "react";
// Components
import { Button } from "@/components/ui/button";
// Custom Components
import ProjectCard from "@/components/myUi/ProjectCard";

//import Types
import { projectType } from "@/types/Projects";

//Data
import { projectData, categories } from "@/Data/Images/projects";

const Projects: React.FC = () => {
  const [filteredProjects, setFilteredProjects] =
    useState<projectType[]>(projectData);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  function Filter(category: string): void {
    setSelectedCategory(category);
    let projects = projectData.filter((project) => {
      // if category is all projects then return all projects , else filter by category.
      return category === "All" ? project : project.category === category;
    });

    setFilteredProjects(projects);
    return;
  }

  return (
    <div className="w-full   " id="projects">
      <h2 className="text-4xl p-4">My Projects</h2>
      <div className="flex gap-2 items-center justify-center border w-fit rounded mx-auto bg-background">
        {categories.map((cat, index) => (
          <Button
            variant={selectedCategory === cat ? "secondary" : "ghost"}
            key={index}
            onClick={() => Filter(cat)}
          >
            {cat}
          </Button>
        ))}
      </div>
      <div className="flex  gap-5 flex-wrap  flex-row ">
        {filteredProjects.map((project: projectType, index: number) => {
          return <ProjectCard project={project} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
