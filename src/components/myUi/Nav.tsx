"use client"

// importing dependencies
import React, { useState } from "react";
// Icons

// importing Shadcn Components

//My components 
import { ModeToggle } from "./dark-mode";





const Nav: React.FC = () => {


    return (

        <div
            className={` rounded-l-lg fixed top-5 right-5 w-8 h-8`}
        >
            <ModeToggle />
        </div>
    )
}

export default Nav



