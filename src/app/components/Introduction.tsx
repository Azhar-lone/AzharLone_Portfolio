import React from 'react'
import Image from 'next/image'

// icons
import { Phone, Download } from "lucide-react"
// images
import AzharLone from "@/Data/Images/AzharLone.jpg"


// Components
import { Button } from '@/components/ui/button'


const Introduction: React.FC = () => {
    return (
        <div
            className=' transition-all flex flex-col gap-5 p-4 rounded-lg shadow-primary w-[100%] md:w-[60%] mx-auto shadow-xl  '

        >
            <div className="  gap-2 flex flex-col md:flex-row md:items-none items-center ">
                {/* image */}
                <Image src={AzharLone} alt='Img' className=' rounded-full w-48 h-48    ' />

                {/* Introduction text section */}

                <div>
                    <h1 className='text-primary text-4xl border-b-2 h-fit w-fit border-primary '>
                        Introduction
                    </h1>
                    <div className=" text-lg p-2">
                        Hello ,I am  <b>Azhar Lone</b> ,full Stack developer,primary experienced in <b>MERN</b> stack.
                        I can create websites in any of the technologies which i have
                        mentioned in my skills .whether it be mern stack <b>nextJs</b>
                        ,<b>Plain Html css or javaScript </b>
                        or any other stack .i am confident to learn any
                        technology and create projects with it.i am continously
                        learning and adapting to new technologies.
                    </div>
                </div>
            </div>
            {/* Buttons */}
            <div className='flex gap-2'>

                <Button className='flex gap-1' variant={"secondary"}>Chat with me<Phone /></Button>
                <a href="src/Data/AzharResume.pdf" download={"AzharLone_CV.pdf"}  > <Button className='flex gap-1 animate-bounce' variant={"secondary"}  >Download CV<Download /></Button></a>


            </div>
        </div>
    )
}

export default Introduction



