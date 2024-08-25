"use client";

// importing dependencies
import React, { useState } from "react";
import Link from "next/link";
// Icons

// importing Shadcn Components

//My components
import { ModeToggle } from "./dark-mode";
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
  const [hash, setHash] = useState<string>(window.location.hash);

  return (
    <div
      className={` mx-auto sticky  justify-center top-0 shadow border-b h-[10vh] backdrop-blur flex items-center gap-4 w-full z-50`}
    >
      <ModeToggle />
      {NavItems.map((item, index) => (
        <Link
          onClick={() => setHash(item.href)}
          href={item.href}
          key={index}
          className={
            hash === item.href
              ? "text-foreground "
              : "text-foreground/60 hover:text-foreground "
          }
        >
          {" "}
          {item.text}
        </Link>
      ))}
    </div>
  );
};

export default Nav;
