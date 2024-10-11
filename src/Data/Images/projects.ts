// Images
import shopOnline from "@/Data/Images/projects/shop-online.png";
import libraryOnline from "@/Data/Images/projects/library-online.png";
import portfolio from "@/Data/Images/projects/portfolio.png";
import shadcnAdmin from "@/Data/Images/projects/shadcn-admin.png";
import shadcnYoutube from "@/Data/Images/projects/shadcn-youtube.png";

// Icons
// icons
import {
  FaReact,
  FaBook,
  FaUserFriends,
  FaProductHunt,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiShadcnui,

} from "react-icons/si";
//import Types
import { projectType, projectDetailType } from "@/types/Projects";

export const projectData: projectType[] = [
  {
    image: shopOnline,
    category: "MERN",
    name: "shope-Online",
    description:
      "E-commerce site developed with React,Nodejs,Mongoose,Expressjs ,TailwindCss,Shadcn/ui ,typeScript and more",
    link: "https://shop-online-static.netlify.app/",
    github: "https://github.com/Azhar-lone/shop-online.git",
  },

  {
    image: libraryOnline,
    category: "MERN",
    name: "Library-Online",
    description:
      "Library Management site developed with React,Nodejs,Mongoose,Expressjs ,TailwindCss, and more ",
    link: "#",
    github: "https://github.com/Azhar-lone/library-Online.git",
  },
  {
    image: portfolio,
    category: "NextJs",
    name: "Azhar-lone-Portfolio ",
    description:
      "Portflio site developed with nextJs,shadCn/ui,Framer-Motion and typeScript,static initially ",
    link: "https://azhar-lone-portfolio.vercel.app/",
    github: "https://github.com/Azhar-lone/AzharLone_Portfolio.git ",
  },
  {
    image: shadcnAdmin,
    category: "React",
    name: "shadcn-admin",
    description:
      "Admin dashboard developed with React,TailwindCss,typeScript,shadcnUi and more... ",
    link: "https://shadcn-admin-topaz.vercel.app/",
    github: "https://github.com/Azhar-lone/Shadcn-admin.git",
  },
  {
    image: shadcnYoutube,
    category: "React",
    name: "shadcn-youtube",
    description:
      "youtube clone developed with React,TailwindCss,typeScript,shadcnUi and more... ",
    link: "https://shadcn-youtube.vercel.app/",
    github: "https://github.com/Azhar-lone/Shadcn-Youtube",
  },
];

export let categories: string[] = ["All", "MERN", "NextJs", "React"];

export let projectsDetailData: projectDetailType[] = [
  {
    image: shopOnline,
    category: "Mern Stack",
    name: "shope-Online",
    description:
      "E-commerce site developed with React,Nodejs,Mongoose,Expressjs ,TailwindCss,Shadcn/ui ,typeScript and more",
    link: "https://shop-online-static.netlify.app/",
    github: "https://github.com/Azhar-lone/shop-online.git",
    features: [
      {
        description:
          "Complete User Functionalities Including Authentication and Autherization",
        Icon: FaUserFriends,
        name: "User Management",
      },
      {
        description:
          "Users with different auherization can upload,update,delete,buy or sell products",
        Icon: FaProductHunt,
        name: "Products Management",
      },
      {
        description: "dashboard for admin.",
        name: "Admin DashBoard",
      },
      {
        description: "responsive for different screen sizes",
        name: "Responsive Design",
      },
      {
        description: "users can provide reviews and rate products",
        name: "Reviews and Ratings ",
      },


    ],
    Stack: [
      {
        name: "ReactJs",
        Icon: FaReact,
        link: "#",
      },
      {
        Icon: SiTailwindcss,
        name: "TailwindCss",
        link: "#",
      },
      {
        Icon: SiTypescript,
        name: "TypesScript",
        link: "#",
      },
      {
        Icon: SiExpress,
        name: "ExpressJs",
        link: "#",
      },
      {
        Icon: SiMongodb,
        name: "MongoDB",
        link: "#",
      },
      {
        Icon: SiShadcnui,
        name: "Shadcn/ui",
        link: "#",
      },
    ],
  },

  {
    image: libraryOnline,
    category: "MERN",
    name: "Library-Online",
    description:
      "Library Management site developed with React,Nodejs,Mongoose,Expressjs ,TailwindCss, and more ",
    link: "#",
    github: "https://github.com/Azhar-lone/library-Online.git",
    features: [
      {
        description:
          "Complete User Functionalities Including Authentication and Autherization",
        Icon: FaUserFriends,
        name: "User Management",
      },
      {
        description:
          "Users with different auherization can upload,update, download,or delete Books",
        Icon: FaBook,
        name: "Books Management",
      },
      {
        description: "dashboard for admin.",
        name: "Admin DashBoard",
      },
      {
        description: "responsive for different screen sizes",
        name: "Responsive Design",
      },
      {
        description: "users can provide reviews about books",
        name: "Reviews",
      },


    ],
    Stack: [
      {
        name: "ReactJs",
        Icon: FaReact,
        link: "#",
      },
      {
        Icon: SiTailwindcss,
        name: "TailwindCss",
        link: "#",
      },
    
      {
        Icon: SiExpress,
        name: "ExpressJs",
        link: "#",
      },
      {
        Icon: SiMongodb,
        name: "MongoDB",
        link: "#",
      },
    
    ],
  },
 

];
