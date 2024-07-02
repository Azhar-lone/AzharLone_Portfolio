import { StaticImport } from "next/dist/shared/lib/get-img-props"

export interface projectType {
    image: string | StaticImport
    category: string
    name: string
    description: string
    link: string
    github: string
}