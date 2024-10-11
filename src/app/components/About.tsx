const Aboutme: React.FC = () => {
  return (
    <div className="mx-auto gap-2 flex flex-col mt-2 w-[90%]">
      <h1 className=" text-4xl h-fit w-fit  ">About Me</h1>
      <div className="  p-2 text-xl">
        Hello,
        <br />I am <b>Azhar Lone</b> ,full Stack developer,primary experienced
        in <b> MERN </b> stack. I can create websites in any of the technologies
        which i have mentioned in my skills .whether it be <b>MERN</b> stack ,
        <b> T3 </b> stack,
        <b> NextJs </b> or any other stack .i am confident to learn any technology and create
        projects with it.i am continously learning and adapting to new
        technologies.
      </div>
      <div className="mx-auto gap-2 flex flex-col mt-2 w-full">
        <h2 className="text-4xl p-4 ">Personal Info</h2>
        <h1 className="sm:text-2xl text-xl flex gap-2 bg-secondary p-4 rounded">
          Full Name: <p className="text-primary">Azhar Lone</p>
        </h1>
        <h1 className="sm:text-2xl text-xl flex gap-2 bg-secondary p-4 rounded">
          Nationality: <p className="text-primary">Pakistani</p>
        </h1>
        <h1 className=" sm:text-2xl text-xl flex gap-2 bg-secondary p-4 rounded">
          From:{" "}
          <p className="text-primary">Gilgit,Gilgit Baltistan, Pakistan</p>
        </h1>
        <h1 className="sm:text-2xl text-xl flex gap-2 bg-secondary p-4 rounded">
          age: <p className="text-primary">22+ years</p>
        </h1>
      </div>
    </div>
  );
};
export default Aboutme;
