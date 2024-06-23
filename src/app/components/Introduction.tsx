import React from 'react'
import Image from 'next/image'
import { resolve } from "node:path"


const Introduction: React.FC = () => {
    return (
        <div className=' transition-all flex ' >
            <Image src={resolve("images/1.png")} alt='Img' width={100} height={100}  />
            <div className='text-primary text-4xl'>
                Hello i am Azhar Lone ,full stack developer.
                Welcome to my portfolio Website
            </div>

        </div>
    )
}

export default Introduction