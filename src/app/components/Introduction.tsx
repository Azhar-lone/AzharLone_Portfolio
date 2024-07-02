import React from 'react'
import Image from 'next/image'
import AzharLone from "../../../images/AzharLone.jpg"

const Introduction: React.FC = () => {
    return (
        <div className=' transition-all flex flex-col  gap-2 p-5'
           
        >
            <Image src={AzharLone} alt='Img' className=' mx-auto    rounded-lg   ' />
            <div className="shadow-2xl shadow-foreground ">

            <h1 className='text-primary text-4xl border-b-2 w-fit border-primary '>
               Introduction
            </h1>
{/*<p className="pl-5 text-lg">Hello ,I am AzharLone ,full Stack developer,primary experienced in MERN stack.
i Know HTML,css,JavaScript,NodeJs,ExpressJs,mongoose,Sql,ShadCn/Ui,Website Security and linux.
</p>*/}
        </div>
         </div>
    )
}

export default Introduction
