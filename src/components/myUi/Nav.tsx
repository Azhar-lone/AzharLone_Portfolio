"use client";

// importing dependencies
import React from "react";
import Link from "next/link";
// Icons

// importing Shadcn Components

//My components
import { ModeToggle } from "./dark-mode";
import Container from "./Container";
let NavItems = [
  {
    text: "Projects",
    href: "#projects",
  },
  {
    text: "Skills",
    href: "#skills",
  },
  {
    text: "Reviews",
    href: "#reviews",
  },
  {
    text: "Contacts",
    href: "#contacts",
  },
];

const Nav: React.FC = () => {
  return (
    <Container>
      <div
        className={` mx-auto w-fit shadow-2xl shadow-secondary-foreground p-4 rounded-b-2xl flex items-center gap-4 `}
      >
        <ModeToggle />
        {NavItems.map((item, index) => (
          <Link href={item.href} key={index}>
            {" "}
            {item.text}
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default Nav;
