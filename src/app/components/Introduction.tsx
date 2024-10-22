import React from "react";
import Image from "next/image";
import Link from "next/link";
// Framer motion
// icons
import { Download } from "lucide-react";
import { RiLinkedinFill, RiGithubFill, RiWhatsappFill } from "react-icons/ri";
import { ScrollArea } from "@/components/ui/scroll-area";
// images
import AzharLone from "@/Data/Images/AzharLone.jpg";

// Components
const Introduction: React.FC = () => {
  return (
    <div className="  transition-all flex flex-col  lg:items-start items-center p-2 rounded-lg w-[98%] mx-auto lg:mx-0  lg:w-[30%] lg:left-0 lg:fixed lg:top-[10vh] h-full  lg:shadow-2xl shadow-foreground lg:h-[89vh]">
      <ScrollArea className="overflow-y-auto w-full">
        <div className="  gap-2 flex flex-col   items-center">
          {/* image */}

          <Image src={AzharLone} alt="Img" height={2548} width={1640} />
          {/* Introduction text section */}
          <div className="flex flex-col  w-full gap-4">
            <h1 className="text-primary text-4xl border-b-2 h-fit w-fit border-primary ">
              Azhar Lone
            </h1>
            <h1 className=" text-4xl  h-fit w-fit ">Full Stack Developer</h1>
            <div className=" flex gap-2">
              <Link
                href="mailto:azharlonem@gmail.com"
                className="text-lg  hover:underline hover:text-blue-500"
              >
                azharlonem@gmail.com
              </Link>
              <Link
                href="tel:+923555812744"
                className="text-lg  hover:underline  hover:text-blue-500"
              >
                {" "}
                +923555812744
              </Link>
            </div>
          </div>
        </div>
        {/* h2s */}
        <div className="flex gap-3 p-2">
          <div className="flex gap-2 ">
            <Link href="https://github.com/Azhar-lone" target="_blank">
              {" "}
              <RiGithubFill className="size-10   bg-secondary p-2 hover:bg-secondary/50 rounded border " />
            </Link>
            <Link
              href="https://www.linkedin.com/in/Azhar-lonem"
              target="_blank"
            >
              {" "}
              <RiLinkedinFill className="size-10  bg-secondary p-2 hover:bg-secondary/50 rounded border  " />
            </Link>
            <Link
              href={`https://wa.me/923555812744?text=${encodeURIComponent(
                "Hello!/nI'd like to inquire you about your services."
              )}`}
              target="_blank"
            >
              {" "}
              <RiWhatsappFill className="size-10  bg-secondary p-2 hover:bg-secondary/50 rounded border  " />
            </Link>
          </div>
          <Link
            href="/AzharResume.pdf"
            download={"AzharLone_CV.pdf"}
            className="flex gap-1 animate-bounce bg-secondary p-2 hover:bg-secondary/50 rounded border  "
          >
            Download CV
            <Download />
          </Link>
        </div>
      </ScrollArea>
    </div>
  );
};

export default Introduction;
