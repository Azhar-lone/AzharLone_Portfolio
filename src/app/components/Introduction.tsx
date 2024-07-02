import React from 'react'
import Image from 'next/image'
import AzharLone from "../../../images/AzharLone.jpg"

const Introduction: React.FC = () => {
    return (
        <div className=' transition-all flex flex-col '

        >
            <div className="shadow-2xl shadow-foreground ">

                <h1 className='text-primary text-4xl border-b-2 w-fit border-primary '>
                    Introduction
                </h1>
                <div className=" text-lg p-2">
                    Hello ,I am AzharLone ,full Stack developer,primary experienced in MERN stack.
                </div>
            </div>
            <Image src={AzharLone} alt='Img' className=' rounded-lg   ' />

        </div>
    )
}

export default Introduction
