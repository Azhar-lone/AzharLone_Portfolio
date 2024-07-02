import Introduction from "./components/Introduction";
// import Projects from "./components/Projects";
import Skills from "./components/Skills";
export default function Home() {
  return (
    <div className=" flex flex-col gap-4 w-[100%] mt-5 p-2">

      <Introduction />
      <Skills />
      {/* <Projects /> */}

    </div>
  );
}
