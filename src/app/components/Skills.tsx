"use client";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
import { IconType } from "react-icons";

// icons
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaJs,
  FaNodeJs,
  FaShieldAlt,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiShadcnui,
  SiPostgresql,
  SiLinux,
  SiNextdotjs,
} from "react-icons/si";
interface progressType {
  value: number;
  text: string;
  Icon?: IconType;
}

export default function Skills() {
  const [progress, setProgress] = useState<progressType[]>([
    {
      value: 0,
      text: "Html",
      Icon: FaHtml5,
    },
    {
      value: 0,
      text: "Css",
      Icon: FaCss3,
    },
    {
      value: 0,
      text: "JavaScript",
      Icon: FaJs,
    },
    {
      value: 0,
      text: "TypeScript",
      Icon: SiTypescript,
    },
    {
      value: 0,
      text: "React",
      Icon: FaReact,
    },
    {
      value: 0,
      text: "tailwindCss",
      Icon: SiTailwindcss,
    },
    {
      value: 0,
      text: "NodeJs",
      Icon: FaNodeJs,
    },
    {
      value: 0,
      text: "ExpressJs",
      Icon: SiExpress,
    },
    {
      value: 0,
      text: "MongoDB",
      Icon: SiMongodb,
    },
    {
      value: 0,
      text: "Sql",
      Icon: SiPostgresql,
    },
    {
      value: 0,
      text: "WebSecurity",
      Icon: FaShieldAlt,
    },
    {
      value: 0,
      text: "Linux",
      Icon: SiLinux,
    },
    {
      value: 0,
      text: "Shadcn/ui",
      Icon: SiShadcnui,
    },
    {
      value: 0,
      text: "Nextjs",
      Icon: SiNextdotjs,
    },
  ]);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(progressArray), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className=" transition-all flex flex-col gap-5 p-4 rounded-lg shadow-foreground w-[100%]  mx-auto shadow-lg"
      id="skills"
    >
      <h1 className="text-4xl border-b-2 border-foreground w-fit p-4">
        My Skills
      </h1>

      <div className="flex flex-col flex-wrap gap-8 w-[100%] mx-auto ">
        {progress.map((ele: progressType, i: number) => (
          <div className="flex gap-3 items-center flex-col  w-[90%]" key={i}>
            <div className="flex gap-2 items-center">
              <h1 className="text-3xl w-fit">{ele.text}</h1>
              {ele.Icon && <ele.Icon className="size-10" />}
            </div>
            <Progress
              value={ele.value}
              className="h-6 w-[100%] border-foreground"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

let progressArray: progressType[] = [
  {
    value: 90,
    text: "Html",
    Icon: FaHtml5,
  },
  {
    value: 80,
    text: "Css",
    Icon: FaCss3,
  },
  {
    value: 95,
    text: "JavaScript",
    Icon: FaJs,
  },
  {
    value: 90,
    text: "TypeScript",
    Icon: SiTypescript,
  },
  {
    value: 90,
    text: "React",
    Icon: FaReact,
  },
  {
    value: 75,
    text: "tailwindCss",
    Icon: SiTailwindcss,
  },

  {
    value: 80,
    text: "NodeJs",
    Icon: FaNodeJs,
  },
  {
    value: 100,
    text: "ExpressJs",
    Icon: SiExpress,
  },
  {
    value: 80,
    text: "MongoDB",
    Icon: SiMongodb,
  },
  {
    value: 80,
    text: "Sql",
    Icon: SiPostgresql,
  },
  {
    value: 90,
    text: "WebSecurity",
    Icon: FaShieldAlt,
  },
  {
    value: 90,
    text: "Linux",
    Icon: SiLinux,
  },
  {
    value: 90,
    text: "Shadcn/ui",
    Icon: SiShadcnui,
  },
  {
    value: 50,
    text: "Nextjs",
    Icon: SiNextdotjs,
  },
];
