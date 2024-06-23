"use client"
import Container from "@/components/myUi/container";
import { Progress } from "@/components/ui/progress"
import { useState } from "react";


interface progressType {
    value: number,
    text: string
}

export default function Skills() {
    const [progress, setProgress] = useState<progressType[]>(progressArray)




    return (
        <Container >

            <h1 className="text-4xl border-b-2 border-foreground p-4">My Skills</h1>

            <div className="flex flex-wrap gap-8 shadow-lg rounded-b-xl shadow-foreground  p-4 w-[100%] mx-auto ">


                {progress.map((ele: progressType, i: number) => (
                    <div className="flex md:w-[48%] gap-3 items-center flex-col md:flex-row w-[90%] mx-auto" key={i}>
                        <h1 className="text-3xl w-fit">{ele.text}</h1><Progress value={ele.value} className="h-6 w-[100%] border-foreground" />

                    </div>
                ))}
            </div>
        </Container>
    );
}


let progressArray: progressType[] = 
   [
        {
            value: 90,
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


    ]