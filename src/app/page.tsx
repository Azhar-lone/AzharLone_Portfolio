import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Reviews from "./components/Reviews";
import Experience from "./components/Experience";
import Roles from "./components/Roles";
import Aboutme from "./components/About";


import Container from "@/components/myUi/Container";
export default function Home() {
  return (
    <div className=" flex flex-col gap-4 w-[100%] mt-5 p-2">
      <Introduction />
      <hr />
      <Container className="flex flex-col gap-5">
        <Aboutme />
        <hr />

        <Skills />
        <hr />
        <Projects />
        <hr />
        <Experience />
        <hr />
        <Roles />
        <hr />
        <Reviews />
        <hr />
      </Container>
    </div>
  );
}
