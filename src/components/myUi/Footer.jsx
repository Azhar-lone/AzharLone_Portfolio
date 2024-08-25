"use client";
import React from "react";
import Link from "next/link";

// Icons
import {
  RiInstagramFill,
  RiLinkedinFill,
  RiGithubFill,
  RiTwitterXFill,
} from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaUpwork } from "react-icons/fa6";

import Container from "./Container";

const Footer = () => {
  return (
    <Container className="relative bottom-0 bg-background justify-center items-center flex flex-col gap-4 p-2  border-t-2">
      <h1 className=" text-2xl text-primary">Developed by Azhar-lone</h1>
      <div className="flex items-center justify-center border-2 w-full gap-10">
        <div className="   flex item-center flex-col   " id="contacts">
          <h1 className=" text-2xl text-center">Contacts</h1>

          <div className="flex gap-2 ">
            {icons.map((icon, index) => {
              return (
                <Link href={icon.path} key={index} target="_blank">
                  <div className={`p-2 flex flex-col items-center`}>
                    <icon.name className="md:size-10 size-5" />
                    <h1>{icon.text}</h1>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <h1 className="text-muted">2024 copyrights @Azhar-lone</h1>
    </Container>
  );
};

export default Footer;

// icons for the current user and the current user's profile

const icons = [
  // {
  //   path: "#",
  //   name: RiInstagramFill,
  // },
  {
    path: "https://github.com/Azhar-lone",
    name: RiGithubFill,
    text: "github",
  },
  // {
  //   path: "#",
  //   name: RiTwitterXFill,
  //   text:"twitter",
  // },
  // {
  //   path: "#",
  //   name: MdEmail,
  // },
  {
    path: "https://www.linkedin.com/in/Azhar-lonem",
    name: RiLinkedinFill,
    text: "linkedIn",
  },
  {
    path: "https://www.upwork.com/freelancers/~01c3b64854d63a958a",
    name: FaUpwork,
    text: "upwork",
  },
];
