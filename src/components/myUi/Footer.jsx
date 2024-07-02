"use client";
import React from 'react'
import Link from "next/link";

// Icons
import {
    RiInstagramFill,
    RiLinkedinFill,
    RiGithubFill,
    RiTwitterXFill,
    RiYoutubeFill,
} from "react-icons/ri";




const Footer = () => {
    return (
        <div
            className='relative bottom-0  items-center flex-col flex justify-center  p-2  shadow-2xl shadow-foreground mt-5'
        >
           <h1 className='text-2xl'>Developed by Azhar-lone</h1> 

            <div className='flex gap-2 '>
                {icons.map((icon, index) => {
                    return (
                        <Link href={icon.path} key={index} className='hover:bg '>
                            <div className={`p-2 size-10 `}>{icon.name}</div>
                        </Link>
                    );
                })}
            </div>
        </div>
    )
}

export default Footer






// icons for the current user and the current user's profile

const icons = [
    {
        path: "",
        name: <RiInstagramFill />,
    },
    {
        path: "",
        name: <RiGithubFill />,
    },
    {
        path: "",
        name: <RiTwitterXFill />,
    },
    {
        path: "",
        name: <RiYoutubeFill />,
    },
    {
        path: "",
        name: <RiLinkedinFill />,
    },
];

