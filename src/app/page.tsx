import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Reviews from "./components/Reviews";
import Experience from "./components/Experience";
import Roles from "./components/Roles";
import Aboutme from "./components/About";
import Services from "./components/Services";
import Languages from "./components/Languages";
import Container from "@/components/myUi/Container";
import type { Metadata } from "next";
const siteUrl = "https://azhar-lone-portfolio.vercel.app";
export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL || siteUrl),
  title: {
    template: "%s | Azhar Lone",
    absolute: "Azhar Lone",
  },
  description: "Home Page of portfolio website of developer Azhar lone",
  keywords: ["Azhar Lone"],
};

export default function Home() {
  return (
    <div className=" flex flex-col gap-4 w-[100%]  mt-[11vh]">
      <Introduction />
      <Container className="flex flex-col gap-5 mb-[3vh]">
        <Aboutme />
        <hr />
        <Skills />
        <hr />
        <Projects />
        <hr />
        <Languages />
        <hr />
        <Services />
        <hr />
        <Roles />
        <hr />
        <Experience />
        <hr />
        <Reviews />
        <hr />
      </Container>
    </div>
  );
}
