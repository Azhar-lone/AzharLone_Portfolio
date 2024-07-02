import Introduction from "./components/Introduction";
import Container from "@/components/myUi/container";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <Container className=" flex flex-col gap-2">

      <Introduction />
      <Skills />
      <Projects />

    </Container>
  );
}
