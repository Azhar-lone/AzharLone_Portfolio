"use client";
import React from "react";
import Link from "next/link";

// Icons
import {
  RiInstagramFill,
  RiLinkedinFill,
  RiGithubFill,
  RiTwitterXFill,
  RiGoogleFill,
} from "react-icons/ri";



const Footer = () => {
  return (
    <div
      className="relative bottom-0  items-center flex-col flex justify-center gap-4 p-2  border-t-2 border-foreground shadow-2xl shadow-primary mt-5 "
      id="contacts"
    >
      <h1 className=" text-2xl text-primary">Developed by Azhar-lone</h1>
      <h1 className=" text-2xl ">Contacts</h1>

      <div className="flex gap-2 ">
        {icons.map((icon, index) => {
          return (
            <Link
              href={icon.path}
              key={index}
              className="hover:bg "
              target="_blank"
            >
              <div className={`p-2`}>{icon.name}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;

// icons for the current user and the current user's profile

const icons = [
  {
    path: "#",
    name: <RiInstagramFill className="size-10" />,
  },
  {
    path: "https://github.com/Azhar-lone",
    name: <RiGithubFill className="size-10" />,
  },
  {
    path: "#",
    name: <RiTwitterXFill className="size-10" />,
  },
  {
    path: "#",
    name: <RiGoogleFill className="size-10" />,
  },
  {
    path: "https://www.linkedin.com/in/Azhar-lonem",
    name: <RiLinkedinFill className="size-10  " />,
  },
];
