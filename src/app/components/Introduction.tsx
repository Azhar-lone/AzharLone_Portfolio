"use client";
import React from "react";
import Image from "next/image";

// Framer motion
// icons
import { Phone, Download } from "lucide-react";
import {
  RiLinkedinFill,
  RiGithubFill,
} from "react-icons/ri";


// images
import AzharLone from "@/Data/Images/AzharLone.jpg";

// Components
const Introduction: React.FC = () => {
  return (
    <div

      className="  transition-all flex flex-col  gap-5 p-4 rounded-lg w-[100%]  mx-auto md:mx-0  md:w-[30%] md:left-0 md:fixed md:top-5   md:bg-secondary"
    >

      <div className="  gap-2 flex flex-col   items-center">
        {/* image */}
        <Image
          src={AzharLone}
          alt="Img"
          className="  h-72 w-full rounded   "
        />

        {/* Introduction text section */}

        <div className="flex flex-col gap-2 w-full">
          <h1 className="text-primary text-4xl border-b-2 h-fit w-fit border-primary ">
            Azhar Lone
          </h1>
          <h1 className=" text-4xl  h-fit w-fit ">
            Full Stack Developer
          </h1>
        </div>
      </div>
      <div className="flex gap-2">
        <a href="https://github.com/Azhar-lone" target="_blank"> < RiGithubFill className="size-10  md:bg-background bg-secondary p-2 hover:bg-secondary/50 rounded border md:hover:bg-background/50" /></a>
        <a href= "https://www.linkedin.com/in/Azhar-lonem" target="_blank"> <  RiLinkedinFill className="size-10  md:bg-background bg-secondary p-2 hover:bg-secondary/50 rounded border md:hover:bg-background/50 " /></a>
      </div>
      {/* h2s */}
      <div className="flex gap-2">
        <h2 className="flex gap-1 md:bg-background bg-secondary p-2 hover:bg-secondary/50 rounded border md:hover:bg-background/50 hover:cursor-pointer"  >
          Chat with me
          <Phone />
        </h2>
        <a href="/AzharResume.pdf" download={"AzharLone_CV.pdf"}
          className="flex gap-1 animate-bounce md:bg-background bg-secondary p-2 hover:bg-secondary/50 rounded border md:hover:bg-background/50 "
        >
          Download CV
          <Download />
        </a>
      </div>
    </div>
  );
};

export default Introduction;

