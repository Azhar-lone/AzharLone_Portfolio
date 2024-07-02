import React from 'react'


interface ContainerProps {
    children: React.ReactNode
    className?: string
}
const Container: React.FC<ContainerProps> = ({ children, className }) => {
    return (
        <div className={` mt-[3vh]  w-[98%] mx-auto ${className}`} >
            {children}
        </div>
    )
}

export default Container
