"use client"

// importing dependencies
import React, { useState } from "react";
import Link from "next/link";



// Icons
import {
    Home,
    Info,
    Dock,
    Hammer,
    AlignJustifyIcon,
    X
} from "lucide-react";

// importing Shadcn Components

//My components 
import { ModeToggle } from "./dark-mode";


const navItems = [
    {
        to: "/",
        icon: <Home />,
        text: "Home"
    },
    {
        to: "/about",
        icon: <Info />,
        text: "About me"
    },
    {
        to: "/skills",
        icon: <Hammer />,
        text: "Skills"
    },
    {
        to: "/blogs",
        icon: <Dock />,
        text: "Blogs"
    }

]




const Nav: React.FC = () => {
    const [isOpen, setOpen] = useState<boolean>(false)

    return (
        <>
            <div className="shadow-lg shadow-foreground  hidden fixed top-0 sm:left-[5%] md:left-[22%] backdrop-blur-sm  sm:w-[90%] left-2 md:w-[60%] h-[10vh] rounded-b-3xl  p-4 sm:flex gap-8 items-center justify-center">
                {navItems.map((item, i) => (

                    < Link href={item.to} className="flex gap-1 hover:mb-2 delay-200 transition-all " key={i} >
                        {item.text}
                        {item.icon}
                    </Link >
                ))
                }
                <ModeToggle />
            </div >
            <div
                className="shadow-2xl shadow-foreground  w-[40%]  sm:hidden  rounded-l-3xl fixed h-[10vh] right-0 top-2 flex gap-2 items-center "
            >
                <ModeToggle />

                {!isOpen ? <AlignJustifyIcon className="size-[70%] hover:size-[80%] hover:cursor-pointer"
                    onClick={() => setOpen((prev) => !prev)}
                />
                    :
                    <X className="size-[70%] hover:size-[80%] hover:cursor-pointer"
                        onClick={() => setOpen((prev) => !prev)}
                    />}

            </div>
        </>
    )
}

export default Nav



