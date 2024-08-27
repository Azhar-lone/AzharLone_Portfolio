"use client";
import React from "react";
import Link from "next/link";
import { projectsDetailData } from "@/Data/Images/projects";

// components
import { ScrollArea } from "@/components/ui/scroll-area";
import Container from "@/components/myUi/Container";
// Types
import { CardType } from "@/types/Projects";

export default function Home() {
  return (
    <Container className="flex flex-col gap-4 p-4">
      <section className="flex flex-col gap-4 justify-center w-full items-center p-4 border shadow">
        <h2 className="text-4xl">{projectsDetailData[0].name}</h2>
        <div className="flex gap-2">
          <Link
            target="_blank"
            className="text-blue-500 hover:text-blue-400"
            href={projectsDetailData[0].link}
          >
            Visit 
          </Link>
          <h1>
            Source code on 
            <Link
              target="_blank"
              className="text-blue-500 hover:text-blue-400"
              href={projectsDetailData[0].github}
            >
               github
            </Link>
          </h1>
        </div>
      </section>

      <section className="flex flex-col gap-4 justify-center w-full items-center p-4 border shadow">
        <h2 className="text-4xl">Stack</h2>
        <div className="flex">
          {projectsDetailData[0].Stack.map((st, index) => (
            <Card CardProp={st} key={index} />
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-4 justify-center w-full items-center p-4 border shadow">
        <h2 className="text-4xl ">Features</h2>
        <div className="flex gap-5">
          {projectsDetailData[0].features.map((ft, index) => (
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
        !CardProp.description
          ? `${!CardProp.link ? "h-20" : "w-72 h-32"}  `
          : "w-96 h-60"
      }  flex flex-col p-2 border shadow items-center rounded`}
    >
      <h2 className="text-xl p-4 flex gap-2 items-center">
        {CardProp.name} <CardProp.Icon className="size-10" />{" "}
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
          official site{" "}
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
