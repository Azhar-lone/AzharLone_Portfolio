"use client";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
import { IconType } from "react-icons";

// icons
import { FaReact, FaHtml5, FaCss3, FaJs, FaNodeJs } from "react-icons/fa";

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
    },
    {
      value: 0,
      text: "React",
      Icon: FaReact,
    },
    {
      value: 0,
      text: "tailwindCss",
    },
    {
      value: 0,
      text: "NodeJs",
      Icon: FaNodeJs,
    },
    {
      value: 0,
      text: "ExpressJs",
    },
    {
      value: 0,
      text: "MongoDB",
    },
    {
      value: 0,
      text: "Sql",
    },
    {
      value: 0,
      text: "WebSecurity",
    },
    {
      value: 0,
      text: "Linux",
    },
    {
      value: 0,
      text: "Shadcn/ui",
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

              {/* {ele.Icon} */}
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
  },
  {
    value: 80,
    text: "Css",
  },
  {
    value: 95,
    text: "JavaScript",
  },
  {
    value: 90,
    text: "TypeScript",
  },
  {
    value: 90,
    text: "React",
    Icon: FaReact,
  },
  {
    value: 75,
    text: "tailwindCss",
  },

  {
    value: 80,
    text: "NodeJs",
  },
  {
    value: 100,
    text: "ExpressJs",
  },
  {
    value: 80,
    text: "MongoDB",
  },
  {
    value: 80,
    text: "Sql",
  },
  {
    value: 90,
    text: "WebSecurity",
  },
  {
    value: 90,
    text: "Linux",
  },
  {
    value: 90,
    text: "Shadcn/ui",
  },
];
