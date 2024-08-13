import React from "react";

const Languages = () => {
  return (
    <div className="flex flex-wrap gap-6  py-5 flex-col w-full" id="languages">
      <h3 className="text-4xl  p-4 ">Languages</h3>

      <div className="flex flex-wrap gap-3 justify-start ">
        {languages.map((lang, index) => (
          <h1 className="text-3xl p-4 bg-secondary rounded-2xl " key={index}>
            {lang}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default Languages;

let languages: string[] = [
  "English(speaking +writing)",
  "Urdu(speaking+writing)",
  "Hindi(speaking)",
];
