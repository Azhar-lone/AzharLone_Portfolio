"use client";

import * as React from "react";
import { Moon, Sun, PcCaseIcon, LucideIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Hint from "./Hint";

type themeType = {
  icon: LucideIcon;
  text: string;
};
const themes: themeType[] = [
  { text: "light", icon: Sun },
  { text: "system", icon: PcCaseIcon },
  { text: "dark", icon: Moon },
];
export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  

  return (
    <div className="flex p-1 gap-1 border ">
      {themes.map((mtheme, index) => (
        <Hint key={index} label={mtheme.text}>
          <mtheme.icon
            onClick={() => setTheme(mtheme.text)}
            className={
              theme === mtheme.text
                ? "scale-105 transition-opacity duration-1000"
                : " hover:opacity-100 scale-75 opacity-50 hover:scale-100 transition-transform"
            }
          />
        </Hint>
      ))}
    </div>
  );
}
