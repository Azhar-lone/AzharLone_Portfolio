import React from 'react'


interface ContainerProps {
    children: React.ReactNode;
    className?: string

}

const Container: React.FC<ContainerProps> = ({
    children,
    className
}) => {
    return (

        // due to sidebar on medium screen move container from left 11% and 
        // also make it width 85% to have 5% margin from sidebar
        // top one is for all
        // first is for large screen
        // second is for medium screen
        // third is for small screen 
        <div
            className={`
           mb-[3vh] mx-auto 
            md:w-[70%] md:ml-auto md:mx-0
w-full           ${className}
            `}
        >{children}</div>
    )
}

export default Container
