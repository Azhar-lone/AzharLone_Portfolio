import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { IconType } from "react-icons";

export interface projectType {
  image: string | StaticImport;
  category: string;
  name: string;
  description: string;
  link: string;
  github: string;
  id: number;
}

export interface projectDetailType extends projectType {
  features: [
    {
      icon: IconType;
      name: string;
      description: string;
    }
  ];
  Stack: [
    {
      icon: IconType;
      name: string;
      link: string;
    }
  ];
}
