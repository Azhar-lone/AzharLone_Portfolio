"use client";
import React from "react";
import Image from "next/image";

// Framer motion
// icons
import { Download } from "lucide-react";
import { RiLinkedinFill, RiGithubFill } from "react-icons/ri";
import { ScrollArea } from "@/components/ui/scroll-area";
// images
import AzharLone from "@/Data/Images/AzharLone.jpg";

// Components
const Introduction: React.FC = () => {
  return (
    <div className="  transition-all flex flex-col  lg:items-start items-center p-2 rounded-lg w-[100%]  mx-auto lg:mx-0  lg:w-[30%] lg:left-0 lg:fixed lg:top-[10vh] h-full  lg:bg-secondary lg-h-[90vh]">
      <ScrollArea className="overflow-y-auto w-full ">
        <div className="  gap-2 flex flex-col   items-center">
          {/* image */}

          <Image
            src={AzharLone}
            alt="Img"
            className="  h-72 w-full rounded   "
          />
          {/* Introduction text section */}
          <div className="flex flex-col  w-full gap-4">
            <h1 className="text-primary text-4xl border-b-2 h-fit w-fit border-primary ">
              Azhar Lone
            </h1>
            <h1 className=" text-4xl  h-fit w-fit ">Full Stack Developer</h1>
            <div className=" flex gap-2">
              <h1>azharlonem@gmail.com</h1>
              <h1>+923555812744</h1>
            </div>
          </div>
        </div>
        {/* h2s */}
        <div className="flex gap-3 p-2">
          <div className="flex gap-2 ">
            <a href="https://github.com/Azhar-lone" target="_blank">
              {" "}
              <RiGithubFill className="size-10  md:bg-background bg-secondary p-2 hover:bg-secondary/50 rounded border md:hover:bg-background/50" />
            </a>
            <a href="https://www.linkedin.com/in/Azhar-lonem" target="_blank">
              {" "}
              <RiLinkedinFill className="size-10  md:bg-background bg-secondary p-2 hover:bg-secondary/50 rounded border md:hover:bg-background/50 " />
            </a>
          </div>
          <a
            href="/AzharResume.pdf"
            download={"AzharLone_CV.pdf"}
            className="flex gap-1 animate-bounce md:bg-background bg-secondary p-2 hover:bg-secondary/50 rounded border md:hover:bg-background/50 "
          >
            Download CV
            <Download />
          </a>
        </div>
      </ScrollArea>
    </div>
  );
};

export default Introduction;
