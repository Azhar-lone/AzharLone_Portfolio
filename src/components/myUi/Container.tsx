"use client";
import React from "react";
import { usePathname } from "next/navigation";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  let path = usePathname();
  return (
    // due to sidebar on medium screen, move container from left 11% and
    // also make its width 85% to have 5% margin from sidebar
    // top one is for all
   
    <div
      className={`mx-auto  ${
        path === "/" && `lg:w-[68%] lg:ml-[30%] lg:mx-0`
      }  w-full ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
