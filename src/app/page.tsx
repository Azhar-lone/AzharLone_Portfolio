import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
export default function Home() {
  return (
    <div className=" flex flex-col gap-2 w-[96%] mt-5 mx-auto">

      <Introduction />
      <Skills />
      <Projects />

    </div>
  );
}
