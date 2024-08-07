// Images
import shopOnline from "@/Data/Images/projects/shop-online.png";
import libraryOnline from "@/Data/Images/projects/library-online.png";
import portfolio from "@/Data/Images/projects/portfolio.png";
import shadcnAdmin from "@/Data/Images/projects/shadcn-admin.png";

//import Types
import { projectType } from "@/types/Projects";

export const projectData: projectType[] = [
  {
    image: shopOnline,
    category: "MERN",
    name: "shope-Online ",
    description:
      "E-commerce site developed with React,Nodejs,Mongoose,Expressjs ,TailwindCss,Shadcn/ui ,typeScript and more",
    link: "https://shop-online-static.netlify.app/",
    github: "https://github.com/Azhar-lone/shop-online.git",
    id: 1,
  },

  {
    image: libraryOnline,
    category: "MERN",
    name: "Library-Online ",
    description:
      "Library Management site developed with React,Nodejs,Mongoose,Expressjs ,TailwindCss, and more ",
    link: "#",
    github: "https://github.com/Azhar-lone/library-Online.git",
    id: 2,
  },
  {
    image: portfolio,
    category: "NextJs",
    name: "Azhar-lone-Portfolio ",
    description:
      "Portflio site developed with nextJs,shadCn/ui,Framer-Motion and typeScript,static initially ",
    link: "https://azhar-lone-portfolio.vercel.app/",
    github: "https://github.com/Azhar-lone/AzharLone_Portfolio.git ",
    id: 3,
  },
  {
    image: shadcnAdmin,
    category: "React",
    name: "shadcn-admin",
    description:
      "Admin dashboard developed with React,TailwindCss,typeScript,shadcnUi and more... ",
    link: "https://shadcn-admin-topaz.vercel.app/",
    github: "https://github.com/Azhar-lone/Shadcn-admin.git",
    id: 1,
  },
];

// let projectsDetailData: projectDetailType[] = [
//   {
//     image: shopOnline,
//     category: "Mern Stack",
//     name: "shope-Online ",
//     description:
//       "E-commerce site developed with React,Nodejs,Mongoose,Expressjs ,TailwindCss,Shadcn/ui ,typeScript and more",
//     link: "",
//     github: "https://github.com/Azhar-lone/shop-online.git",
//     id: 1,
//     features:[{
//       description:"",
//       icon:,
//       name:"authentication"
//     }],
//     Stack:[{

//     }]
//   },
// ];

export let categories: string[] = ["All", "MERN", "NextJs", "React"];
