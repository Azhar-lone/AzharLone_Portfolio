import React from "react";

const Experience: React.FC = () => {
  return (
    <div
      className="  w-[100%]  mx-auto  "
      id="projects"
    >
      <h2 className="text-4xl p-4">Experience</h2>
      <div className=" text-lg p-2 ">
        I got Skills to <strong>develop</strong> and Complete any kind of
        Project but i don't claim perfection. i am continously learning and
        adapting to new technologies and improving which i have learned. my
        experience includes:
        <li>
          {" "}
          creating fully functional <strong>e-commerce</strong> site
        </li>
        <li>
          {" "}
          currently working on <strong>social Media</strong> website{" "}
        </li>
        <li>
          <strong>Library website</strong>
        </li>
        <li>
          just started working on{" "}
          <strong>Learning Management system(LMS)</strong>
        </li>
        <li>
          and more... you can visit my{" "}
          <a
            href="https://github.com/Azhar-lone"
            target="_blank"
            className="text-blue-700 hover:text-blue-600"
          >
            github
          </a>{" "}
          acount to check.
        </li>
        Backend Work of all these Projects is almost done . Front-End is in
        Progress
      </div>
    </div>
  );
};

export default Experience;
