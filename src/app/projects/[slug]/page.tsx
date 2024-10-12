import React from "react";
import Link from "next/link";
import { projectsDetailData } from "@/Data/Images/projects";
// components
import { ScrollArea } from "@/components/ui/scroll-area";
import Container from "@/components/myUi/Container";
import MaintainancePage from "@/components/myUi/Maintainance";
// Types
import { CardType } from "@/types/Projects";
import type { Metadata } from "next";

interface Props {
  params: {
    slug: string;
  };
}

const getProjectBySlug = (slug: string) => {
  return projectsDetailData.find(
    (project) => project.name.toLowerCase() === slug
  );
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);

  if (project) {
    return {
      title: `${project.name}`,
      description: `Details about the project: ${project.name}`,
      keywords: [`${project.name} project`, "Azhar Lone projects"],
      authors: [
        { name: "Azhar Lone", url: "https://azhar-lone-portfolio.vercel.app/" },
      ],
      publisher: "vercel",
    };
  }

  return {
    title: "under maintaince",
    description: "No project found for the specified slug.",
    keywords: ["Project not found", "Azhar Lone projects"],
    authors: [
      { name: "Azhar Lone", url: "https://azhar-lone-portfolio.vercel.app/" },
    ],
    publisher: "vercel",
  };
}

export default function ProjectDetails({ params }: Props) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return <MaintainancePage />;
  }

  return (
    <Container className="flex flex-col gap-4 p-4">
      <section className="flex flex-col gap-4 justify-center w-full items-center p-4 border shadow">
        <h2 className="text-4xl">{project.name}</h2>
        <div className="flex gap-2 text-xl">
          <Link
            target="_blank"
            className="text-blue-500 hover:text-blue-400"
            href={project.link}
          >
            Visit
          </Link>

          <h1 className="flex gap-2">
            Source code on
            <Link
              target="_blank"
              className="text-blue-500 hover:text-blue-400"
              href={project.github}
            >
              Github
            </Link>
          </h1>
        </div>
      </section>

      <section className="flex flex-col gap-4 justify-center w-full items-center p-4 border shadow">
        <h2 className="text-4xl">Stack</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {project.Stack.map((st, index) => (
            <Card CardProp={st} key={index} />
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-4 justify-center w-full items-center p-4 border shadow">
        <h2 className="text-4xl ">Features</h2>
        <div className="flex gap-5 flex-wrap">
          {project.features.map((ft, index) => (
            <Card CardProp={ft} key={index} />
          ))}
        </div>
      </section>
    </Container>
  );
}

const Card: React.FC<{ CardProp: CardType }> = ({ CardProp }) => {
  return (
    <div
      className={`${
        !CardProp.description ? "w-72 h-32" : "w-96 h-40"
      }  flex flex-col p-2 border shadow items-center rounded`}
    >
      <h2 className="text-xl p-4 flex gap-2 items-center">
        {CardProp.name} {CardProp.Icon && <CardProp.Icon className="size-10" />}
      </h2>

      {CardProp.link && (
        <h1>
          Visit{" "}
          <Link
            target="_blank"
            className="text-blue-500 hover:text-blue-400"
            href={CardProp.link}
          >
            {CardProp.name}
          </Link>{" "}
          official site
        </h1>
      )}
      {CardProp.description && (
        <ScrollArea className="p-2 overflow-y-auto">
          {CardProp.description}
        </ScrollArea>
      )}
    </div>
  );
};
