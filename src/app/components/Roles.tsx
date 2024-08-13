import React from "react";

const Roles = () => {
  return (
    <div className="  flex flex-wrap gap-6  py-5 flex-col w-full  " id="roles">
      <h2 className="text-4xl p-4">What Can i Do?</h2>

      {role.map((value, index) => (
        <h1 className="text-3xl p-4 bg-secondary rounded-2xl " key={index}>
          {index + 1}-{value}
        </h1>
      ))}
    </div>
  );
};

export default Roles;

let role: string[] = [
  "Full-Stack Development (MERN stack)",
  "Back-End Development",
  "Front-End Development",
];
