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
            className={` rounded-l-lg fixed  top-2 right-0 `}
        >
            <ModeToggle />
        </div>
    )
}

export default Nav



