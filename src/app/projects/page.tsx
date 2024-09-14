import React from "react";
import Projects from "../components/Projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "projects of the developer Azhar Lone ",
  keywords: [
    "Azhar projects",
    "Azhar Lone projects",
    "Azhar Lone developer projects",
    "Nextjs projects",
    "MERN Stack projects",
    "Azhar Developer projects",
    "azhar lone developer projects",
    "azhar lone portfolio projects",
  ],
  authors: [{ name: "Azhar Lone", url: "https://azhar-lone-portfolio.vercel.app/" }],
  publisher:"vercel",
  
};
const ProjectPage: React.FC = () => {
  return (
    <div className="py-5">
      <Projects />
    </div>
  );
};

export default ProjectPage;
