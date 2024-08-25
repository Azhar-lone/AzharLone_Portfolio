"use client";

// importing dependencies
import React from "react";
import { usePathname } from "next/navigation";
// Icons
import {
  HammerIcon,
  BookTextIcon,
  PhoneIcon,
  Grid2x2Check,
} from "lucide-react";
// importing Shadcn Components
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
//My components
import { ModeToggle } from "./dark-mode";
let NavItems = [
  {
    text: "Home",
    href: "/",
    listItems: [
      {
        text: "Projects",
        href: "/#projects",
        Icon: Grid2x2Check,
      },
      {
        text: "Skills",
        href: "/#skills",
        Icon: HammerIcon,
      },
      {
        text: "Reviews",
        href: "/#reviews",
        Icon: BookTextIcon,
      },
      {
        text: "Contacts",
        href: "/#contacts",
        Icon: PhoneIcon,
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
  let path = usePathname();
  return (
    <div
      className={` mx-auto sticky   top-0 shadow border-b h-[10vh] backdrop-blur  w-full z-50 flex items-center  justify-center`}
    >
      <NavigationMenu>
        <ModeToggle />

        <NavigationMenuList className="flex md:gap-5 gap-2">
          {NavItems.map((item, index) => (
            <NavigationMenuItem>
              <NavigationMenuLink
                href={item.href}
                key={index}
                className={
                  path === item.href
                    ? "opacity-100 "
                    : "opacity-70 hover:opacity-100"
                }
              >
                {" "}
                {item.listItems && (
                  <>
                    <NavigationMenuTrigger>{item.text}</NavigationMenuTrigger>
                    <NavigationMenuContent className="w-96  bg-background flex sm:gap-5 p-5 gap-1">
                      {item.listItems.map(({ text, href, Icon }, index) => (
                        <NavigationMenuLink
                          key={index}
                          href={href}
                          className="p-2 border flex items-center flex-col "
                        >
                          {text}
                          <Icon />
                        </NavigationMenuLink>
                      ))}
                    </NavigationMenuContent>
                  </>
                )}
                {!item.listItems && item.text}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Nav;
