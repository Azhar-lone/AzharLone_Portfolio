"use client"
import { Progress } from "@/components/ui/progress"
import { useEffect, useState } from "react";

interface progressType {
    value: number,
    text: string
}

export default function Skills() {
    const [progress, setProgress] = useState<progressType[]>(

        [
            {
                value: 0,
                text: "Html"
            },
            {
                value: 0,
                text: "Css"
            },
            {
                value: 0,
                text: "JavaScript"
            },
            {
                value: 0,
                text: "NodeJs"
            },
            {
                value: 0,
                text: "ExpressJs"
            },
            {
                value: 0,
                text: "MongoDB"
            },
            {
                value: 0,
                text: "Sql"
            },
            {
                value: 0,
                text: "WebSecurity"
            },
            {
                value: 0,
                text: "Linux"
            },


        ])

    useEffect(() => {
        
        setProgress((prev) => progressArray)
    }, [])


    return (
        < div
        className=' transition-all flex flex-col gap-5 p-4 rounded-lg shadow-foreground w-[100%] md:w-[60%] mx-auto shadow-2xl'
        >

            <h1 className="text-4xl border-b-2 border-foreground p-4">My Skills</h1>

            <div className="flex flex-wrap gap-8 w-[100%] mx-auto ">


                {progress.map((ele: progressType, i: number) => (
                    <div className="flex md:w-[45%] gap-3 items-center flex-col md:flex-row w-[90%]" key={i}>
                        <h1 className="text-3xl w-fit">{ele.text}</h1><Progress value={ele.value} className="h-6 w-[100%] border-foreground" />

                    </div>
                ))}
            </div>
        </div>
    );
}


let progressArray: progressType[] =

    [
        {
            value: 90,
            text: "Html"
        },
        {
            value: 80,
            text: "Css"
        },
        {
            value: 95,
            text: "JavaScript"
        },
        {
            value: 80,
            text: "NodeJs"
        },
        {
            value: 100,
            text: "ExpressJs"
        },
        {
            value: 80,
            text: "MongoDB"
        },
        {
            value: 80,
            text: "Sql"
        },
        {
            value: 90,
            text: "WebSecurity"
        },
        {
            value: 90,
            text: "Linux"
        },


    ]