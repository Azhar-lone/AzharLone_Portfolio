import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { IconType } from "react-icons";

export interface projectType {
  image: string | StaticImport;
  category: string;
  name: string;
  description: string;
  link: string;
  github: string;
}

export interface CardType {
  Icon?: IconType;
  name: string;
  description?: string;
  link?: string;
}

export interface projectDetailType extends projectType {
  features: CardType[];
  Stack: CardType[];
}
