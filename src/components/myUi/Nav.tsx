"use client";

// importing dependencies
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
// Icons

// importing Shadcn Components
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuIndicator,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuTrigger,
//   NavigationMenuList,
// } from "@/components/ui/navigation-menu";
//My components
import { ModeToggle } from "./dark-mode";
let NavItems = [
  {
    text: "Home",
    href: "/",
    listItems: [
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
    ],
  },
  {
    text: "Projects",
    href: "/projects",
  },
  {
    text: "Blogs",
    href: "/blogs",
  },
];

const Nav: React.FC = () => {
  const [hash, setHash] = useState<string>(window.location.hash);
  let path = usePathname();
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
            hash === item.href ||
            path === item.href ||
            (path.includes(item.href) && item.href !== "/")
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
