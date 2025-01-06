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
  SiPython,
SiDjango
} from "react-icons/si";
interface progressType {
  value: number;
  text: string;
  Icon?: IconType;
  experience?: string;
}

export default function Skills() {
  const [progress, setProgress] = useState<progressType[]>([
    {
      value: 0,
      text: "Html",
      Icon: FaHtml5,
      experience: "3+ years",
    },
    {
      value: 0,
      text: "Css",
      Icon: FaCss3,
      experience: "3+ years",
    },
    {
      value: 0,
      text: "JavaScript",
      Icon: FaJs,
      experience: "3+ years",
    },
    {
      value: 0,
      text: "TypeScript",
      Icon: SiTypescript,
      experience: "1+ years",
    },
    {
      value: 0,
      text: "React",
      Icon: FaReact,
      experience: "2+ years",
    },
    {
      value: 0,
      text: "tailwindCss",
      Icon: SiTailwindcss,
      experience: "1+ years",
    },
    {
      value: 0,
      text: "NodeJs",
      Icon: FaNodeJs,
      experience: "2+ years",
    },
    {
      value: 0,
      text: "ExpressJs",
      Icon: SiExpress,
      experience: "2+ years",
    },
    {
      value: 0,
      text: "MongoDB",
      Icon: SiMongodb,
      experience: "1+ years",
    },
    {
      value: 0,
      text: "Sql",
      Icon: SiPostgresql,
      experience: "1+ years",
    },
    {
      value: 0,
      text: "WebSecurity",
      Icon: FaShieldAlt,
      experience: "2+ years",
    },
    {
      value: 0,
      text: "Linux",
      Icon: SiLinux,
      experience: "3+ years",
    },
    {
      value: 0,
      text: "Shadcn/ui",
      Icon: SiShadcnui,
      experience: "1+ years",
    },
    {
      value: 0,
      text: "Nextjs",
      Icon: SiNextdotjs,
      experience: "1 Year",
    },
    {
      value: 0,
      text: "Python",
      Icon: SiPython,
      experience: "6+ months",
    },
    {
      value: 0,
      text: "Django",
      Icon: SiDjango,
      experience: "6+ months",
    },
  ]);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(progressArray), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className=" transition-all flex flex-col gap-5 p-4 rounded-lg shadow-foreground w-[100%]  mx-auto shadow"
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
            {ele.experience && (
              <h1 className="sm:text-2xl text-xl flex gap-2 bg-secondary p-2 rounded">
                Experience: <p className="text-primary">{ele.experience}</p>
              </h1>
            )}
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
    experience: "3+ years",
  },
  {
    value: 80,
    text: "Css",
    Icon: FaCss3,
    experience: "3+ years",
  },
  {
    value: 95,
    text: "JavaScript",
    Icon: FaJs,
    experience: "3+ years",
  },
  {
    value: 90,
    text: "TypeScript",
    Icon: SiTypescript,
    experience: "1+ years",
  },
  {
    value: 90,
    text: "React",
    Icon: FaReact,
    experience: "2+ years",
  },
  {
    value: 75,
    text: "tailwindCss",
    Icon: SiTailwindcss,
    experience: "1+ years",
  },

  {
    value: 80,
    text: "NodeJs",
    Icon: FaNodeJs,
    experience: "2+ years",
  },
  {
    value: 100,
    text: "ExpressJs",
    Icon: SiExpress,
    experience: "2+ years",
  },
  {
    value: 80,
    text: "MongoDB",
    Icon: SiMongodb,
    experience: "1+ years",
  },
  {
    value: 80,
    text: "Sql",
    Icon: SiPostgresql,
    experience: "1+ years",
  },
  {
    value: 90,
    text: "WebSecurity",
    Icon: FaShieldAlt,
    experience: "2+ years",
  },
  {
    value: 90,
    text: "Linux",
    Icon: SiLinux,
    experience: "3+ years",
  },
  {
    value: 90,
    text: "Shadcn/ui",
    Icon: SiShadcnui,
    experience: "1+ years",
  },
  {
    value: 80,
    text: "Nextjs",
    Icon: SiNextdotjs,
    experience: "1+ Years",
  },
  {
    value: 70,
    text: "Python",
    Icon: SiPython,
    experience: "6+ months",
  },
  {
    value: 60,
    text: "Django",
    Icon: SiDjango,
    experience: "6+ months",
  },
];
